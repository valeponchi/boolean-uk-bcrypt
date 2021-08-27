"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUser = exports.getAllUsers = void 0;
// I'm importing from service my patched version of prisma model
const service_1 = __importDefault(require("./service"));
const authGenerator_1 = require("../../utils/authGenerator");
//GET ALL
const getAllUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const allUsers = yield service_1.default.findMany();
    res.json({ data: allUsers });
});
exports.getAllUsers = getAllUsers;
// GET ONE
// export async function getOneUser(req: Request, res: Response) {
// 	const id = req.params
// 	const oneUser = await userClient.findUnique({
// 		where: { id: parseInt(id) } })
//  res.json( { data: oneUser})
// }
//CREATE ONE
//we hash the password here
const createUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const newUser = req.body;
    // This is my modified create version, with the password hashing!
    const savedUser = yield service_1.default.createWithHash(newUser);
    const token = authGenerator_1.createToken({ id: savedUser.id, username: savedUser.username });
    //sending token to frontend but not available in browser/js
    // in the frontend-fetch=options you have to write credentional: include
    res.cookie('token', token, { httpOnly: true });
    res.json({ data: { savedUser: savedUser.username, bio: savedUser.bio } });
});
exports.createUser = createUser;
