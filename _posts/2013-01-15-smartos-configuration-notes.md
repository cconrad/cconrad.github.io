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
date: 2013-01-15 14:07:37 +01:00
date_gmt: 2013-01-15 13:07:37 +0000
header: 'no'
layout: page
published: true
sidebar: left
status: publish
tags:
  - smartos
teaser: Some notes about my experimentations with SmartOS (for personal use).
title: SmartOS configuration notes
wordpress_id: 504
wordpress_url: http://www.clausconrad.com/?p=504
---
*   **Change keymap**  
    Default is US, to change, add a line to /usbkey/config like this:  
    _default_keymap=denmark_  
    [Source](https://wiki.smartos.org/extra-configuration-options/#extraconfigurationoptions-Console%2FLogin%2FSSHkeys)

    [](https://wiki.smartos.org/extra-configuration-options/#extraconfigurationoptions-Console%2FLogin%2FSSHkeys)

*   **VirtualBox networking**  
    * Set VirtualBox NIC to NAT mode  
    * Set SmartOS configuration (during install) to:  
    IP: 10.0.2.15  
    Netmask: 255.255.255.0  
    Default gateway: 10.0.2.2  
    [Source](https://blogs.oracle.com/fatbloke/entry/networking_in_virtualbox1#NAT)

    [](https://blogs.oracle.com/fatbloke/entry/networking_in_virtualbox1#NAT)

*   **Installing a Joyent VM (zone)**  
    _imgadm update_  
    _dsadm avail_  
    _dsadm import fdea06b0-3f24-11e2-ac50-0b645575ce9d_  
    Create JSON configuration file for new VM   
    [Source](https://terramagnus.com/discovering-smartos/)

    [](https://terramagnus.com/discovering-smartos/)

*   **NAT for zones**  
    [Source](https://wiki.smartos.org/extra-configuration-options/#extraconfigurationoptions-Console%2FLogin%2FSSHkeys)
