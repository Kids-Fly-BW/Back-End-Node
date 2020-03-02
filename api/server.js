const express = require("express");

const apiRoutes = require("./apiRoutes");

const configureMiddleware = require("./configure-middleware");

const server = express();

configureMiddleware(server);

server.use("api", apiRoutes);

module.exports = server;
