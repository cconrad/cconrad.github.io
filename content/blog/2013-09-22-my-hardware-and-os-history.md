---
author:
  display_name: Claus Conrad
  email: webmaster@clausconrad.com
  login: claus
  url: ''
author_email: webmaster@clausconrad.com
author_login: claus
comments: true
date: 2013-09-22 02:10:39 +02:00
date_gmt: 2013-09-22 00:10:39 +0000
excerpt: "I have used most types of operating systems throughout the years. For those not interested in a little history, please skip this entry. Otherwise, read more after the break.\r\n"
header: false
published: true
sidebar: left
status: publish
tags:
  - personal
teaser: I have used most types of operating systems throughout the years. For those not interested in a little history, please skip this entry. Otherwise, read more after the break.
title: My hardware and OS history
wordpress_id: 599
wordpress_url: http://www.clausconrad.com/?p=599
---
I started with C64 Basic and GEOS on a Commodore 64.

After having broken several C64s, I used a Amstrad PCW 8256. This was my first computer with a printer attached, a spectacular loud 9-needle printer. It ran CP/M, but I mostly used the native word processing software, which was
actually quite good for writing letters. But although the Amstrad's hardware was more sophisticated than the Commodore 64's, it wasn't as versatile, barely more than an electronic typewriter on steroids.

When I got my first PC, an IBM 8088, I used MS-DOS and Caldera's PC-DOS; my most used applications at that time probably were Leisure Suit Larry and Terminate 5 (for accesing BBSes). While slow for PC standards, this system felt more powerful than what I had before, mostly due to its ability to use a 14.4K modem to connect with the world.

Upon upgrading to a 386 and a 56.6k modem, and then a Pentium (and Athlon, Celeron, P4, etc. later on), PC-DOS got replaced by Windows 3.11 for Workgroups, then 95, NT 4, 98, ME (RIP), 2000, XP, 2003, 7, Vista and 8, in that order (I heard too many bad things about Vista to consider upgrading to it from XP; the downgrade from 7 to Vista on a home "server" was due to
licensing issues). For a while I also tried BeOS 5 and 6 and OS/2 Warp on my workstation.

On my Macs (I had a Mac Mini, a hackintosh, and currently own an older Macbook), I have been running OS X versions from 10.3 to 10.7.

On different hardware, I have been running quite a few Linux distributions (Suse, CentOS, Ubuntu, Debian, Fedora, MintOS and probably others I can't remember) as well as Solaris 7, 9, 10, OpenSolaris and Solaris Express. 

All of these are mostly obsolete now and no longer in use by me, with the exception of Windows 8, which I use on my main laptop. (The Macbook runs OS X 10.7 as far as I remember, but it is quite old and I only keep it around as a backup system).

Then there's the netbook that came with Asus EEE Linux (based on some commercial Linux distribution), which I reformatted with Jolicloud, Ubuntu Netbook Remix and later ChromiumOS (the open-source version of ChromeOS).

Haven't powered that one up for a while, but it's probably still running Chromium OS.

Oh well, getting all nostalgic here. So what about today? At the moment, I don't own what I would consider a workstation (i.e. a stationary computer). Although some of my boxes at home are stationary, they are only serving some specific purpose and are running those tasks 24/7, so I consider them to be "servers" - even though we are not talking about server-grade hardware at all - to me a "server" is a device that runs most of the time in order to provide specific services.

My main computer is a laptop that is much more powerful than my previously owned workstations, with the exception of the amount of internal storage. I run Windows 8 as its main operating system, which I am quite happy with. To me, Windows 8 is the best consumer OS at the moment. It's not based on UNIX/POSIX unfortunately, but it is flexible and customizable enough to create most desired environments (not without some heavy tinkering though). Arguably, Mac OS X is a "better" developer operating system from my perspective, as it is based on FreeBSD and other UNIXes, but it only runs on expensive Apple hardware and seems to become a walled garden at this time, unlike Windows.

Apart from this laptop, there is the mentioned Macbook as a standby backup, and the netbook I haven't used for a while. Another workstation runs Windows 7 and serves as a HTPC (multimedia playback for the TV). Yet another workstation runs OmniOS (see below) and serves as a NAS device/server. Finally, my girlfriend and her kids use a couple of laptops with Mac OS X 10.6, Windows 7 and Windows 8.

Outside my home, and apart from several shared webhosts that I don't control, I am administering a dedicated SmartOS server that hosts several websites and related services. If you read the previous paragraphs carefully, you'll remember that I tinkered with Solaris 9 and its successors. At that time, I was extremely impressed by the stability and performance of Solaris,
OpenSolaris and the Solaris-like OpenNevada (ON or OS/Net), as compared to my experiences with Linux distributions. Ever since using Solaris 10 and the Open Web Stack provided by Sun Microsystems at that time to run Apache, MySQL and PHP on it ("SAMP"), I have preferred operating systems based on Solaris' (or its derivatives) kernels for any serious web hosting, due to its ability to run separate zones (similar to jails in FreeBSD and containers in Linux), DTrace and most importantly, the superior ZFS file system. Sun Microsystems made some serious attempts to open-source Solaris' code and attract developers
to it in much of the same way Linux gets developed. Unfortunately, Sun Microsystems got aquired by Oracle, who all but stopped the community efforts to work on Solaris. When Oracle acquired Sun, OpenSolaris didn't receive updates anymore, and the operating system soon became obsolete. For some years, the future looked dark for open-source Solaris - while Oracle didn't stop working on the operating system, they made further developments proprietary and began requiring (paid) support contracts for any server running Solaris (unless you only wanted to run it at home). Then, without much fanfare, the Illumos project was created, forking the remaining (and still free) OpenSolaris code and adding new features and userland software to it. While this was a great development, Illumos wasn't a whole operating system,
just like GNU isn't a Linux distribution. Fortunately several vendors recognized the potential of Illumos and built distributions around it. The most known at this time are probably SmartOS (a server operating system sponsored by the cloud hosting company Joyent), OmniOS (another server operating system sponsored by Omniti), Nexenta (a NAS appliance available in a stripped-down Community Edition and a commercial offering) and OpenIndiana (a hobbyist developers' approach to create a more modern operating system resembling OpenSolaris on top of the Illumos kernel).

