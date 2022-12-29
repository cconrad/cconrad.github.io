---
author:
  display_name: Claus Conrad
  email: webmaster@clausconrad.com
  login: claus
  url: ''
author_email: webmaster@clausconrad.com
author_login: claus
comments: true
date: 2015-02-10 12:17:37 +01:00
date_gmt: 2015-02-10 11:17:37 +0000
excerpt: "<p>I got this not so helpful error while using Browserify to bundle a web application.</p>\r\n"
header: false
published: true
sidebar: left
status: publish
tags:
  - browserify
  - development
teaser: I got this not so helpful error while using Browserify to bundle a web application.
title: 'TypeError: Cannot read property ''browserify'' of undefined'
wordpress_id: 820
wordpress_url: http://www.clausconrad.com/?p=820
---
It was caused by a syntax error in the `package.json` file of a node module that was required by my code - the file did not contain valid JSON.
