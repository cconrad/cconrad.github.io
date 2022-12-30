---
date: 2009-07-06T09:19:26.000Z
excerpt: How to convert SSL certificates for use with IIS
published: true
tags:
  - apache
  - security
  - system-administration
title: Convert SSL certificate from Apache to IIS
---
## Problem:

You have generated a CSR using OpenSSL and submitted it to a CA. Your certificate has been issued, but you now want to import it into Windows for use with IIS.

## Solution:

1.  Convert the received public key from its PKCS7 format to PEM format:  
    `openssl pkcs7 -outform PEM -in public.p7b -out public.pem -print_certs`
2.  Combine the public keys and the private key into a password-protected PKCS12 file:  
    `openssl pkcs12 -export -out publicandprivate.pfx -in public.pem -inkey private.key`

Hope this helps someone (or at least me next year...).
