"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (req, res, next) => {
    const { role } = req.currentUser;
    if (role === 'admin') {
        next();
    }
    else {
        res.status(403).json({ error: "You're not an admin!" });
    }
};
