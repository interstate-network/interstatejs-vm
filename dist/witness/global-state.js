"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ethereumjs_util_1 = require("ethereumjs-util");
var toHex_1 = require("./toHex");
/* GLOBAL STATE */
var BalanceWitness = /** @class */ (function () {
    function BalanceWitness(address, balance) {
        this.opcode = new ethereumjs_util_1.BN(0x31);
        this.abiTypes = ['address', 'uint256'];
        this.address = address;
        this.balance = balance;
    }
    Object.defineProperty(BalanceWitness.prototype, "abiParams", {
        get: function () {
            return [this.address, this.balance].map(toHex_1.default);
        },
        enumerable: true,
        configurable: true
    });
    return BalanceWitness;
}());
exports.BalanceWitness = BalanceWitness;
var SelfBalanceWitness = /** @class */ (function () {
    function SelfBalanceWitness(selfBalance) {
        this.opcode = new ethereumjs_util_1.BN(0x47);
        this.abiTypes = ['uint256'];
        this.selfBalance = selfBalance;
    }
    Object.defineProperty(SelfBalanceWitness.prototype, "abiParams", {
        get: function () {
            return [this.selfBalance].map(toHex_1.default);
        },
        enumerable: true,
        configurable: true
    });
    return SelfBalanceWitness;
}());
exports.SelfBalanceWitness = SelfBalanceWitness;
var ExtCodeHashWitness = /** @class */ (function () {
    function ExtCodeHashWitness(address, hash) {
        this.opcode = new ethereumjs_util_1.BN(0x3f);
        this.abiTypes = ['address', 'bytes32'];
        this.address = address;
        this.hash = hash;
    }
    Object.defineProperty(ExtCodeHashWitness.prototype, "abiParams", {
        get: function () {
            return [this.address, this.hash].map(toHex_1.default);
        },
        enumerable: true,
        configurable: true
    });
    return ExtCodeHashWitness;
}());
exports.ExtCodeHashWitness = ExtCodeHashWitness;
var ExtCodeSizeWitness = /** @class */ (function () {
    function ExtCodeSizeWitness(address, size) {
        this.opcode = new ethereumjs_util_1.BN(0x3b);
        this.abiTypes = ['address', 'uint256'];
        this.address = address;
        this.size = size;
    }
    Object.defineProperty(ExtCodeSizeWitness.prototype, "abiParams", {
        get: function () {
            return [this.address, this.size].map(toHex_1.default);
        },
        enumerable: true,
        configurable: true
    });
    return ExtCodeSizeWitness;
}());
exports.ExtCodeSizeWitness = ExtCodeSizeWitness;
var ExtCodeCopyWitness = /** @class */ (function () {
    function ExtCodeCopyWitness(address, exists) {
        this.opcode = new ethereumjs_util_1.BN(0x3c);
        this.abiTypes = ['address', 'bool'];
        this.address = address;
        this.exists = exists;
    }
    Object.defineProperty(ExtCodeCopyWitness.prototype, "abiParams", {
        get: function () {
            return [toHex_1.default(this.address), this.exists];
        },
        enumerable: true,
        configurable: true
    });
    return ExtCodeCopyWitness;
}());
exports.ExtCodeCopyWitness = ExtCodeCopyWitness;
//# sourceMappingURL=global-state.js.map