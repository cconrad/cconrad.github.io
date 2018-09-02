---
layout: page
status: publish
header: no
sidebar: left
published: true
title: Monitoring open network connections and listening ports on Debian Lenny
author:
  display_name: Claus Conrad
  login: claus
  email: webmaster@clausconrad.com
  url: ''
author_login: claus
author_email: webmaster@clausconrad.com
wordpress_id: 118
wordpress_url: http://www.clausconrad2.com/?p=118
date: '2009-09-23 03:16:22 +0000'
date_gmt: '2009-09-23 01:16:22 +0000'
categories:
- System administration
tags:
- linux
comments: true
teaser: "To monitor which network connections are established and which ports your Debian Lenny server is listening on, simply run:"
---
`sudo lsof -Pi`

If this doesn't work, you might have to install _lsof_ by running the following command:

`sudo apt-get install lsof`
