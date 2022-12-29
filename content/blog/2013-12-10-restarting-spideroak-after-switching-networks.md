---
author:
  display_name: Claus Conrad
  email: webmaster@clausconrad.com
  login: claus
  url: ''
author_email: webmaster@clausconrad.com
author_login: claus
comments: true
date: 2013-12-10 13:07:15 +01:00
date_gmt: 2013-12-10 12:07:15 +0000
excerpt: "<p>When disconnecting from a network and reconnecting later, SpiderOak always stays \"disconnected\" here and doesn't backup any more files. Here's a simple script I run in that case:</p>\r\n"
header: false
published: true
sidebar: left
status: publish
tags:
  - linux
  - spideroak
  - system-administration
teaser: 'When disconnecting from a network and reconnecting later, SpiderOak always stays "disconnected" here and doesn''t backup any more files. Here''s a simple script I run in that case:'
title: Restarting SpiderOak after switching networks
wordpress_id: 664
wordpress_url: http://www.clausconrad.com/?p=664
---
```shell
env kill -s 1 SpiderOak
SpiderOak &
```

Not much to it and call me lazy, but it's easier to click a launcher to run this script than having to right-click the SpiderOak tray icon, choose Quit, then restart it from the start menu ;-)
