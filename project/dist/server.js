"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var path = require("path");
var app = (0, express_1.default)();
app.use(express_1.default.static(path.join(__dirname, './build')));
app.get('/', function (req, res) {
    res.send(express_1.default.static(path.join(__dirname, './build/index.html')));
});
app.listen('2080', function () {
    console.log("server 2080");
});

//실행안됨 npx tsc server.ts 하면 오류뜸
