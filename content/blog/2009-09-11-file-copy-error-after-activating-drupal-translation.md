---
author:
  display_name: Claus Conrad
  email: webmaster@clausconrad.com
  login: claus
  url: ''
author_email: webmaster@clausconrad.com
author_login: claus
comments: true
date: 2009-09-11 16:34:44 +02:00
date_gmt: 2009-09-11 14:34:44 +0000
excerpt: Getting the error "Filen kan ikke kopieres, fordi filen med det angivne navn ikke eksisterer. Undersøg venligst om du har angivet det korrekte filnavn." after you install and activate the Danish translation of Drupal?
header: 'no'
published: true
sidebar: left
status: publish
tags:
  - drupal
  - development
title: File copy error after activating Drupal translation
wordpress_id: 122
wordpress_url: http://www.clausconrad2.com/?p=122
---
*   If you are on Windows: check the temporary folder setting under _admin/settings/file-system_. If it is set to _/tmp_, change it to an existing path.
*   If it is set to a valid path, make sure the PHP/web server user can write to it.
