---
author:
  display_name: Claus Conrad
  email: webmaster@clausconrad.com
  login: claus
  url: ''
author_email: webmaster@clausconrad.com
author_login: claus
comments: true
date: 2016-05-21 18:01:43 +02:00
date_gmt: 2016-05-21 16:01:43 +0000
header: false
published: true
sidebar: left
status: publish
tags:
  - saltstack
  - gnupg
  - system-administration
teaser: Some notes on how to encrypt sensitive data in SaltStack pillar files, e.g. to commit them to source code repositories.
title: Using the GPG renderer to protect Salt pillar items
wordpress_id: 858
wordpress_url: http://www.clausconrad.com/?p=858
---
## Note about virtual machines
  
In order to generate a key pair, entropy ("randomness") is required. Entropy is usually generated from user input via the keyboard and mouse, which are not available inside virtual machines. Key pair generation might thus fail in a virtual machine, unless we generate some entropy beforehand.

If you are using a VM and experience long delays when generating a key pair (see below), run the following two commands first:

```shell
# For Debian and Ubuntu, otherwise install _rng- tools_ using the system's package manager
sudo apt install rng-tools

sudo rngd -r /dev/urandom
```

Alternatively, you can create the key pair on a physical machine and copy the directory to the master.

## Notes for FreeBSD

The salt master looks for the GnuPG private key(s), to decrypt pillar items, in the location _/etc/salt/gpgkeys_ on Linux and in _/usr/local/etc/salt/gpgkeys_ on FreeBSD. I could not find any documentation on configuring this path. If you use FreeBSD, change any references to "/etc/salt/gpgkeys" below to "/usr/local/etc/salt/gpgkeys".

The package "rng-tools" mentioned above does not appear to exist on FreeBSD. Interestingly, I did not have entropy problems when generating a GnuPG key pair on a virtualized FreeBSD instance.

To install GnuPG version 1 (version 2 does not work, SaltStack expects the executable to be called "gpg") under FreeBSD, run `sudo pkg install gnupg1`.

## Creating a key pair
  
On the salt master, complete the following steps to create a GnuPG key pair.

Create a directory to hold the private key:
```shell
sudo mkdir -p /etc/salt/gpgkeys
```

Set appropriate permissions for the directory holding the private key:
```shell
sudo chmod 0700 /etc/salt/gpgkeys
```

Create a GnuPG key pair in the created directory:
```shell
sudo gpg --gen-key --homedir /etc/salt/gpgkeys
```

When asked for the type of key you want, enter 1 and press Enter.

When asked for a keysize, the default of 2048 should be safe enough for the next decades, though 4096 is becoming a more popular choice these days.

The key validity is not really relevant, as you probably won't need to publish this key pair to a key server - I'd go with "0" (key does not expire) or a long validity, say "10y" for 10 years. If you choose a shorter period here, you can always extend the key validity later.

The "real name" would be something that let's you, and any other persons managing pillar data for the salt master, identify the salt master - for example its hostname. E-mail and comment can be left empty.

In the next step, make sure **not** to use a password, since the salt master is unable to supply the password when it uses gpg non-interactively.

## Key pair backup and distribution
  
We can now export the secret key, and keep it in a safe place:  

```shell
sudo gpg --homedir /etc/salt/gpgkeys --export-secret-keys --armor > /media/usbstick/salt-master.key
```

...and the public key, which can be distributed to other administrators and even kept in version control:

```shell
sudo gpg --homedir /etc/salt/gpgkeys --export --armor > /git/salt-master/salt-master.pub
```

The public key can be imported on workstations as follows:

```shell
gpg --import /git/salt-master/salt-master.pub
```

## Encrypting secrets
  
If we want to encrypt a password, say for MySQL, we can encrypt it as follows:

```shell
echo -n "my-super-secret-password" | gpg --armor --encrypt -r KEYNAME
```

...where KEYNAME is the name of the salt master chosen during key creation, for example the hostname.

If we have some secret pillar data in a file, say a private key for SSH, we can encrypt it like this:

```shell
cat private.key | gpg --armor --encrypt -r KEYNAME
```

...again, KEYNAME here is the name of the salt master's GnuPG key entered as "Real name" during the key creation.

Either of the above command spits out a long "message", which contains the encrypted version of our secret pillar item. To use this in a pillar SLS file, add the following line to the top of the SLS file:

`#!yaml|gpg`

**Note:** One can mix and match both encrypted and non-encrypted pillars in one YAML file, as long as it has the above line at the top.

...and insert the output from GnuPG like any other long string in the SLS file:

```yaml
mysql_server:
  password: |
    -----BEGIN PGP MESSAGE-----
    Version: GnuPG v1
    
    LsmXesQMUpdqCZQL1zzzoMYWGeU7mERsXFIv43y0gwt55CfZi8RTrQMhaNiJiJcM  
    ... (snip) ...  
    =A2K/  
    -----END PGP MESSAGE-----  
```

On the salt master, we can test decryption of the encrypted pillar data:

```shell
sudo salt mysql-server pillar.items
```

...which outputs the decrypted pillars, as they would be used when referenced from state SLS files:

```
        mysql_server:  
            ----------  
            password:  
                my-super-secret-password  
```    

Now we can safely commit secret pillar data to version control.

**Don't forget to backup the key pair!**
