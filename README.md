# Making History

This repository contains a prototype implementation of a joint effort of potsdam based Mr. Deliver Design &  IT agency and the Geschichtsdidaktik Lehrstuhl Essen. This effort should result in the future of education.

# Getting started

## Prerequisites
- Make sure you have the latest Long Term Support Version of [Node](https://nodejs.org/en/) installed. Currently this is `14.17.0`.
- Make sure you have at least version `6.14.0` of npm (Node Package Manager) installed. Usually this comes bundled with Node, so you do not need to take further action here. 

You can check the current versions with typing in the following commands in your terminal.
Notice, that the command starts behind the `%`. 
```
~ % node -v 
v14.16.1
~ % npm -v
6.14.12
```

## Install dependencies

After cloning the repository, open the root folder in your terminal and execute the following command to install all dependencies into the `node_modules` folder. This dependencies only get saved to the local directory and will be available solely within it.

```
making-history-poc % npm install
```

This actually can take some minutes.

## Launch dev server

After installing the dependencies you are ready to launch the local dev server by executing the following command in the root folder of the repository.

```
making-history-poc % npm run serve
```
This should take some time initially. Don't mind, if you encouter some warnings along the compilation process, as long as the final output of this command looks like the following, you are ready to observe the app in your browser.

```
  App running at:
  - Local:   http://localhost:8080/making-history-poc/ 
  - Network: http://192.168.170.37:8080/making-history-poc/

  Note that the development build is not optimized.
  To create a production build, run npm run build.

No issues found.
```
As long as you want the app to run in the browser, you should keep that command running.

## Experience the future of education
Finally, after typing in the URL from above in your web browser, you should be greeted with the subject overview.

![](public/img/icons/Screenshot%202021-06-11%20at%2017.19.39.png)

When altering the codebase you should experience a relatively short re-compile of the app initiated by the detection of a change, and the change should be live after a split second. If a re-compile does not happen, which could be the case when altering simple datafiles like `chapters.ts`, just terminate the development server and launch it again.