"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var pinGenerator = function (length) {
    if (length === void 0) { length = 4; }
    if (length <= 0)
        throw new Error('Cannot generate pin of length less than or equal to 0');
    var l = Math.pow(10, length);
    return (Math.floor(Math.random() * l) + l).toString().substring(1);
};
exports.default = pinGenerator;
