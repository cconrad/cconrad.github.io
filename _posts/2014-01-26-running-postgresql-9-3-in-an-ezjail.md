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
date: 2014-01-26 18:34:55 +01:00
date_gmt: 2014-01-26 17:34:55 +0000
excerpt: "To get this working I had to follow these steps:\r\n"
header: false
layout: page.liquid
published: true
sidebar: left
status: publish
tags:
  - freebsd
  - jails
  - postgresql
teaser: 'To get this working I had to follow these steps:'
title: Running Postgresql 9.3 in an ezjail
wordpress_id: 751
wordpress_url: http://www.clausconrad.com/?p=751
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
