// Type definitions for aio-socket-server 1.X
// Project: https://github.com/ScottishCyclops/aio-socket-server
// TypeScript Version: 2.6

import { Server as HttpServer } from "http";
import { Server as HttpsServer } from "https";
import { Express } from "express";
import * as SocketIO from "socket.io";

export = createAio;

declare interface Credentials {
    /**
     * the private key of the  server
     */
    key: string,
    /**
     * the certificate of the server
     */
    cert: string
}

declare interface Options {
    /**
     * the port on which to listen
     * @default 80
     */
    port?: number,

    /**
     * the hostname on which to listen
     * @default localhost
     */
    hostname?: string,

    /**
     * the public directory to serve
     * @default ____dirname__/public
     */
    public?: string,

    /**
     * the credentials if using https
     */
    credentials?: Credentials,

    /**
     * sets the verbosity
     * @default false
     */
    verbose?: boolean
}

declare interface AioServer {
    app: Express,
    server: HttpServer | HttpsServer,
    io: SocketIO.Server,
    port: number,
    hostname: string,
    public: string,
    https: boolean
}

/**
 * Creates a new all-in-one socket server with optional options
 * @param options the optional options
 */
declare function createAio(options?: Options): AioServer;

/**
 * Creates a new all-in-one socket server with a callback and optional options
 * @param callback function to call when the server is running
 * @param options the optional options
 */
declare function createAio(callback: Function, options?: Options): AioServer;
