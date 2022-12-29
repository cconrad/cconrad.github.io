---
author:
  display_name: Claus Conrad
  email: webmaster@clausconrad.com
  login: claus
  url: ''
author_email: webmaster@clausconrad.com
author_login: claus
comments: true
date: 2013-09-22 03:02:12 +02:00
date_gmt: 2013-09-22 01:02:12 +0000
excerpt: "I am currently learning my way around PC-BSD 9.2. Read more about why and my findings after the break.\r\n"
header: false
published: true
sidebar: left
status: publish
tags:
  - freebsd
  - pc-bsd
  - system-administration
teaser: I am currently learning my way around PC-BSD 9.2. Read more about why and my findings after the break.
title: Installing software on PC-BSD 9.2 - for dummies
wordpress_id: 598
wordpress_url: http://www.clausconrad.com/?p=598
---
I have used most types of operating systems throughout the years. For those interested in a little history, [see here](/blog/my-hardware-and-os-history). For those just interested in the package installation process on PC-BSD, please skip the next paragraphs until after the horizontal line.

At the moment, I am evaluating PC-BSD 9.2 in a virtual machine. Why am I going to this extent, you might ask? Some time ago, I researched web server performance and made the switch from Apache (2.2 or 2.4) to nginx for most of the websites I run or develop, which has resulted in a significantly positive impact on web site perfornance, as well as easier administration. As described in the article mentioned above, my main operating system is Windows 8. Unfortunately nginx does not run easily on that operating system (I realize that it can be done, but it requires some serious tinkering to make it behave the way other Windows services work).

Since I currently develop a website meant to run on nginx on CentOS, the differences between running Apache on my development machine and nginx on the staging/production servers soon became apparent. At that moment, I switched to developing in a VM using the latest version of Fedora, which closely resembled the final environment and made debugging easier (I tried CentOS in a VM, but VMWare didn't support it with any paravirtualized drivers ("VMWare Tools"), so performance was sub-standard.) However, due to the specs of my development laptop, I can't afford to run multiple virtual machines efficiently at the same time. Most of my development sites are hosted on SmartOS (also running nginx as the server). So the most logical decision seemed to be to try PC-BSD 9.2 (which has ZFS and \*BSD commands, like SmartOS, and supports nginx and related dependencies, like CentOS). The following paragraphs describe my experience with this operating system.

* * *

PC-BSD is based on FreeBSD. Most importantly, these \*BSD distributions use 2 different software installation methods;

* [pkgng](https://docs.freebsd.org/en/books/handbook/ports/#pkgng-intro)  
  The "new" binary installation method. Installs binary (pre-compiled) packages.
  As far as I know, these are the same packages provided by _pkg_add_ and related tools. To switch to pkgng, run the _pkg_ bootstrap command. Once you go pkgng, you can't go back to using the pkg_add etc, commands anymore.

* [ports](https://docs.freebsd.org/en/books/handbook/ports/#ports-using)  
  The ports collection offers more packages than the binary alternatives described above. The disadvantage is that these packages need to be compiled from source code locally, potentially taking a lot more time. However, the ports system supposedly uses the same database as the binary packaging systems, so stuff doesn't get out of sync, and it handles dependencies just like the other commands.
