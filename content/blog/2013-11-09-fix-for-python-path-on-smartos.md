---
date: 2013-11-09T17:58:31.000Z
excerpt: 'The default installation path of Python 2.7 on SmartOS is /opt/local/bin/python2.7, let''s make this easier:'
published: true
tags:
  - smartos
  - python
  - system-administration
title: Fix for python path on SmartOS
---
1. Create a symlink:

   ```shell
   pfexec ln -s /opt/local/bin/python2.7 /opt/local/bin/python
   ```

(Yes, seriously... I forget this all too often, so I wrote it down for my own sake...)
