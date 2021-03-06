---
layout: page
status: publish
header: no
sidebar: left
published: true
title: Does your CommunityServer have spam profiles?
author:
  display_name: Claus Conrad
  login: claus
  email: webmaster@clausconrad.com
  url: ''
author_login: claus
author_email: webmaster@clausconrad.com
wordpress_id: 100
wordpress_url: http://www.clausconrad2.com/?p=100
date: '2009-12-03 20:25:17 +0000'
date_gmt: '2009-12-03 19:25:17 +0000'
categories:
- Development
tags:
- communityserver
comments: true
teaser: "If you run a popular web community based on Telligents CommunityServer platform and allow everyone to register without e-mail verification for convenience, spammers are likely to know this too."
---
These user profiles pollute your authority and you probably want to delete them, but first you have to identify them. I found the following query helpful for this purpose:

```sql
SELECT  
U.UserName  
FROM  
aspnet_users U  
JOIN  
aspnet_profile P  
ON  
U.UserID = P.UserID  
JOIN  
CS_Users CSU  
ON  
CSU.MembershipID = U.UserID  
WHERE (  
P.PropertyValuesString LIKE '%<a %<a %<a %<a %<a %<a %<a %<a %<a %<a %<a %<a %<a %<a %<a %<a %<a %<a %<a %<a %' OR  
P.PropertyValuesString LIKE '%position:absolute%'  
OR  
P.PropertyValuesString LIKE '%overflow:hidden%'  
)  
AND  
(SELECT COUNT(*) FROM CS_Posts P WHERE P.UserID = CSU.UserID) = 0</a>
```

**Make sure to check your results for false positives!** Once you are sure you got all the culprits and nobody else, iterate over it and delete each spammer e. g. by running

`CommunityServer.Users.DeleteUser(CommunityServer.Users.GetUser(userName));`

While the code is simple the reason I don't include it here is because I want you to think about what you are doing and not blindly copy/paste it and accidentally delete "real" users - you will likely have to customize the above SQL snippet to achieve this.
