---
layout: page
status: publish
header: no
sidebar: left
published: true
title: Installing Solaris 10 on MSI Wind
author:
  display_name: Claus Conrad
  login: claus
  email: webmaster@clausconrad.com
  url: ''
author_login: claus
author_email: webmaster@clausconrad.com
wordpress_id: 112
wordpress_url: http://www.clausconrad2.com/?p=112
date: '2009-10-29 17:40:13 +0000'
date_gmt: '2009-10-29 16:40:13 +0000'
categories:
- System administration
tags:
- solaris
comments: true
teaser: "I'm running Solaris 10 on my home file server (MSI Wind Nettop D130), mostly because of its reliability and fabulous ZFS file system. Unfortunately, unlike OpenSolaris, it doesn't support the Realtek Gigabit Ethernet in my MSI Wind Nettop D130 out of the box. Here's how I got it to work:"
---
1.  Download the newest _gani_ driver from [Masayuki Murayamas homepage](http://homepage2.nifty.com/mrym3/taiyodo/eng/) and transfer it to the Solaris 10 box, e. g. using a USB mass storage device.  

    [Direct link to the driver I used](http://homepage2.nifty.com/mrym3/taiyodo/gani-2.6.4.tar.gz) (this might be outdated)

3.  Unpack the driver:  

    `gunzip gani-2.6.4.tar.gz  
    tar xf gani-2.6.4.tar`
4.  Install the driver:  

    `cd gani-2.6.4  
    /usr/ccs/bin/make install`
5.  The last step is to configure the IP address, netmask, default route, DNS server, hostname or DHCP. For simplicity's sake and as this is a new system I repeated the initial configuration, where network settings now show up:  

    `sys-unconfig`

### Further information

Running _prtconf -vp_ revealed that the LAN adapter has vendor ID 0x1462 (MSI) and device ID 0x4180, but is compatible with vendor ID 0x10ec (Realtek) and device ID 0x8186, which suggests it is a branded version of the series RTL8111/8168B PCI Express Gigabit Ethernet controller.
