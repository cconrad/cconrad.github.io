---
layout: page
status: publish
header: no
sidebar: left
published: true
title: Check for WordPress updates from the outside
author:
  display_name: Claus Conrad
  login: claus
  email: webmaster@clausconrad.com
  url: ''
author_login: claus
author_email: webmaster@clausconrad.com
wordpress_id: 539
wordpress_url: http://www.clausconrad.com/?p=539
date: '2013-03-31 18:45:07 +0000'
date_gmt: '2013-03-31 16:45:07 +0000'
categories:
- System administration
tags:
- wordpress
- opensource
- jenkins
comments: true
teaser: "\"wp-external-update-check\" is a small WordPress plugin that lets you check your WordPress site(s) for updates."
---
It provides a secret URL to check for updates to the WordPress core, plugins and themes, without requiring cookie-based authentication. It is meant to be used from external monitoring or continous integration systems.

A simple usage example for Jenkins (requires the Python plugin for Jenkins) is given in the docs directory.

[Download/contribute](https://github.com/cconrad/wp-external-update-check)
