---
author:
  display_name: Claus Conrad
  email: webmaster@clausconrad.com
  login: claus
  url: ''
author_email: webmaster@clausconrad.com
author_login: claus
comments: true
date: 2009-05-29T22:29:18.000Z
date_gmt: 2009-05-29 22:29:18 +0000
excerpt: 'To count the <strong>number of files in the current folder and in all of its subfolders (recursively)</strong>:'
header: 'no'
published: true
sidebar: left
status: publish
tags:
  - system-administration
title: Count files in a folder recursively
wordpress_id: 142
wordpress_url: http://www.clausconrad2.com/?p=142
---
`find . -type f | wc -l`  
To count the number of files **and folders** in the current folder and in all of its subfolders (recursively):  
`find . | wc -l`
