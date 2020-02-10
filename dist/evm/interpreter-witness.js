"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var copyStateManager_1 = require("../state/copyStateManager");
exports.copyStateManager = copyStateManager_1.default;
var utils = require("ethereumjs-util");
var BN = require("bn.js");
function copyStep(step) {
    return Object.assign({}, step, {
        opcode: Object.assign({}, step.opcode),
        stack: step.stack.slice(),
        memory: step.memory.slice(),
        stateManager: copyStateManager_1.default(step.stateManager)
    });
}
exports.copyStep = copyStep;
function sha3(runState, offset, length) {
    var data = Buffer.alloc(0);
    if (!length.isZero()) {
        data = runState.memory.read(offset.toNumber(), length.toNumber());
    }
    return new BN(utils.keccak256(data));
}
exports.sha3 = sha3;
//# sourceMappingURL=interpreter-witness.js.map