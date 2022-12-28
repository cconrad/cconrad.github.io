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
date: 2010-01-13 19:51:27 +01:00
date_gmt: 2010-01-13 18:51:27 +0000
header: 'no'
layout: page.liquid
published: true
sidebar: left
status: publish
tags:
  - aws
teaser: I experienced very slow speeds when uploading files to a small (m1.small) Amazon EC2 instance using the SCP and SFTP3 protocols with rsync, WinSCP and Tunnelier BitVise - around 30-40 kB/sec.
title: Slow Amazon EC2 rsync / SCP / SFTP upload speeds?
wordpress_id: 82
wordpress_url: http://www.clausconrad2.com/?p=82
---
By simply switching the SSHd listening port to http (80), speeds went up to 1,4 MB/sec. Why Amazon would throttle the SSH port (22) I don't know, but I hope this helps somebody else out there.
