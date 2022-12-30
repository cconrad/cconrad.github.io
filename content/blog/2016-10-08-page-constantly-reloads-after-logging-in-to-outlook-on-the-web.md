---
date: 2016-10-08T11:52:16.000Z
excerpt: 'When logging in to Outlook on the web (sometimes known as Outlook Web Access or Office 365), sometimes my browser constantly reloads the page, switching between different domains, but never showing anything but a blank page. I was able to solve this in Chrome as follows:'
published: true
tags:
  - chrome
  - office
  - outlook
  - system-administration
title: Page constantly reloads after logging in to Outlook on the web
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
