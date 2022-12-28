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
date: 2009-03-11 00:09:44 +01:00
date_gmt: 2009-03-10 23:09:44 +0000
header: 'no'
layout: page
published: true
sidebar: left
status: publish
tags:
  - solaris
teaser: 'Solaris 10 comes with sendmail, a very powerful but also very complex mail server. This tutorial covers only a very specific scenario, for which I was unable to find an example: I wanted sendmail to accept mail from any computer in my LAN and relay (forward) all of those mails to a “smart host”, i.e. an external mail server provided by my ISP.'
title: Configuring sendmail on Solaris 10 to use a smart host
wordpress_id: 156
wordpress_url: http://www.clausconrad2.com/?p=156
---
Wondering what I need this setup for? I have a couple of web servers which generate mail to external addresses, and my ISP blocks port 25 - except to its own mail server. I don't have a need to process internal mails in the LAN or incoming mail from the internet, as mails for me and my users are hosted externally.

If that's your scenario too, here's what you have to do:

*   **Check that the mail server machine has a valid hostname.**  
    Do this by running:  
    `/usr/sbin/check-hostname`  
    If it tells you the machine has a valid FQDN, everything's fine. Otherwise, just follow the suggestion to edit _/etc/hosts_ (instructions are given by the program, if applicable).
*   **Edit /etc/mail/cf/cf/local.mc, e. g. by running:**  
    `vi /etc/mail/cf/cf/local.mc`  
    Replace the line _define(`confFALLBACK_SMARTHOST', `mailhost$?m.$m$.')dnl_ with:  
    `define(`SMART_HOST', `YOUR_ISP_MAIL_SERVER')dnl`  
    Make sure not to change the apostrophs - the opening one always points to the upper left, while the closing one is a vertical one.  
    Remove the line _MAILER(`local')dnl_.  
    Remove the line _LOCAL_NET_CONFIG_.  
    Remove the last line, which says something like _R$* < @ $* .$m. > $* $#esmtp $@ $2.$m $: $1 < @ $2.$m. > $3_.
*   We want to listen to any IP address, so remove the following lines too:  
    _DAEMON_OPTIONS(`NAME=NoMTA4, Family=inet, Addr=127.0.0.1')dnl  
    DAEMON_OPTIONS(`Name=MSA4, Family=inet, Addr=127.0.0.1, Port=587, M=E')dnl_  
    **If you did this step, make sure to protect your mail server from abuse by configuring your firewall appropriately.**
*   Change directory to _/etc/mail/cf/cf_, e. g. by running:  
    `cd /etc/mail/cf/cf`
*   Compile and deploy the changed configuration file by running:  
    `/usr/ccs/bin/m4 ../m4/cf.m4 local.mc > /etc/mail/sendmail.cf`
*   If you made sendmail listen to any IP address above, you probably want to allow your other servers in the LAN to relay mails through it. Enable this by editing _/etc/mail/relay-domains_, e. g. by running:  
    `vi /etc/mail/relay-domains`  
    The file might not exist yet.  
    I'm not sure of the correct syntax for this file, so I entered two lines like this:  
    `192.168.101.0/24  
    192.168.101.`  
    I don't know which one is correct and don't really care since it works. **Of course use the correct address and subnetmask for your LAN here!**
*   Finally, make sendmail aware of the configuration changes by running:  
    `svcadm restart sendmail`
