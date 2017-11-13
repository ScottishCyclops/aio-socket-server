# AIO Socket Server


## Introduction

This is an npm module designed to greatly simplify the use of socket.io
to communicate with a a served html page.

It will create an Express App, an Http or Https Server and a Socket Server
for you then give you back full control.

Basic usage (see **example.js** file for more):

```javascript
const srv = require("aio-socket-server")({
    port: 8080,
    verbose: true
});

srv.io.on("connection", socket => console.log("connection!));
```


## Installation

run `npm install aio-socket-server`


## Dependencies

This package is based on *Express 4.X* and *socket.io 2.X*.


## Licence

MIT (see **LICENCE** file)
