---
date: 2013-12-10T12:07:15.000Z
excerpt: 'When disconnecting from a network and reconnecting later, SpiderOak always stays "disconnected" here and doesn''t backup any more files. Here''s a simple script I run in that case:'
published: true
tags:
  - linux
  - spideroak
  - system-administration
title: Restarting SpiderOak after switching networks
---
```shell
env kill -s 1 SpiderOak
SpiderOak &
```

Not much to it and call me lazy, but it's easier to click a launcher to run this script than having to right-click the SpiderOak tray icon, choose Quit, then restart it from the start menu ;-)
