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
date: 2014-09-23 19:34:26 +02:00
date_gmt: 2014-09-23 17:34:26 +0000
excerpt: "Setting an environment variable for the next command is easy with bash - as it turns out, also with csh. Here's how:\r\n\r\n"
header: false
layout: page
published: true
sidebar: left
status: publish
tags:
  - freebsd
teaser: 'Setting an environment variable for the next command is easy with bash - as it turns out, also with csh. Here''s how:'
title: Set environment variable for one command with csh
wordpress_id: 785
wordpress_url: http://www.clausconrad.com/?p=785
---
TL;DR: Run this:  
```shell
env ENV_VAR_NAME=ENV_VAR_VALUE command
```

On most machines I use, bash is the default shell, or at least available (yes, also on the Windows box where I am typing this post). I am not a fanatic bash user, most shells work just fine. But being used to "the bash way", where setting environment variables for the next run command is pretty easy (_KEY=VALUE command_), it tricks me up each time I have to use csh on FreeBSD. (Sure, I could just install bash there too, but I prefer using included tools and installing as few dependencies as necessary.) So each time I use FreeBSD, I have to look this up on Google. This being Unix, there are of course several solutions. The one I found earlier today and which worked fine for me was this:
    
```shell
env KEY=VALUE command
```
