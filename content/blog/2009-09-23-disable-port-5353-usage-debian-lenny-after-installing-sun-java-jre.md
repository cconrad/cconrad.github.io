---
author:
  display_name: Claus Conrad
  email: webmaster@clausconrad.com
  login: claus
  url: ''
author_email: webmaster@clausconrad.com
author_login: claus
comments: true
date: 2009-09-23 03:08:14 +02:00
date_gmt: 2009-09-23 01:08:14 +0000
excerpt: After installing Sun's Java JRE I noticed that a new service <em>avahi-deamon</em> was listening on UDP port 5353.
header: 'no'
published: true
sidebar: left
status: publish
tags:
  - linux
  - system-administration
title: Disable port 5353 usage on Debian Lenny after installing Sun Java JRE
wordpress_id: 120
wordpress_url: http://www.clausconrad2.com/?p=120
---
This appears to be a GPL implementation of the Apple Zeroconf protocol, allowing devices to detect each other in a LAN environment. Since I don't have a need for detecting printers etc. on my server, I disabled it using the following command:

`sudo update-rc.d -f avahi-daemon remove  
sudo /etc/init.d/avahi-daemon stop`

### Steps leading to this problem

In order to run a Java application on a Debian Lenny server, I installed Sun's newest JRE (Java Runtime Environment) like this:

`sudo apt-get install sun-java6-jre`

This installed many dependencies, including the mentioned _avahi-deamon_. I hope disabling this service doesn't interfere with my ability to run Java applications, until now it doesn't look like it though.

For more information about the associated protocol, visit [multicastdns.org](http://www.multicastdns.org/).
