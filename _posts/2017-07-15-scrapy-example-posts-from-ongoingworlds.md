---
author:
  display_name: Claus Conrad
  email: webmaster@clausconrad.com
  login: claus
  url: ''
author_email: webmaster@clausconrad.com
author_login: claus
categories:
- Development
comments: true
date: 2017-07-15 15:26:11 +0000
date_gmt: 2017-07-15 13:26:11 +0000
excerpt: "Scrapy is a software project for fetching structured data (think spreadsheets
  or databases) from any website. These are some notes for dummies and forgetful people
  like me.\r\n\r\n"
header: false
layout: page
published: true
sidebar: left
status: publish
tags:
- scrapy
teaser: "Scrapy is a software project for fetching structured data (think spreadsheets or databases) from any website. These are some notes for dummies and forgetful people like me."
title: 'Scrapy example: posts from OngoingWorlds'
wordpress_id: 873
wordpress_url: http://www.clausconrad.com/?p=873
---
Note: Some knowledge of Python, databases, HTML and CSS recommended.

Scrapy is a software framework that allows one to write spiders and other components, which then crawl a website for the data one is interested in. It is not a graphical, point-and-click application; some programming is required. However, Scrapy's learning curve is not steep and the documentation is excellent. Scrapy is also free, open-source, and can be run on a number of services, or simply on ones computer.

For this example, I am going to scrape OngoingWorlds, a community of "play-by-email" (PBEM) roleplayers. The name is a bit of a misnomer, as these games are played through the web these days, at least on OngoingWorlds. Also called "interactive storytelling", PBEM are roleplaying games where a number of people collaborate to tell a story by alternately posting (usually) a few paragraphs, each post from the view of (one of) their character(s) in the game. Because these games depend on people interacting without too much delay, I wanted to find one where the majority of posting happened during the evening in my timezone. This information does not appear on the OngoingWorlds website, but could be answered quite easily with a database of all posts. This is where Scrapy comes in.

## Installation

The first step is of course to install it. Scrapy can be run using Python 2.7, 3.3 or newer. For this "crawl" I decided on Python 3.5. On Ubuntu 16.04 the commands to install everything were:

```shell
sudo apt install -y python3-pip libxml2-dev libxslt1-dev zlib1g-dev libffi-dev libssl-dev pip3 install ipython scrapy
```

For other operating systems or in case of problems, there is an extensive [installation guide](https://doc.scrapy.org/en/latest/intro/install.html).  
(Note: I did not make a virtual environment for my installation, but that would probably be a good idea and their guide recommends it.)

## Project creation

There are several terms in Scrapy that may need some explanation:

* A **spider** is the code that does most of the actual heavy-lifting, extracting the interesting data and links to follow from the pages' HTML code.

* An **item** is the daper month: 1 
On the following day: 18ta that makes up one set of extracted information. In this example, I want to scrape posts. Each overview page on OngoingWorlds lists up to 15 "post items".

* Once the spider has extracted data from a page and created an item from it, you probably want to do something with it. In my case I decided to store it in a simple database (Sqlite3). Scrapy feeds each extracted item through an **item pipeline**, a fancy word for the code that contains the logic about what to do with each item: in the pipeline, one could do further cleaning or validation on the extracted data, discard it (for example if duplicates were scraped), store it or otherwise process it.
  
While one could probably store the code of the spider(s), item(s) and item pipeline(s) as well as configuration all in one file, it is easier to have them in separate files. Scrapy has a handy feature to create some boilerplate (i.e. mostly blank) files, which make getting started quicker than having to create all of these files from scratch:

```shell
scrapy startproject ow
```

## Defining the post data

For each post I wanted to store the following:

* The **unique ID of the post**, to avoid accidentally scraping the same post twice.

* The **game's ID**, since each post belongs to exactly one game.

* And of course the **date/time** of the post, to be able to create statistics about the most popular posting time per game.
  
Our new project has a file for item definitions, aptly called _items.py_, where I placed my item definition:

```python
class OwPost(scrapy.Item):
  id = scrapy.Field()
  game_id = scrapy.Field()
  timestamp = scrapy.Field()
```

## Storing the extracted posts
  
Storing the posts in a database is done in an item pipeline. Using _scrapy startproject_ already created the file _pipelines.py_. Since I wanted to use the simple Sqlite3 database, I inserted the following line at the top of this
file:

```python
import sqlite3
```

I want to open a connection to my database when the spider starts running, and close it when the spider stops. In an item pipeline, one can define some code that runs at these times. I added the following method to the pipeline class to open the database connection at the start:

```python
def open_spider(self, spider):
  self.conn = sqlite3.connect("results.db")
  self.conn.execute("CREATE TABLE IF NOT EXISTS post (id INT NOT NULL, game_id INT NOT NULL, timestamp DATETIME NOT NULL, UNIQUE(game_id, id))").close()
  self.conn.commit()
```
  
SQL is not really within the scope of this article, but this code simply creates a table with a column for each of the fields from the items, unless that table already exists in the database, like it would on subsequent runs of the spider.

And to close the connection at the end, I added this method to the pipeline created by Scrapy:

```python
def close_spider(self, spider):
  self.conn.close()
```
    
The most important task of this file is to insert the scraped post into the database. This is done by adding by adding a bit of SQL code to the already created method _process_item_:

```python
def process_item(self, item, spider):
  self.conn.execute("INSERT OR IGNORE INTO post (id, game_id, timestamp) VALUES (?, ?, ?)", (item["id"], item["game_id"], item["timestamp"])).close()
  self.conn.commit()
  return item
```    
    
This method is called once for each item extracted by the spider, and it simply inserts a new row in the database table. The "OR IGNORE" instructs Sqlite3 to ignore duplicate posts without an error.

## Implementing the spider

The meat of the code goes into the file _spiders/ow_spider.py_. I am going to use regular expressions to find the URLs that the spider should follow, so I added this at the top:  

```python
import re
```

My spider also needs to parse the post dates (which are in the format "Jul 15, 2017, 2:36pm") into "real" dates (which are easier to store and compare), let's use the _datetime_ module for that:

```python
from datetime import datetime
```

And another line for the top, so the spider can create the _OwPost_ items:

```python
from ow.items import OwPost
```

When I yet was unsure how I would implement the logic for following links, I wanted to make sure that Scrapy never follows links that point outside of OngoingWorlds, such as to Facebook. Spiders have a property _allowed_domains_, which I configured right below the auto-created _name = 'ow'_:

```python
allowed_domains = [
  "www.ongoingworlds.com"
]
```

From browsing the website I knew that all the posts could be reached via links from a specific starting point, which can be configured using the _start_urls_ property of the spider:

```python
start_urls = [
  "http://www.ongoingworlds.com/games"
]
```
  
The spider has two main tasks:

1. Extracting the items (structured data) from the pages' HTML code

2. Identifying further links that should be followed (i.e. also downloaded and parsed, in addition to the _start_urls_) ) and adding these to the crawl
  

