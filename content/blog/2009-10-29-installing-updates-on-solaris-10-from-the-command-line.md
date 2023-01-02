---
date: 2009-10-29T17:11:35.000Z
excerpt: After registering your Solaris system you might want to install updates from the command line. Here's how to do this in one to three easy steps.
published: true
tags:
  - solaris
  - system-administration
title: Installing updates on Solaris 10 from the command line
---
1.  Check for available updates (optional):  

    ```shell
    smpatch analyze
    ```

2.  Download and install the updates:  

    ```shell
    smpatch update
    ```

3.  If the system requires a reboot, do this as soon as possible by running:  

    ```shell
    init 6
    ```
