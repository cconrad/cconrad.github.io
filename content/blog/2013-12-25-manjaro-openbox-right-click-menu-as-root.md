---
date: 2013-12-25T15:21:33.000Z
excerpt: 'After installing Manjarobox I couldn''t get the application menu to work as root. Here''s how I solved it:'
published: true
tags:
  - manjaro
  - openbox
  - system-administration
title: Manjaro Openbox right-click menu as root
---
* Edit _/root/.config/obmenu-generator/schema.pl_:

  ```shell
  leafpad /root/.config/obmenu-generator/schema.pl
  ```

* Find the line that says: 

  ```perl
  require '/home/root/.config/obmenu-generator/config.pl';
  ```

  and change it to read:

  ```perl
  require '/root/.config/obmenu-generator/config.pl';
  ```

* Save the file
  
Thanks to _rfk1ll_ on the Manjaro forum for this invaluable hint.
