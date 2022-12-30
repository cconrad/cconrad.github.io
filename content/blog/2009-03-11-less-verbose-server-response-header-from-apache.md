---
author:
  display_name: Claus Conrad
  email: webmaster@clausconrad.com
  login: claus
  url: ''
author_email: webmaster@clausconrad.com
author_login: claus
comments: true
date: 2009-03-11 00:33:05 +01:00
date_gmt: 2009-03-10 23:33:05 +0000
excerpt: 'Unfortunately it''s not possible to remove the <em>Server: Apache</em> header altogether from Apache''s responses, but you can make them less verbose (and stop telling the whole world which version of Apache, OS and modules you''re running).'
header: 'no'
published: true
sidebar: left
status: publish
tags:
  - apache
  - security
  - system-administration
title: 'Less verbose Server: response header from Apache'
wordpress_id: 150
wordpress_url: http://www.clausconrad2.com/?p=150
---
In your _httpd.conf_, change (or add) these lines:

```
ServerTokens Prod
ServerSignature Off
```

The first line changes the Server: header to only say "Apache" and nothing else. The second line disables the module listing on Apache-generated error pages.
t