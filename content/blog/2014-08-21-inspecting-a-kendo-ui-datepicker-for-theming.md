---
date: 2014-08-21T13:24:15.000Z
excerpt: The Kendo UI Datepicker has no configuration option to show it all the time. How to inspect and theme it?
published: true
tags:
  - development
title: Inspecting a Kendo UI Datepicker for theming
---
We can catch the close event and prevent it like this:

```javascript
var datepicker = $("#datepicker").data("kendoDatePicker");
datepicker.bind("close", function(e) {
  e.preventDefault();
});
```
