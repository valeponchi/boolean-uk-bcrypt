"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const adminAuth_1 = __importDefault(require("../../middlewares/adminAuth"));
const controller_1 = require("./controller");
const router = express_1.Router();
router.get('/', adminAuth_1.default, controller_1.getAllUsers);
// router.get('/:id', getOneUser)
//when the user tries to sign up:
router.post('/', controller_1.createUser);
exports.default = router;
