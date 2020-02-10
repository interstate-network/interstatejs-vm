"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ethereumjs_util_1 = require("ethereumjs-util");
var toHex_1 = require("./toHex");
var Log0Witness = /** @class */ (function () {
    function Log0Witness(dataHash) {
        this.opcode = new ethereumjs_util_1.BN(0xa0);
        this.abiTypes = ['bytes32'];
        this.dataHash = dataHash;
    }
    Object.defineProperty(Log0Witness.prototype, "abiParams", {
        get: function () {
            return [
                toHex_1.default(this.dataHash),
            ];
        },
        enumerable: true,
        configurable: true
    });
    return Log0Witness;
}());
exports.Log0Witness = Log0Witness;
var Log1Witness = /** @class */ (function () {
    function Log1Witness(topic, dataHash) {
        this.opcode = new ethereumjs_util_1.BN(0xa0);
        this.abiTypes = ['bytes32', 'bytes32'];
        this.dataHash = dataHash;
        this.topic = topic;
    }
    Object.defineProperty(Log1Witness.prototype, "abiParams", {
        get: function () {
            return [
                this.topic,
                this.dataHash,
            ].map(toHex_1.default);
        },
        enumerable: true,
        configurable: true
    });
    return Log1Witness;
}());
exports.Log1Witness = Log1Witness;
var Log2Witness = /** @class */ (function () {
    function Log2Witness(topic0, topic1, dataHash) {
        this.opcode = new ethereumjs_util_1.BN(0xa0);
        this.abiTypes = ['bytes32'];
        this.topic0 = topic0;
        this.topic1 = topic1;
        this.dataHash = dataHash;
    }
    Object.defineProperty(Log2Witness.prototype, "abiParams", {
        get: function () {
            return [
                this.topic0,
                this.topic1,
                this.dataHash,
            ].map(toHex_1.default);
        },
        enumerable: true,
        configurable: true
    });
    return Log2Witness;
}());
exports.Log2Witness = Log2Witness;
var Log3Witness = /** @class */ (function () {
    function Log3Witness(topic0, topic1, topic2, dataHash) {
        this.opcode = new ethereumjs_util_1.BN(0xa0);
        this.abiTypes = ['bytes32'];
        this.topic0 = topic0;
        this.topic1 = topic1;
        this.topic2 = topic2;
        this.dataHash = dataHash;
    }
    Object.defineProperty(Log3Witness.prototype, "abiParams", {
        get: function () {
            return [
                this.topic0,
                this.topic1,
                this.topic2,
                this.dataHash,
            ].map(toHex_1.default);
        },
        enumerable: true,
        configurable: true
    });
    return Log3Witness;
}());
exports.Log3Witness = Log3Witness;
var Log4Witness = /** @class */ (function () {
    function Log4Witness(topic0, topic1, topic2, topic3, dataHash) {
        this.opcode = new ethereumjs_util_1.BN(0xa0);
        this.abiTypes = ['bytes32'];
        this.topic0 = topic0;
        this.topic1 = topic1;
        this.topic2 = topic2;
        this.topic3 = topic3;
        this.dataHash = dataHash;
    }
    Object.defineProperty(Log4Witness.prototype, "abiParams", {
        get: function () {
            return [
                this.topic0,
                this.topic1,
                this.topic2,
                this.topic3,
                this.dataHash,
            ].map(toHex_1.default);
        },
        enumerable: true,
        configurable: true
    });
    return Log4Witness;
}());
exports.Log4Witness = Log4Witness;
//# sourceMappingURL=logs.js.map