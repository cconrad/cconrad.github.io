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
date: 2013-12-30 20:47:30 +0000
date_gmt: 2013-12-30 19:47:30 +0000
excerpt: "<p>On an i386 box FreeBSD 9.2-STABLE would hang during boot if (and only
  if) I had some USB drives attached to the machine.</p>\r\n"
header: false
layout: page
published: true
sidebar: left
status: publish
tags:
- freebsd
teaser: "On an i386 box FreeBSD 9.2-STABLE would hang during boot if (and only if) I had some USB drives attached to the machine."
title: FreeBSD hangs during boot with USB drives attached
wordpress_id: 730
wordpress_url: http://www.clausconrad.com/?p=730
---
Adding the following line to _/boot/loader.conf_ seemed to mitigate the issue:

```
hw.usb.no_boot_wait="1"
```

In my case I had to create this file.
