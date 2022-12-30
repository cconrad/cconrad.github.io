---
date: 2013-09-17T07:44:38.000Z
excerpt: The default output of <code>vmadm list</code> in SmartOS can be a little hard to read (especially if you, like me, use long aliases for your zones). Here is a little Python script that formats the list of VMs for a more user-friendly output.
published: true
tags:
  - smartos
  - python
  - system-administration
title: A nicer "vmadm list" for SmartOS
---
Screenshot:

[![vmlist](/assets/img/vmlist_9782574613_o.jpg)](/assets/img/vmlist_9782574613_o.jpg)

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

I hope this proves helpful to someone else. Of course this requires installing Python 2.7 in the global zone where `pkgin` isn't available by default, see here [how to install pkgin in the global zone](https://pkgsrc.joyent.com/install-on-illumos/), after that you can simply do a `pkgin in python27`.
