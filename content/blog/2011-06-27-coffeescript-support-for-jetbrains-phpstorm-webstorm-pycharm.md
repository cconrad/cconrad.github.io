---
date: 2011-06-27T09:18:03.000Z
excerpt: Basic syntax highlighting and error checking of CoffeeScript is only officially available in Jetbrains RubyMine IDE - read on to get it in other IDEs.
published: true
title: CoffeeScript support for JetBrains PhpStorm/WebStorm/PyCharm
---
To get the same level of support for CoffeeScript in PhpStorm (and probably in similar JetBrains IDEs such as WebStorm and PyCharm), simply copy the CoffeeScript plugin directory from a trial version of the latest version of RubyMine:

1.  Install [RubyMine EAP](https://confluence.jetbrains.com/display/RUBYDEV/RubyMine+Preview+and+RC+builds)
2.  Copy the _coffeescript_ directory from _C:\Program Files (x86)\JetBrains\RubyMine 107.261\plugins\_ to _C:\Program Files (x86)\JetBrains\PhpStorm 2.1\plugins\_

A third-party plugin exist and is officially available for the other IDEs, although they probably come with just as little support as the solution described above. Notice that the following plugin is not being actively developed.

*   [CoffeeBrew](https://github.com/netzpirat/coffee-brew#readme)
