---
date: 2014-08-25T07:25:56.000Z
excerpt: While testing some code using Plunker I discovered that it doesn't support IE9.
published: true
tags:
  - development
title: Running Plunker in IE9
---
Even though I made my plunk public, IE9 would always load an empty file into the editor, when I pasted the URL into it.

The solution I found [here](https://stackoverflow.com/questions/20959088/angularjs-1-2-7-ie8-resource-bug) is simple: Use a modern browser to write the code, then paste the "Run" preview iframe's URL into IE to run it. Unfortunately live update won't work this way, but it's better than not being able to test plunks  in older Internet Explorer browsers at all.
