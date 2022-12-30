---
author:
  display_name: Claus Conrad
  email: webmaster@clausconrad.com
  login: claus
  url: ''
author_email: webmaster@clausconrad.com
author_login: claus
comments: true
date: 2013-12-23 20:33:36 +01:00
date_gmt: 2013-12-23 19:33:36 +0000
excerpt: "Some personal notes about troubleshooting audio problems with HDMI out on a HTPC running Arch Linux."
header: false
published: true
sidebar: left
status: publish
tags:
  - linux
  - audio
  - alsa
  - pulseaudio
  - system-administration
title: Troubleshooting Linux sound problems
wordpress_id: 669
wordpress_url: http://www.clausconrad.com/?p=669
---
* Unmuting outputs:  
  
  ```shell
  alsamixer
  ```

* Testing speaker channels:  
  
  ```shell
  speaker-test -c 5 -D default -t wav
  ```

* Disabling automatic suspension of sink in Pulseaudio:  
  
  ```shell
  sudo vi /etc/pulse/default.pa
  ```
  
  Comment this line out:  
  
  ```
  # load-module module-suspend-on-idle
  ```
  
  Then restart Pulseaudio (probably easiest by logging out and in to X again?)
