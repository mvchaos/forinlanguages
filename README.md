# Send-Air
WebRTC based P2P filesharing app.
[Send-Air](https://sendair.herokuapp.com/)


MKS Legacy Project
Based on ([forinlanguages](https://github.com/forinlanguages/forinlanguages))

## Introduction 

This application allows users to share files over an anonomus P2P connection with WebRTC. No data from sent files is stored anywhere.

## Getting Started

Bower and NPM are used to manage dependencies.
Once they are installed just run the server with node.
```
bower install
npm install
node server/app.js
```

## Choice of Technologies

For this project, we used AngularJS for our front end and Node.js, Express, and MySQL for our server and database.

## Features

- Users can track their upload and download history

## In progress

- 

## Git Workflow

Please refer to the [CONTRIBUTING.md](documentation/CONTRIBUTING.md) file to see our git workflow.

## Style Guide

Please refer to the [STYLE-GUIDE.md](documentation/STYLE-GUIDE.md) file to see our style guide.

## Press Release

## Contributors
- James Youn ([James Youn](https://github.com/eternal44))
- Dan ([Dan](https://github.com/eternal44))
- Darko ([Darko](https://github.com/eternal44))
- Arlen Neylon ([Arlen Neylon](https://github.com/aneylon))

=======
## TESTS
We extracted the following instructions from [Angular
Docs](http://angular.github.io/protractor/#/tutorial).

Check if you have the following.  If you don't: install it first and
run these commands again.

```bash
node --version

java -version
```

Install protractor
```bash
npm install -g protractor
```

Update & start webdriver
```bash
webdriver-manager update <-- if you haven't alreadly updated

webdriver-manager start
```

Start protractor
```bash
protractor client/specs/conf.js
```



#IF YOU DO THIS PROJECT, FIX THE MEMORY LEAK BUG FIRST
