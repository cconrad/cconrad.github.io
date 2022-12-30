---
date: 2013-12-25T12:09:43.000Z
excerpt: 'A quick tip for conveniently launching applications using the Windows key plus another key in Xfce4:'
published: true
tags:
  - productivity
  - xfce
  - keyboard
  - whisker-menu
  - system-administration
title: Using Windows key combinations in Xfce
---
If you like me are coming to Xfce from a Windows background, you are likely used to opening the applications menu using your meta key (often called Windows key because of its symbol). This can easily be achieved in Xfce like so:

* You need to use "Whisker menu", a plugin for Xfce4, NOT the applications menu that ships with Xfce. Fortunately this is easy to install using your package manager, and several distributions now install Whisker menu as the default menu for Xfce4 (Manjaro, Mint, probably others). After installing the plugin, add it to a panel like you would with any other panel item, and remove the original applications menu.
* In the keyboard settings applet, bind the command "xfce4-popup-whiskermenu" to the Windows key (which will show as "Super L" - that's fine).

So far, so good - but what about combinations? Personally I like to launch my file manager using Win+E and so on. We can bind the applications using the keyboard applet as with the shortcut above, but this leaves one problem: the initial keypress of the Windows key, followed by the letter defined for the application shortcut, will open the Whisker menu AND the application bound to
the key combination.

Whisker menu can be closed by pressing Escape, but it's a bit of a hassle and feels weird. In order to resolve this, create a shell script that launches your application, followed by running the command "xfce4-popup-whiskermenu". Yes, this is the same command used above to open the menu - with the menu already open, this command will instead close Whisker menu.

## Examples

### Launching a calculator with Win+C

~/bin/whisker-calculator.sh

```shell
galculator &
xfce4-popup-whiskermenu &
```

### Launching a file manager with Win+E

~/bin/whisker-filemanager.sh

```shell
spacefm &
xfce4-popup-whiskermenu &
```

### Launching a terminal with Win+R

cat ~/bin/whisker-terminal.sh

```shell
lxterminal &
xfce4-popup-whiskermenu &
```

Don't forget that you need to bind your new script to the desired shortcut, as described above for opening the Whisker menu.
