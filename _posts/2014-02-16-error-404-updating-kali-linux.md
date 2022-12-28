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
date: 2014-02-16 12:49:47 +01:00
date_gmt: 2014-02-16 11:49:47 +0000
excerpt: "How to solve the error \"404 Not Found\" during Kali Linux updates:\r\n"
header: false
layout: page.liquid
published: true
sidebar: left
status: publish
tags:
  - linux
  - security
teaser: 'How to solve the error "404 Not Found" during Kali Linux updates:'
title: Error 404 updating Kali Linux
wordpress_id: 756
wordpress_url: http://www.clausconrad.com/?p=756
---
While updating a new installation of Kali Linux, I received the error message `Err http://http.kali.org/kali/ kali/non-free metasploit amd64 4.8.2-2014012201-1kali0 404 Not Found`.

Apparently, the hostname _http.kali.org_ points to a CDN and not all of its mirrors contain updated packages. In order to solve this I went to the Kali [mirror list](https://http.kali.org/README.mirrorlist) and chose another mirror from my continent. I then updated the file _/etc/apt/sources.list_ accordingly (replace with your chosen mirror):

* Uncomment this line:

  ```
  # deb http://http.kali.org/kali kali main non-free contrib
  ```

* Insert line with the mirror URL below:
  
  ```
  deb http://mirror.pcextreme.nl/kali kali main non-free contrib
  ```

Make sure to choose a mirror from your continent, if possible.

Finally, update the package database, then try to upgrade Kali Linux again:

* `apt-get update`
* `apt-get upgrade`

If the update succeeds but the upgrade still fails, try with another mirror.

If the update fails, make sure you have entered the mirror address correctly into _/etc/apt/sources.list_. Don't include the trailing _/README_.
