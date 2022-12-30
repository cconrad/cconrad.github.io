---
date: 2009-01-25T07:45:25.000Z
excerpt: Recently I wanted to remove the label "Search this site:" from Drupal 6's search block, preferably without resorting to any hacks such as parsing a text string for "Search this site:" (which could break whenever a new minor Drupal release gets out) or hiding the label in CSS (while this is not the worst solution, I always prefer not to output any unnecessary markup). Placing the following function in _template.php_ seems to do the trick in a clean way.
published: true
tags:
  - drupal
  - development
title: Removing "Search this site" from the search block in Drupal 6
---
```php
function phptemplate_preprocess_search_block_form(&$variables) {
  unset($variables['form']['search_block_form']['#title']);
  unset($variables['form']['search_block_form']['#printed']);
  $variables['search']['search_block_form'] = drupal_render($variables['form']['search_block_form']);
  $variables['search_form'] = implode($variables['search']);
}
```

The variable `$variables['form']['search_block_form']['#title']` contains the string _Search this site:_ or its translation, but gets rendered as a label - fortunately simply unsetting it removes the label altogether! I am not sure why `$variables['form']['search_block_form']['#printed']` also needs to be unset, but if that line is omitted, the text box (input field) won't show up.
