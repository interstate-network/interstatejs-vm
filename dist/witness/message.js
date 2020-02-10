"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
// const ABI = require("ethereumjs-abi");
var ABI = require('web3-eth-abi');
var toHex_1 = require("./toHex");
var Status;
(function (Status) {
    Status[Status["exception"] = 0] = "exception";
    Status[Status["success"] = 1] = "success";
    Status[Status["revert"] = 2] = "revert";
    Status[Status["stop"] = 3] = "stop";
})(Status = exports.Status || (exports.Status = {}));
/* const prettyPrintWords = (abiEncodedString: any) =>
  abiEncodedString.slice(2).match(/.{64}/g)
    .map((word: any, index: any) => console.log(
      `0x${(index * 32).toString(16)} | ${word}`
    )) */
function abiEncode(encodeable) {
    return ABI.encodeParameters(encodeable.abiTypes, encodeable.abiParams);
}
exports.abiEncode = abiEncode;
function encodeAccess(access) {
    var abiTypes = __spreadArrays(['uint256'], access.abiTypes);
    var abiParams = __spreadArrays([toHex_1.default(access.opcode)], access.abiParams);
    return toHex_1.default(abiEncode({ abiTypes: abiTypes, abiParams: abiParams }));
}
exports.encodeAccess = encodeAccess;
var MessageWitness = /** @class */ (function () {
    function MessageWitness(stateRootEnter, stateRootLeave, isStatic, origin, caller, to, context, callvalue, gasPrice, gasAvailable, gasUsed, refund, returndataHash, calldata) {
        this.state_access_list = [];
        this.abiTypes = [
            'bytes32',
            'bytes32',
            'bool',
            'address',
            'address',
            'address',
            'address',
            'uint256',
            'uint256',
            'uint256',
            'uint256',
            'uint256',
            'bytes[]',
            'uint256',
            'bytes32',
            'bytes' // calldata
        ];
        this.isStatic = isStatic;
        this.origin = origin;
        this.caller = caller;
        this.to = to;
        this.context = context;
        this.stateRootEnter = stateRootEnter;
        this.stateRootLeave = stateRootLeave;
        this.callvalue = callvalue;
        this.gasPrice = gasPrice;
        this.gasAvailable = gasAvailable;
        this.gasUsed = gasUsed;
        this.refund = refund;
        this.returndataHash = returndataHash;
        this.calldata = calldata;
    }
    Object.defineProperty(MessageWitness.prototype, "abiParams", {
        get: function () {
            return [
                toHex_1.default(this.stateRootEnter),
                toHex_1.default(this.stateRootLeave),
                this.isStatic,
                toHex_1.default(this.origin),
                toHex_1.default(this.caller),
                toHex_1.default(this.to),
                toHex_1.default(this.context),
                toHex_1.default(this.callvalue),
                toHex_1.default(this.gasPrice),
                toHex_1.default(this.gasAvailable),
                toHex_1.default(this.gasUsed),
                toHex_1.default(this.refund),
                this.state_access_list.map(encodeAccess),
                this.status,
                toHex_1.default(this.returndataHash),
                toHex_1.default(this.calldata)
            ];
        },
        enumerable: true,
        configurable: true
    });
    MessageWitness.prototype.encode = function () {
        return ABI.encodeParameters(this.abiTypes, this.abiParams);
    };
    return MessageWitness;
}());
exports.default = MessageWitness;
//# sourceMappingURL=message.js.map