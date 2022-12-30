---
date: 2009-11-28T18:07:18.000Z
excerpt: This error can occur in MySQL 5.1 when the database files were created on a previous version of MySQL.
published: true
tags:
  - mysql
  - development
title: 'ERROR 1307 (HY000): Failed to CREATE PROCEDURE'
---
To resolve it, run `mysql_upgrade` as Administrator/root.
