"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ethereumjs_util_1 = require("ethereumjs-util");
var toHex_1 = require("./toHex");
/* MACHINE */
var GasWitness = /** @class */ (function () {
    function GasWitness(gas) {
        this.opcode = new ethereumjs_util_1.BN(0x5a);
        this.abiTypes = ['uint256'];
        this.gas = gas;
    }
    Object.defineProperty(GasWitness.prototype, "abiParams", {
        get: function () {
            return [toHex_1.default(this.gas)];
        },
        enumerable: true,
        configurable: true
    });
    return GasWitness;
}());
exports.GasWitness = GasWitness;
//# sourceMappingURL=machine.js.map