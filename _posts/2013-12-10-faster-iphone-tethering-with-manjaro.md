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
date: 2013-12-10 09:41:34 +0000
date_gmt: 2013-12-10 08:41:34 +0000
excerpt: "How to avoid having to wait for Manjaro to auto-connect to your iPhone's
  hotspot, when you activate tethering:\r\n\r\n"
header: false
layout: page
published: true
sidebar: left
status: publish
tags:
- manjaro
- arch
- networkmanager
- cli
- wifi
teaser: "How to avoid having to wait for Manjaro to auto-connect to your iPhone's hotspot, when you activate tethering:"
title: Faster iPhone tethering with Manjaro
wordpress_id: 659
wordpress_url: http://www.clausconrad.com/?p=659
---
I have a couple of connections in my Network Manager, most of which are set to auto-connect - e. g. my home network, wifi at work, and my iPhone. I noticed that Manjaro detects those regular wireless routers at home and work pretty quickly and connects to them almost immediately.

Not so with the iPhone. Although I go to the "Personal hotspot" settings on the iPhone (which I believe is necessary for the iPhone to accept new wireless clients) it can take 10 or more seconds, before Network Manager detects the new hotspot and connects to it. Here's what I did to shorten that wait:

1. In a terminal, verify that the iPhone's hotspot is registered with NetworkManager and that it is set to auto-connect by entering:

   ```shell
   nmcli -f name,autoconnect con list
   ```
  
   Make sure the name of your iPhone's hotspot is listed and that it says "yes" in the AUTOCONNECT column.

2. Now create a shell script or a launcher (depending on your desktop environment) with the following command:
   
   ```shell
   nmcli con up id "John's iPhone"
   ```
  
   ...where "John's iPhone" obviously should be replaced by the name of your hotspot ;-)

3. Simply run the script or click the launcher icon whenever you want to connect to the iPhone, and it should come up after about a second. Unfortunately it is still necessary to go to the "Personal hotspot" settings page on the iPhone before this will work, but at least you're online faster than having to wait for auto-connect.
