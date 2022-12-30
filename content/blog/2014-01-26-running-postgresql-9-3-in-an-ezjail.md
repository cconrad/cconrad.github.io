---
date: 2014-01-26T17:34:55.000Z
excerpt: 'To get this working I had to follow these steps:'
published: true
tags:
  - freebsd
  - jails
  - postgresql
  - system-administration
title: Running Postgresql 9.3 in an ezjail
---
**On the host:**

1. `sudo echo 'security.jail.sysvipc_allowed=1' >> /etc/sysctl.conf`

2. `sudo echo 'jail_sysvipc_allow="YES"' >> /etc/rc.conf`

3. `sudo vi /usr/local/etc/ezjail/JAILNAME`

   Change this line:
  
   `export jail_JAILNAME_parameters=""`
  
   to:  
  
   `export jail_JAILNAME_parameters="allow.sysvipc=1"`

4. Restart the jail:
  
   `sudo ezjail-admin restart JAILNAME`
