---
layout: page
status: publish
header: no
sidebar: left
published: true
title: Comparing Content Delivery Networks
author:
  display_name: Claus Conrad
  login: claus
  email: webmaster@clausconrad.com
  url: ''
author_login: claus
author_email: webmaster@clausconrad.com
wordpress_id: 124
wordpress_url: http://www.clausconrad2.com/?p=124
date: '2009-09-07 16:56:33 +0000'
date_gmt: '2009-09-07 14:56:33 +0000'
categories:
- Development
tags:
- performance
comments: true
teaser: "Comparison of some popular Content Delivery Networks (CDN) targeting SMB customers." 
---
| Network | Type | Origin | Edges | Storage $/GB/mo. | Delivery $/GB | Support $/mo. | CNAME |
|-
| Amazon S3 | - | EU | 1 | 0.18 | 0.17 | 400 | no |
| Amazon S3 with CloudFront | Edge cache | EU | 14 | 0.18 | 0.17 - 0.221 | 400 | yes |
| Amazon S3 | - | US | 1 | 0.15 | 0.17 | 400 | no |
| Amazon S3 with CloudFront | Edge cache | US | 14 | 0.15 | 0.17 - 0.221 | 400 | yes |
| CacheFly | Edge mirror | US | 14 | 15.00 | 0.49 | 0 | ? |
| Rackspace Cloud Files | - | US | 1 | 0.15 | 0.22 | 0 | no |
| Rackspace Cloud Files with Limelight | Edge delivery | US | 17 | 0.15 | 0.22 | 0 | no |
| SimpleCDN | Edge cache | US/ own | 13 | 0.75 | 0.039 | ? | $5 |

Please note:

*   Prices are based on the lowest usage range or contract, and might be significantly cheaper with higher commitment and/or usage.
*   Prices do not include upload bandwidth/bandwidth to pull from origin server or requests or other fees (where applicable).
