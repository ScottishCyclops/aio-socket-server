module.exports = (callback, options) => {
    // the real arguments
    let opt = null;
    // will there be a callback
    let cb = false;

    // sets the options depending on the given arguments
    if (typeof callback === "function") {
        opt = options || {};
        cb = true;
    } else {
        opt = callback || {};
    }

    const port = opt.port || 80;
    const hostname = opt.hostname || "localhost";
    const public = opt.public || __dirname + "/public";

    const express = require("express");
    const app = express();

    let server = null;
    // is the server using https
    let https = false;

    // if we are given credentials, then we use https
    if (opt.credentials) {
        server = require("https").createServer(opt.credentials, app);
        https = true;
    } else {
        server = require("http").createServer(app);
    }

    const io = require("socket.io").listen(server);

    app.use(express.static(public));

    // lauch the server
    server.listen(port, hostname, () => {
        if (opt.verbose) {
            console.log("Server listening on",
            `http${https ? "s" : ""}://${hostname}:${port}/`);
        }

        if (cb) {
            callback();
        }
    });

    return {
        app,
        server,
        io,
        port,
        hostname,
        public,
        https
    };
}
