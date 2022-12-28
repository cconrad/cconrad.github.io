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
date: 2014-03-10 17:14:41 +01:00
date_gmt: 2014-03-10 16:14:41 +0000
header: false
layout: page
published: true
sidebar: left
status: publish
tags:
  - manjaro
  - i3
title: Power management under i3 on Arch Linux
wordpress_id: 767
wordpress_url: http://www.clausconrad.com/?p=767
---
1. `sudo pacman -S xfce4-power-manager`

2. `xfce4-power-manager-settings`

   Make the necessary configuration settings, such as suspending upon closing the lid
  
3. `vi .config/i3/config`

   Add this at the bottom:

   ```shell
   exec --no-startup-id sleep 3 &amp;&amp; xfce4-power-manager
   ```
