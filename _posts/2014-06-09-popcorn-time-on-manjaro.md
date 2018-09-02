---
author:
  display_name: Claus Conrad
  email: webmaster@clausconrad.com
  login: claus
  url: ''
author_email: webmaster@clausconrad.com
author_login: claus
categories:
- System administration
comments: true
date: 2014-06-09 20:54:17 +0000
date_gmt: 2014-06-09 18:54:17 +0000
header: false
layout: page
published: true
sidebar: left
status: publish
tags:
- manjaro
teaser: "How to fix a startup error from Popcorn Time 3.2 beta (64-bit) on Manjaro:"
title: Popcorn Time on Manjaro
wordpress_id: 769
wordpress_url: http://www.clausconrad.com/?p=769
---
```shell
yaourt libudev.so.0
```

This fixed the problem for me with the version of Popcorn Time available at [time4popcorn.eu](http://www.time4popcorn.eu/).
