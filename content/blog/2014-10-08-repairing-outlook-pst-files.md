---
date: 2014-10-08T06:08:37.000Z
excerpt: Being met with an error when opening Outlook or (worse), an archived PST file, can be a frightening experience. Fortunately Microsoft's Inbox Repair Tool does a good job at recovering mails in many cases.
published: true
tags:
  - office
  - outlook
  - system-administration
title: Repairing Outlook PST files
---
The first challenge, however, might be finding this life-saving tool. It is called _scanpst.exe_ and its location depends on the version of Office:

* For Office 2010 (32-bit) on Windows (32-bit), it is located in _C:\Program Files\Microsoft Office\Office14_.

* When running the 32-bit version of Office 2010 on Windows (64-bit), the folder would be _C:\Program Files (x86)\Microsoft Office\Office14_.

* The (rare) 64-bit version of Office 2010 on Windows (also 64-bit) hides it in _C:\Program Files\Microsoft Office\Office14_.

* For Office 2013, the paths are similar to those for Office 2010, but replace "Office14" with "Office15".

* However, the "Click-to-run" (CTR) editions of Office 2013 - which includes most versions of Office 365 - install scanpst.exe in _C:\Program Files\Microsoft Office 15\root\Office15_ or _C:\Program Files (x86)\Microsoft Office 15\root\Office15_.
  
When running the Inbox Repair Tool, make sure that Outlook is completely closed (no icon in the tray either). Also, it is probably a good idea to let the tool create a backup of the \*.pst file before trying to repair it. Either way the file will be repaired "in place", so you can simply open Outlook after the message "Repair complete" is displayed to check whether the repair was indeed successful.
