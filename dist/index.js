"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var fetch_1 = __importDefault(require("./fetch"));
var parse_1 = require("./parse");
/**
 * git embed
 * @param url
 * @param options
 * @returns
 */
function git_embed(url, options) {
    var parse = (0, parse_1.parseSource)(url, options);
    var fetch = (0, fetch_1.default)(parse);
    return __assign({ parseResult: parse }, fetch);
}
exports = git_embed;
