---
date: 2010-06-12T23:22:38.000Z
excerpt: 'Simplify updating multiple WordPress blogs by combining them into a multi-site installation:'
published: true
tags:
  - system-administration
title: Migrating a bunch of WordPress blogs to a single WordPress 3.0 multi-site installation
---
## General setup:

1.  <span style="font-family: Helvetica, Verdana, sans-serif;">Set up WordPress as usual</span>
2.  <span style="font-family: Helvetica, Verdana, sans-serif;">Follow</span> [https://wptheming.com/2010/03/wordpress-3-0-enable-network/](https://wptheming.com/2010/03/wordpress-3-0-enable-network/) to enable multi-site; use sub-directory config
3.  Change wp-config.php and .htaccess as described in the admin
4.  Follow [http://ottopress.com/2010/wordpress-3-0-multisite-domain-mapping-tutorial/](http://ottopress.com/2010/wordpress-3-0-multisite-domain-mapping-tutorial/) to enable domain mapping

## For each site:

1.  Log in to the control panel
2.  Upgrade site to 3.0 by copying files over and reloading the control panel
3.  Add the site on the WPMU installation
4.  Map the domains
5.  Add domain to hosts file
6.  Export database to a file
7.  Edit the file, remove wp_options, wp_usermeta and wp_users tables from dump
8.  Rename prefixes from wp_ to wp_X_ where X is the blog id
9.  Import SQL into new database
10.  UPDATE wp_{ID}_posts SET post_author = 1
11.  Switch theme
12.  Move uploads and change post image path
13.  Reenable plugins
14.  Reenable widgets
15.  Restore options
16.  Check no broken Media

## Especially in case of Thesis 1.7:

For Thesis, also see [how to fix thumbs and post images](/blog/thesis-customizations-i-like/).

[https://kristarella.blog/2009/09/using-thesis-with-wpmu/](https://kristarella.blog/2009/09/using-thesis-with-wpmu/)

1.  Restore Thesis options
2.  Copy rotator images (if used)
3.  Copy custom.css
4.  Restore OpenHook
5.  chmod 666 custom/blog-name/custom.css
6.  chmod 775 custom/blog-name/cache
