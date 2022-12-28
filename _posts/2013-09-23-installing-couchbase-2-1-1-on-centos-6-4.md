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
date: 2013-09-23 14:03:12 +02:00
date_gmt: 2013-09-23 12:03:12 +0000
excerpt: "The installation instructions at couchbase.com can result in error messages when installing 2.1.1 on CentOS. Here's how to resolve those.\r\n"
header: false
layout: page.liquid
published: true
sidebar: left
status: publish
tags:
  - couchbase
  - centos
  - rhel
teaser: The installation instructions at couchbase.com can result in error messages when installing 2.1.1 on CentOS. Here's how to resolve those.
title: Installing Couchbase 2.1.1 on CentOS 6.4
wordpress_id: 609
wordpress_url: http://www.clausconrad.com/?p=609
---
When downloading Couchbase Server 2.1.1 Community Edition (the latest release at this time) for RHEL and CentOS from couchbase.com, the installation instructions simply state to "download the RPM and run rpm -i couchbase-server-enterprise_x86_64_2.1.1.rpm". However, this resulted in an error about missing libcrypto and other libraries on my off-the-shelf CentOS 6.4 server.

[Tapamishra](https://tapasmishra.wordpress.com/2013/05/03/how-to-install-couchbase-2-0-1-enterprise-server-on-centos-with-php-ext-couchbase/) provided some helpful hints:

1. First install the Development Tools group meta-package:  

   ```shell
   sudo yum -y groupinstall "Development Tools"
   ```

2. Second, install this older version of OpenSSL:  

   ```shell
   sudo yum -y install openssl098e
   ```

3. At this point, the RPM installation should succeed:  

   ```shell
   sudo rpm --install couchbase-server-community_x86_64_2.1.1.rpm
   ```

Remember to open port 8091 (if required) to continue setup using a web browser from another machine.
