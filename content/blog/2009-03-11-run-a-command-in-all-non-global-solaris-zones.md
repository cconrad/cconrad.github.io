---
date: 2009-03-10T23:23:18.000Z
excerpt: This script by Brendan Gregg lets one run a command in all zones (except the global zone).
published: true
tags:
  - solaris
  - system-administration
title: Run a command in all non-global Solaris zones
---
Obviously it only works from the global zone :-)

```shell
#!/usr/bin/sh  
# zonerun - run a command on all non global zones. Solaris 10.  
# 10-Mar-2005, ver 0.80  
# USAGE: zonerun [-v] command  
# eg,  
# zonerun uname -a  
# zonerun -v uptime  
# Standard Disclaimer: This is freeware, use at your own risk.  
# 10-Mar-2005 Brendan Gregg Created this.

PATH=/usr/bin:/usr/sbin  
verbose=0  
if [ "$1" = "-v" ]; then  
shift; verbose=1  
fi

for zone in `zoneadm list`  
do  
if [ "$zone" = "global" ]; then continue; fi  
if [ $verbose -eq 1 ]; then  
echo $zone,  
zlogin -S $zone "$*" | sed 's/^/ /'  
else  
zlogin -S $zone "$*"  
fi  
done
```
