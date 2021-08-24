"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router_1 = __importDefault(require("./resources/user/router"));
const router_2 = __importDefault(require("./resources/auth/router"));
// import cors from "cors"
const cors_1 = __importDefault(require("cors"));
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const app = express_1.default();
// Middlewares
app.use(logger('dev'));
app.use(express_1.default.json());
app.use(cookieParser());
app.use(cors_1.default());
// app.options("*", cors())
// App routes
app.use(router_2.default);
app.use('/users', router_1.default);
app.all('*', (req, res) => {
    res.status(404).json('No route match');
});
//CONNECT THE SERVER
app.listen(3030, () => {
    console.log('The server is connected!');
});
module.exports = app;
