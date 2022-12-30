---
date: 2016-05-02T19:11:38.000Z
excerpt: The password manager "pass" is in Ubuntu's repository, but the version on 14.04 is quite old and does not support e.g. the "find" command ("pass find somesite.com", where "somesite.com" is in a subfolder of the password store).
published: true
tags:
  - ubuntu
  - howto
title: Updating to latest "pass" on Ubuntu 14.04
---
To get the latest and greatest version:

1. Install [tree v1.7.0](https://launchpad.net/ubuntu/xenial/amd64/tree/1.7.0-3)

2. Download [pass v1.6.5](https://www.passwordstore.org/) (tarball)

3. `unxz password-store-1.6.5.tar.xz`

4. `tar xf password-store-1.6.5.tar`

5. `cd password-store-1.6.5`

6. `sudo make install`
