const srv = require("./aio-socket-server")({
    port: 8080,
    verbose: true
});

srv.io.on("connection", socket => {
    console.log(socket.handshake.address, "connected");

    socket.once("disconnect", () => {
        console.log(socket.handshake.address, "disconnected");
    });
});
