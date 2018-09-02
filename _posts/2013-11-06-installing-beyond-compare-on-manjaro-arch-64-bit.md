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
date: 2013-11-06 19:23:13 +0000
date_gmt: 2013-11-06 18:23:13 +0000
excerpt: "How to get Beyond Compare&nbsp;3.3.8, build 16340 to run on Manjaro or Arch
  Linux (64-bit):\r\n\r\n"
header: false
layout: page
published: true
sidebar: left
status: publish
tags:
- linux
- development
teaser: "How to get Beyond Compare 3.3.8, build 16340 to run on Manjaro or Arch Linux (64-bit):"
title: Installing Beyond Compare on Manjaro / Arch 64-bit
wordpress_id: 646
wordpress_url: http://www.clausconrad.com/?p=646
---
The AUR package didn't work for me, so I took these steps instead:

1. Download and untar the package from:  
   http://www.scootersoftware.com/bcompare-3.3.8.16340.tar.gz

2. Run install.sh:

   ```shell
   sudo ./install.sh
   ```

3. From a terminal, run:
   
   ```shell
   sudo pacman -S lib32-libxft lib32-libxinerama
   ```
  
It should now have been added to the menu and be runnable ("bcompare", not "BCompare").
