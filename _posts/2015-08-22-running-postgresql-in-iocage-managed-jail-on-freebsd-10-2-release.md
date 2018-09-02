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
date: 2015-08-22 18:05:30 +0000
date_gmt: 2015-08-22 16:05:30 +0000
excerpt: "Got the dreaded <em>could not create shared memory segment</em> error again
  after upgrading my jail (now managed by iocage, but I had the same issue using ezjail
  previously) with PostgreSQL to FreeBSD 10.2-RELEASE. Here's how I fixed it this
  time:\r\n"
header: false
layout: page
published: true
sidebar: left
status: publish
tags:
- freebsd
- jails
- postgresql
- iocage
teaser: "Got the dreaded <em>could not create shared memory segment</em> error again after upgrading my jail (now managed by iocage, but I had the same issue using ezjail previously) with PostgreSQL to FreeBSD 10.2-RELEASE. Here's how I fixed it this time:"
title: Running PostgreSQL in iocage-managed jail on FreeBSD 10.2-RELEASE
wordpress_id: 828
wordpress_url: http://www.clausconrad.com/?p=828
---
```shell
iocage set allow_sysvipc=1 JAILNAME
iocage stop JAILNAME
iocage start JAILNAME
```

Using _iocage restart JAILNAME_ did **not** work, a stop and start was necessary for me. After that, PostgreSQL started without problems.

The full error message this time - using the latest release of PostgreSQL and
FreeBSD - was:

```
FATAL: could not create shared memory segment: Function not implemented
DETAIL: Failed system call was shmget(key=5432001, size=48, 03600).
pg_ctl: could not start server
Examine the log output.
```
