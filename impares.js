var server = require("./server");
var router = require("./router");
var handlers = require("./handlers");

var handlersA = {};
handlersA["/"] = handlers.impares;


server.start(router, handlersA);
