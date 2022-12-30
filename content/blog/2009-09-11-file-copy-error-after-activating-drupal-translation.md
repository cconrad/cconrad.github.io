---
date: 2009-09-11T14:34:44.000Z
excerpt: Getting the error "Filen kan ikke kopieres, fordi filen med det angivne navn ikke eksisterer. Undersøg venligst om du har angivet det korrekte filnavn." after you install and activate the Danish translation of Drupal?
published: true
tags:
  - drupal
  - development
title: File copy error after activating Drupal translation
---
*   If you are on Windows: check the temporary folder setting under _admin/settings/file-system_. If it is set to _/tmp_, change it to an existing path.
*   If it is set to a valid path, make sure the PHP/web server user can write to it.
