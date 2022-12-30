---
date: 2014-09-22T16:55:58.000Z
excerpt: 'On a FreeBSD box, each time I ran "portmaster -a" it wanted to reinstall the <em>db48</em> package. This fixed it:'
published: true
tags:
  - freebsd
  - system-administration
title: portmaster -a upgrades db48 repeatedly
---
```shell
portmaster -o databases/db48 databases/db42
```

Thanks to [Stephen Scotter](https://www.stephen-scotter.net/computers/freebsd/databasesdb48-installed-upgraded-repeatedly) for pointing me in the right direction with his blog entry, I just had to replace _db47_ with _db42_ to get it to work on my machine. After the above command, _portmaster -a_ only installed _db48_ once more, then stopped with the message _===>>> All ports are up to date_.
