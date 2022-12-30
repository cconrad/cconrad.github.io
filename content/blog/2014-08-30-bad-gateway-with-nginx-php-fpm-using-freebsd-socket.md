---
date: 2014-08-30T13:58:40.000Z
excerpt: 'After updating a FreeBSD jail I got the dreaded "502 Bad gateway" error from nginx, here''s how I fixed it:'
published: true
tags:
  - freebsd
  - php-fpm
  - nginx
  - system-administration
title: '"Bad gateway" with nginx, PHP-FPM using FreeBSD socket'
---
Apparently there is a [bug](https://bugs.php.net/bug.php?id=67244) in the PHP version shipped with FreeBSD; ServerFault user MafiaInc kindly provided [the solution](https://serverfault.com/questions/593272/nginx-php-fpm-permission):

1. Edit the file /usr/local/etc/php-fpm.conf

2. Note the values of the user/group lines, e.g.:

   ```text
   user = www  
   group = www
   ```
  
3. Add these lines with the same values as the user/group lines:

   ```text
   listen.owner = www  
   listen.group = www
   ```
  
4. Restart PHP-FPM using this command:

   ```shell
   service php-fpm restart
   ```
