# Codementor NodeJS
[![Build Status](https://travis-ci.org/TommyAlmeida/codementor-nodejs.svg?branch=master)](https://travis-ci.org/TommyAlmeida/codementor-nodejs)
[![Coverage Status](https://coveralls.io/repos/github/TommyAlmeida/codementor-nodejs/badge.svg?branch=master)](https://coveralls.io/github/TommyAlmeida/codementor-nodejs?branch=master)
[![npm version](https://badge.fury.io/js/codementor-nodejs.svg)](https://badge.fury.io/js/codementor-nodejs)
![I'm a Ninja Developer)](https://img.shields.io/badge/Ninja%20Developer-True-blue.svg)


This is a wrapper for the [Codementor API](https://dev.codementor.io/docs) that runs on Node.JS.

All methods require authentication, which can be done using these flow:

* [Client credentials flow](http://tools.ietf.org/html/rfc6749#section-4.4) (Application-only authentication)
  

## Features 

The library includes the following functions:

  * Scheduled Sessions


## Installation

    $ npm install codementor-nodejs --save


## Usage

```javascript
//Get the npm package
const CodementorApi = require('codementor-nodejs');

//Create a new instance of the CodementorApi with your api key
const codementor = new CodementorApi("your_api_key"); 
```

#### Methods
* confirmSession(scheduled_session_id)
* declineSession(scheduled_session_id)
* rescheduleSession(scheduled_session_id)