---
layout: page
status: publish
header: no
sidebar: left
published: true
title: Debugging Pyramid with PyCharm
author:
  display_name: Claus Conrad
  login: claus
  email: webmaster@clausconrad.com
  url: ''
author_login: claus
author_email: webmaster@clausconrad.com
wordpress_id: 373
wordpress_url: http://www.clausconrad.com/?p=373
date: '2011-01-30 19:45:10 +0000'
date_gmt: '2011-01-30 18:45:10 +0000'
categories:
- Development
tags:
- pyramid
- pycharm
comments: True
teaser: I recently came across the PyCharm IDE and almost instantly fell in love. 
---
PyCharm is made by JetBrains, the developers of IntelliJ IDEA and ReSharper - these guys have proven their ability to create full-featured, developer-friendly IDEs in the past and its obvious they used their knowledge to create PyCharm, too.

While PyCharm supports Django and GAE out of the box, it can certainly be used for other frameworks. Sean has written some excellent [instructions to debug Pylons with PyCharm](http://byatool.com/python/how-to-debug-pylons-with-pycharm/) and the steps required to debug Pyramid are exactly the same:

1.  Click "Run" > "Edit Configurations"
2.  Press "Insert" and choose "Python"
3.  Give the configuration a name, e. g. _Pyramid_
4.  Insert the script to _paster_:  
    `C:\Python27\Scripts\paster-script.py`
5.  Insert the script parameters WITHOUT _--reload_:  
    `serve C:\path\to\development.ini`
6.  Choose the right Python interpreter from the dropdown
