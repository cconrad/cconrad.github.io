---
layout: page
status: publish
header: no
sidebar: left
published: true
title: 'ERROR 1307 (HY000): Failed to CREATE PROCEDURE'
author:
  display_name: Claus Conrad
  login: claus
  email: webmaster@clausconrad.com
  url: ''
author_login: claus
author_email: webmaster@clausconrad.com
wordpress_id: 104
wordpress_url: http://www.clausconrad2.com/?p=104
date: '2009-11-28 19:07:18 +0000'
date_gmt: '2009-11-28 18:07:18 +0000'
categories:
- Development
tags:
- mysql
comments: true
teaser: This error can occur in MySQL 5.1 when the database files were created on a previous version of MySQL.
---
To resolve it, run "mysql_upgrade" as Administrator/root.
