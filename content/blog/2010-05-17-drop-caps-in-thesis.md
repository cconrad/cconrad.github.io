---
author:
  display_name: Claus Conrad
  email: webmaster@clausconrad.com
  login: claus
  url: ''
author_email: webmaster@clausconrad.com
author_login: claus
comments: true
date: 2010-05-17 22:36:14 +02:00
date_gmt: 2010-05-17 20:36:14 +0000
excerpt: Reading Asnio inspired me to implement drop caps on this blog, and searching for an easy way to add them I came across Miguel's post on <a href="http://webhole.net/2009/11/03/thesis-theme-tip-how-to-add-drop-caps-to-all-posts/">adding drop caps to all posts  in Thesis</a> at once.
header: 'no'
published: true
sidebar: left
status: publish
tags:
  - wordpress
  - thesis
  - css
  - development
title: Drop caps in Thesis
wordpress_id: 258
wordpress_url: http://www.clausconrad.com/?p=258
---
Apparently, Thesis has a built-in CSS class called "drop_cap" that can be manually added to posts. Adding this class to the first letter of posts manually isn't a viable solution, Miguel writes, and I couldn't agree more - it's prone to be forgotten as well as ugly, because it violates the rule of separation of content and layout.

Miguel's suggested solution has the advantage of requiring only a single change and can even be done through the web (assuming one uses the fabulous Thesis theme and OpenHook plugin). I don't like the fact that it increases bandwidth on each page though. This could be remedied by including an external CSS file instead of inline CSS in Miguel's code, but doing so would increase frontpage loading time and - unless properly cached - probably use up even more bandwidth on subsequent page loads.

What I would suggest instead is to add a CSS class such as "single" to the element in the hook code (see Miguel's post for that) and then target these pages from the regular _custom.css_ file, like this:

`body.single div.entry-content > p:first-child:first-letter { /* ... */ }`

Unfortunately I don't know how to add a class to the body element programmatically in WordPress, I just assume it is possible judging from my knowledge of other CMS. Thus I came up with this alternate CSS-only solution instead, which works for me:

`.custom .post:not(.teaser) .entry-content > p:first-child:first-letter{font-size:3.3em;line-height:.76em;padding:.05em .12em 0 0;color:#ccc;float:left}`

While this snippet has the advantage of not requiring any PHP, it has some other shortcomings one needs to be aware of. Unlike Miguel's solution it targets all posts that aren't teasers, whether these are on single post pages or not. Second, it uses the CSS3 _:not_ selector, which isn't supported in Internet Explorer 8, but works in the current versions of the other 4 major browsers (Firefox, Safari, Chrome and Opera). That's okay for my purposes, there's no rush (to support IE users), but your mileage may vary.
