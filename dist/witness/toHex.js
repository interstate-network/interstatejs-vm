"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ethereumjs_util_1 = require("ethereumjs-util");
function toHex(x) {
    if (ethereumjs_util_1.BN.isBN(x))
        return "0x" + x.toString('hex');
    return ethereumjs_util_1.bufferToHex(x);
}
exports.default = toHex;
//# sourceMappingURL=toHex.js.map