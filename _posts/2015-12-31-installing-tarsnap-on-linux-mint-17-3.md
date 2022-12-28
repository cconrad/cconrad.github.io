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
date: 2015-12-31 19:23:33 +01:00
date_gmt: 2015-12-31 18:23:33 +0000
excerpt: Just some notes-to-self on how to compile and install <a href="https://www.tarsnap.com/">tarsnap</a> and <a href="https://github.com/alexjurkiewicz/acts">acts</a> on Ubuntu 14.04 and its derivatives.
header: false
layout: page
published: true
sidebar: left
status: publish
tags:
  - linux-mint
  - tarsnap
  - acts
teaser: Just some notes-to-self on how to compile and install <a href="https://www.tarsnap.com/">tarsnap</a> and <a href="https://github.com/alexjurkiewicz/acts">acts</a> on Ubuntu 14.04 and its derivatives.
title: Installing tarsnap on Linux Mint 17.3
wordpress_id: 834
wordpress_url: http://www.clausconrad.com/?p=834
---
**Downloading and verifying tarsnap**

1. Visit the [Tarsnap download page](https://www.tarsnap.com/download.html) to find the latest version (look for "source tarball"). At the time of writing, this command downloads the latest version for Linux:

   ```shell
   wget https://www.tarsnap.com/download/tarsnap-autoconf-1.0.36.1.tgz
   ```

2. Visit the [Tarsnap download page](https://www.tarsnap.com/download.html) to find the latest version of the "signed SHA256 hash file". At the time of writing, this command downloads the latest version of the signed SHA256 hash file:

   ```shell
   wget https://www.tarsnap.com/download/tarsnap-sigs-1.0.36.1.asc
   ```

3. Visit the [Tarsnap compiling page](https://www.tarsnap.com/compiling.html) to find the latest version of the signing key (look for "Tarsnap 20XX code signing GPG key"). At the time of writing, this command downloads the latest version of the signing key:
   
   ```shell
   wget https://www.tarsnap.com/tarsnap-signing-key-2015.asc
   ```

4. If you have never run "gpg" before (or are not sure whether you have), run it once:

   ```shell
   gpg
   ```

   ...then press CTRL+C to exit gpg.

5. Import the previously downloaded signing key into gpg. At the time of writing, this was achieved using the following command:

   ```shell
   gpg --import tarsnap-signing-key-2015.asc
   ```

6. Verify the signature of the SHA256 hash file. At the time of writing, this was achieved using the following command:

   ```shell
   gpg --decrypt tarsnap-sigs-1.0.36.1.asc
   ```

7. Verify that the output of the previous command included a line similar to the following (with emphasis on the word "Good"):

   _gpg: **Good** signature from "Tarsnap source code signing key (Colin Percival)"_

   You will likely also see this warning:

   _gpg: WARNING: This key is not certified with a trusted signature!_

   Ignoring this warning is a slight security risk, unfortunately avoiding it requires knowledge of the "web of trust" and GnuPG which is outside the scope of this document. Ignore it at your own peril or see the [Tarsnap compiling page](https://www.tarsnap.com/compiling.html) for more links in the section "Download verification".

8. Verify the hash (signature) of the "source tarball" you downloaded during the first step. At the time of writing, this was achieved using the following command:

   ```shell
   shasum -a 256 tarsnap-autoconf-1.0.36.1.tgz
   ```

   Now compare the output of this command with the output of the previous command and make sure that the hash (long string of digits and characters) matches. At the time of writing, the displayed hash was "a2909e01e2f983179d63ef2094c42102c92c716032864e66ef25ae341ea28690".

**Building tarsnap**

1. Install a couple of software packages that are required to build tarsnap from the downloaded source code:

   ```shell
   sudo apt-get install -y gcc libc6-dev make libssl-dev zlib1g-dev e2fslibs-dev
   ```

2. Extract the source code from the downloaded file, replacing the file name with the one you downloaded during the first step. At the time of writing, this was achieved using the following command:

   ```shell
   tar -xf tarsnap-autoconf-1.0.36.1.tgz
   ```

3. Change to the directory with the same name as the file downloaded during the first step. At the time of writing, this was achieved using the following command:

   ```shell
   cd tarsnap-autoconf-1.0.36.1/
   ```

4. Prepare for building the source code:
   
   ```shell
   ./configure
   ```

5. Build the source code:

   ```shell
   make all
   ```

6. Install the binary (application) to the default directories:  
   ```shell
   sudo make install
   ```

7. Change to the parent directory:

   ```shell
   cd ..
   ```

8. Optionally clean up (delete the downloaded and extracted files); replace the file names in the commands with those matching the files you downloaded. At the time of writing, the following commands were valid:

   ```shell
   rm tarsnap-autoconf-1.0.36.1.tgz
   rm tarsnap-signing-key-2015.asc*
   rm tarsnap-sigs-1.0.36.1.asc*
   rm -r tarsnap-autoconf-1.0.36.1
   ```
  
**Configuring tarsnap**

1. Move the sample configuration file to the location of the "real" configuration file:

   ```shell
   sudo mv /usr/local/etc/tarsnap.conf.sample /usr/local/etc/tarsnap.conf
   ```

2. If you haven't already, create a tarsnap account and deposit some funds (tarsnap is a prepaid service). Visit the [Tarsnap Getting started page](https://www.tarsnap.com/gettingstarted.html) for more details. If you already have an account (i.e. you are using tarsnap on another machine or server), this can be skipped. One tarsnap account can be used to backup multiple devices.

3. Create a key file for this machine. In the command below, replace "me@example.com" with your e-mail address (the one used when you registered on the tarsnap web site) and replace "mybox" with a name that helps you identify this machine (hostname or IP recommended):

   ```shell
   sudo tarsnap-keygen --keyfile /root/tarsnap.key --user me@example.com --machine mybox
   ```

   When asked, enter the password for your tarsnap account (the one you used when registering on the tarsnap web site).

4. Copy the generated key file (path "/root/tarsnap.key") to another machine and keep it safe. **The importance of this step cannot be stretched enough!** Remember, you are setting up a backup for this machine because something bad might happen to it. If it does, you will need your key file to restore your backup from the tarsnap servers. Some suggestions for possible methods of backing up your key file are mentioned in the section "Keep your key file safe" of the [Getting started with tarsnap](https://www.tarsnap.com/gettingstarted.html) page. _If you don't backup the key file now, you might as well skip the remaining steps._
  
**Downloading and installing acts**

Tarsnap follows the UNIX philosophy of keeping things simple, it tries to do only a few things (namely encrypting, decrypting and transferring backups) and do them well. Scheduling backups and removing old backups are not features included in tarsnap itself. Fortunately a number of helper scripts/applications exist for those tasks. I recommend acts (short for "Another Calendar-based Tarsnap Script").

1. Visit the [Latest acts release page](https://github.com/alexjurkiewicz/acts/releases/latest) to find the link to the latest stable version of acts.

2. Download acts using the link at the bottom of the page you just opened. At the time of writing, this was achieved using the following command:

   ```shell
   wget https://github.com/alexjurkiewicz/acts/archive/1.2.tar.gz
   ```

3. Extract the contents of the downloaded archive. At the time of writing, this was achieved using the following command:

   ```shell
   tar xzf 1.2.tar.gz
   ```

4. Change to the directory containing the extracted files. At the time of writing, this was achieved using the following command:

   ```shell
   cd acts-1.2
   ```

5. Move the sample configuration to the location of the "real" configuration file:

   ```shell
   sudo mv acts.conf.sample /etc/acts.conf
   ```

6. Move acts (the script itself) to a more permanent location:

   ```shell
   sudo mv acts /usr/local/bin/
   ```

**Configuring acts**

1. Edit acts' configuration file:

   ```shell
   sudo nano /etc/acts.conf
   ```

   Find the line starting with "backuptargets" and delete everything between the two double quotes on that line, so that it reads:  
   _backuptargets=""_

   Now add the directories you want to backup inside those double quotes. Each path is relative to the root path of the machine, but should _not_ start with a forward slash.  
   However, forward slashes can be used to backup only specific directories, even though the sample does not use them. For example, to backup the directories "/root" and "/home/claus", you would edit the line as follows:  
   _backuptargets="root home/claus"_

2. Schedule a task to run acts daily:

   ```shell
   sudo crontab -u root -e
   ```

   If the dialog "Select an editor" appears, press Enter to select "nano".


   At the bottom of the file, add these lines, replacing "me@example.com" with your email address:

   ```
   PATH=/usr/local/sbin:/usr/local/bin:/sbin:/bin:/usr/sbin:/usr/bin
   MAILTO=me@example.com
   0 2 * * * acts
   ```

   This would run acts every day at 2:00 AM and send an email with the result to "me@example.com".

   Save and close the file to activate the scheduled task. When using nano as your text editor, this could be achieved by pressing CTRL+X followed by Y and followed by pressing Enter.
