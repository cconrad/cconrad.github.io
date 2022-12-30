---
date: 2009-09-23T01:16:22.000Z
excerpt: 'To monitor which network connections are established and which ports your Debian Lenny server is listening on, simply run:'
published: true
tags:
  - linux
  - system-administration
title: Monitoring open network connections and listening ports on Debian Lenny
---
```shell
sudo lsof -Pi
```

If this doesn't work, you might have to install `lsof` by running the following command:

```shell
sudo apt-get install lsof
```
