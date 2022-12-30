---
author:
  display_name: Claus Conrad
  email: webmaster@clausconrad.com
  login: claus
  url: ''
author_email: webmaster@clausconrad.com
author_login: claus
comments: true
date: 2014-01-21 19:37:29 +01:00
date_gmt: 2014-01-21 18:37:29 +0000
excerpt: "As a newbie to Django, getting an empty page in the Facebook canvas tricked me up quite a bit. Here are some reasons for getting a blank canvas, even though your app works when accessed directly.\r\n\r\n"
header: false
published: true
sidebar: left
status: publish
tags:
  - development
  - facebook
  - django
  - web
  - canvas
title: Django app as Facebook canvas app
wordpress_id: 741
wordpress_url: http://www.clausconrad.com/?p=741
---
When you load a website through a Facebook canvas URL
(https://apps.facebook.com/your_app_name), the request to your app is POSTed. By default, Django apps reject POST requests that don't contain a "csrf_token" with a "403 Forbidden" error.

To disable this behavior, remove 'django.middleware.csrf.CsrfViewMiddleware' from your INSTALLED_APPS list. Obviously this will open your app up to XSS attacks, so make sure to use the [csrf_protect](https://docs.djangoproject.com/en/dev/ref/contrib/csrf/) decorator on views that accept POST requests from your own app.

After "fixing" the above problem I expected things to just work.
Unfortunately, Django provides another ~~hurdle~~ protection in the form of its clickjacking protection. By default, Django apps send a response header like "X-Frame-Options: SAMEORIGIN". This forces modern browsers to not embed the Django app in a frame or iframe, such as inside the Facebook canvas. Even though the HTTP request to your Django app returns "200 OK", modern browsers
just won't display its contents inside Facebook's frame.

Fortunately there is an easy way to disable this, too - just remove "django.middleware.clickjacking.XFrameOptionsMiddleware" from your MIDDLEWARE_CLASSES.

Once again, I cannot stress enough that removing any of these middlewares opens your app up to potential attacks, so consider the consequences carefully before resorting to these solutions.
