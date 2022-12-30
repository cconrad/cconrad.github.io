---
date: 2016-04-16T07:18:37.000Z
excerpt: 'When creating a Google Compute Engine instance from a publicly shared image which is not in your own project nor one of the default projects - such as FreeBSD - the <em>image-project</em> can be specified on the <em>gcloud</em> command line. Here''s how to do the same when using <em>salt-cloud </em>instead of <em>gcloud</em>:'
published: true
tags:
  - freebsd
  - gce
  - saltstack
  - salt-cloud
  - system-administration
title: Create a FreeBSD GCE instance with salt-cloud
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

  ```text
  my-freebsd-host:  
  image: "https://www.googleapis.com/compute/v1/projects/freebsd-org-cloud-dev/global/images/freebsd-10-3-release-amd64"
  size: n1-standard-2  
  location: europe-west1-b  
  network: default  
  provider: gce  
  ssh_username: freebsd  
  ```

Note to self: remember to escape the URI string using quotation marks ;-)

## Summary

When an instance is created from an image using either `gcloud compute instance create` or `salt-cloud -p profile create`, both utilities search for the image in the same project as the instance as well as the "well-known image projects", which are "centos-cloud, coreos-cloud, debian-cloud, google-containers, opensuse-cloud, rhel-cloud, suse-cloud, ubuntu-os-cloud, windows-cloud".  

`gcloud` let's you use images from other projects by specifying the `--image-project` parameter, while `salt-cloud` does not (presumably because _libcloud_ does not support it either, this Apache library is used by `salt-cloud` under the hood). However, by using `gcloud` to find the URI of the public image we want to use, we can get `salt-cloud` to use any publicly available image for our instances.

Kudos to [Agam](https://agam.github.io/post/2015/08/19/freebsd-on-gce-the-last-post/) for pointing me at the freebsd-org-cloud-dev image repository in the first place.
