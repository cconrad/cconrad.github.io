---
date: 2013-12-30T19:47:30.000Z
excerpt: On an i386 box FreeBSD 9.2-STABLE would hang during boot if (and only if) I had some USB drives attached to the machine.
published: true
tags:
  - freebsd
  - system-administration
title: FreeBSD hangs during boot with USB drives attached
---
Adding the following line to `/boot/loader.conf` seemed to mitigate the issue:

```text
hw.usb.no_boot_wait="1"
```

In my case I had to create this file.
