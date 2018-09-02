---
layout: page
status: publish
header: no
sidebar: left
published: true
title: Convert SSL certificate from Apache to IIS
author:
  display_name: Claus Conrad
  login: claus
  email: webmaster@clausconrad.com
  url: ''
author_login: claus
author_email: webmaster@clausconrad.com
wordpress_id: 131
wordpress_url: http://www.clausconrad2.com/?p=131
date: '2009-07-06 11:19:26 +0000'
date_gmt: '2009-07-06 09:19:26 +0000'
categories:
- System administration
tags:
- apache
- security
comments: true
---
## Problem:

You have generated a CSR using OpenSSL and submitted it to a CA. Your certificate has been issued, but you now want to import it into Windows for use with IIS.

## Solution:

1.  Convert the received public key from its PKCS7 format to PEM format:  
    `openssl pkcs7 -outform PEM -in public.p7b -out public.pem -print_certs`
2.  Combine the public keys and the private key into a password-protected PKCS12 file:  
    `openssl pkcs12 -export -out publicandprivate.pfx -in public.pem -inkey private.key`

Hope this helps someone (or at least me next year...).
