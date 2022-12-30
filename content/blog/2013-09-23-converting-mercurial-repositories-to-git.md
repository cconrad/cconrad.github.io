---
date: 2013-09-23T09:06:13.000Z
excerpt: 'How to convert Mercurial (hg) repos to Git, including all commits and history:'
published: true
tags:
  - mercurial
  - git
  - hg
  - scm
  - development
title: Converting Mercurial repositories to Git
---
1. Install Mercurial 1.7.5. Later versions may work, but that's what I use.
2. Install [hg-git](https://hg-git.github.io/) (a Mercurial extension). I'm not exactly sure what version I use, all I can say is that the version does matter, different hg-git versions work (or not) with different Mercurial versions. A link to more information about finding the right combination is at the bottom of the hg-git page.
3. Install git (latest version is fine).
4. Create a "bare" git repository, like this:

   ```shell
   git init --bare myrepo.git
   ```

5. "Push" the hg repo to the git repo:

   ```shell
   hg push /path/to/myrepo.git
   ```

6. If everything went well, you can now clone the Git repo to get your files back:  

   ```shell
   git clone /path/to/myrepo.git myrepo
   ```
