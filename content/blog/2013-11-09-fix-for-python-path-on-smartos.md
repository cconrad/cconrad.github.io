---
author:
  display_name: Claus Conrad
  email: webmaster@clausconrad.com
  login: claus
  url: ''
author_email: webmaster@clausconrad.com
author_login: claus
comments: true
date: 2013-11-09 18:58:31 +01:00
date_gmt: 2013-11-09 17:58:31 +0000
excerpt: "<p>The default installation path of Python 2.7 on SmartOS is /opt/local/bin/python2.7, let's make this easier:</p>\r\n"
header: false
published: true
sidebar: left
status: publish
tags:
  - smartos
  - python
  - system-administration
title: Fix for python path on SmartOS
wordpress_id: 652
wordpress_url: http://www.clausconrad.com/?p=652
---
1. Create a symlink:
   
   ```shell
   pfexec ln -s /opt/local/bin/python2.7 /opt/local/bin/python
   ```

(Yes, seriously... I forget this all too often, so I wrote it down for my own sake...)