All of these developments are - in my opinion - good for Illumos, since all of these companies more or less kindly contribute their development efforts back to the kernel project. Without a single vendor behind it, unfortunately Illumos hasn't (yet) received the publicity it deserves. Hopefully this will change as the system matures and more cost-conscious companies are making the switch from Oracle hardware and Solaris 10 to Illumos-based distributions (which are binary compatible with Solaris 10, so no recompilation of code is required to run legacy Solaris applications on it).

Joyent is one of the smaller cloud hosting companies mostly trying to compete with Amazon AWS. AWS is running a (very customized) version of Xen as their hypervisor. Xen runs paravirtualized guest OS's and I am sure Amazon has done a great job at optimizing it for their needs, but there still has to be some overhead to emulate physical hardware, meaning they can run fewer VMs on a physical host than without any emulation. Solaris/SmartOS zones, like FreeBSD's jails, Linux' containers and OpenVZ containers, provide a separation between virtual machines that creates less overhead than paravirtualized guests, such as those used in Xen, KVM, VMWare and other hypervisors. Unlike the mentioned approaches, the virtualization overhead of a Solaris/SmartOS zone is barely measurable (although it exists, of course - nobody should claim to run at 100% of bare-metal speed if anything gets virtualized). So while Joyent tries to compete with AWS on price, in my opinion they should really try to compete on the performance achievable for the same cost as on AWS. Anyway, Joyent kindly open-sourced their SmartOS operating system (based on the Illumos kernel and the basic building block of all their physical hosts), so that's what I am running on my own dedicated server. FreeBSD's jails and Linux' containers (and Parallels' OpenVZ) might be better supported, but ever since using Solaris 9 and especially 10 (and the successing OpenSolaris releases) I've been too impressed with that kernel's performance to consider anything else. My dedicated server running SmartOS has 16 GB of RAM, which is plenty to support at least 64 totally isolated web server environments for
smaller sites. Mind you, these are not 64 websites like on a shared webhost, but totally separate operating environments, with impenetrable TCP/IP boundaries between each other, having their own server processes, ports and IP addresses - in essence much more secure than your standard shared webhost.

So in my opinion SmartOS is a great operating system for physical hosts dedicated to web serving and the like, but there is one drawback to it - SmartOS somewhat forces you to run mostly anything in zones. Again, this is a plus instead of a drawback for web servers, but what if you only want to run a single server with a single purpose? It is possible to install additional packages in a SmartOS "global" zone, but the system isn't really designed to be used that way. Another distribution based on the Illumos kernel is OmniOS, which is better suited to be run as a single-zone server. When I set up my home NAS server, the only requirements I had were "no licensing costs", "open source" and "ZFS file system" (so I could take snapshots and have self-healing mirrors). OpenSolaris fits that description (which is why I used it previously for that purpose), but that isn't updated anymore; SmartOS makes it a little difficult to use that OS for this purpose. I tried FreeNAS, but got less than stellar performance (including some random crashes) from it (to be fair, this might be because my hardware didn't fulfill its system requirements). In the end, I installed OmniOS and never looked back. It behaves very much like
SmartOS, except everything runs perfectly fine in the global zone by default and the system requirements were more acceptable than those of Solaris 10/11. I believe I never had to reboot that server after installing and configuring the necessary components.

If you've read this far, you might wonder what my point is in writing all of this. To be honest, I don't try to convince you to try all of the operating systems I have used, nor do I want to dissuade you from using any of them. Neither do I intend to convince you to use the operating systems I use now, even though they fulfill my requirements for the time being. I am simply trying to tell my experiences and hope that you will make your own decisions when it comes to running laptops, desktops, workstations, home/virtual/dedicated servers. My point could probably be summarized by "choose the right tool for the right job". That pretty much sums up my overall philosophy - no tool (in this case "operating system") is perfect, it all depends on what you want to achieve.

## See also

* [Commodore 64](https://en.wikipedia.org/wiki/Commodore_64)
* [GEOS](https://en.wikipedia.org/wiki/GEOS_\(8-bit_operating_system\))
* [Amstrad PCW 8256](https://en.wikipedia.org/wiki/Amstrad_PCW#PCW_8256_and_8512)
* [CP/M](https://en.wikipedia.org/wiki/CP/M)
* [MS-DOS](https://en.wikipedia.org/wiki/MS-DOS)
* [PC-DOS](https://en.wikipedia.org/wiki/PC-DOS)
* [Terminate](https://en.wikipedia.org/wiki/Terminate_(software))
* [BeOS](https://en.wikipedia.org/wiki/BeOS)
* [OS/2 Warp](https://en.wikipedia.org/wiki/OS/2#1994-1996:_The_.22Warp.22_years)
* [SmartOS](https://en.wikipedia.org/wiki/SmartOS)
