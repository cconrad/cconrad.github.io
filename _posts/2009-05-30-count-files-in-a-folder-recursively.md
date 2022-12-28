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
date: 2009-05-30 00:29:18 +02:00
date_gmt: 2009-05-29 22:29:18 +0000
header: 'no'
layout: page.liquid
published: true
sidebar: left
status: publish
tags: []
teaser: 'To count the <strong>number of files in the current folder and in all of its subfolders (recursively)</strong>:'
title: Count files in a folder recursively
wordpress_id: 142
wordpress_url: http://www.clausconrad2.com/?p=142
---
`find . -type f | wc -l`  
To count the number of files **and folders** in the current folder and in all of its subfolders (recursively):  
`find . | wc -l`
