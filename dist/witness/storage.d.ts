/// <reference types="bn.js" />
import { BN } from "ethereumjs-util";
import AccessWitness from './accessWitness';
export declare class SloadWitness implements AccessWitness {
    opcode: BN;
    stateRootLeave: undefined;
    slot: BN;
    value: BN;
    abiTypes: string[];
    get abiParams(): string[];
    constructor(slot: BN, value: BN);
}
export declare class SstoreWitness implements AccessWitness {
    opcode: BN;
    stateRootLeave: BN;
    slot: BN;
    value: BN;
    refund: BN;
    abiTypes: string[];
    get abiParams(): string[];
    constructor(stateRootLeave: BN, slot: BN, value: BN, refund: BN);
}
