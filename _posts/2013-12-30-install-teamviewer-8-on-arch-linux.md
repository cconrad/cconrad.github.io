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
date: 2013-12-30 17:44:27 +0000
date_gmt: 2013-12-30 16:44:27 +0000
excerpt: "<p>How to install TeamViewer 8 on Arch Linux:</p>\r\n"
header: false
layout: page
published: true
sidebar: left
status: publish
tags:
- manjaro
- arch
- teamviewer
teaser: "How to install TeamViewer 8 on Arch Linux:"
title: Install TeamViewer 8 on Arch Linux
wordpress_id: 727
wordpress_url: http://www.clausconrad.com/?p=727
---
This can be useful if you have a license for TeamViewer 8 and don't want to upgrade to the latest version.

1. Install dependencies from the multilib repository:
  
   ```shell
   sudo pacman -S lib32-gcc-libs lib32-alsa-lib lib32-libxtst lib32-libxdamage lib32-zlib lib32-freetype2
   ```

2. Create a temporary directory to build the package in:

   ```shell
   cd && mkdir -p tmp/tv8 && cd tmp/tv8
   ```

3. Download the older _PKGBUILD_ and _.install_ file:

   ```shell
   wget -O PKGBUILD http://pkgbuild.com/git/aur-mirror.git/plain/teamviewer/PKGBUILD?id=1f36168b6bed286032e5e17bd09564b4306ee8c0
   wget -O teamviewer.install http://pkgbuild.com/git/aur-mirror.git/plain/teamviewer/teamviewer.install?id=1f36168b6bed286032e5e17bd09564b4306ee8c0
   ```

4. Build the package:  

   ```shell
   makepkg
   ```

5. Install the package:  

   ```shell
   sudo pacman -U teamviewer-8.0.20931-1-x86_64.pkg.tar.xz
   ```

6. Enable the TeamViewer service:

   ```shell
   sudo systemctl enable teamviewerd
   ```

7. Start the TeamViewer service:

   ```shell
   sudo systemctl start teamviewerd
   ```

8. The TeamViewer 8 client / GUI app can now be run from the menu.
