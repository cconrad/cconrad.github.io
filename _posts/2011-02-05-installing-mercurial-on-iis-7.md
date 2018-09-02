---
layout: page
status: publish
header: no
sidebar: left
published: true
title: Installing Mercurial on IIS 7
author:
  display_name: Claus Conrad
  login: claus
  email: webmaster@clausconrad.com
  url: ''
author_login: claus
author_email: webmaster@clausconrad.com
wordpress_id: 378
wordpress_url: http://www.clausconrad.com/?p=378
date: '2011-02-05 00:05:18 +0000'
date_gmt: '2011-02-04 23:05:18 +0000'
categories:
- System administration
tags:
- mercurial
comments: True
teaser: "Here's how I got a Mercurial server up and running using Windows 2008 and IIS 7:"
---
1.  Download [ActiveState ActivePython 2.6.6.18](http://downloads.activestate.com/ActivePython/releases/2.6.6.18/ActivePython-2.6.6.18-win32-x86.msi). Choose the 32-bit version regardless of the Windows flavor.
2.  Install ActivePython using the default installation path of C:\Python26.
3.  Download the binary version of [PyWin32](http://downloads.sourceforge.net/project/pywin32/pywin32/Build%20214/pywin32-214.win32-py2.6.exe?r=http%3A%2F%2Fsourceforge.net%2Fprojects%2Fpywin32%2Ffiles%2Fpywin32%2FBuild%2520214%2F&ts=1296839298&use_mirror=heanet)
4.  Install PyWin32 using the default installation path of C:\Python26
5.  Download the source code of [Mercurial](http://mercurial.selenic.com/release/mercurial-1.7.5.tar.gz)
6.  Extract Mercurial to C:\Mercurial_src
7.  Open a cmd window and change directory to the above folder:  

    ```
    C:
    cd \Mercurial_src
    ```

8.  Run the following commands:  

    ```
    python setup.py --pure build_py -c -d . build_ext -i build_mo --force
    python setup.py --pure install --force
    ```

9.  Download [isapi-wsgi](http://isapi-wsgi.googlecode.com/files/isapi_wsgi-0.4.2.win32.exe)
10.  Install isapi-wsgi using the default installation path of C:\Python26
11.  Create a folder for a new website somewhere:  

     ```
     C:\
     mkdir \inetpub\hg.mydomain.com
     ```

12.  Copy C:\Mercurial_src\contrib\win32\hgwebdir_wsgi.py to the new website's root folder:
  
     ```
     cp  C:\Mercurial_src\contrib\win32\hgwebdir_wsgi.py C:\inetpub\hg.mydomain.com\
     ```

13.  Open hgwebdir_wsgi.py in a text editor, and configure the following settings:
  
     ```
     hgweb_config = r'C:\inetpub\hg.mydomain.com\hgweb.config'
     path_prefix = 0
     ```

14.  Create a folder for the repositories somewhere:  

     ```
     C:
     mkdir \Repositories
     ```

15.  Create _C:\inetpub\hg.mydomain.com\hgweb.config_ with this content:  

     ```
     [paths]  
     / = C:\Repositories\*
     ```

16.  Execute python hgwebdir_wsgi.py which will generate a DLL shim called _hgwebdir_wsgi.dll:  

     ```
     C:
     cd \inetpub\hg.mydomain.com
     python  hgwebdir_wsgi.py
     ```

17.  Start IIS Manager:  

     ```
     inetmgr
     ```

18.  Create an application pool; set its .NET version to "No Managed code" and enable 32-bit apps under "Advanced Settings"
19.  Create a website with the root folder C:\inetpub\hg.mydomain.com and set its application pool to the newly created application pool
20.  Double-click "Handler Mappings"
21.  Click "Add Wildcard Script Map"
22.  As Executable choose the dll file in C:\inetpub\hg.mydomain.com (it was created when you ran hgwebdir_wsgi.py previously)
23.  As name enter "Mercurial-ISAPI" (it doesn't matter really)
24.  Click "OK" and "Yes" to allow this ISAPI extension
25.  Browse to your new website in a browser and you should now be greeted by Mercurial
26.  Create a repository in your repositories path:  

     ```C:
     cd \Repositories
     hg init testrepo
     ```

27.  Browse to your new website again and the repository "testrepo" should now be displayed
28.  Don't forget to set up authentication in IIS Manager to only allow authorized developers to access the repositories.
29.  Restart IIS:  

     ```
     iisreset
     ```
