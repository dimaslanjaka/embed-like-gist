"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var axios_1 = __importDefault(require("axios"));
/**
 * fetch source from parsed
 * @param parse parsed object
 * @returns
 */
function fetchSource(parse) {
    return axios_1.default.get(parse.rawFileURL).then(function (res) {
        var codeText = res.data;
        var fullResponse = codeText;
        if (codeText[codeText.length - 1] === '\n') {
            // First remove the ending newline
            codeText = codeText.slice(0, -1);
        }
        var codeTextSplit = codeText.split('\n');
        var startLine = parseInt(String(parse.startLine));
        var endLine = parseInt(String(parse.endLine));
        if (startLine > 0) {
            codeTextSplit = codeTextSplit.slice(startLine - 1, endLine);
        }
        var indicator = false;
        // Strip leading whitespace as otherwise we get pointless whitespace/indentation
        // for code snippets from the middle of functions (#22)
        while (indicator === false) {
            var firstChars = codeTextSplit.filter(function (s) { return s.length > 0; }).map(function (s) { return s[0]; });
            if (new Set(firstChars).size == 1 && [' ', '\t'].includes(firstChars[0])) {
                // If all the lines begin with ' ' or '\t', strip the first char
                codeTextSplit = codeTextSplit.map(function (s) { return s.slice(1); });
            }
            else {
                indicator = true;
            }
        }
        codeText = codeTextSplit.join('\n');
        // Then add the newline back
        codeText = codeText + '\n';
        return {
            /**
             * full raw response
             */
            fullResponse: fullResponse,
            /**
             * splitted result when `#L` exist in url
             */
            result: codeText
        };
    });
}
exports.default = fetchSource;
