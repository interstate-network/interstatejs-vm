"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ethereumjs_util_1 = require("ethereumjs-util");
var toHex_1 = require("./toHex");
/* HEADER */
var CoinbaseWitness = /** @class */ (function () {
    function CoinbaseWitness(coinbase) {
        this.opcode = new ethereumjs_util_1.BN(0x41);
        this.abiTypes = ['address'];
        this.coinbase = coinbase;
    }
    Object.defineProperty(CoinbaseWitness.prototype, "abiParams", {
        get: function () {
            return [toHex_1.default(this.coinbase)];
        },
        enumerable: true,
        configurable: true
    });
    return CoinbaseWitness;
}());
exports.CoinbaseWitness = CoinbaseWitness;
var TimestampWitness = /** @class */ (function () {
    function TimestampWitness(timestamp) {
        this.opcode = new ethereumjs_util_1.BN(0x42);
        this.abiTypes = ['uint256'];
        this.timestamp = timestamp;
    }
    Object.defineProperty(TimestampWitness.prototype, "abiParams", {
        get: function () {
            return [toHex_1.default(this.timestamp)];
        },
        enumerable: true,
        configurable: true
    });
    return TimestampWitness;
}());
exports.TimestampWitness = TimestampWitness;
var NumberWitness = /** @class */ (function () {
    function NumberWitness(number) {
        this.opcode = new ethereumjs_util_1.BN(0x43);
        this.abiTypes = ['uint256'];
        this.number = number;
    }
    Object.defineProperty(NumberWitness.prototype, "abiParams", {
        get: function () {
            return [toHex_1.default(this.number)];
        },
        enumerable: true,
        configurable: true
    });
    return NumberWitness;
}());
exports.NumberWitness = NumberWitness;
var DifficultyWitness = /** @class */ (function () {
    function DifficultyWitness(difficulty) {
        this.opcode = new ethereumjs_util_1.BN(0x44);
        this.abiTypes = ['uint256'];
        this.difficulty = difficulty;
    }
    Object.defineProperty(DifficultyWitness.prototype, "abiParams", {
        get: function () {
            return [toHex_1.default(this.difficulty)];
        },
        enumerable: true,
        configurable: true
    });
    return DifficultyWitness;
}());
exports.DifficultyWitness = DifficultyWitness;
var GaslimitWitness = /** @class */ (function () {
    function GaslimitWitness(gaslimit) {
        this.opcode = new ethereumjs_util_1.BN(0x45);
        this.abiTypes = ['uint256'];
        this.gaslimit = gaslimit;
    }
    Object.defineProperty(GaslimitWitness.prototype, "abiParams", {
        get: function () {
            return [toHex_1.default(this.gaslimit)];
        },
        enumerable: true,
        configurable: true
    });
    return GaslimitWitness;
}());
exports.GaslimitWitness = GaslimitWitness;
var ChainidWitness = /** @class */ (function () {
    function ChainidWitness(chainId) {
        this.opcode = new ethereumjs_util_1.BN(0x46);
        this.abiTypes = ['uint256'];
        this.chainId = chainId;
    }
    Object.defineProperty(ChainidWitness.prototype, "abiParams", {
        get: function () {
            return [toHex_1.default(this.chainId)];
        },
        enumerable: true,
        configurable: true
    });
    return ChainidWitness;
}());
exports.ChainidWitness = ChainidWitness;
//# sourceMappingURL=header.js.map