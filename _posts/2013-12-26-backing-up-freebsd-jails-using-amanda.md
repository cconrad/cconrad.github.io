---
author:
  display_name: Claus Conrad
  email: webmaster@clausconrad.com
  login: claus
  url: ''
author_email: webmaster@clausconrad.com
author_login: claus
categories:
- System administration
comments: true
date: 2013-12-26 17:16:15 +0000
date_gmt: 2013-12-26 16:16:15 +0000
excerpt: "Some notes about how I set up Amanda server and clients to back up jails
  on a FreeBSD host.\r\n\r\n"
header: false
layout: page
published: true
sidebar: left
status: publish
tags:
- backup
- freebsd
- amanda
- jails
teaser: "Some notes about how I set up Amanda server and clients to back up jails on a FreeBSD host."
title: Backing up FreeBSD jails using Amanda
wordpress_id: 679
wordpress_url: http://www.clausconrad.com/?p=679
---
While looking for open-source backup solutions for jails on a FreeBSD box, I came across Amanda and Bacula. At first glance Amanda seemed easier to configure, so I tried to install it from ports. There were some hiccups, especially with regards to permissions and missing directories, so I documented the steps I needed to get it running below.

Amanda uses a server/client architecture, although not in the traditional sense where an application is running all the time. The "Amanda server" is the box that runs and keeps the backups, a process that can be scheduled using cron. Amanda "clients" are the machines that have data that needs to be backed up. It is entirely possible to run the server and client on the same device (VM, jail, etc.). In the configuration described here I am running Amanda server in one jail and an Amanda client in another jail.

**On the Amanda server**

1. If this is the first time using _pkg_ on the server, install it:

   ```shell
   sudo pkg
   ```

   Press "Y" to confirm.

2. Here I am building _amanda-server_ from ports because I plan on using S3 functionality in amanda-server, which is not enabled in the binary packages. If you don't need S3 (or don't know what it is), feel free to save some time by skipping to "To install binaries" below.

3. Install portmaster:

   ```shell
   sudo pkg install portmaster
   ```

4. Install amanda-server:  

   ```shell
   sudo portmaster --packages-build misc/amanda-server
   ```

5. Follow the prompts, most settings should be self-explanatory.

6. Install amcrypt:

   ```shell
   sudo portmaster --packages-build security/aespipe
   ```

7. Install pinentry-curses:

   ```shell
   sudo portmaster -P security/pinentry-curses
   ```

8. To install binaries, use this command instead of those containing _portmaster_ above:
   
   ```shell
   sudo pkg install amanda-server aespipe pinentry-curses
   ```

9. Enable sendmail, so Amanda can mail backup reports:
   
   ```shell
   sudo echo 'sendmail_enable="YES"' >> /etc/rc.conf
   ```

10. Start sendmail:
    
    ```shell
    sudo service sendmail start
    ```

**On the Amanda clients**

1. If this is the first time using _pkg_ on the server, install it:

   ```shell
   sudo pkg
   ```

   Press "Y" to confirm.

2. Install _amanda-client_, _amcrypt_ and _pinentry-curses_:

   ```shell
   pkg install amanda-client aespipe pinentry-curses
   ```
  
**On the Amanda server**

1. Amanda has been around for a long time, so it calls disk backups for "virtual tapes". Create a directory for these files:

   ```shell
   sudo mkdir -p /data/amanda/vtape/DailySet1
   sudo chown amanda:amanda /data/amanda/vtape/DailySet1
   sudo chmod -R 750 /data/amanda/vtape/DailySet1
   ```

2. Create configuration directory:

   ```shell
   sudo mkdir -p /usr/local/etc/amanda
   sudo chown -R amanda:amanda /usr/local/etc/amanda
   ```

3. Create var directory:

   ```shell
   sudo mkdir -p /usr/local/var/lib/amanda
   sudo chown -R amanda:amanda /usr/local/var/lib/amanda
   ```

4. Assign a shell to user _amanda_:

   ```shell
   sudo chsh -s /bin/csh amanda
   ```

5. Change to the amanda user:

   ```shell
   sudo su - amanda
   ```

6. Create public/private key pair to access clients:

   ```shell
   ssh-keygen -t rsa
   ```
   
   Press Enter at all prompts to create it without a passphrase.

7. Create a vtape configuration:

   ```shell
   amserverconfig DailySet1 --template harddisk --tapedev  /data/amanda/vtape/DailySet1 --mailto EMAIL_RECIPIENT_GOES_HERE --dumpcycle  1week --runspercycle 5 --tapecycle 12 --runtapes 1
   ```

8. Add hosts configuration file:

   ```shell
   touch /usr/local/var/lib/amanda/.amandahosts
   ```
  
**On the Amanda clients**

1. Assign a shell to user _amanda_:

   ```shell
   sudo chsh -s /bin/csh amanda
   ```

2. Append or copy _~/.ssh/id_rsa.pub_ from server to _~/.ssh/authorized_keys_ on clients

3. Create directories/files and assign permissions:

   ```shell
   sudo mkdir -p /usr/local/var/lib/amanda
   sudo touch /usr/local/var/lib/amanda/.amandahosts
   sudo mkdir -p /usr/local/etc/amanda
   sudo mkdir -p /usr/local/var/amanda/gnutar-lists
   sudo chown -R amanda:amanda /usr/local/etc/amanda
   sudo chown -R amanda:amanda /usr/local/var/lib/amanda
   sudo chown -R amanda:amanda /usr/local/var/amanda
   ```

4. Create _/etc/fstab_ file:

   ```shell
   sudo touch /etc/fstab
   ```
 
**Amanda server**

1. Change to the amanda user:

   ```shell
   sudo su - amanda
   ```

2. Add a client (backup job):  
In this example, I am backing up the directory _/var/www_ from the client - replace as necessary.

   ```shell
   amaddclient --config DailySet1 --client CLIENT_HOSTNAME_GOES_HERE --diskdev /var/www --dumptype comp-user-tar
   ```

3. Edit the file _/usr/local/etc/amanda/DailySet1/amanda.conf_:  
   ```shell
   vi /usr/local/etc/amanda/DailySet1/amanda.conf
   ```
   
   Find this section (line):  
   
   ```
   define dumptype global {
   ```

   In the section, change:

   ```
   auth "bsdtcp"
   ```

   to:

   ```
   auth "ssh"
   ```

4. Test configuration:

   ```shell
   amcheck DailySet1
   ```

   Fix any problems before continuing.

5. Initiate the first full backup:

   ```shell
   amdump DailySet1
   ```

6. Check that a backup summary is received by e-mail.

7. Automate this backup using cron:

   ```shell
   crontab -e
   ```

   Add this line to the file to run backups daily Monday through Friday at 1 AM:

   ```
   0 1 * * 1-5 /usr/local/sbin/amdump DailySet1
   ```

That's it, you should now receive a daily mail shortly after 1AM, informing you of a successful backup of /var/www from the client to the server. The first report (hopefully received during the test run above) should be about a full backup and the next couple of reports will only do an incremental backup, with a new full backup every week (as specified in the vtape configuration command).

Some other opensource backup solutions that should work on FreeBSD:

* [BackupPC](http://backuppc.sourceforge.net/) ([port](http://www.freshports.org/sysutils/backuppc/))
* [Bacula](http://www.bacula.org/en/) (ports: [client](http://www.freshports.org/sysutils/bacula-client/)/[server](http://www.freshports.org/sysutils/bacula-server/))
* [rsnapshot](http://www.rsnapshot.org/) ([port](http://www.freshports.org/sysutils/rsnapshot/))
