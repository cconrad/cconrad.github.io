---
author:
  display_name: Claus Conrad
  email: webmaster@clausconrad.com
  login: claus
  url: ''
author_email: webmaster@clausconrad.com
author_login: claus
comments: true
date: 2011-07-09 20:00:18 +02:00
date_gmt: 2011-07-09 18:00:18 +0000
excerpt: Shortly after the launch of the Google+ project, GPlus.to began to offer personal URLs to Google+ profiles. If you have your own domain, here's a way to an even more personalized Google+ profile URL.
header: 'no'
published: true
sidebar: left
status: publish
tags:
  - google-plus
  - howto
title: Personalize your Google+ URL
wordpress_id: 432
wordpress_url: http://www.clausconrad.com/?p=432
---
Credits for this idea should go to [Thomas Rosenstand](https://www.concept-i.dk/) instead of me. Redirect www.yourdomain.com/+ to your Google+ profile - if your web server runs Apache, this can be achieved by inserting the following line in the domains `.htaccess` file or the servers `httpd.conf` (`apache2.conf` on Debian-based operating systems, such as Ubuntu):

`Redirect permanent /+ https://plus.google.com/107098868976669747695/posts`

If you had to use the `.htaccess` file, that should be all. If you used a server-wide configuration file (and I would recommend so for better performance), remember to reload the settings. This can be achieved by restarting Apache, for example:

`sudo apache2ctl restart`
