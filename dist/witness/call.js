"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var ethereumjs_util_1 = require("ethereumjs-util");
var toHex_1 = require("./toHex");
/* CALL */
var CallWitness = /** @class */ (function () {
    function CallWitness(stateRootLeave, gas, gasUsed, gasRefund, address, value, calldataHash, success, returndata) {
        this.opcode = new ethereumjs_util_1.BN(0xf1);
        this.gasUsed = new ethereumjs_util_1.BN(0);
        this.gasRefund = new ethereumjs_util_1.BN(0);
        this.abiTypes = [
            'bytes32',
            'uint256',
            'uint256',
            'uint256',
            'address',
            'uint256',
            'bytes32',
            'bool',
            'bytes' // returndata
        ];
        this.stateRootLeave = stateRootLeave;
        this.gas = gas;
        this.gasUsed = gasUsed;
        this.gasRefund = gasRefund;
        this.address = address;
        this.value = value;
        this.calldataHash = calldataHash;
        this.success = success;
        this.returndata = returndata;
    }
    Object.defineProperty(CallWitness.prototype, "abiParams", {
        get: function () {
            return [
                toHex_1.default(this.stateRootLeave),
                toHex_1.default(this.gas),
                toHex_1.default(this.gasUsed),
                toHex_1.default(this.gasRefund),
                toHex_1.default(this.address),
                toHex_1.default(this.value),
                toHex_1.default(this.calldataHash),
                this.success,
                toHex_1.default(this.returndata)
            ];
        },
        enumerable: true,
        configurable: true
    });
    return CallWitness;
}());
exports.CallWitness = CallWitness;
var CallCodeWitness = /** @class */ (function (_super) {
    __extends(CallCodeWitness, _super);
    function CallCodeWitness() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.opcode = new ethereumjs_util_1.BN(0xf2);
        return _this;
    }
    return CallCodeWitness;
}(CallWitness));
exports.CallCodeWitness = CallCodeWitness;
var DelegateCallWitness = /** @class */ (function () {
    function DelegateCallWitness(stateRootLeave, gas, gasUsed, gasRefund, address, calldataHash, success, returndata) {
        this.opcode = new ethereumjs_util_1.BN(0xf4);
        this.abiTypes = [
            'bytes32',
            'uint256',
            'uint256',
            'address',
            'bytes32',
            'bool',
            'bytes' // returndata
        ];
        this.stateRootLeave = stateRootLeave;
        this.gas = gas;
        this.gasUsed = gasUsed;
        this.gasRefund = gasRefund;
        this.address = address;
        this.calldataHash = calldataHash;
        this.success = success;
        this.returndata = returndata;
    }
    Object.defineProperty(DelegateCallWitness.prototype, "abiParams", {
        get: function () {
            return [
                toHex_1.default(this.stateRootLeave),
                toHex_1.default(this.gas),
                toHex_1.default(this.gasUsed),
                toHex_1.default(this.gasRefund),
                toHex_1.default(this.address),
                toHex_1.default(this.calldataHash),
                this.success,
                toHex_1.default(this.returndata)
            ];
        },
        enumerable: true,
        configurable: true
    });
    return DelegateCallWitness;
}());
exports.DelegateCallWitness = DelegateCallWitness;
var StaticCallWitness = /** @class */ (function () {
    function StaticCallWitness(gas, gasUsed, address, calldataHash, success, returndata) {
        this.opcode = new ethereumjs_util_1.BN(0xfa);
        this.abiTypes = [
            'uint256',
            'uint256',
            'address',
            'bytes32',
            'bool',
            'bytes'
        ];
        this.gas = gas;
        this.gasUsed = gasUsed;
        this.address = address;
        this.calldataHash = calldataHash;
        this.success = success;
        this.returndata = returndata;
    }
    Object.defineProperty(StaticCallWitness.prototype, "abiParams", {
        get: function () {
            return [
                toHex_1.default(this.gas),
                toHex_1.default(this.gasUsed),
                toHex_1.default(this.address),
                toHex_1.default(this.calldataHash),
                this.success,
                toHex_1.default(this.returndata)
            ];
        },
        enumerable: true,
        configurable: true
    });
    return StaticCallWitness;
}());
exports.StaticCallWitness = StaticCallWitness;
//# sourceMappingURL=call.js.map