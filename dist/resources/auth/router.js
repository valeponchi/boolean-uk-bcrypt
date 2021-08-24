"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controller_1 = require("./controller");
const router = express_1.Router();
// login
router.route('/login').post(controller_1.loginUser);
// logout??
exports.default = router;
