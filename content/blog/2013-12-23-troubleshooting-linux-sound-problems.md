---
date: 2013-12-23T19:33:36.000Z
excerpt: Some personal notes about troubleshooting audio problems with HDMI out on a HTPC running Arch Linux.
published: true
tags:
  - linux
  - audio
  - alsa
  - pulseaudio
  - system-administration
title: Troubleshooting Linux sound problems
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
  
  ```text
  # load-module module-suspend-on-idle
  ```
  
  Then restart Pulseaudio (probably easiest by logging out and in to X again?)
