---
layout: page
status: publish
header: no
sidebar: left
published: true
title: Export Exchange mailbox to PST
author:
  display_name: Claus Conrad
  login: claus
  email: webmaster@clausconrad.com
  url: ''
author_login: claus
author_email: webmaster@clausconrad.com
wordpress_id: 72
wordpress_url: http://www.clausconrad2.com/?p=72
date: '2010-03-12 12:04:56 +0000'
date_gmt: '2010-03-12 11:04:56 +0000'
categories:
- System administration
tags:
- exchange
comments: true
teaser: "How to export a mailbox from Exchange 2007 SP1 to a PST file:"
---
1.  Prerequisites:  
    You will need a machine with a 32-bit version of Windows (Windows 7 is fine) and Outlook 2003 or 2007.  
    Join the machine to the domain that contains the Exchange server.  
    Log on as a domain administrator.  
    Install Exchange Server Management Tools 2007 SP1\. To achieve this, insert the Exchange disc, do a custom installation, and only select the Management Tools.
2.  Open Exchange Management Shell.
3.  Give the current user permissions to the mailbox you want to export:  
    ```
    Add-MailboxPermission -Identity <email> -User <domain\currentuser> -AccessRights FullAccess
    ```
    \- where EMAIL is the e-mail address of the mailbox you want to export, and DOMAIN\CURRENTUSER is the name of the user you are logged on with.
4.  Export the mailbox to a PST file:  
    ```
    Export-Mailbox -Identity <email> -PSTFolderPath <c:\some_path>
    ```  
    \- where EMAIL is the e-mail address of the mailbox you want to export, and C:\SOME_PATH is some path (doesn't have to be on C: of course).

Good luck!
