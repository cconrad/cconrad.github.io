---
date: 2014-03-10T16:14:41.000Z
excerpt: 'How to suspend when closing the lid using i3 on (Arch) Linux:'
published: true
tags:
  - manjaro
  - i3
  - system-administration
title: Power management under i3 on Arch Linux
---
1. `sudo pacman -S xfce4-power-manager`

2. `xfce4-power-manager-settings`

   Make the necessary configuration settings, such as suspending upon closing the lid
  
3. `vi .config/i3/config`

   Add this at the bottom:

   ```shell
   exec --no-startup-id sleep 3 &amp;&amp; xfce4-power-manager
   ```
