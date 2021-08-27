"use strict";
//this is to help me in the creation of token
//a code I can use in the whole app
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateToken = exports.createToken = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
// tell ts it's going to be always a string, never undefined
const JWT_SECRET = process.env.JWT;
function createToken(payload) {
    return jsonwebtoken_1.default.sign(payload, JWT_SECRET);
}
exports.createToken = createToken;
function validateToken(token) {
    return jsonwebtoken_1.default.verify(token, JWT_SECRET);
}
exports.validateToken = validateToken;