To implement both of these tasks, the _shell_ feature of Scrapy is extremely useful. Using the shell one can interactively try out various code for extracting the desired data from a page's HTML code. To run the interactive shell I entered:

```shell
scrapy shell "http://www.ongoingworlds.com/games"
```

Any Python code can be run from the shell, and the HTML from the downloaded page is available with the _response_ variable.

After some experimentation I came up with the following method for my spider, which identifies the "interesting" links on the current page and instructs Scrapy to add them to its download queue. I suspect that there are easier ways to do this, but this worked for me:

```python
def collect_links(self, response):
    for url in response.xpath('//a/@href').extract():
        url = response.urljoin(url)

        # /games/page/NNNN
        if re.match(r"^http:\/\/www\.ongoingworlds\.com\/games\/page\/\d+$", url):
            yield scrapy.Request(url)

        # /games/NNNN
        if re.match(r"^http:\/\/www\.ongoingworlds\.com\/games\/\d+$", url):
            yield scrapy.Request(url + "/posts", callback=self.parse_posts)

        # /games/NNNN/posts/page/NNNN
        if re.match(r"^http:\/\/www\.ongoingworlds\.com\/games\/\d+\/posts\/page\/\d+", url):
            yield scrapy.Request(url, callback=self.parse_posts)
```

