---
author:
  display_name: Claus Conrad
  email: webmaster@clausconrad.com
  login: claus
  url: ''
author_email: webmaster@clausconrad.com
author_login: claus
categories:
- Development
comments: true
date: 2014-08-25 09:25:56 +0000
date_gmt: 2014-08-25 07:25:56 +0000
excerpt: "While testing some code using Plunker I discovered that it doesn't support
  IE9.\r\n\r\n"
header: false
layout: page
published: true
sidebar: left
status: publish
tags: []
teaser: "While testing some code using Plunker I discovered that it doesn't support IE9."
title: Running Plunker in IE9
wordpress_id: 777
wordpress_url: http://www.clausconrad.com/?p=777
---
Even though I made my plunk public, IE9 would always load an empty file into the editor, when I pasted the URL into it.

The solution I found [here](http://stackoverflow.com/questions/20959088/angularjs-1-2-7-ie8-resource-bug) is simple: Use a modern browser to write the code, then paste the "Run" preview iframe's URL into IE to run it. Unfortunately live update won't work this way, but it's better than not being able to test plunks  in older Internet Explorer browsers at all.
