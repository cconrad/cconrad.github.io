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
date: 2013-09-17 09:44:38 +0000
date_gmt: 2013-09-17 07:44:38 +0000
excerpt: "The default output of <code>vmadm list</code> in SmartOS can be a little
  hard to read (especially if you, like me, use long aliases for your zones). Here
  is a little Python script that formats the list of VMs for a more user-friendly
  output.\r\n"
header: false
layout: page
published: true
sidebar: left
status: publish
tags:
- smartos
- python
teaser: "The default output of <code>vmadm list</code> in SmartOS can be a little hard to read (especially if you, like me, use long aliases for your zones). Here is a little Python script that formats the list of VMs for a more user-friendly output."
title: A nicer "vmadm list" for SmartOS
wordpress_id: 591
wordpress_url: http://www.clausconrad.com/?p=591
---

Screenshot:

[![vmlist](http://farm6.staticflickr.com/5549/9782574613_ba738d5694.jpg)](http://www.flickr.com/photos/clausconrad/9782574613/
"vmlist by Claus Conrad, on Flickr" )

This displays the Alias at the top left, the UUID at the top right, and the first IP address and RAM allocation on a second line. Stopped zones (if any) are displayed below the running ones.

Code follows:
  
```python
#!/usr/bin/env python2.7  
from subprocess import check_output


def list_vms(state):  
  vlr = check_output([  
    "vmadm",  
    "list",  
    "-p",  
    "-o",  
    "alias,max_physical_memory,nics.0.ip,uuid",  
    "state=%s" % state  
  ])

  vlr = [vm for vm in vlr.split("\n") if len(vm)]  

  if len(vlr):  
    print state.capitalize().center(80)  
    print "=" * 80  

  for vm in vlr:  
    vm = vm.split(":")  

    print "%s%s" % (  
      vm[0],  
      vm[3].rjust(80 - len(vm[0]))  
    )  

    print "%s%s" % (  
      "IP: %s" % vm[2],  
      ("Memory: %s MB" % vm[1]).rjust(80 - 4 - len(vm[2]))  
    )  

    print


if __name__ == "__main__":  
  list_vms("running")  
  list_vms("stopped")  
```

I hope this proves helpful to someone else. Of course this requires installing Python 2.7 in the global zone where `pkgin` isn't available by default, see here [how to install pkgin in the global zone](http://wiki.smartos.org/display/DOC/Installing+pkgin), after that you can simply do a `pkgin in python27`.
