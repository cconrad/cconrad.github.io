---
date: 2014-02-16T11:49:47.000Z
excerpt: 'How to solve the error "404 Not Found" during Kali Linux updates:'
published: true
tags:
  - linux
  - security
  - system-administration
title: Error 404 updating Kali Linux
---
While updating a new installation of Kali Linux, I received the error message `Err http://http.kali.org/kali/ kali/non-free metasploit amd64 4.8.2-2014012201-1kali0 404 Not Found`.

Apparently, the hostname _http.kali.org_ points to a CDN and not all of its mirrors contain updated packages. In order to solve this I went to the Kali [mirror list](https://http.kali.org/README.mirrorlist) and chose another mirror from my continent. I then updated the file _/etc/apt/sources.list_ accordingly (replace with your chosen mirror):

* Uncomment this line:

  ```text
  # deb http://http.kali.org/kali kali main non-free contrib
  ```

* Insert line with the mirror URL below:
  
  ```text
  deb http://mirror.pcextreme.nl/kali kali main non-free contrib
  ```

Make sure to choose a mirror from your continent, if possible.

Finally, update the package database, then try to upgrade Kali Linux again:

* `apt-get update`
* `apt-get upgrade`

If the update succeeds but the upgrade still fails, try with another mirror.

If the update fails, make sure you have entered the mirror address correctly into _/etc/apt/sources.list_. Don't include the trailing _/README_.
