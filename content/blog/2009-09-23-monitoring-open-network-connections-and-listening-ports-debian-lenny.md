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
date: 2009-09-23 03:16:22 +02:00
date_gmt: 2009-09-23 01:16:22 +0000
header: 'no'
published: true
sidebar: left
status: publish
tags:
  - linux
teaser: 'To monitor which network connections are established and which ports your Debian Lenny server is listening on, simply run:'
title: Monitoring open network connections and listening ports on Debian Lenny
wordpress_id: 118
wordpress_url: http://www.clausconrad2.com/?p=118
---
`sudo lsof -Pi`

If this doesn't work, you might have to install _lsof_ by running the following command:

`sudo apt-get install lsof`
