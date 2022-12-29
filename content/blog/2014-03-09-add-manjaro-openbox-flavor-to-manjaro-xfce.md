---
author:
  display_name: Claus Conrad
  email: webmaster@clausconrad.com
  login: claus
  url: ''
author_email: webmaster@clausconrad.com
author_login: claus
comments: true
date: 2014-03-09 21:51:23 +01:00
date_gmt: 2014-03-09 20:51:23 +0000
header: false
published: true
sidebar: left
status: publish
tags:
  - manjaro
  - system-administration
title: Add Manjaro Openbox flavor to Manjaro XFCE
wordpress_id: 760
wordpress_url: http://www.clausconrad.com/?p=760
---
1. `sudo pacman -S openbox obmenu-generator nitrogen geany compton tint2 pnmixer conky lxappearance lxappearance-obconf hardinfo htop leafpad lesstif libtimezonemap libwbclient libxp lxinput lxrandr manjarobox-evolution-themes pam_encfs parcellite prebootloader printproto py3parted rlog slim tintwizard xautolock xlockmore synapse gnome-alsamixer`

2. Install Manjaro Openbox in VirtualBox

3. Copy these files/directories over to the host:
   1. ~/.config/executables
   2. ~/.config/gtk-3.0/settings.ini
   3. ~/.config/nitrogen
   4. ~/.config/obmenu-generator
   5. ~/.config/openbox
   6. ~/.config/pnmixer
   7. ~/.config/tint2
   8. ~/.config/xfce4/xfconf/xfce-perchannel-xml/xfce4-notifyd.xml
   9. ~/.conkyrc
   10. /usr/share/conkypic/lsd.png  

4. Log out and choose Openbox from your display manager's session menu
