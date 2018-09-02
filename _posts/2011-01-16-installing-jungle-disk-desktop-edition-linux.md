---
layout: page
status: publish
header: no
sidebar: left
published: true
title: Installing Jungle Disk Desktop Edition on Ubuntu 10.10 Linux
author:
  display_name: Claus Conrad
  login: claus
  email: webmaster@clausconrad.com
  url: ''
author_login: claus
author_email: webmaster@clausconrad.com
wordpress_id: 365
wordpress_url: http://www.clausconrad.com/?p=365
date: '2011-01-16 13:15:24 +0000'
date_gmt: '2011-01-16 12:15:24 +0000'
categories:
- System administration
tags:
- linux
- jungledisk
- backup
comments: true
teaser: "I had a few problems installing Jungle Disk Desktop Edition on Ubuntu Linux 10.10, probably all related to the fact that my device ran a stripped-down installation of the operating system without X libraries. Here's what I had to do to get it running:"
---
1.  Find the right download for this operating-system on [https://www.jungledisk.com/downloads/personal/desktop/linux/](https://www.jungledisk.com/downloads/personal/desktop/linux/):
    ```shell
    wget http://downloads.jungledisk.com/jungledisk/junglediskdesktop_312-0_amd64.deb](http://downloads.jungledisk.com/jungledisk/junglediskdesktop_312-0_amd64.deb
    ```

2.  Install the package:
    ```shell
    sudo dpkg -i junglediskdesktop_312-0_amd64.deb
    ```

3.  Install missing libraries:  
    ```shell
    sudo apt-get install libgtk2.0-0 libxxf86vm1 libsm6 libnotify1
    ```
    
4.  Now running the software succeeded:
    ```shell
    junglediskdesktop
    ```
