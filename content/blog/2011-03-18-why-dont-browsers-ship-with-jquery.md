---
author:
  display_name: Claus Conrad
  email: webmaster@clausconrad.com
  login: claus
  url: ''
author_email: webmaster@clausconrad.com
author_login: claus
comments: true
date: 2011-03-18 12:21:52 +01:00
date_gmt: 2011-03-18 11:21:52 +0000
header: 'no'
published: true
sidebar: left
status: publish
tags:
  - development
teaser: This is really not so much a blog entry as it is a question... why don't browsers "ship" with jQuery and other common frameworks?
title: Why don't browsers ship with jQuery?
wordpress_id: 403
wordpress_url: http://www.clausconrad.com/?p=403
---
Years ago, browser vendors competed over JavaScript engine features, nowadays they compete over JavaScript engine performance. Thanks to cross-browser frameworks (with jQuery being the most prominent) features and compatibility are no longer an issue. Isn't it time for browser vendors to compete on features such as pre-loading different JS framework versions and replacing remote loads of these with already cached versions?

In the meantime, I hope every web developer sticks to a CDN-hosted version of these libraries. The [Google Libraries API](https://developers.google.com/speed/libraries?csw=1) is a well-known jQuery host by now, but Microsoft also hosts a couple of libraries for you at their [ASP.NET CDN](https://docs.microsoft.com/en-us/aspnet/ajax/cdn/overview). Beware though that using one of these CDN's just for one or two requests might result in yet another DNS query upon loading your site. To me, the caching advantage is worth it.
