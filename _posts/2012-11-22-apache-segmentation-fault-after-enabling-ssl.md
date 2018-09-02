---
layout: page
status: publish
header: no
sidebar: left
published: true
title: Apache segmentation fault after enabling SSL
author:
  display_name: Claus Conrad
  login: claus
  email: webmaster@clausconrad.com
  url: ''
author_login: claus
author_email: webmaster@clausconrad.com
wordpress_id: 490
wordpress_url: http://www.clausconrad.com/?p=490
date: '2012-11-22 17:18:14 +0000'
date_gmt: '2012-11-22 16:18:14 +0000'
categories:
- Howto
- System administration
tags: []
comments: True
teaser: "If you use the Zend Server (CE) PHP distribution on Debian/Ubuntu, apparently there is a conflict between PHP's <em>curl</em> extension and Apache's <em>mod_ssl</em>, resulting in a segmentation fault (crash) upon starting Apache."
---
The easiest solution is to disable the curl extension, if you don't need it (by default, this can be done by commenting the first line in _/usr/local/zend/etc/ext.d/curl.ini_).

Thanks to [Sirex](http://stackoverflow.com/questions/10831772/apache-2-segmentation-fault-when-zend-php-53-installed-with-curl-solved) for this answer! Unfortunately I am not allowed to upvote his/her answer on StackOverflow yet. I hope this link helps someone else.
