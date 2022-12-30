---
date: 2015-08-22T16:05:30.000Z
excerpt: 'Got the dreaded <em>could not create shared memory segment</em> error again after upgrading my jail (now managed by iocage, but I had the same issue using ezjail previously) with PostgreSQL to FreeBSD 10.2-RELEASE. Here''s how I fixed it this time:'
published: true
tags:
  - freebsd
  - jails
  - postgresql
  - iocage
  - system-administration
title: Running PostgreSQL in iocage-managed jail on FreeBSD 10.2-RELEASE
---
```shell
iocage set allow_sysvipc=1 JAILNAME
iocage stop JAILNAME
iocage start JAILNAME
```

Using `iocage restart JAILNAME` did **not** work, a stop and start was necessary for me. After that, PostgreSQL started without problems.

The full error message this time - using the latest release of PostgreSQL and FreeBSD - was:

```text
FATAL: could not create shared memory segment: Function not implemented
DETAIL: Failed system call was shmget(key=5432001, size=48, 03600).
pg_ctl: could not start server
Examine the log output.
```
