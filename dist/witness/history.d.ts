/// <reference types="bn.js" />
import { BN } from "ethereumjs-util";
import AccessWitness from './accessWitness';
export declare class BlockHashWitness implements AccessWitness {
    opcode: BN;
    stateRootLeave: undefined;
    number: BN;
    hash: BN;
    abiTypes: string[];
    get abiParams(): string[];
    constructor(number: BN, hash: BN);
}
