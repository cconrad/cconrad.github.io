---
author:
  display_name: Claus Conrad
  email: webmaster@clausconrad.com
  login: claus
  url: ''
author_email: webmaster@clausconrad.com
author_login: claus
comments: true
date: 2016-10-08 13:52:16 +02:00
date_gmt: 2016-10-08 11:52:16 +0000
excerpt: "When logging in to Outlook on the web (sometimes known as Outlook Web Access or Office 365), sometimes my browser constantly reloads the page, switching between different domains, but never showing anything but a blank page. I was able to solve this in Chrome as follows:\r\n\r\n"
header: false
published: true
sidebar: left
status: publish
tags:
  - chrome
  - office
  - outlook
  - system-administration
teaser: 'When logging in to Outlook on the web (sometimes known as Outlook Web Access or Office 365), sometimes my browser constantly reloads the page, switching between different domains, but never showing anything but a blank page. I was able to solve this in Chrome as follows:'
title: Page constantly reloads after logging in to Outlook on the web
wordpress_id: 864
wordpress_url: http://www.clausconrad.com/?p=864
---
1. Click "Settings" in the menu, or enter "chrome://settings" into the address bar:

2. Scroll down and click "Show advanced settings...":

   ![]({{ site.baseurl }}/assets/img/Selection_340.png)

3. Under "Privacy", click "Content settings...":

   ![]({{ site.baseurl }}/assets/img/Selection_341.png)

4. Under "Cookies", click "All cookies and site data...":

   ![]({{ site.baseurl }}/assets/img/Selection_339.png)

5. Enter "office" into the search box, then click "Remove all shown":

   ![]({{ site.baseurl }}/assets/img/Selection_338.png)
  
You might or might not have to login again after following these steps, but Outlook finished loading after I did this.
