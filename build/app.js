"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const routes_1 = __importDefault(require("./v1/routes"));
const app = (0, express_1.default)();
// import { createClient } from 'pexels';
// const client = createClient(
//   '563492ad6f9170000100000161e6831e962e4bfdaa9633c2b963b22e'
// );
app.use('/v1/converter', routes_1.default);
app.use('/v1/test/', routes_1.default);
app.use('/v1/pexels', routes_1.default);
exports.default = app;
