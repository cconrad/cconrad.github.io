---
layout: page
status: publish
header: no
sidebar: left
published: true
title: Count files in a folder recursively
author:
  display_name: Claus Conrad
  login: claus
  email: webmaster@clausconrad.com
  url: ''
author_login: claus
author_email: webmaster@clausconrad.com
wordpress_id: 142
wordpress_url: http://www.clausconrad2.com/?p=142
date: '2009-05-30 00:29:18 +0000'
date_gmt: '2009-05-29 22:29:18 +0000'
categories:
- System administration
tags: []
comments: true
teaser: "To count the <strong>number of files in the current folder and in all of its subfolders (recursively)</strong>:"
---
`find . -type f | wc -l`  
To count the number of files **and folders** in the current folder and in all of its subfolders (recursively):  
`find . | wc -l`
