"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// import _ from is what brings the @types
const express_1 = __importDefault(require("express"));
//import routers
const router_1 = __importDefault(require("./resources/user/router"));
const router_2 = __importDefault(require("./resources/auth/router"));
const router_3 = __importDefault(require("./resources/posts/router"));
const loginAuth_1 = __importDefault(require("./middlewares/loginAuth"));
const cors_1 = __importDefault(require("cors"));
//import with require
const cookieParser = require('cookie-parser');
const morgan = require('morgan');
//create the server
const app = express_1.default();
// Routes and middlewares run from top to bottom in the order you call them herev
// Middlewares
app.use(morgan('dev'));
app.use(express_1.default.json());
app.use(cookieParser());
app.use(cors_1.default({ origin: 'http://localhost:3001', credentials: true }));
// app.use((req, res, next) => {
// 	//I am receiving the token from the frontend
// 	const token = req.cookies.token
// 	// if (token) {
// 	// }
// })
// App routes
/*
  REMINDER
  Routes and middlewares run from top to bottom in the order you call them here
*/
// This is NOT under login protection
app.use(router_2.default);
// This is your gate keeper to make sure the user is logged in!
// Any route after this one will be protected by login!
app.use(loginAuth_1.default);
app.use('/users', router_1.default);
app.use('/posts', router_3.default);
app.all('*', (req, res) => {
    res.status(404).json('No route match');
});
//CONNECT THE SERVER
app.listen(3030, () => {
    console.log('The server is connected!');
});
module.exports = app;
