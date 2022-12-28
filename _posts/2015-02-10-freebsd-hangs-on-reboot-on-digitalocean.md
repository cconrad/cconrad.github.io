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
date: 2015-02-10 19:29:33 +01:00
date_gmt: 2015-02-10 18:29:33 +0000
excerpt: "My FreeBSD droplets on DigitalOcean used to hang on the following line when rebooted:\r\n\r\n"
header: false
layout: page.liquid
published: true
sidebar: left
status: publish
tags:
  - freebsd
  - digitalocean
teaser: 'My FreeBSD droplets on DigitalOcean used to hang on the following line when rebooted:'
title: FreeBSD hangs on reboot on DigitalOcean
wordpress_id: 822
wordpress_url: http://www.clausconrad.com/?p=822
---
`Timecounters tick every 10.000 msec`

I am not sure about this, but the problem might be related to the hostname I gave to the droplets using DigitalOcean's web interface.

It appeared seemingly reliably when naming them like "abc-def", but disappeared when naming them "abcdef.local" or similar, i.e. avoiding dashes and using a domain name.
