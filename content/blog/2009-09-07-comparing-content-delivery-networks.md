---
date: 2009-09-07T14:56:33.000Z
excerpt: Comparison of some popular Content Delivery Networks (CDN) targeting SMB customers.
published: true
tags:
  - performance
  - development
title: Comparing Content Delivery Networks
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
