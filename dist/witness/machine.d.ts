/// <reference types="bn.js" />
import { BN } from "ethereumjs-util";
import AccessWitness from './accessWitness';
export declare class GasWitness implements AccessWitness {
    opcode: BN;
    stateRootLeave: undefined;
    gas: BN;
    abiTypes: string[];
    get abiParams(): string[];
    constructor(gas: BN);
}
