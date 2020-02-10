/// <reference types="bn.js" />
/// <reference types="node" />
import { BN } from "ethereumjs-util";
import AccessWitness from './accessWitness';
export declare class CallWitness implements AccessWitness {
    opcode: BN;
    stateRootLeave: BN;
    gas: BN;
    gasUsed: BN;
    gasRefund: BN;
    address: BN;
    value: BN;
    calldataHash: BN;
    success: Boolean;
    returndata: Buffer;
    abiTypes: string[];
    get abiParams(): (string | Boolean)[];
    constructor(stateRootLeave: BN, gas: BN, gasUsed: BN, gasRefund: BN, address: BN, value: BN, calldataHash: BN, success: Boolean, returndata: Buffer);
}
export declare class CallCodeWitness extends CallWitness {
    opcode: BN;
}
export declare class DelegateCallWitness implements AccessWitness {
    opcode: BN;
    stateRootLeave: BN;
    gas: BN;
    gasUsed: BN;
    gasRefund: BN;
    address: BN;
    calldataHash: BN;
    success: Boolean;
    returndata: Buffer;
    abiTypes: string[];
    get abiParams(): (string | Boolean)[];
    constructor(stateRootLeave: BN, gas: BN, gasUsed: BN, gasRefund: BN, address: BN, calldataHash: BN, success: Boolean, returndata: Buffer);
}
export declare class StaticCallWitness implements AccessWitness {
    opcode: BN;
    gas: BN;
    gasUsed: BN;
    address: BN;
    calldataHash: BN;
    success: Boolean;
    returndata: Buffer;
    abiTypes: string[];
    get abiParams(): (string | Boolean)[];
    constructor(gas: BN, gasUsed: BN, address: BN, calldataHash: BN, success: Boolean, returndata: Buffer);
}
