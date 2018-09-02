---
layout: page
status: publish
header: no
sidebar: left
published: true
title: "Removing \"Search this site\" from the search block in Drupal 6"
author:
  display_name: Claus Conrad
  login: claus
  email: webmaster@clausconrad.com
  url: ''
author_login: claus
author_email: webmaster@clausconrad.com
wordpress_id: 160
wordpress_url: http://www.clausconrad2.com/?p=160
date: '2009-01-25 08:45:25 +0000'
date_gmt: '2009-01-25 08:45:25 +0000'
categories:
- Development
tags:
- drupal
comments: true
teaser: Recently I wanted to remove the label "Search this site:" from Drupal 6's search block, preferably without resorting to any hacks such as parsing a text string for "Search this site:" (which could break whenever a new minor Drupal release gets out) or hiding the label in CSS (while this is not the worst solution, I always prefer not to output any unnecessary markup). Placing the following function in _template.php_ seems to do the trick in a clean way.
---
<pre>function phptemplate_preprocess_search_block_form(&$variables) {  
        unset($variables['form']['search_block_form']['#title']);  
        unset($variables['form']['search_block_form']['#printed']);  
        $variables['search']['search_block_form'] = drupal_render($variables['form']['search_block_form']);  
        $variables['search_form'] = implode($variables['search']);  
}</pre>

The variable _$variables['form']['search_block_form']['#title']_ contains the string "Search this site:" or its translation, but gets rendered as a label - fortunately simply unsetting it removes the label altogether! I am not sure why _$variables['form']['search_block_form']['#printed']_ also needs to be unset, but if that line is omitted, the text box (input field) won't show up.
