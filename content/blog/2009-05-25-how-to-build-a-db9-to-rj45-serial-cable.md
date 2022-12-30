---
author:
  display_name: Claus Conrad
  email: webmaster@clausconrad.com
  login: claus
  url: ''
author_email: webmaster@clausconrad.com
author_login: claus
comments: true
date: 2009-05-25 22:13:54 +02:00
date_gmt: 2009-05-25 20:13:54 +0000
excerpt: This type of cable has a female DB9 connector on one end and a male RJ45 plug on the other. It is used to connect to the serial console of older Cisco devices and Sun gear, among others.
header: 'no'
published: true
sidebar: left
status: publish
tags:
  - cisco
  - hardware
  - system-administration
title: How to build a DB9-to-RJ45 serial cable
wordpress_id: 144
wordpress_url: http://www.clausconrad2.com/?p=144
---
| RJ45 pin | RJ45 color | DB9 pin |
| --- | --- | --- |
| 1 | <span style="color: Blue">Blue</span> | 8 |
| 2 | <span style="color: Orange">Orange</span> | 6 |
| 3 | Black | 2 |
| 4 | <span style="color: Red">Red</span> | 5 |
| 5 | <span style="color: Green">Green</span> | 5* |
| 6 | <span style="color: Yellow">Yellow</span> | 3 |
| 7 | <span style="color: Brown">Brown</span> | 4 |
| 8 | <span style="color: White; background-color: Black">White/gray</span> | 7 |

\* According to official Sun manuals this pin ALSO needs to be connected to pin 5 on the DB9 end. According to some other documentation I found it is not necessary to connect it at all. I didn't connect it and the cable works fine for me.

For the ethernet cable, it is important to use a regular one. This is also called a patch cable or straight-through cable. It is the type you would usually use between a server and a switch, for example.
