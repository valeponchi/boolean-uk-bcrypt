"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controller_1 = require("./controller");
const router = express_1.Router();
router.get('/', controller_1.getAllUsers);
//when the user tries to sign up:
router.post('/', controller_1.createUser);
exports.default = router;
