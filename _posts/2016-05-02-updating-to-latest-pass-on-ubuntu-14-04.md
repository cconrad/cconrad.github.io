---
author:
  display_name: Claus Conrad
  email: webmaster@clausconrad.com
  login: claus
  url: ''
author_email: webmaster@clausconrad.com
author_login: claus
categories:
  - Howto
comments: true
date: 2016-05-02 21:11:38 +02:00
date_gmt: 2016-05-02 19:11:38 +0000
header: false
layout: page.liquid
published: true
sidebar: left
status: publish
tags:
  - ubuntu
teaser: The password manager "pass" is in Ubuntu's repository, but the version on 14.04 is quite old and does not support e.g. the "find" command ("pass find somesite.com", where "somesite.com" is in a subfolder of the password store).
title: Updating to latest "pass" on Ubuntu 14.04
wordpress_id: 856
wordpress_url: http://www.clausconrad.com/?p=856
---
To get the latest and greatest version:

1. Install [tree v1.7.0](https://launchpad.net/ubuntu/xenial/amd64/tree/1.7.0-3)

2. Download [pass v1.6.5](https://www.passwordstore.org/) (tarball)

3. `unxz password-store-1.6.5.tar.xz`

4. `tar xf password-store-1.6.5.tar`

5. `cd password-store-1.6.5`

6. `sudo make install`
