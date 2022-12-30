---
date: 2013-11-03T20:12:13.000Z
excerpt: Sudo on FreeBSD uses the users PATH to find the command it is asked to run. Here's how to change that to use root's PATH instead.
published: true
tags:
  - security
  - freebsd
  - system-administration
title: Use root PATH for sudo on FreeBSD
---
1. `sudo vi /usr/local/etc/sudoers.d/secure_path`
2. Enter this text on one line (changing the value as desired):

   ```text
   Defaults secure_path = "/usr/local/share/pcbsd/bin:/sbin:/bin:/usr/sbin:/usr/bin:/usr/games:/usr/local/sbin:/usr/local/bin:/root/bin"
   ```

3. Save the file
  
For more information see the [sudoers](https://linux.die.net/man/5/sudoers) man page. Note, however, that there are [good reasons to keep the invoking user's PATH](https://askubuntu.com/questions/146869/why-does-sudo-not-add-roots-path-with-ubuntu-12-04/147905#147905).
