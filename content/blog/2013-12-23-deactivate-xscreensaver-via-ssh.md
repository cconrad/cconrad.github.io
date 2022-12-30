---
date: 2013-12-23T17:58:23.000Z
excerpt: 'While configuring my HTPC via SSH, I needed to deactivate its screensaver without having access to its own keyboard or mouse. Here''s how to do that from the (SSH) command line:'
published: true
tags:
  - linux
  - screensaver
  - ssh
  - htpc
  - system-administration
title: Deactivate xscreensaver via SSH
---
```shell
xscreensaver-command -deactivate
```

If you happen to use gnome-screensaver (default in Ubuntu), the following command might help (not tested):

```shell
DISPLAY=:0 gnome-screensaver-command -p
```

Thanks to YaronSh on the [Ubuntu forums](https://ubuntuforums.org/showthread.php?t=632580).
