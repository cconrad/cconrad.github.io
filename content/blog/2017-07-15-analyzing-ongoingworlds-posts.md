---
date: 2017-07-15T14:16:35.000Z
published: true
tags:
  - ongoingworlds
  - pbem
  - personal
title: Analyzing OngoingWorlds posts
---
The <a href="/blog/scrapy-example-posts-from-ongoingworlds/">previous post</a> used Scrapy to extract post data from the website OngoingWorlds. Here are a few conclusions from that spider crawl:

I collected the game ID, post ID and date/time for each post from the play-by-email roleplaying community OngoingWorlds into an Sqlite3 database. Even with this very limited dataset, some interesting queries can be run:

## Most popular games (by number of posts)

```sql
SELECT game_id, COUNT(*) FROM post GROUP BY game_id ORDER BY COUNT(*) DESC LIMIT 10;
```

Rank | Game | Total posts
---|---|---
1 | [Blue Dwarf](http://www.ongoingworlds.com/games/270) | 15040
2 | [Hero High](http://www.ongoingworlds.com/games/1021) | 3453
3 | [2778 A.D.](http://www.ongoingworlds.com/games/2027) | 2894
4 | [The Land of Ecilith](http://www.ongoingworlds.com/games/2242) | 2276
5 | [The Avengers~Lower Levels](http://www.ongoingworlds.com/games/1343) | 2111
6 | [Heroes Association](http://www.ongoingworlds.com/games/2321) | 1288
7 | [Hunted](http://www.ongoingworlds.com/games/1353) | 1265
8 | [Circle of Nine](http://www.ongoingworlds.com/games/2068) | 1176
9 | [Fairy Tail ZERO](http://www.ongoingworlds.com/games/2455) | 1125
10 | [MLP fans!](http://www.ongoingworlds.com/games/1703) | 1118

## Most popular games (per hour of the day)

```sql
SELECT
game_id AS GameID,
  (
  SELECT strftime("%H", timestamp) AS Hour
  FROM post AS inner
  WHERE inner.game_id = outer.game_id
  GROUP BY Hour
  ORDER BY COUNT(*) DESC
  LIMIT 1) AS MostPopularHour,
COUNT(*) TotalPosts
FROM post AS outer
GROUP BY GameID
ORDER BY MostPopularHour, TotalPosts DESC
```

For easier viewing I exported the result to a CSV spreadsheet, as follows:

```shell
sqlite3 -header -csv results.db 'SELECT game_id AS GameID, (SELECT strftime("%H", timestamp) AS Hour FROM post AS inner WHERE inner.game_id = outer.game_id GROUP BY Hour ORDER BY COUNT(*) DESC LIMIT 1) AS MostPopularHour, COUNT(*) TotalPosts FROM post AS outer GROUP BY GameID ORDER BY MostPopularHour, TotalPosts DESC' > results-agg.csv
```

Hour of the day (CEST) | Game  
---|---  
0 | [The Elite Club](http://www.ongoingworlds.com/games/1671)
1 | [The Hotel](http://www.ongoingworlds.com/games/3012)
2 | [Hero High](http://www.ongoingworlds.com/games/1021)
3 | [The Avengers~Lower Levels](http://www.ongoingworlds.com/games/1343)
4 | [The Land of Ecilith](http://www.ongoingworlds.com/games/2242)
5 | [Redwill Home for Unusual and Odd Children](http://www.ongoingworlds.com/games/1403)
6 | [Cure](http://www.ongoingworlds.com/games/1409)
7 | [Advanced](http://www.ongoingworlds.com/games/1521)
8 | [Battle of the Bands](http://www.ongoingworlds.com/games/1385)
9 | [Vale of Shadows](http://www.ongoingworlds.com/games/2962)
10 | [Pokemon Azure](http://www.ongoingworlds.com/games/2022)
11 | [The open trail](http://www.ongoingworlds.com/games/2191)
12 | [BRAIN GAMES: Raido Ravens](http://www.ongoingworlds.com/games/2287)
13 | [Bloody Gifts](http://www.ongoingworlds.com/games/1015)
14 | [Circle of Nine](http://www.ongoingworlds.com/games/2068)
15 | [Academy for Super Humans](http://www.ongoingworlds.com/games/2922)
16 | [MLP fans!](http://www.ongoingworlds.com/games/1703)
17 | [Gakuen Statalia](http://www.ongoingworlds.com/games/1734)
18 | [The Verse - Other Adventures in the Firefly Universe](http://www.ongoingworlds.com/games/2519)
19 | [Magic Agents](http://www.ongoingworlds.com/games/2573)
20 | [Blue Dwarf](http://www.ongoingworlds.com/games/270)
21 | [Another West](http://www.ongoingworlds.com/games/1386)
22 | [Heroes Association](http://www.ongoingworlds.com/games/2321)
23 | [Day After, Hero's Past](http://www.ongoingworlds.com/games/2200)

## Most popular posting hours (CEST)

![Graph showing total posts per hour of the day](/assets/img/s9Tr8zKTcp.png)
