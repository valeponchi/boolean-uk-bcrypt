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
exports.createPost = exports.getAllPosts = void 0;
const database_1 = __importDefault(require("../../utils/database"));
function getAllPosts(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const currentUser = req.currentUser;
        const posts = yield database_1.default.post.findMany({
            where: { user: { id: currentUser.id } },
            include: { user: { select: { username: true } } },
        });
        res.json({ data: posts });
    });
}
exports.getAllPosts = getAllPosts;
// creating a post only with the logged in user
function createPost(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const currentUser = req.currentUser;
        const { imageUrl, text } = req.body;
        const post = yield database_1.default.post.create({
            data: {
                imageUrl,
                text,
                user: { connect: { id: currentUser.id } },
            },
        });
        res.json({ data: post });
    });
}
exports.createPost = createPost;
