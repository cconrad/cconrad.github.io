---
date: 2012-11-22T16:18:14.000Z
excerpt: If you use the Zend Server (CE) PHP distribution on Debian/Ubuntu, apparently there is a conflict between PHP's <em>curl</em> extension and Apache's <em>mod_ssl</em>, resulting in a segmentation fault (crash) upon starting Apache.
published: true
tags:
  - howto
  - system-administration
title: Apache segmentation fault after enabling SSL
---
The easiest solution is to disable the curl extension, if you don't need it (by default, this can be done by commenting the first line in _/usr/local/zend/etc/ext.d/curl.ini_).

Thanks to [Sirex](https://stackoverflow.com/questions/10831772/apache-2-segmentation-fault-when-zend-php-53-installed-with-curl) for this answer! Unfortunately I am not allowed to upvote his/her answer on StackOverflow yet. I hope this link helps someone else.
