"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const index_1 = __importDefault(require("./v1/routes/index"));
const notfoundMiddleware_1 = require("./v1/middleware/notfoundMiddleware");
const app = (0, express_1.default)();
app.use('/v1/converter', index_1.default);
app.use('/v1/converter', index_1.default);
app.use('/v1/converter', index_1.default);
app.use('*', notfoundMiddleware_1.pageNotFound404);
exports.default = app;
