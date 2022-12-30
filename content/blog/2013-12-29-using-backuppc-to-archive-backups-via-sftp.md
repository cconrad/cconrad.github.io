---
date: 2013-12-29T16:20:55.000Z
excerpt: Here's a little wrapper script I wrote to let BackupPC archive onto a SFTP server.
published: true
tags:
  - backuppc
  - remote
  - system-administration
title: Using BackupPC to archive backups via SFTP
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
