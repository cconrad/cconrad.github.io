---
author:
  display_name: Claus Conrad
  email: webmaster@clausconrad.com
  login: claus
  url: ''
author_email: webmaster@clausconrad.com
author_login: claus
categories:
  - System administration
comments: true
date: 2011-01-21 10:51:50 +01:00
date_gmt: 2011-01-21 09:51:50 +0000
excerpt: 'When trying to restore a backup taken using Jungle Disk Server Edition on a workstation running Jungle Disk Desktop Edition I received the following error message:'
header: 'no'
published: true
sidebar: left
status: publish
tags:
  - jungledisk
  - backup
  - windows
title: A workaround for Jungle Disk restore problems
wordpress_id: 368
wordpress_url: http://www.clausconrad.com/?p=368
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
