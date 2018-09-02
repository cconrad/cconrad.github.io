---
layout: page
status: publish
header: no
sidebar: left
published: true
title: CoffeeScript support for JetBrains PhpStorm/WebStorm/PyCharm
author:
  display_name: Claus Conrad
  login: claus
  email: webmaster@clausconrad.com
  url: ''
author_login: claus
author_email: webmaster@clausconrad.com
wordpress_id: 424
wordpress_url: http://www.clausconrad.com/?p=424
date: '2011-06-27 11:18:03 +0000'
date_gmt: '2011-06-27 09:18:03 +0000'
categories:
- Uncategorized
tags: []
comments: True
teaser: "Basic syntax highlighting and error checking of CoffeeScript is only officially available in Jetbrains RubyMine IDE - read on to get it in other IDEs."
---
To get the same level of support for CoffeeScript in PhpStorm (and probably in similar JetBrains IDEs such as WebStorm and PyCharm), simply copy the CoffeeScript plugin directory from a trial version of the latest version of RubyMine:

1.  Install [RubyMine EAP](http://confluence.jetbrains.net/display/RUBYDEV/RubyMine+EAP)
2.  Copy the _coffeescript_ directory from _C:\Program Files (x86)\JetBrains\RubyMine 107.261\plugins\_ to _C:\Program Files (x86)\JetBrains\PhpStorm 2.1\plugins\_

Some third party plugins exist and are officially available for the other IDEs, although they probably come with just as little support as the solution described above. Notice that none of the following plugins are being actively developed.

*   [CoffeeBrew](https://github.com/netzpirat/coffee-brew#readme)

*   [coffeescript-idea](http://yeungda.github.com/coffeescript-idea/)
