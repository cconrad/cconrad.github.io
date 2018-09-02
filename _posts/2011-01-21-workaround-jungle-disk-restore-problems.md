---
layout: page
status: publish
header: no
sidebar: left
published: true
title: A workaround for Jungle Disk restore problems
author:
  display_name: Claus Conrad
  login: claus
  email: webmaster@clausconrad.com
  url: ''
author_login: claus
author_email: webmaster@clausconrad.com
wordpress_id: 368
wordpress_url: http://www.clausconrad.com/?p=368
date: '2011-01-21 10:51:50 +0000'
date_gmt: '2011-01-21 09:51:50 +0000'
categories:
- System administration
tags:
- jungledisk
- backup
- windows
comments: true
teaser: "When trying to restore a backup taken using Jungle Disk Server Edition on a workstation running Jungle Disk Desktop Edition I received the following error message:"
---
```
Could not download and open the backup vault database

Error Details (Jungle Disk Desktop 3.12 Win64)  
------------------------  
xOverwriteFailed - Failed to rename backup database to final name (file in use?): C:\ProgramData\JungleDisk\cache\cfjd2-us-mmdb\XXXXXXXXXXXXXXXXXXXX-backup.db  
Exception Code: xOverwriteFailed (144)  
Time: 20-01-2011 21:09:03 (GMT+1)  
Detailed Message: Failed to rename backup database to final name (file in use?): C:\ProgramData\JungleDisk\cache\cfjd2-us-mmdb\XXXXXXXXXXXXXXXXXXXX-backup.db  
Error Location: BlockBackupManager.cpp:1062 BlockBackupManager::ExecuteDownloadAndOpenDatabase  
via BlockBackupManager.cpp:1098 BlockBackupManager::ExecuteDownloadAndOpenDatabase
```

To solve this problem I had to follow these steps:

1.  Stop the Jungle Disk service on the restore machine
2.  Rename/delete the "cache" folder from C:\ProgramData\JungleDisk
3.  Start the Jungle Disk service
4.  Click "Restore files" in the vault's menu in Jungle Disk monitor
5.  The vault database is downloaded - twice. During the second download, click "Cancel".
6.  Click "Restore files" again.
