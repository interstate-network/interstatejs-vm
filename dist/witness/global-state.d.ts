/// <reference types="bn.js" />
import { BN } from "ethereumjs-util";
import AccessWitness from './accessWitness';
export declare class BalanceWitness implements AccessWitness {
    opcode: BN;
    stateRootLeave: undefined;
    address: BN;
    balance: BN;
    abiTypes: string[];
    get abiParams(): string[];
    constructor(address: BN, balance: BN);
}
export declare class SelfBalanceWitness implements AccessWitness {
    opcode: BN;
    stateRootLeave: undefined;
    selfBalance: BN;
    abiTypes: string[];
    get abiParams(): string[];
    constructor(selfBalance: BN);
}
export declare class ExtCodeHashWitness implements AccessWitness {
    opcode: BN;
    stateRootLeave: undefined;
    address: BN;
    hash: BN;
    abiTypes: string[];
    get abiParams(): string[];
    constructor(address: BN, hash: BN);
}
export declare class ExtCodeSizeWitness implements AccessWitness {
    opcode: BN;
    stateRootLeave: undefined;
    address: BN;
    size: BN;
    abiTypes: string[];
    get abiParams(): string[];
    constructor(address: BN, size: BN);
}
export declare class ExtCodeCopyWitness implements AccessWitness {
    opcode: BN;
    stateRootLeave: undefined;
    address: BN;
    exists: Boolean;
    abiTypes: string[];
    get abiParams(): (string | Boolean)[];
    constructor(address: BN, exists: Boolean);
}
