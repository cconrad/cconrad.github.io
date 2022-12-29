---
author:
  display_name: Claus Conrad
  email: webmaster@clausconrad.com
  login: claus
  url: ''
author_email: webmaster@clausconrad.com
author_login: claus
comments: true
date: 2013-04-10 21:14:12 +02:00
date_gmt: 2013-04-10 19:14:12 +0000
excerpt: Installing an opcode cache such as Zend OPcache is a simple way to improve your PHP's performance on SmartOS. Here's how.
header: 'no'
published: true
sidebar: left
status: publish
tags:
  - performance
  - smartos
  - php
  - system-administration
teaser: Installing an opcode cache such as Zend OPcache is a simple way to improve your PHP's performance on SmartOS. Here's how.
title: Zend OPcache for PHP on SmartOS
wordpress_id: 548
wordpress_url: http://www.clausconrad.com/?p=548
---
Zend OPcache (previously known as Zend Optimizer+) is one of several opcode caches for PHP, the other most well-known being APC and eAccelerator. Zend Optimizer Plus has been available in binary form together with Zend Server (CE) for some time, but Zend recently decided to contribute the code to the PHP project. Thus it can now be used on platforms such as SmartOS, where Zend Server isn't an option. Thank you Zend! :)

Zend OPcache will be part of PHP from the upcoming 5.5 version, but the [source code](https://github.com/zend-dev/ZendOptimizerPlus) is compatible with PHP 5.2 and later versions. See below for installation steps.

## Manual installation

1.  Update your package database:  
    `pkgin up`

3.  Install prerequisites for building Zend OPcache:  
    `pkgin in unzip php54-pear gmake gcc47 autoconf`

5.  Download and unpack the code:  
    `wget --no-check-certificate https://github.com/zend-dev/ZendOptimizerPlus/archive/master.zip  
    unzip master  
    rm master`

7.  Build the extension:  
    `cd ZendOptimizerPlus-master/  
    phpize  
    ./configure --with-php-config=/opt/local/bin/php-config  
    make  
    make test  
    make install`

## Activating the extension

1.  Edit your php.ini:  
    `vi /opt/local/etc/php.ini`

3.  Add the following line at the bottom of the file and save it:  
    `zend_extension=/opt/local/lib/php/20120301/opcache.so`

5.  If you are using PHP-FPM, restart it:  
    `svcadm restart php54-fpm`

_Checked and updated on September 17, 2013._
