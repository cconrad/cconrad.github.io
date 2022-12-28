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
date: 2013-12-25 16:21:33 +01:00
date_gmt: 2013-12-25 15:21:33 +0000
excerpt: "After installing Manjarobox I couldn't get the application menu to work as root. Here's how I solved it:\r\n\r\n"
header: false
layout: page.liquid
published: true
sidebar: left
status: publish
tags:
  - manjaro
  - openbox
teaser: 'After installing Manjarobox I couldn''t get the application menu to work as root. Here''s how I solved it:'
title: Manjaro Openbox right-click menu as root
wordpress_id: 677
wordpress_url: http://www.clausconrad.com/?p=677
---
* Edit _/root/.config/obmenu-generator/schema.pl_:

  ```shell
  leafpad /root/.config/obmenu-generator/schema.pl
  ```

* Find the line that says: 

  ```perl
  require '/home/root/.config/obmenu-generator/config.pl';
  ```

  and change it to read:

  ```perl
  require '/root/.config/obmenu-generator/config.pl';
  ```

* Save the file
  
Thanks to _rfk1ll_ on the Manjaro forum for this invaluable hint.
