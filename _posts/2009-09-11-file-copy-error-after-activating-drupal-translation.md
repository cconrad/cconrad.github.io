---
layout: page
status: publish
header: no
sidebar: left
published: true
title: File copy error after activating Drupal translation
author:
  display_name: Claus Conrad
  login: claus
  email: webmaster@clausconrad.com
  url: ''
author_login: claus
author_email: webmaster@clausconrad.com
wordpress_id: 122
wordpress_url: http://www.clausconrad2.com/?p=122
date: '2009-09-11 16:34:44 +0000'
date_gmt: '2009-09-11 14:34:44 +0000'
categories:
- Development
tags:
- drupal
comments: true
teaser: "Getting the error \"Filen kan ikke kopieres, fordi filen med det angivne navn ikke eksisterer. Undersøg venligst om du har angivet det korrekte filnavn.\" after you install and activate the Danish translation of Drupal?"
---
*   If you are on Windows: check the temporary folder setting under _admin/settings/file-system_. If it is set to _/tmp_, change it to an existing path.
*   If it is set to a valid path, make sure the PHP/web server user can write to it.

Thanks to [Andreas Haugstrup](http://www.drupaldanmark.dk/forum/spoerg-om-hjaelp/generelle-spoergsmaal/mappe-indstilling).
