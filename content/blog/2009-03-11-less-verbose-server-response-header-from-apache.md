---
date: 2009-03-10T23:33:05.000Z
excerpt: 'Unfortunately it''s not possible to remove the <em>Server: Apache</em> header altogether from Apache''s responses, but you can make them less verbose (and stop telling the whole world which version of Apache, OS and modules you''re running).'
published: true
tags:
  - apache
  - security
  - system-administration
title: 'Less verbose Server: response header from Apache'
---
In your `httpd.conf`, change (or add) these lines:

```
ServerTokens Prod
ServerSignature Off
```

The first line changes the Server: header to only say "Apache" and nothing else. The second line disables the module listing on Apache-generated error pages.
