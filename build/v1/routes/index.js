"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const converter_1 = __importDefault(require("./converter"));
const routes = (0, express_1.Router)();
routes.use('/', converter_1.default);
exports.default = routes;
