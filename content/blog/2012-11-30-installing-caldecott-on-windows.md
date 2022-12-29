---
author:
  display_name: Claus Conrad
  email: webmaster@clausconrad.com
  login: claus
  url: ''
author_email: webmaster@clausconrad.com
author_login: claus
comments: true
date: 2012-11-30 14:12:07 +01:00
date_gmt: 2012-11-30 13:12:07 +0000
header: 'no'
published: true
sidebar: left
status: publish
tags:
  - development
teaser: Caldecott is a ruby gem required for e. g. tunneling to AppFog services. This short writeup explains how to get it running on Windows.
title: Installing Caldecott on Windows
wordpress_id: 497
wordpress_url: http://www.clausconrad.com/?p=497
---
I wrote this because I received the following error trying to establish a tunnel to a MySQL instance on AppFog:

```
To use `af tunnel', you must first install Caldecott:

        gem install caldecott

Note that you'll need a C compiler. If you're on OS X, Xcode  

will provide one. If you're on Windows, try DevKit.

This manual step will be removed in the future.

Error: Caldecott is not installed.
```

To solve this problem, follow these steps:

1.  You need a Ruby distribution from [rubyinstaller.org](https://rubyinstaller.org/) for this.  
    You probably already have that, otherwise go [download the newest RubyInstaller from the top of this page](https://rubyinstaller.org/downloads/).
2.  [Download the latest DevKit](https://rubyinstaller.org/downloads/) (Development Kit) from the same page, it is right below the heading "Development Kit".
3.  Run the DevKit executable (it is just a self-extracting 7Z archive and can be unpacked with other tools, if necessary) and extract it somewhere. **Be sure to specify a new or empty directory as the destination.**
4.  Rename the directory extracted in the previous step to _devkit_ and move it to your Ruby's installation folder, e. g. _C:\Ruby193_.
5.  Open a command prompt as an administrator (e. g. by pressing the Start button, typing _cmd_, right-clicking the link to the command prompt and choosing "Run as Administrator").
6.  Change to the devkit folder by typing e. g. _cd C:\Ruby194\devkit_ (depends on your Ruby installation folder of course).
7.  Run the following command:  
    `ruby dk.rb init`
8.  Run the following command:  
    `ruby dk.rb install`
9.  Finally, to install Caldecott, run the following command:
    ```
    gem install caldecott --platform=ruby
    ```

In case of problems check these [instructions on GitHub](https://github.com/oneclick/rubyinstaller/wiki/Development-Kit). Good luck!
