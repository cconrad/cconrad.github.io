---
date: 2009-05-29T22:29:18.000Z
excerpt: 'To count the <strong>number of files in the current folder and in all of its subfolders (recursively)</strong>:'
published: true
tags:
  - system-administration
title: Count files in a folder recursively
---
```shell
find . -type f | wc -l
```

To count the number of files **and folders** in the current folder and in all of its subfolders (recursively):

```shell
find . | wc -l
```
