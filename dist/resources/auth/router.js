"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controller_1 = require("../user/controller");
const controller_2 = require("./controller");
const router = express_1.Router();
// login
router.route('/login').post(controller_2.loginUser);
router.route('/logout').get(controller_2.logoutUser);
router.route('/signup').post(controller_1.createUser);
router.route('/validate-token').get(controller_2.validateLoggedInToken);
// logout??
exports.default = router;
