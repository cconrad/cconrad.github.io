---
layout: page
status: publish
header: no
sidebar: left
published: true
title: XBMC on Asrock Ion 330HT
author:
  display_name: Claus Conrad
  login: claus
  email: webmaster@clausconrad.com
  url: ''
author_login: claus
author_email: webmaster@clausconrad.com
excerpt: <p>The <a href="http://www.asrock.com/nettop/overview.asp?Model=ION%20330HT">Asrock
  ION 330 HT</a> makes a nice little HTPC, but installing <a href="http://xbmc.org/">XBMC</a>
  on it can be daunting for Linux newbies. Here's how I managed to get most everything
  working.</p>
wordpress_id: 300
wordpress_url: http://www.clausconrad.com/?p=300
date: '2010-06-27 17:23:41 +0000'
date_gmt: '2010-06-27 15:23:41 +0000'
categories:
- System administration
tags:
- linux
- hardware
comments: true
teaser: "The <a href=\"http://www.asrock.com/nettop/overview.asp?Model=ION%20330HT\">Asrock ION 330 HT</a> makes a nice little HTPC, but installing <a href=\"http://xbmc.org/\">XBMC</a> on it can be daunting for Linux newbies. Here's how I managed to get most everything working."
---
This guide is for the second edition of the Asrock ION 330HT, the one that includes WLAN and a remote control (and an integrated infra-red receiver). It's mostly these new components that can pose problems. While Windows generally has better driver support for new hardware, I am using Linux because the Windows version of XBMC doesn't have good hardware acceleration yet - which means HD movies would play sloppy, if at all.

