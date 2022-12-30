---
date: 2010-01-13T18:51:27.000Z
excerpt: I experienced very slow speeds when uploading files to a small (m1.small) Amazon EC2 instance using the SCP and SFTP3 protocols with rsync, WinSCP and Tunnelier BitVise - around 30-40 kB/sec.
published: true
tags:
  - aws
  - system-administration
title: Slow Amazon EC2 rsync / SCP / SFTP upload speeds?
---
By simply switching the SSHd listening port to http (80), speeds went up to 1,4 MB/sec. Why Amazon would throttle the SSH port (22) I don't know, but I hope this helps somebody else out there.
