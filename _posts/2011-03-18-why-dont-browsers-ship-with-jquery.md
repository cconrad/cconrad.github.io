---
layout: page
status: publish
header: no
sidebar: left
published: true
title: Why don't browsers ship with jQuery?
author:
  display_name: Claus Conrad
  login: claus
  email: webmaster@clausconrad.com
  url: ''
author_login: claus
author_email: webmaster@clausconrad.com
wordpress_id: 403
wordpress_url: http://www.clausconrad.com/?p=403
date: '2011-03-18 12:21:52 +0000'
date_gmt: '2011-03-18 11:21:52 +0000'
categories:
- Development
tags: []
comments: true
teaser: "This is really not so much a blog entry as it is a question... why don't browsers \"ship\" with jQuery and other common frameworks?"
---
Years ago, browser vendors competed over JavaScript engine features, nowadays they compete over JavaScript engine performance. Thanks to cross-browser frameworks (with jQuery being the most prominent) features and compatibility are no longer an issue. Isn't it time for browser vendors to compete on features such as pre-loading different JS framework versions and replacing remote loads of these with already cached versions?

In the meantime, I hope every web developer sticks to a CDN-hosted version of these libraries. The [Google Libraries API](http://code.google.com/apis/libraries/devguide.html) is a well-known jQuery host by now, but Microsoft also hosts a couple of libraries for you at their [ASP.NET CDN](http://www.asp.net/ajaxLibrary/CDN.ashx). Beware though that using one of these CDN's just for one or two requests might result in yet another DNS query upon loading your site. To me, the caching advantage is worth it.
