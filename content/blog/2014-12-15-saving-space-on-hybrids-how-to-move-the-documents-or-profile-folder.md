---
date: 2014-12-15T18:08:21.000Z
excerpt: >-
  If you are the owner of a Windows tablet, hybrid or "2-in-1" computer, you know how easy it can be to fill its (usually small) hard drive with downloaded files, documents, pictures or application data. If your device sports a SD card slot you might have considered moving your Documents or user profile there. While this is possible, there are several methods to achieve this goal. In this post I try to explore the advantages and disadvantages of different approaches to saving precious hard drive
  space by storing some of your data on the SD card (or other portable drive).
published: true
tags:
  - windows
  - system-administration
title: 'Saving space on hybrids: how to move the Documents or profile folder'
---
Before using any of the methods described below, consider:

### General advantages

* Reinstalling Windows is easier if you can simply format the internal drive and know that your data is safe on the SD card.

* Moving a portable drive between computers is a fast way of transferring lots of data.

* The SD card is less likely to break in an accident than the internal drive.
  
### General disadvantages

* Your SD card is likely slower than your hard drive (even eMMC type drives), so if your documents are large or you frequently sync/copy them elsewhere, you might have to live with a decrease in performance.
  
Okay, so you have decided to move (some of) your data to an SD card or other portable drive. These are the four common approaches to do this:

## Add more folders to your library/libraries

This is one of the easiest ways to regain space on your C: drive, and the one best supported by Microsoft.

To do this, you simply create a folder for either documents, music, pictures or videos on the SD card, then include the new location in the library.

### Advantages

* Good support - the way the operating system is meant to be used

* Easy
  
### Disadvantages

* You need to remember to save new files in the right location

* Only works for documents, music, pictures and videos (libraries)

## Redirect folders from your profile to other locations

  
This method works for a few more folders than the one above. It is also pretty well supported by Microsoft and has existed since the days of Windows XP.

To use this method, you right-click one or more folders inside your user profile (e. g. "My Documents"), select the Location tab, and select a new folder located on the portable drive.

To read more about this approach, see [Redirect a folder to a new location](https://docs.microsoft.com/en-us/windows-server/storage/folder-redirection/folder-redirection-rup-overview) at microsoft.com.

### Advantages

* Easy

* Good support - has been in Windows for a long time
  
### Disadvantages

* Only works for some folders beneath the user profile directory, not all of them
  
## The registry hack

This method is not really a hack, but I call it this way because it isn't supported by Microsoft, as far as I know.

This involves editing the registry and is likely to go wrong, if you already have data in your user profile directory.

To read more about this approach, [click
here](https://www.nextofwindows.com/how-to-change-user-profile-default-location-in-windows-7/). While it says "Windows 7" in the linked article, this should also work on newer versions - but be sure to read the disadvantages below before considering it.

### Advantages

* Moves all user profiles at the same time - no need to repeat for each user, if several people use your PC

* Also moves application data etc.
  
### Disadvantages

* Not supported by Microsoft

* Can break security updates, regular updates, hotfixes, service packs and upgrading to new versions of Windows
  
## Symbolic links

This method involves moving the directory with all user profiles (e.g. _C:\Users_) outside of Windows (e.g. in rescue mode) and creating a symbolic link from the old directory to the new one.

To read more about this approach, see [How To Change User Profile Location in Windows 8 without Registry Hack](https://www.nextofwindows.com/how-to-change-user-profile-location-in-windows-8-without-registry-hack/). While the linked article refers to Windows 8, it should also work with earlier versions of
Windows, down to Vista.

**Tip:**

If you decide to use this method and the xcopy command (as detailed in the post linked to above) fails for some reason, you will have to fix the problem, restart the copy process and overwrite all the files that had already been copied until the point of failure. Instead of using the command _xcopy /e /k
/o /h /b_ from the article, I used this similar command (which skips already copied files when run again, saving potentially lots of time):

```shell
robocopy c:\users d:\users /mir /copyall /sl /x /v
```

### Advantages

* Can move all user profiles at the same time - no need to repeat for each user, if several people use your PC

* Also moves application data etc.
  
### Disadvantages

* Not supported by Microsoft

* Needs to be run from the command line during rescue mode, or similar
  
I hope this post was helpful when deciding on whether to move (some of) the data from your tablet, hybrid or other device running Windows to a portable drive and selecting the right approach for your purpose. Please let me know by commenting below what worked for you (or didn't).
