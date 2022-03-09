"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function ConvertToNumber(arg) {
    const value = arg;
    return value ? value : 320;
}
// test if it a string, number or undefined
exports.default = ConvertToNumber;
