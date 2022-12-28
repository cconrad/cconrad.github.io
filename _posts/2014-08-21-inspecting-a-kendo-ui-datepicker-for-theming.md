---
author:
  display_name: Claus Conrad
  email: webmaster@clausconrad.com
  login: claus
  url: ''
author_email: webmaster@clausconrad.com
author_login: claus
categories:
  - Development
comments: true
date: 2014-08-21 15:24:15 +02:00
date_gmt: 2014-08-21 13:24:15 +0000
excerpt: "The Kendo UI Datepicker has no configuration option to show it all the time. How to inspect and theme it?\r\n\r\n"
header: false
layout: page.liquid
published: true
sidebar: left
status: publish
tags: []
teaser: The Kendo UI Datepicker has no configuration option to show it all the time. How to inspect and theme it?
title: Inspecting a Kendo UI Datepicker for theming
wordpress_id: 773
wordpress_url: http://www.clausconrad.com/?p=773
---
We can catch the close event and prevent it like this:

```javascript
var datepicker = $("#datepicker").data("kendoDatePicker");
datepicker.bind("close", function(e) {
  e.preventDefault();
});
```
