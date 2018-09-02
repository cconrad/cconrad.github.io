---
author:
  display_name: Claus Conrad
  email: webmaster@clausconrad.com
  login: claus
  url: ''
author_email: webmaster@clausconrad.com
author_login: claus
categories:
- Uncategorized
- System administration
comments: true
date: 2013-09-14 15:08:51 +0000
date_gmt: 2013-09-14 13:08:51 +0000
header: false
layout: page
published: true
sidebar: left
status: publish
tags: []
teaser: "The kids asked me to install a car mod on their Minecraft server. Now, I suck at Minecraft server administration (probably because I don't like or play the game myself), so here are some notes in case I need to reinstall this later."
title: Cars in Minecraft - for dummies
wordpress_id: 588
wordpress_url: http://www.clausconrad.com/?p=588
---
1. The server needs to run CraftBukkit for this to work. In the server's controlpanel I switched the Minecraft version to CraftBukkit 1.6.2-R1.0. (On another server I tried the same method with CraftBukkit 1.6.2-R0.1 and it worked there too. Not sure if earlier versions are supported.)
2. Install dependencies:
  * [ProtocolLib](http://dev.bukkit.org/bukkit-plugins/protocollib/)
  * [Vault](http://dev.bukkit.org/bukkit-plugins/vault/)
  * [PermissionsEx (PEX)](http://dev.bukkit.org/bukkit-plugins/permissionsex/) (or another permissions system)
3. Install [uCars](http://dev.bukkit.org/bukkit-plugins/ucars/)
4. Restart the server
5. At the server console, give permissions to the users who should be able to use it:  
   `/pex user add ucars.*`

The users should now be able to place a minecart, enter it, and drive around in it using the same keys used for riding a horse.

## See also

* [PEX permission commands](https://github.com/PEXPlugins/PermissionsEx/wiki/Commands)
* [Videos of uCars in action](http://dev.bukkit.org/bukkit-plugins/ucars/pages/videos/)