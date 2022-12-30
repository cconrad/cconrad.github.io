---
date: 2015-02-10T18:29:33.000Z
excerpt: 'My FreeBSD droplets on DigitalOcean used to hang on the following line when rebooted:'
published: true
tags:
  - freebsd
  - digitalocean
  - system-administration
title: FreeBSD hangs on reboot on DigitalOcean
---
`Timecounters tick every 10.000 msec`

I am not sure about this, but the problem might be related to the hostname I gave to the droplets using DigitalOcean's web interface.

It appeared seemingly reliably when naming them like "abc-def", but disappeared when naming them "abcdef.local" or similar, i.e. avoiding dashes and using a domain name.
