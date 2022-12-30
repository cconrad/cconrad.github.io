---
date: 2014-01-09T18:08:56.000Z
excerpt: 'How to set up a simple firewall on your Manjaro-powered laptop or desktop computer:'
published: true
tags:
  - linux
  - manjaro
  - firewall
  - system-administration
  - ufw
title: Easy firewall setup for Manjaro Linux
---
After installing Manjaro on my notebook, I was astounded to see that unlike numerous other distributions of Linux it did not enable a firewall by default - especially since it ships with iptables _and_ its user-friendly frontend, [ufw](https://launchpad.net/ufw).

Admittedly, this would not be too big of a deal if I did not run services on my laptop nor connected to public networks once in a while, but even then, having a firewall configured let's me work more soundly. Here is how I set up and enabled iptables on Manjaro using ufw:

1. ufw is a command line application. Don't let that scare you though, its commands are pretty easy to understand and type in. If in doubt, just enter the lines highlighted below into a terminal.

2. Tell ufw to deny incoming requests by default:

   ```shell
   sudo ufw default deny
   ```

3. In my case, I wanted to be able to access my computer via SSH from anywhere, so I ran this line:

   ```shell
   sudo ufw allow SSH
   ```

4. Now enable ufw itself:

   ```shell
   sudo ufw enable
   ```

5. Enable ufw as a systemd service (so it starts together with Linux):

   ```shell
   sudo systemctl enable ufw
   ```

6. The firewall will be active after the next boot, but let's start it immediately without restarting the computer:

   ```shell
   sudo systemctl start ufw
   ```

7. Finally we can check the status of ufw:

   ```shell
   sudo ufw status
   ```

That command should output something similar to this:  

```text
                Status: active
        
        To                         Action      From  
        --                         ------      ----  
        SSH                        ALLOW       Anywhere  
        SSH (v6)                   ALLOW       Anywhere (v6)
```
