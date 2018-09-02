---
layout: page
status: publish
header: no
sidebar: left
published: true
title: Registering Solaris to receive updates
author:
  display_name: Claus Conrad
  login: claus
  email: webmaster@clausconrad.com
  url: ''
author_login: claus
author_email: webmaster@clausconrad.com
wordpress_id: 110
wordpress_url: http://www.clausconrad2.com/?p=110
date: '2009-10-29 18:05:23 +0000'
date_gmt: '2009-10-29 17:05:23 +0000'
categories:
- System administration
tags:
- solaris
comments: true
teaser: "A short step-by-step guide on how to register your Solaris server from the command line in order to be eligible for security patches (this doesn't require a service subscription)."
---
1.  Copy _/usr/lib/breg/data/RegistrationProfile.properties_ somewhere:  

    ```shell
    cp /usr/lib/breg/data/RegistrationProfile.properties /tmp  
    chmod 600 /tmp/RegistrationProfile.properties
    ```

2.  Edit the copy of _RegistrationProfile.properties_:  

    ```shell
    vi /tmp/RegistrationProfile.properties
    ```  

    Enter your Sun username and password at the end of the appropriate lines. If applicable, enter your subscription key and proxy settings (optional). If you don't have one, [register a Sun account here](http://sunsolve.sun.com/).
3.  Register your system online using the newly edited file:  

    ```shell
    sconadm register -a -r /tmp/RegistrationProfile.properties
    ```  
      
    _sconadm is running_  
    _Authenticating user ..._  
    _finish registration!_`