1.  Start by installing [Ubuntu 9.10](http://ftp.ds.karen.hj.se/ubuntu-releases/karmic/ubuntu-9.10-desktop-i386.iso) from a USB stick or CD. There is [an](http://news.softpedia.com/news/Installing-Ubuntu-9-10-126370.shtml) [abundance](http://www.unixnewbie.org/how-to-install-ubuntu-9-10/) [of](http://www.youtube.com/watch?v=J4nJQfVknzg) [tutorials](http://www.youtube.com/watch?v=GHYKLlc4kXw) that describe this step, so I won't go into further details except recommending to choose "Automatic log-on" during the setup so you won't have to type a password every time you boot the device.
2.  Upon restarting, connect to your network. After entering the WLAN key Ubuntu will ask for a password to protect the key. Do not enter anything or you will have to enter this password upon each reboot. Confirm that you want to use "Unsafe storage".
3.  To get the infra-red receiver working, install these:  
    ```shell
    sudo aptitude install lirc lirc-modules-source
    wget http://europe.asrock.com/downloadsite/drivers/Nettop/Ubuntu/IR(9.10).zip
    unzip IR(9.10).zip
    sudo dpkg -i lirc-nct677x-1.0.4-ubuntu9.10.deb lirc-nct677x-src-1.0.4-ubuntu9.10.deb
    ```

4.  The infra-red receiver should now be working, however when we later update the kernel it will stop working. To avoid this, enter the following commands:  
    ```shell
    sudo dkms add -m lirc-nct677x-src -v 1.0.4-ubuntu9.10
    sudo dkms build add -m lirc-nct677x-src -v 1.0.4-ubuntu9.10
    sudo dkms install add -m lirc-nct677x-src -v 1.0.4-ubuntu9.10
    sudo reboot
    ```
    This will allow the system to automatically recompile the infra-red receiver driver when the kernel gets updated.

5.  After the system has rebooted, lets update all other software to the newest versions:  
    ```shell
    sudo aptitude update
    sudo aptitude upgrade
    sudo reboot
    ```

6.  After the system reboots, you can now install xmbc like this:  
    ```shell
    sudo add-apt-repository ppa:team-xbmc/ppa
    sudo aptitude update
    sudo aptitude install xbmc xbmc-standalone
    sudo aptitude install xbmc-eventclients-*
    sudo aptitude install xbmc-scripts-*
    ```

7.  Install PolicyKit to allow power management:  
    ```shell
    sudo aptitude install policykit policykit-gnome
    ```  
    
    In the following commands, replace "xbmc" with your username:  
    ```shell
    sudo polkit-auth --user xbmc --grant org.freedesktop.hal.power-management.suspend
    sudo polkit-auth --user xbmc --grant org.freedesktop.hal.power-management.hibernate
    sudo polkit-auth --user xbmc --grant org.freedesktop.hal.power-management.reboot
    sudo polkit-auth --user xbmc --grant org.freedesktop.hal.power-management.shutdown
    sudo polkit-auth --user xbmc --grant org.freedesktop.hal.power-management.reboot-multiple-sessions
    sudo polkit-auth --user xbmc --grant org.freedesktop.hal.power-management.shutdown-multiple-sessions
    sudo apt-get install policykit-1 devicekit-power
    sudo nano /var/lib/polkit-1/localauthority/50-local.d/custom-actions.pkla
    ```
    This has opened a new file in the editor, paste the following lines in there and replace every occurence of "xbmc" with your username:  
    ```
    [Actions for xbmc user]
    Identity=unix-user:xbmc
    Action=org.freedesktop.devicekit.disks.*;org.freed esktop.devicekit.power.*;org.freedesktop.consoleki t.system.*;org.freedesktop.hal.storage.mount-removable;org.freedesktop.hal.device.volume
    ResultActive=yes
    ResultAny=auth_admin
    ResultInactive=yes
    ```
    Finally save the file using _Ctrl+X_, press _Y_ and _Enter_.

8.  Now install the Nvidia driver to get hardware acceleration - a must for playing back mostly anything:
    ```shell
    sudo nano /etc/apt/sources.list
    ```
    The file has been opened in the editor, scroll to the bottom of it and paste this line:  
    ```
    deb http://ppa.launchpad.net/nvidia-vdpau/ppa/ubuntu karmic main
    ``` 
    Finally save the file using _Ctrl+X_, press _Y_ and _Enter_. Then run these commands:
    ```shell
    sudo apt-key adv --recv-keys --keyserver keyserver.ubuntu.com CEC06767
    sudo aptitude update
    sudo aptitude install nvidia-190-modaliases nvidia-glx-190
    sudo nvidia-xconfig -s --no-logo --force-generate
    sudo reboot
    ```
    After the system reboots, the Nvidia driver should be active.

9.  In order to avoid sound problems, unmute all outputs like this:  
    ```shell
    alsamixer
    ```
    In this application, use the left and right arrow keys to navigate between the columns. When the box above the cursor displays _MM_ it means this output is currently muted; if so unmute it by pressing _M_ on the keyboard. Repeat for all muted columns until you don't see any more boxes with the text _MM_ on the screen. Then press _Escape_ to exit the program. Finally save the settings with this command:  
    ```shell
    alsactl store 0
    ``` 
    Now, go to "System" > "Preferences" > and click "Sound Preferences". Click on the "Hardware" tab and under "Profile" choose: "Digital Stereo (HDMI) Output + Analog Stereo Input". Apply and close the "Sound Preferences".

10.  Audio, video and IR are now working fine, but the wireless connection is still unstable and freezes often. To fix this enter:  
    ```shell
    sudo apt-get install linux-backports-modules-karmic
    ```  
    The above command might give some errors about modules not being built. To fix this:  
    ```shell
    sudo apt-get install linux-headers-2.6.31-22-generic
    ``` 
    Now the IR and video driver should have been compiled for the new kernel, and we can continue to install the updated WLAN drivers:  
    ```shell
    sudo apt-get install linux-backports-modules-wireless-karmic-generic
    sudo apt-get install wireless-tools
    sudo apt-get install wicd
    sudo reboot
    ```

11.  After the system reboots there will be a new network management widget in the menu. Go to the Options in that widget, click "Preferences" next to your wireless network, and enter and save the network key again.

After the above steps the following works stable for me: Video (hardware acceleration), the WLAN connection and the remote control. There is still a slight problem with audio, whenever I play a movie that contains AC3 or DTS sound I have to press the "Windows" button on the remote (to get to the movie menu) and navigate to the sound icon, then press OK on "Output Stereo signal to all speakers". Only then am I able to output AC3 or DTS to the receiver over HDMI. It's a minor nuisance but if anyone knows how to fix this please leave a comment. Thanks for reading!
