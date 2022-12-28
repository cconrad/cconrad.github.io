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
date: 2014-08-30 15:58:40 +02:00
date_gmt: 2014-08-30 13:58:40 +0000
excerpt: "After updating a FreeBSD jail I got the dreaded \"502 Bad gateway\" error from nginx, here's how I fixed it:\r\n\r\n"
header: false
layout: page
published: true
sidebar: left
status: publish
tags:
  - freebsd
  - php-fpm
  - nginx
teaser: 'After updating a FreeBSD jail I got the dreaded "502 Bad gateway" error from nginx, here''s how I fixed it:'
title: '"Bad gateway" with nginx, PHP-FPM using FreeBSD socket'
wordpress_id: 779
wordpress_url: http://www.clausconrad.com/?p=779
---
Apparently there is a [bug](https://bugs.php.net/bug.php?id=67244) in the PHP version shipped with FreeBSD; ServerFault user MafiaInc kindly provided [the solution](https://serverfault.com/questions/593272/nginx-php-fpm-permission):

1. Edit the file /usr/local/etc/php-fpm.conf

2. Note the values of the user/group lines, e.g.:

   ```
   user = www  
   group = www
   ```
  
3. Add these lines with the same values as the user/group lines:

   ```
   listen.owner = www  
   listen.group = www
   ```
  
4. Restart PHP-FPM using this command: 
        
   ```shell
   service php-fpm restart
   ```
