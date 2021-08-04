---
author:
  display_name: Claus Conrad
  email: webmaster@clausconrad.com
  login: claus
  url: ''
author_email: webmaster@clausconrad.com
author_login: claus
categories:
- System administration
comments: true
date: 2013-11-03 21:12:13 +0000
date_gmt: 2013-11-03 20:12:13 +0000
excerpt: "Sudo on FreeBSD uses the users PATH to find the command it is asked to run.
  Here's how to change that to use root's PATH instead.\r\n\r\n"
header: false
layout: page
published: true
sidebar: left
status: publish
tags:
- security
- freebsd
teaser: "Sudo on FreeBSD uses the users PATH to find the command it is asked to run. Here's how to change that to use root's PATH instead."
title: Use root PATH for sudo on FreeBSD
wordpress_id: 642
wordpress_url: http://www.clausconrad.com/?p=642
---
1. `sudo vi /usr/local/etc/sudoers.d/secure_path`
2. Enter this text on one line (changing the value as desired):

   ```
   Defaults secure_path = "/usr/local/share/pcbsd/bin:/sbin:/bin:/usr/sbin:/usr/bin:/usr/games:/usr/local/sbin:/usr/local/bin:/root/bin"
   ```

3. Save the file
  
For more information see the [sudoers](https://linux.die.net/man/5/sudoers) man page. Note, however, that there are [good reasons to keep the invoking user's PATH](https://askubuntu.com/questions/146869/why-does-sudo-not-add-roots-path-with-ubuntu-12-04/147905#147905).
