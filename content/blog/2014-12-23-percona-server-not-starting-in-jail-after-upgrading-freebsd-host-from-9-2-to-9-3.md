---
date: 2014-12-23T16:57:45.000Z
excerpt: How to fix Percona server not starting in a jail after upgrading the FreeBSD host from 9.2 to 9.3
published: true
tags:
  - mysql
  - freebsd
  - jails
  - percona
  - system-administration
title: Percona server not starting in jail after upgrading FreeBSD host from 9.2 to 9.3
---
1. `service mysql-server start` returned, but `service mysql-server status` showed that it was not started successfully.

2. The log file _/var/db/mysql/mysql-error.log_ warned that writing a file to _/var/db/mysql_ failed.

3. Checking the permissions on _/var/db/mysql_ showed that existing files in the folder were owned by user _mysql_ and group _mysql_, but the directory itself was owned by user _root_ and group _wheel_.

4. After granting user _mysql_ and group _mysql_ ownership of the folder (`chown mysql:mysql /var/db/mysql`) the server could be started successfully with `service mysql-server start`.
