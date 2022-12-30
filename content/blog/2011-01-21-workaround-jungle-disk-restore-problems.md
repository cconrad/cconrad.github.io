---
date: 2011-01-21T09:51:50.000Z
excerpt: 'When trying to restore a backup taken using Jungle Disk Server Edition on a workstation running Jungle Disk Desktop Edition I received the following error message:'
published: true
tags:
  - jungledisk
  - backup
  - windows
  - system-administration
title: A workaround for Jungle Disk restore problems
---
```text
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
