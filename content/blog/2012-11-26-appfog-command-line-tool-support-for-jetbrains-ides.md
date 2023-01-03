---
date: 2012-11-26T10:06:08.000Z
excerpt: If you use AppFog and develop using IntelliJ IDEA, PhpStorm, RubyMine, PyCharm or WebStorm, this command line tool configuration file can make your job a bit easier.
published: true
sidebar: left
status: publish
tags:
  - development
title: AppFog command line tool support for Jetbrains IDEs
---
The next version of IntelliJ IDEA (v12) will have integrated support for CloudFoundry and I guess that means AppFog too, however the current version 11 has no such feature. Fortunately all Jetbrains IDEs have support for command line tools, so I don't have to switch to a terminal or command prompt to run "af" commands - this works out of the box. Since I can't remember all command line options and their syntax, I made a configuration file to enable auto-complete of "af" commands in the Jetbrains IDE command line. If you want to use this, here's how to install it:

1.  I assume you already have AppFog's command line tool installed; if not, follow these simple instructions:  
    [https://docs.appfog.com/getting-started/af-cli#installation](https://docs.appfog.com/getting-started/af-cli#installation)

2.  Make sure the "Command Line Tool Support" plugin is enabled in your IDE:  
    ![Screenshot of 'Plugins' with checked 'Command Line Tool Support'](https://content.screencast.com/users/clausc/folders/Default/media/17f255e5-abd8-4584-bef8-beb3e8d33b42/11.26.2012-10.38.png)

3.  Go to "Command Line Tools Support" in the "Project Settings" area of your IDE settings; click the + icon to add a new framework and choose "Custom Framework" from the dropdown that appears. Enter a name for the framework (e. g. "AppFog") and _af_ for both of the "Tool path" and "Alias" fields. (If _af_ is not in your path, you could also enter the full path into the "Tool path" field.) Finally, click "OK" in the dialog and "Apply" at the bottom of the Settings dialog:  
    ![Screenshot of 'Framework Settings' with name 'AppFog CLI', tool path 'af' and alias 'af'](https://content.screencast.com/users/clausc/folders/Default/media/12aa0b94-dd3b-429f-8593-c690a435220d/11.26.2012-10.44.png)

4.  With the "af" line selected, click the "Edit" icon at the right of the Settings dialog, then **close** the Settings dialog:  
    ![Screenshot of the 'Settings' dialog with highlighted 'pencil' (edit) icon and highlighted 'Close' button](https://content.screencast.com/users/clausc/folders/Default/media/253865c0-0b99-4bcf-a987-7ab29678f7f4/11.26.2012-10.50.png)

5.  The IDE has opened an editor window with an XML file describing the new "custom framework". Replace all contents of this file with the following XML, then save and close the file:  

    ```xml
    <?xml version="1.0" encoding="UTF-8"?>
    <framework xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="schemas/frameworkDescriptionVersion1.1.xsd" name="AppFog" invoke="af" alias="af" enabled="true" version="1">
    <command>
    <name>target</name>
    <help>Reports current target or sets a new target</help>
    <params>url[=null]</params>
    </command>
    <command>
    <name>login</name>
    <help>Login</help>
    <params>email[=null] --email[=null] --passwd[=null]</params>
    </command>
    <command>
    <name>info</name>
    <help>System and account information</help>
    </command>
    <command>
    <name>apps</name>
    <help>List deployed applications</help>
    </command>
    <command>
    <name>push</name>
    <help>Create, push, map, and start a new application</help>
    <params>appname[=null]</params>
    </command>
    <command>
    <name>push</name>
    <help>Push application to specificed infrastructure</help>
    <params>appname --infra[=null]</params>
    </command>
    <command>
    <name>push</name>
    <help>Push application from specified path</help>
    <params>appname --path[=null]</params>
    </command>
    <command>
    <name>push</name>
    <help>Set the url for the application</help>
    <params>appname --url[=null]</params>
    </command>
    <command>
    <name>push</name>
    <help>Set the expected number &lt;N&gt; of instances</help>
    <params>appname --instances N</params>
    </command>
    <command>
    <name>push</name>
    <help>Set the memory reservation for the application</help>
    <params>appname --mem M</params>
    </command>
    <command>
    <name>push</name>
    <help>Do not auto-start the application</help>
    <params>appname --no-start</params>
    </command>
    <command>
    <name>pull</name>
    <help>Download last pushed source of &lt;appname&gt; to [path]</help>
    <params>appname path[=null]</params>
    </command>
    <command>
    <name>start</name>
    <help>Start the application</help>
    <params>appname</params>
    </command>
    <command>
    <name>stop</name>
    <help>Stop the application</help>
    <params>appname</params>
    </command>
    <command>
    <name>restart</name>
    <help>Restart the application</help>
    <params>appname</params>
    </command>
    <command>
    <name>delete</name>
    <help>Delete the application</help>
    <params>appname</params>
    </command>
    <command>
    <name>update</name>
    <help>Update the application bits</help>
    <params>appname --path[=null]</params>
    </command>
    <command>
    <name>mem</name>
    <help>Update the memory reservation for an application</help>
    <params>appname memsize[=null]</params>
    </command>
    <command>
    <name>map</name>
    <help>Register the application to the url</help>
    <params>appname url</params>
    </command>
    <command>
    <name>unmap</name>
    <help>Unregister the application from the url</help>
    <params>appname url</params>
    </command>
    <command>
    <name>instances</name>
    <help>Scale the application instances up or down</help>
    <params>appname num|delta</params>
    </command>
    <command>
    <name>crashes</name>
    <help>List recent application crashes</help>
    <params>appname</params>
    </command>
    <command>
    <name>crashlogs</name>
    <help>Display log information for crashed applications</help>
    <params>appname</params>
    </command>
    <command>
    <name>logs</name>
    <help>Display log information for the application</help>
    <params>appname --all[=null]</params>
    </command>
    <command>
    <name>files</name>
    <help>Display directory listing or file download for path</help>
    <params>appname path[=null] --all[=null]</params>
    </command>
    <command>
    <name>stats</name>
    <help>Display resource usage for the application</help>
    <params>appname</params>
    </command>
    <command>
    <name>instances</name>
    <help>List application instances</help>
    <params>appname</params>
    </command>
    <command>
    <name>env</name>
    <help>List application environment variables</help>
    <params>appname</params>
    </command>
    <command>
    <name>env-add</name>
    <help>Add an environment variable to an application</help>
    <params>appname variable value</params>
    </command>
    <command>
    <name>env-del</name>
    <help>Delete an environment variable from an application</help>
    <params>appname variable</params>
    </command>
    <command>
    <name>services</name>
    <help>Lists of services available and provisioned</help>
    </command>
    <command>
    <name>create-service</name>
    <help>Create a provisioned service</help>
    <params>service --name[=null] --bind[=null]</params>
    </command>
    <command>
    <name>create-service</name>
    <help>Create a provisioned service on a specified infrastructure</help>
    <params>service --infra[=null]</params>
    </command>
    <command>
    <name>create-service</name>
    <help>Create a provisioned service and assign it &lt;name&gt;</help>
    <params>service name</params>
    </command>
    <command>
    <name>create-service</name>
    <help>Create a provisioned service and assign it &lt;name&gt;, and bind to &lt;app&gt;</help>
    <params>service name app</params>
    </command>
    <command>
    <name>delete-service</name>
    <help>Delete a provisioned service</help>
    <params>servicename[=null]</params>
    </command>
    <command>
    <name>bind-service</name>
    <help>Bind a service to an application</help>
    <params>servicename appname</params>
    </command>
    <command>
    <name>unbind-service</name>
    <help>Unbind service from the application</help>
    <params>servicename appname</params>
    </command>
    <command>
    <name>clone-services</name>
    <help>Clone service bindings from &lt;src-app&gt; application to &lt;dest-app&gt;</help>
    <params>src-app dest-app</params>
    </command>
    <command>
    <name>user</name>
    <help>Display user account information</help>
    </command>
    <command>
    <name>passwd</name>
    <help>Change the password for the current user</help>
    </command>
    <command>
    <name>logout</name>
    <help>Logs current user out of the target system</help>
    </command>
    <command>
    <name>add-user</name>
    <help>Register a new user (requires admin privileges)</help>
    <params>--email[=null] --passwd[=null]</params>
    </command>
    <command>
    <name>delete-user</name>
    <help>Delete a user and all apps and services (requires admin privileges)</help>
    <params>user</params>
    </command>
    <command>
    <name>runtimes</name>
    <help>Display the supported runtimes of the target system</help>
    </command>
    <command>
    <name>frameworks</name>
    <help>Display the recognized frameworks of the target system</help>
    </command>
    <command>
    <name>infras</name>
    <help>Display the available infrastructures</help>
    </command>
    <command>
    <name>aliases</name>
    <help>List aliases</help>
    </command>
    <command>
    <name>alias</name>
    <help>Create an alias for a command</help>
    <params>alias command</params>
    </command>
    <command>
    <name>unalias</name>
    <help>Remove an alias</help>
    <params>alias</params>
    </command>
    <command>
    <name>targets</name>
    <help>List known targets and associated authorization tokens</help>
    </command>
    <command>
    <name>help</name>
    <help>Get general help or help on a specific command</help>
    <params>command[=null]</params>
    </command>
    <command>
    <name>help options</name>
    <help>Get help on available options</help>
    </command>
    </framework>
    ```

6.  Click "Tools" > "Run Command..." to open the command line pane:  
    ![Screenshot of expanded 'Tools' menu with menu item 'Run Command...' highlighted](https://content.screencast.com/users/clausc/folders/Default/media/dbc679a7-29fc-4d2a-b4d2-1bcad9a8bce7/11.26.2012-10.59.png)

7.  Type _af_ and press Space to get a list of AppFog commands. The list narrows down as you continue typing, or you can choose the desired command from the list using the mouse or arrow and Enter keys:  
    ![Screenshot of 'Run Command...' box with 'af' entered and autocomplete items appearing](https://content.screencast.com/users/clausc/folders/Default/media/692f650b-725d-4565-b250-640af57401b9/11.26.2012-11.02.png)
