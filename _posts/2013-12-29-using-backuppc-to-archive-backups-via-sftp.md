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
date: 2013-12-29 17:20:55 +0000
date_gmt: 2013-12-29 16:20:55 +0000
excerpt: "<p>Here's a little wrapper script I wrote to let BackupPC archive onto a
  SFTP server.</p>\r\n"
header: false
layout: page
published: true
sidebar: left
status: publish
tags:
- backuppc
- remote
teaser: "Here's a little wrapper script I wrote to let BackupPC archive onto a SFTP server."
title: Using BackupPC to archive backups via SFTP
wordpress_id: 719
wordpress_url: http://www.clausconrad.com/?p=719
---
```shell
#!/usr/bin/env csh  
# Create temporary directory  
mkdir -p /tmp/backuppc-archive  
  
# Clean previous archive, if any  
rm "/tmp/backuppc-archive/$4.$5.tar$7"  
  
# Call BackupPC_archiveHost  
BackupPC_archiveHost "$1" "$2" "$3" "$4" "$5" "$6" "$7" "$8" "/tmp/backuppc-archive" "${10}" "${11}"  
  
# Copy to SFTP  
scp "/tmp/backuppc-archive/$4.$5.tar$7" user@host:/  
  
# Remove temporary archive  
rm "/tmp/backuppc-archive/$4.$5.tar$7"
```

To use this, save the script, set its executable flag, and configure BackupPC to use it instead of the default script - either in the global _config.pl_ or a client-specific config:  
  
```perl
$Conf{ArchiveClientCmd} = '/path/to/script/above.sh $tarCreatePath $splitpath $parpath $host $backupnumber $compression $compext $splitsize $archiveloc $parfile *';
```
