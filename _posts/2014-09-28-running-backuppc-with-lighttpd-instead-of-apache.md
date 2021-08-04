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
date: 2014-09-28 20:10:35 +0000
date_gmt: 2014-09-28 18:10:35 +0000
excerpt: I have been running <a href="https://backuppc.github.io/backuppc/">BackupPC</a>
  to back up jails on a FreeBSD box for a while now and been very satisfied with its
  stability. However recently I ran into problems with upgrading Apache, which is
  used as an optional web interface for BackupPC.
header: false
layout: page
published: true
sidebar: left
status: publish
tags:
- freebsd
- backuppc
- lighttpd
teaser: "I have been running <a href=\"https://backuppc.github.io/backuppc/\">BackupPC</a> to back up jails on a FreeBSD box for a while now and been very satisfied with its stability. However recently I ran into problems with upgrading Apache, which is used as an optional web interface for BackupPC."
title: Running BackupPC with lighttpd instead of Apache
wordpress_id: 787
wordpress_url: http://www.clausconrad.com/?p=787
---
I was under the mistaken impression that BackupPC's frontend only worked with Apache, so when I found [instructions on the ArchLinux wiki](https://wiki.archlinux.org/index.php/BackupPC#Alternative_lighttpd_configuration) to run it on [lighttpd](https://www.lighttpd.net/) instead, I gave it a try on FreeBSD, and with these few changes to the configuration it runs just fine:

1. Delete Apache:

   ```shell
   pkg delete backuppc apache22
   ```

2. Delete dependencies installed for Apache:
   
   ```shell
   pkg autoremove
   ```

3. Install lighttpd:
        
   ```shell
   pkg install lighttpd
   ```

4. Edit lighttpd's configuration:
        
   ```shell
   vi /usr/local/etc/lighttpd/lighttpd.conf
   ```
        
   ```
   server.port = 81
   server.username  = "backuppc"
   server.groupname = "backuppc"
   server.document-root = "/usr/local/www/data/"
   server.errorlog             = "/var/log/lighttpd/error.log"
   dir-listing.activate = "enable"
   index-file.names = (  "index.html", "index.cgi" )
   server.modules = ("mod_alias", "mod_cgi", "mod_auth", "mod_access")
   server.pid-file = "/var/run/lighttpd/lighttpd.pid"
   alias.url = ("/BackupPC_Admin" => "/usr/local/www/cgi-bin/BackupPC_Admin")
   alias.url += ("/backuppc" => "/usr/local/www/backuppc" )
   cgi.assign += (".cgi" => "/usr/bin/perl" )
   cgi.assign += ("BackupPC_Admin" => "/usr/bin/perl")
   server.event-handler = "freebsd-kqueue"
   server.network-backend = "writev"
   server.max-fds = 2048
   server.stat-cache-engine = "simple"
   server.max-connections = 1024
   url.access-deny             = ( "~", ".inc" )
   static-file.exclude-extensions = ( ".php", ".pl", ".fcgi", ".scgi" )
   ```

5. Edit _rc.conf_: 
        
   ```shell
   vi /etc/rc.conf
   ```
        
   ```
   lighttpd_enable="YES"
   lighttpd_pidfile="/var/run/lighttpd/lighttpd.pid"
   # ... other lines, such as (obviously) ...
   backuppc_enable="YES"
   ```

6. Give backuppc user access to log and pid directories:

   ```shell
   mkdir /var/run/lighttpd
   chown -R backuppc: /var/log/lighttpd
   chown -R backuppc: /var/run/lighttpd
   ```
  
7. Start lighttpd: 

   ```shell
   service lighttpd start
   ```
