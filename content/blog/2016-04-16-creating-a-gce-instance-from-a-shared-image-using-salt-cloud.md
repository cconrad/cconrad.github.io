---
author:
  display_name: Claus Conrad
  email: webmaster@clausconrad.com
  login: claus
  url: ''
author_email: webmaster@clausconrad.com
author_login: claus
comments: true
date: 2016-04-16 09:18:37 +02:00
date_gmt: 2016-04-16 07:18:37 +0000
excerpt: "When creating a Google Compute Engine instance from a publicly shared image which is not in your own project nor one of the default projects - such as FreeBSD - the <em>image-project</em> can be specified on the <em>gcloud</em> command line. Here's how to do the same when using <em>salt-cloud </em>instead of <em>gcloud</em>:"
header: false
published: true
sidebar: left
status: publish
tags:
  - freebsd
  - gce
  - saltstack
  - salt-cloud
  - system-administration
title: Create a FreeBSD GCE instance with salt-cloud
wordpress_id: 851
wordpress_url: http://www.clausconrad.com/?p=851
---
* Assuming we have a working command line such as this:

  ```shell
  gcloud compute instances create my-freebsd-host --image freebsd-10-3-release-amd64 --image-project=freebsd-org-cloud-dev
  ```

* First we have to find the URI of the public image:

  ```shell
  gcloud compute images list --project freebsd-org-cloud-dev --uri --regexp freebsd-10-3-release-amd64
  ```

  ...which gives the following URI in this case:

  _https://www.googleapis.com/compute/v1/projects/freebsd-org-cloud-dev/global/images/freebsd-10-3-release-amd64_

* Now the URI can be used in a salt-cloud profile instead of the image name, for example:

  ```shell
  sudo nano /etc/salt/cloud.profiles.d/my-freebsd-host.conf
  ```

  ```
  my-freebsd-host:  
  image: "https://www.googleapis.com/compute/v1/projects/freebsd-org-cloud-dev/global/images/freebsd-10-3-release-amd64"
  size: n1-standard-2  
  location: europe-west1-b  
  network: default  
  provider: gce  
  ssh_username: freebsd  
  ```

Note to self: remember to escape the URI string using quotation marks ;-)

<u>Summary:<u>

When an instance is created from an image using either _gcloud compute instance create_ or _salt-cloud -p profile create_, both utilities search for the image in the same project as the instance as well as the "well-known image projects", which are "centos-cloud, coreos-cloud, debian-cloud, google-containers, opensuse-cloud, rhel-cloud, suse-cloud, ubuntu-os-cloud, windows-cloud".  
_gcloud_ let's you use images from other projects by specifying the `--image-project` parameter, while _salt-cloud_ does not (presumably because _libcloud_ does not support it either, this Apache library is used by salt-cloud under the hood). However, by using _gcloud_ to find the URI of the public image we want to use, we can get _salt-cloud_ to use any publicly available image for our instances.

Kudos to [Agam](https://agam.github.io/post/2015/08/19/freebsd-on-gce-the-last-post/) for pointing me at the freebsd-org-cloud-dev image repository in the first place.
