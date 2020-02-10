"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ethereumjs_util_1 = require("ethereumjs-util");
var toHex_1 = require("./toHex");
/* HISTORY */
var BlockHashWitness = /** @class */ (function () {
    function BlockHashWitness(number, hash) {
        this.opcode = new ethereumjs_util_1.BN(0x40);
        this.abiTypes = ['uint256', 'bytes32'];
        this.number = number;
        this.hash = hash;
    }
    Object.defineProperty(BlockHashWitness.prototype, "abiParams", {
        get: function () {
            return [this.number, this.hash].map(toHex_1.default);
        },
        enumerable: true,
        configurable: true
    });
    return BlockHashWitness;
}());
exports.BlockHashWitness = BlockHashWitness;
//# sourceMappingURL=history.js.map