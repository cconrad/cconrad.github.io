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
date: 2013-12-23 18:58:23 +01:00
date_gmt: 2013-12-23 17:58:23 +0000
excerpt: "<p>While configuring my HTPC via SSH, I needed to deactivate its screensaver without having access to its own keyboard or mouse. Here's how to do that from the (SSH) command line:</p>\r\n"
header: false
layout: page.liquid
published: true
sidebar: left
status: publish
tags:
  - linux
  - screensaver
  - ssh
  - htpc
teaser: 'While configuring my HTPC via SSH, I needed to deactivate its screensaver without having access to its own keyboard or mouse. Here''s how to do that from the (SSH) command line:'
title: Deactivate xscreensaver via SSH
wordpress_id: 667
wordpress_url: http://www.clausconrad.com/?p=667
---
```shell
xscreensaver-command -deactivate
```

If you happen to use gnome-screensaver (default in Ubuntu), the following command might help (not tested):

```shell
DISPLAY=:0 gnome-screensaver-command -p
```

Thanks to YaronSh on the [Ubuntu forums](https://ubuntuforums.org/showthread.php?t=632580).
