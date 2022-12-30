---
date: 2015-02-10T11:17:37.000Z
excerpt: I got this not so helpful error while using Browserify to bundle a web application.</p>
published: true
tags:
  - browserify
  - development
title: 'TypeError: Cannot read property ''browserify'' of undefined'
---
It was caused by a syntax error in the `package.json` file of a node module that was required by my code - the file did not contain valid JSON.
