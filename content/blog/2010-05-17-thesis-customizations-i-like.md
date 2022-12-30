---
author:
  display_name: Claus Conrad
  email: webmaster@clausconrad.com
  login: claus
  url: ''
author_email: webmaster@clausconrad.com
author_login: claus
categories:
  - Development
comments: true
date: 2010-05-17 23:08:29 +02:00
date_gmt: 2010-05-17 21:08:29 +0000
excerpt: This list contains all the customizations I have made to the Thesis theme, in order to ease upgrading later on.
header: 'no'
published: true
sidebar: left
status: publish
tags:
  - thesis
title: Thesis customizations I like
wordpress_id: 261
wordpress_url: http://www.clausconrad.com/blog/thesis-customizations-i-like
---
## Making post images work with my multi-site installation

_/wp-content/themes/thesis_17/lib/functions/post_images.php_:

```php
// BEGIN Claus 20100609 Multi-site  
// if (@getimagesize($image_path)) {  
// END Claus 20100609 Multi-site

$image['class'] = thesis_get_image_classes($post_image);  
$image['attributes'] = thesis_image_attributes($post_image);

if ($post_image['alt'] != '')  
$image['alt'] = $post_image['alt'];  
elseif ($type == 'thumb')  
$image['alt'] = 'Thumbnail image for ' . get_the_title();  
else  
$image['alt'] = 'Post image for ' . get_the_title();

if (is_single() || is_page()) {  
$open_link = '';  
$close_link = '';  
}  
else {  
$open_link = '[';  
$close_link = '](' . get_permalink() . ' "Permanent link to ' . get_the_title() . '")';  
}

$post_image['output'] = $open_link . '' . $close_link . "\n";  
// BEGIN Claus 20100609 Multi-site  
// }  
// END Claus 20100609 Multi-site
```

_/wp-content/themes/thesis_17/lib/scripts/thumb.php_:

```php
// BEGIN Claus 20100610 Multi-site  
function cleanSource($src) {  
// remove http/ https/ ftp  
$src = preg_replace("/^((ht|f)tp(s|):\/\/)/i", "", $src);  
// remove domain name from the source url  
$host = $_SERVER["HTTP_HOST"];  
$src = str_replace($host, "", $src);  
$host = str_replace("www.", "", $host);  
$src = str_replace($host, "", $src);`

// don't allow users the ability to use '../'  
// in order to gain access to files below document root  
$src = preg_replace("/\.\.+\//", "", $src);

// remove slash from start of string  
if (strpos($src, "/") == 0)  
$src = substr($src, -(strlen($src) - 1));

// remove "files/" from start of string  
if (strpos($src, "files/") == 0)  
$src = substr($src, -(strlen($src) - 6));

if( !is_multisite() )  
die( 'Multisite support not enabled' );  
ms_file_constants();  
error_reporting( 0 );  
if ( $current_blog->archived == '1' || $current_blog->spam == '1' || $current_blog->deleted == '1' ) {  
// status_header( 404 );  
die( '404 — File not found.' );  
}  
$src = BLOGUPLOADDIR . str_replace( '..', '', $src);

return $src;  
}  
// END Claus 20100610 Multi-site
```
