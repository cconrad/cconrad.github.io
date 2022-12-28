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
date: 2014-09-22 18:55:58 +02:00
date_gmt: 2014-09-22 16:55:58 +0000
excerpt: "On a FreeBSD box, each time I ran \"portmaster -a\" it wanted to reinstall the <em>db48</em> package. This fixed it:\r\n\r\n"
header: false
layout: page.liquid
published: true
sidebar: left
status: publish
tags:
  - freebsd
teaser: 'On a FreeBSD box, each time I ran "portmaster -a" it wanted to reinstall the <em>db48</em> package. This fixed it:'
title: portmaster -a upgrades db48 repeatedly
wordpress_id: 783
wordpress_url: http://www.clausconrad.com/?p=783
---
```shell
portmaster -o databases/db48 databases/db42
```

Thanks to [Stephen Scotter](https://www.stephen-scotter.net/computers/freebsd/databasesdb48-installed-upgraded-repeatedly) for pointing me in the right direction with his blog entry, I just had to replace _db47_ with _db42_ to get it to work on my machine. After the above command, _portmaster -a_ only installed _db48_ once more, then stopped with the message _===>>> All ports are up to date_.