The code uses XPath to extract all link targets ([). Because some of the links could be relative (not starting with the full domain name), the third line converts them to absolute URLs. The three _if_ statements use regular expressions to match different types of links that I am interested in:

1. _Yield_ing a _Request_ adds the link to Scrapy's queue. The first "if" statement matches links to listings of games. These pages do not contain any posts themselves, but I need their content to find links to the actual games (and thus, listings of their posts). By **not** specifying a _callback_, Scrapy will default to parse these URLs with the method _parse_ in the spider. I'll define the contents of this method shortly.

2. The second "if" matches links to actual games. From browsing OngoingWorlds manually, I know that the list of posts for each game can be reached by adding _/posts_ to these URLs. I have added the callback _parse_posts_ to the request so that I can extract posts from these pages.

3. If a game has more than 15 posts, the older ones are separated onto further listing pages. The third "if" finds the URLs to these listing pages, with the same callback as before, since posts should be extracted here too.
  
The default callback is called _parse_ and this method needs to exist, because it will be run for the _start_urls_ and the listings of games. Since there is no data to scrape from these pages, this method simply delegates to the _collect_links_ method defined above:

```python
def parse(self, response):
    """Used for pages that only contain links to follow, but no data to scrape"""

    yield from self.collect_links(response)
```
    
Two of the _if_ statements above referred to the callback _parse_posts_. This method has the following code:

```python
def parse_posts(self, response):
    """Used to scrape data about posts"""

    # Extract game ID from URL. Should always exist because this parser is only used for matching URLs

    game_id = int(re.match(r"^http:\/\/www\.ongoingworlds\.com\/games\/(\d+)\/posts", response.url).groups()[0])
    
    ### Parse posts (post_id, timestamp)
    post_summary_selectors = response.css(".post-summary")

    if len(post_summary_selectors):
        for post_summary_selector in post_summary_selectors:
            post_id = None
            timestamp = None

            links = post_summary_selector.css("a.post-summary__link::attr(href)")

            if len(links):
                link = links.extract_first()

                post_id = int(re.match(r"^http:\/\/www\.ongoingworlds\.com\/games\/\d+\/posts\/(\d+)$", response.urljoin(link)).groups()[0])

            dates = post_summary_selector.css(".date::text")

            if len(dates):
                date = dates.extract_first()

                timestamp = datetime.strptime(date, "%b %d, %Y, %I:%M%p")

            if post_id and timestamp:
                yield OwPost(game_id=game_id, id=post_id, timestamp=timestamp)

    else:
        self.logger.info("No post summaries found: %s" % (response.url, ))

    # Add further pages to scrape
    yield from self.collect_links(response)
```

Some notes about _parse_posts_:

* Line 5 has a regular expression that extracts the game's ID from the URL.

* Line 9 identifies all the DIV elements which contain post summaries. Chrome's developer console and Scrapy's shell were useful for finding the right CSS selector for these.

* To make debugging the spider easier, I added an if/else to output some information in case the page did not have any post summaries on it. This was expected as some games simply have not had any posts to them yet.

* Two more CSS selectors extract the post ID and date/time from elements inside the post summaries.

* If this extraction was successful, the method then yields (returns) this data, converted to an OwPost item.

* Finally, I also want to collect further links to follow from the post listing pages.
  
## Spider configuration
  
Scrapy has lots of configuration options, e.g. to limit the crawl rate (to avoid being banned), for logging, and so on. To enable my item pipeline, I simply had to uncomment this code in the automatically generated _settings.py_:

```python
ITEM_PIPELINES = {
  'ow.pipelines.OwPipeline': 300,
}
```    
  
To avoid too much noisy output during the actual crawl, I added the following configuration at the bottom:

```python
LOG_SHORT_NAMES = True
LOG_LEVEL = "INFO"
```    
    
## Starting the crawl

Now that all the code is in place, the scraper could be started with the following command (with "ow" being the name defined in _ow_spider.py_):

```shell
scrapy crawl ow
```

Because I wanted to run this from my laptop and did not want having to start over in case of e.g. connection issues, I used the "jobs" feature of Scrapy to be able to restart from the point of failure. For that you have to create an empty directory and tell scrapy to use it:

```shell
mkdir crawls
scrapy crawl ow -s JOBDIR=crawls/20170715
```

## Summing up
  
After some time, Scrapy is finished and shows some statistics about the crawl:

```
2017-07-15 12:34:11 [scrapy] INFO: Crawled 6092 pages (at 79 pages/min), scraped 84004 items (at 1185 items/min)
2017-07-15 12:35:07 [scrapy] INFO: Closing spider (finished)
2017-07-15 12:35:07 [scrapy] INFO: Dumping Scrapy stats:
    {'downloader/request_bytes': 2154032,
     'downloader/request_count': 6165,
     'downloader/request_method_count/GET': 6165,
     'downloader/response_bytes': 43682979,
     'downloader/response_count': 6165,
     'downloader/response_status_count/200': 6165,
     'dupefilter/filtered': 53515,
     'finish_reason': 'finished',
     'finish_time': datetime.datetime(2017, 7, 15, 10, 35, 7, 43800),
     'item_scraped_count': 85099,
     'log_count/INFO': 148,
     'memusage/max': 98533376,
     'memusage/startup': 50962432,
     'request_depth_max': 504,
     'response_received_count': 6165,
     'scheduler/dequeued': 6164,
     'scheduler/dequeued/disk': 6164,
     'scheduler/enqueued': 6164,
     'scheduler/enqueued/disk': 6164,
     'start_time': datetime.datetime(2017, 7, 15, 9, 46, 11, 54206)}
2017-07-15 12:35:07 [scrapy] INFO: Spider closed (finished)  
```
 
And the post data is in the Sqlite3 database:

```shell    
sqlite3 results.db "SELECT COUNT(*) FROM post"
# 80239
```

There you have it, a simple web crawler that would have taken much longer to develop and run without Scrapy. Analyzing the collected posts might be an idea for another article. I hope this was useful to someone :)
