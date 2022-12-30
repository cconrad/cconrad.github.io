---
date: 2013-04-09T13:33:16.000Z
excerpt: Here's a simple Jenkins job that backs up your Jenkins configuration (i.e. job definitions) to Amazon S3.
published: true
tags:
  - backup
  - jenkins
  - s3
  - system-administration
title: Backup Jenkins configuration to S3
---
## Dependencies

*   [S3 Plugin](https://wiki.jenkins-ci.org/display/JENKINS/S3+Plugin)

## Global configuration

1.  Set up a S3 profile at [jenkinshost/configure](#).

## Job configuration

1.  <span style="line-height: 13px;">Create a new free-style project and give it a name.</span>
2.  (Optional) I recommend to check "Discard Old Builds" and choose the following settings to save disk space:  
    <span style="text-decoration: underline;">Strategy:</span> Log Rotation  
    <span style="text-decoration: underline;">Days to keep builds:</span> (empty)  
    <span style="text-decoration: underline;">Max # of builds to keep:</span> (empty)  
    <span style="text-decoration: underline;">Days to keep artifacts:</span> 1  
    <span style="text-decoration: underline;">Max # of builds to keep with artifacts:</span> 1
3.  Set a build trigger of your choice; I use this:  
    <span style="text-decoration: underline;">Build periodically - Schedule:</span> H H(0-5) * * *
4.  Add an "Execute shell" build step with the following command:
  
    ```shell
    # Delete all files in the workspace
    rm -rf *
    # Create a directory for the job definitions
    mkdir -p $BUILD_ID/jobs
    # Copy global configuration files into the workspace
    cp $JENKINS_HOME/*.xml $BUILD_ID/
    # Copy keys and secrets into the workspace
    cp $JENKINS_HOME/identity.key $BUILD_ID/
    cp $JENKINS_HOME/secret.key $BUILD_ID/
    cp $JENKINS_HOME/secret.key.not-so-secret $BUILD_ID/
    cp -r $JENKINS_HOME/secrets $BUILD_ID/
    # Copy user configuration files into the workspace
    cp -r $JENKINS_HOME/users $BUILD_ID/
    # Copy job definitions into the workspace
    rsync -am --include='config.xml' --include='*/' --prune-empty-dirs --exclude='*' $JENKINS_HOME/jobs/ $BUILD_ID/jobs/
    # Create an archive from all copied files (since the S3 plugin cannot copy folders recursively)
    tar czf $BUILD_ID.tar.gz $BUILD_ID/
    # Remove the directory so only the archive gets copied to S3
    rm -rf $BUILD_ID
    ```

5.  Create a post-build action of type "Publish artifacts to S3 Bucket" and configure as follows:  
    <span style="text-decoration: underline;">S3 profile:</span> Choose the profile from the global configuration  
    <span style="text-decoration: underline;">Source:</span> **  
    <span style="text-decoration: underline;">Destination bucket:</span> Enter the name of the bucket where you want the archive to go  
    Note: Even though it says "Destination bucket", it is possible to enter a bucket name AND path, the S3 plugin will create the directory or use it if it already exists.

## S3 configuration

The setup described above creates a new backup each day. I like being able to go back in history, e. g. if the accidental deletion of a job was discovered after several days. I'd recommend to use a lifecycle policy on the bucket to remove old backups after a desired number of days.

Alternatively one could achieve a similar effect by enabling versioning on the bucket and change the archive's file name to a fixed value by changing the _tar_ command in the shell script:  
`tar czf jenkins-configuration.tar.gz $BUILD_ID/`
