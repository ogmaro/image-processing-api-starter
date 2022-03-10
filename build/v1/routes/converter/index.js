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
const express_1 = require("express");
const sharpHandler_1 = __importDefault(require("../../utilities/sharpHandler"));
const converter = (0, express_1.Router)();
// convert image using filesystem
converter.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    sharpHandler_1.default.file(req, res);
}));
// convert image using pixels ID
converter.post('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    sharpHandler_1.default.ID(req, res);
}));
// convert image using image link
converter.get('/link', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    sharpHandler_1.default.link(req, res);
}));
exports.default = converter;
