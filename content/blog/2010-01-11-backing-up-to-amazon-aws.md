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
date: 2010-01-11 04:52:23 +01:00
date_gmt: 2010-01-11 03:52:23 +0000
excerpt: This is a walkthrough for backing up files to Amazon's data centers, more specifically to an EC2 instance with an EBS root volume. While it is tailored to a UNIX-like environment (as that's what I use - Solaris 10, Debian and Mac OS X 10.6 Snow Leopard), all tools used in these scripts are also available for Windows environments. Some adaptation of the commands might be required.
header: 'no'
published: true
sidebar: left
status: publish
tags:
  - aws
title: Backing up to Amazon AWS
wordpress_id: 84
wordpress_url: http://www.clausconrad2.com/?p=84
---
I recommend that you are at least slightly familiar with the [AWS services](https://aws.amazon.com/) before continuing to read this walkthrough.

### Choosing an AWS backup method

There are many variations of using Amazon Web Services to back up your data. In the following I will shortly describe the methods I know of and the pros and cons I see with each of them.

#### Backing up directly to S3

For backing up directly to S3, several tools exist.

*   **[JetS3t synchronize](https://jets3t.s3.amazonaws.com/applications/applications.html#synchronize)**  

    Synchronize is part of a larger suite of S3-tools called "JetS3t". It is a command-line based tool written in Java and so it requires a Java runtime, but otherwise it can be run like any other CLI application and doesn't require a GUI. Don't let the simple name fool you - it is one of the better tools for backing up data to S3\. Apart from Synchronize, JetS3t also contains a GUI to manage files on S3 called "Cockpit" and a SDK for Java developers to integrate S3 into their software. I have used Synchronize on several servers and continue to use it. One problem I experienced several times with this tool was its huge memory consumption when backing up large numbers of files. My server with the largest number of files currently needs to back up over 700,000 files and even though I increased the memory for Java to 2 GB it still ran out of RAM. This might not be due to Synchronize or JetS3t itself, but made me look for other solutions for this server, such as the one presented below. However I still consider Synchronize to be very well-written and user-friendly, and if the number of files you need to back up is small (like in "below 50,000 files") it is a very reliable application. (Please also consider my general comments about backing up directly to S3 below though.)

*   **[s3sync.rb](https://s3sync.net/wiki.html)**  

    Another popular solution I tried, s3sync.rb is a Ruby-based script that works kind-of like rsync. Unlike JetS3t it had no problems backing up my collection of 700,000 small files. However, it created an enourmous number of requests to S3, resulting in a huge bill from Amazon, so I don't use it anymore. Apart from that it worked well though. (Please also consider my general comments about backing up directly to S3 below.)

*   **[JungleDisk](https://www.jungledisk.com/)**  

    I am reluctant to include this here because I haven't had a chance to try it, but JungleDisk appears to be a popular solution for backing up data to S3 and it looks pretty good on paper. I didn't use it because it seems to require a GUI.

A general problem with backing up to S3, not caused by any of the above-mentioned tools, is that S3 requires you to copy whole files. So if you have a 500 MB file where only 1 byte changed, the whole 500 MB have to be uploaded each time, and you will be charged current S3 incoming transfer fees for that. This reason alone made me disregard all S3-based solutions for larger/more frequent backups.

#### Using EC2 local storage

You could use the (currently 160 GB) local storage of EC2 instances for backups. However, if the instance is shutdown for any reason, all data is lost. Even if you don't shutdown the instance ever, the host could lose its power or the host's hard drive could crash, resulting in a total data loss.

This problem can be overcome by snapshotting the local instance storage to S3 in frequent intervals. I just found this solution to be too complex and expensive for my purposes.

#### Using an EC2 attached EBS volume

It is possible to use an EC2 instance and attach a EBS volume to it. Even though the EC2 instance is shut down or crashes, the EBS volume will be preserved, and even though the EBS host should crash, its data is backed up automatically. While S3 data is backed up about several data centers, EBS data is only being backed up in the same data center. So the safety level of data on attached EBS volumes can be considered to lie somewhere between instance-local storage and S3.

For increased security, EBS volumes can be snapshotted to S3 as often and with as many concurrent copies as desired.

This is certainly a viable backup solution. Depending on how important your data is, you might want to take S3 snapshots in addition to your EBS backups. While I tried it, I found it too complex to administer and also kind-of expensive.

#### Using an EC2 root EBS volume

For increased security, EBS volumes can be snapshotted to S3 as often and with as many concurrent copies as desired.

### My guide

Based on the determined importance of my data, the fact that this is a second site (in addition to on-site backup) and budgetary constraints, I chose to use an EBS volume as an EC2 instance root without snapshotting the volume to S3\. This is the method I am going to describe in detail in the rest of this walkthrough. Before cloning this process I invite you to study the [AWS documentation](https://docs.aws.amazon.com/index.html) to determine its fitness for your purposes.

### Signing up for Amazon AWS

If you don't have an AWS account yet, [sign up here](https://signin.aws.amazon.com/signin?redirect_uri=https%3A%2F%2Fportal.aws.amazon.com%2Fbilling%2Fhome%3Fstate%3DhashArgs%2523%252Fdevpay%26isauthcode%3Dtrue&client_id=arn%3Aaws%3Aiam%3A%3A934814114565%3Auser%2Fportal-aws-auth&forceMobileApp=0&code_challenge=xph9Oqd5JRTW5GW2EATrYIcjs9dVCQAgEyNwi7Jrw1g&code_challenge_method=SHA-256) using your Amazon login (or create one using the same link, if you aren't an Amazon customer yet). Even if you've already ordered books and stuff from Amazon, signup for AWS services is separate from that. However, the only AWS service you need for this guide is EC2.

### Choosing an AWS region

Amazon AWS currently has server farms in three regions: US-West (Northern California), US-East (Virginia) and EU-West (Ireland). Usually, you want to use the one closest to the location of your servers. Depending on the type of data you want to back up, you might even have a legal obligation not to move it outside of your own country or region. In my case this means I have to use the EU-West region.

### Choosing an AMI

TBD

### Preparing your environment (installation)

TBD

#### Downloading your cert and private key

TBD

#### Creating an EC2 key pair

TBD

#### Other tools

Download and unpack the Amazon EC2 API tools.

Set the following environment variables:

```shell
EC2_HOME=/path/to/ec2-api-tools  
JAVA_HOME=/path/to/java  
PATH=/path/to/ec2-api-tools/bin:$PATH
```

Download and install the latest version of [boto](https://github.com/boto/boto).

Configure your region in ~/.boto.

### Setting up the instance

TBD

I want to clarify this part further, but as a short note, in the following command you will most likely want to change:

*   The number 100 in the "block-device-mapping" argument is the size of the EBS root volume in GB

*   ami-13042f67 is the ID of the AMI you want to use, find it at [https://console.aws.amazon.com/](https://console.aws.amazon.com/)

```shell
ec2-run-instances --private-key /path/to/private-key.pem --cert /path/to/cert.pem -H --region <regionname> --availability-zone <availibilityzone> --block-device-mapping /dev/sda1=:100:false --instance-initiated-shutdown-behavior stop --key <keyname> ami-13042f67  
ssh -i /path/to/keypair-private-key.pem root@<instance public dns name>
```

Now connected to the instance, resize the root volume to its full size:<sup>[1](#footnote-1)</sup>:

`sudo resize2fs /dev/sda1`

### Running a backup

TBD

#### Starting the instance

```conn.start_instances([instance_id])  
res = conn.get_all_instances([instance_id])[0]    
while not res.instances[0].state == u'running': wait    
ip = res.instances[0].public_dns_name
```

#### Running rsync

TBD

#### Putting it all together

TBD

### Foot notes

<a id="footnote-1"></a>1: Thanks to [Alestic](https://alestic.com/2009/12/ec2-ebs-boot-resize/)
