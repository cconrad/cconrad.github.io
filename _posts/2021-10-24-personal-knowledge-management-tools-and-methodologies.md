---
author:
  display_name: Claus Conrad
  email: webmaster@clausconrad.com
  login: claus
  url: ''
author_email: webmaster@clausconrad.com
author_login: claus
categories:
  - Personal
comments: true
date: 2021-10-24 14:10:41 +02:00
date_gmt: 2021-10-24 12:10:41 +0000
excerpt: I am looking into organizing my notes in a better way, here is a collection of the tools and related methodologies I have come across so far.
header: false
layout: page.liquid
published: true
sidebar: left
status: publish
tags:
  - pkm
teaser: I am looking into organizing my notes in a better way, here is a collection of the tools and related methodologies I have come across so far.
title: Personal knowledge management tools and methodologies
---
## Hierarchical knowledge silos
### Strengths
* Easy to get started; user-friendly, intuitive UX
* Built-in synchronization
* Freemium
### Weaknesses
* Hard to get data out (proprietary XML etc.)
* Do not impose/enforce structured note taking
### Examples
* Microsoft OneNote ([for Windows 10+](https://www.microsoft.com/en-us/p/onenote-for-windows-10/9wzdncrfhvjl?activetab=pivot:overviewtab), [for Office 365/2019+](https://www.onenote.com/Download))
  * Proprietary software and storage format
  * Limited API available (Office version only)
  * Primary copy stored in the cloud (OneDrive or SharePoint)
  * Collaborate on "Notebook" level
* [Evernote](https://evernote.com/)
  * Proprietary software and storage format
* [Atlassian Confluence](https://www.atlassian.com/software/confluence)
  * Proprietary software and storage format
  * Collaborate on "Space" or "Page" (item) level
* [Microsoft SharePoint](https://www.microsoft.com/en-us/microsoft-365/sharepoint/collaboration)
  * Proprietary software and storage format
  * Collaborate on "Space" or "Page" (item) level
* [Google Keep](https://keep.google.com/)
  * Proprietary software and storage format
  * Stored in the cloud (only)

## Graph-based knowledge silos
### Examples
* [Notion](https://www.notion.so/)
* [The Brain](https://www.thebrain.com/)
* [Coda](https://coda.io/)

## Local-first, graph-based knowledge management apps
### Usual features
* Notes often stored locally in a non-XML text format (Markdown etc.)
* Graph-based navigation (links, tags)
* Block references

### Examples
* [Dendron](https://www.dendron.so/)
  * Open-source ([AGPL 3.0](https://github.com/dendronhq/dendron/blob/master/LICENSE.md))
  * Based on [VS Code](https://code.visualstudio.com/)
  * Selective publication
    * Static pages, probably hydrated as Next.js app?
    * Not SEO-friendly URLs (UUIDs)
  * Opinionated: Hierarchy-first (canonical addresses with optional schemas), graph-based second
  * No built-in synchronization (could use Git ([GitHub](https://www.github.com/), [Gitlab](https://www.gitlab.com/), [Atlassian Bitbucket](https://www.bitbucket.org/) etc.), [Syncthing](https://syncthing.net/), [Dropbox](https://www.dropbox.com/), etc.)
* [Roam Research](https://roamresearch.com/)
  * Proprietary, subscription-based
* [Foam](https://foambubble.github.io/foam/)
  * Based on [VS Code](https://code.visualstudio.com/)
* [Athens Research](https://athens-research.webflow.io/)
  * Open-source ([Eclipse Public License 1.0](https://github.com/athensresearch/athens/blob/main/LICENSE)) (open-core?)
  * Stores notes in a datascript database
  * Freemium
* [Obsidian](https://obsidian.md/)
* [Org-roam](https://www.orgroam.com/)
  * Open-source ([GPL 3.0](https://github.com/org-roam/org-roam/blob/master/LICENSE))
  * Based on Emacs

## Methodologies
* [Zettelkasten](https://zettelkasten.de/posts/overview/)
* [PARA](https://fortelabs.co/blog/para/)
* Linking Your Thinking (LYT) ([workshop](https://www.linkingyourthinking.com/), [kit](https://www.linkingyourthinking.com/lyt-kit), [YouTube](https://www.youtube.com/channel/UC85D7ERwhke7wVqskV_DZUA/featured))
* [Hierarchy-first](https://www.kevinslin.com/notes/3dd58f62-fee5-4f93-b9f1-b0f0f59a9b64/)
* Building a Second Brain ([workshop](https://www.buildingasecondbrain.com/))
