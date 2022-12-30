---
author:
  display_name: Claus Conrad
  email: webmaster@clausconrad.com
  login: claus
  url: ''
author_email: webmaster@clausconrad.com
author_login: claus
comments: true
date: 2016-03-17 20:31:45 +01:00
date_gmt: 2016-03-17 19:31:45 +0000
excerpt: "Here's how I configured my girlfriend's Vera to shutdown her (Windows-based) HTPC when a certain scene gets triggered:\r\n"
header: false
published: true
sidebar: left
status: publish
tags:
  - windows
  - htpc
  - vera
  - home-automation
  - system-administration
title: Shutdown HTPC from Vera controller
wordpress_id: 846
wordpress_url: http://www.clausconrad.com/?p=846
---
1. Make sure that the HTPC can always be reached from Vera, by giving it a static IP address or a DHCP reservation (using the DHCP server/router).

2. Install EventGhost on the HTPC.

3. In the Options of EventGhost, enable it to start automatically.

4. Create an empty folder somewhere and an empty HTML file inside (I created C:\Users\USERNAME\eventghost\eventghost.html).

5. Click "Add plugin" > "Webserver" (at the bottom of the list, in my case).

6. Configure the plugin to listen on a port (e.g. 8123) and set the document root to the folder containing the HTML file (e.g. C:\Users\USERNAME\eventghost).

7. Right-click the top of the "Configuration tree" in EventGhost and add a macro.

8. Select "Power Management" > "Turn off computer", optionally check the box to force turning off (in case some program does not stop correctly or other users are logged on - data loss may occur though).

9. Right-click the macro folder and add an event. Name it "HTTP.Shutdown". ("Shutdown" can really be anything, as long as it is the same in the luup code used in Vera.)

10. Find or create a suitable scene in Vera's UI7 and in step 3, select to run some luup code. Enter the following command:

    ```lua
    luup.inet.wget("http://IP-OF-THE-HTPC/eventghost.html?Shutdown")
    ```
