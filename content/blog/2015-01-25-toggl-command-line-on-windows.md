---
date: 2015-01-25T09:00:05.000Z
excerpt: 'How to run toggl-cli on Windows (using Git bash):'
published: true
tags:
  - productivity
  - windows
  - toggl
  - cli
  - bash
  - howto
title: Toggl command line on Windows
---
1. Make a directory for user binaries:

   ```shell
   mkdir -p ~/bin
   ```

2. ...and change to it:

   ```shell
   cd ~/bin
   ```

3. Clone the repository into the subdirectory "toggl-cli":

   ```shell
   git clone https://github.com/drobertadams/toggl-cli.git
   ```

4. Install prerequisites ("requests" was not mentioned in the [README](https://github.com/drobertadams/toggl-cli/blob/master/README.md), but did need to be installed on my system with ActiveState Python 2.7):

   ```shelll
   pip install iso8601 pytz requests
   ```

5. Run the program once, don't be afraid when it crashes, this is expected because of the missing configuration file (which it creates during this run):

   ```shell
   python ~/bin/toggl-cli/toggl.py
   ```

6. Edit the configuration file:

   ```shell
   vim ~/.togglrc
   ```

7. Update the line "username" with the "E-mail" and the line "apitoken" with the API token from [your Toggl profile](https://www.toggl.com/app/profile), e.g.:
   
   ![](https://content.screencast.com/users/clausc/folders/Jing/media/2b488de4-9d4d-40da-8c1c-59fabeb598ea/2015-01-25_0941.png)

8. Save and close the configuration file.
  
toggl-cli is now ready for use (you might want to add it to your PATH and change the shebang line to your Python interpreter for ease of use). Some usage examples:

* Start working on a task:

  ```shell
  python ~/bin/toggl-cli/toggl.py start Blogging
  ```

* Stop working on a task:

  ```shell
  python ~/bin/toggl-cli/toggl.py stop
  ```

* Continue working on a task:  

  ```shell
  python ~/bin/toggl-cli/toggl.py continue Blogging
  ```

* View more advanced syntax examples:

  ```shell
  python ~/bin/toggl-cli/toggl.py -h
  ```
