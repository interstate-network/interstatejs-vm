"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ethereumjs_util_1 = require("ethereumjs-util");
var toHex_1 = require("./toHex");
/* STORAGE */
var SloadWitness = /** @class */ (function () {
    function SloadWitness(slot, value) {
        this.opcode = new ethereumjs_util_1.BN(0x54);
        this.abiTypes = ['uint256', 'uint256'];
        this.slot = slot;
        this.value = value;
    }
    Object.defineProperty(SloadWitness.prototype, "abiParams", {
        get: function () {
            return [
                this.slot,
                this.value
            ].map(toHex_1.default);
        },
        enumerable: true,
        configurable: true
    });
    return SloadWitness;
}());
exports.SloadWitness = SloadWitness;
var SstoreWitness = /** @class */ (function () {
    function SstoreWitness(stateRootLeave, slot, value, refund) {
        this.opcode = new ethereumjs_util_1.BN(0x55);
        this.abiTypes = ['bytes32', 'uint256', 'uint256', 'uint256'];
        this.stateRootLeave = stateRootLeave;
        this.slot = slot;
        this.value = value;
        this.refund = refund;
    }
    Object.defineProperty(SstoreWitness.prototype, "abiParams", {
        get: function () {
            return [
                this.stateRootLeave,
                this.slot,
                this.value,
                this.refund
            ].map(toHex_1.default);
        },
        enumerable: true,
        configurable: true
    });
    return SstoreWitness;
}());
exports.SstoreWitness = SstoreWitness;
//# sourceMappingURL=storage.js.map