---
layout: page
status: publish
header: no
sidebar: left
published: true
title: Disable "Most visited" in new tabs in Firefox 3
author:
  display_name: Claus Conrad
  login: claus
  email: webmaster@clausconrad.com
  url: ''
author_login: claus
author_email: webmaster@clausconrad.com
wordpress_id: 140
wordpress_url: http://www.clausconrad2.com/?p=140
date: '2009-05-30 06:58:22 +0000'
date_gmt: '2009-05-30 04:58:22 +0000'
categories:
- Howto
tags: []
comments: true
teaser: "My standard browser is Firefox 3 because of its rendering, cross-platform availability and mostly because of its extensions. Some time ago I installed Google Toolbar to be able to see the page rank of websites I visit. Since then, every new tab I open took much longer to load than previously - I had to wait entering the URL I really wanted to visit to allow Google Toolbar to render 9 screenshots of my \"most visited\" sites. Well that's nice and all Google, but I've got shortcuts for those sites and even if I don't, I could possibly type their URL faster than it takes you to display this rather useless page in every new tab I open. So I went on a quest to disable this function and it's actually not hard at all!"
---
To disable the "most visited" pages in Firefox with Google Toolbar, simply:

*   Go to [about:config](about:config)
*   Confirm the security question, if asked
*   There's a search bar at the top, enter "tab" here
*   Scroll down to google.toolbar.newTab
*   Double-click that line and notice that the right-side column has been changed to "False" and the row is now written in bold
*   Close the about:config tab
