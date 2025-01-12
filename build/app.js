"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importStar(require("express"));
const index_1 = __importDefault(require("./src/v1/routes/index"));
const notfoundMiddleware_1 = require("./src/v1/middleware/notfoundMiddleware");
const logger_middleware_1 = __importDefault(require("./src/v1/middleware/logger.middleware"));
const cache_middleware_1 = __importDefault(require("./src/v1/middleware/cache.middleware"));
const app = (0, express_1.default)();
app.use((0, express_1.urlencoded)({ extended: true }));
app.use(express_1.default.json());
app.use('/v1/converter', cache_middleware_1.default, logger_middleware_1.default, index_1.default);
app.use('*', notfoundMiddleware_1.pageNotFound404);
exports.default = app;
