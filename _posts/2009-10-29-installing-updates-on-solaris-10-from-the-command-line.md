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
date: 2009-10-29 18:11:35 +01:00
date_gmt: 2009-10-29 17:11:35 +0000
header: 'no'
layout: page.liquid
published: true
sidebar: left
status: publish
tags:
  - solaris
teaser: After <a href="/blog/registering-solaris-to-receive-updates">registering your Solaris system</a> you might want to install updates from the command line. Here's how to do this in one to three easy steps.
title: Installing updates on Solaris 10 from the command line
wordpress_id: 108
wordpress_url: http://www.clausconrad2.com/?p=108
---
1.  Check for available updates (optional):  

    ```shell
    smpatch analyze
    ```

2.  Download and install the updates:  

    ```shell
    smpatch update
    ```

3.  If the system requires a reboot, do this as soon as possible by running:  

    ```shell
    init 6
    ```
