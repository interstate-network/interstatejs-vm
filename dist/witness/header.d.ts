/// <reference types="bn.js" />
import { BN } from "ethereumjs-util";
import AccessWitness from './accessWitness';
export declare class CoinbaseWitness implements AccessWitness {
    opcode: BN;
    stateRootLeave: undefined;
    coinbase: BN;
    abiTypes: string[];
    get abiParams(): string[];
    constructor(coinbase: BN);
}
export declare class TimestampWitness implements AccessWitness {
    opcode: BN;
    stateRootLeave: undefined;
    timestamp: BN;
    abiTypes: string[];
    get abiParams(): string[];
    constructor(timestamp: BN);
}
export declare class NumberWitness implements AccessWitness {
    opcode: BN;
    stateRootLeave: undefined;
    number: BN;
    abiTypes: string[];
    get abiParams(): string[];
    constructor(number: BN);
}
export declare class DifficultyWitness implements AccessWitness {
    opcode: BN;
    stateRootLeave: undefined;
    difficulty: BN;
    abiTypes: string[];
    get abiParams(): string[];
    constructor(difficulty: BN);
}
export declare class GaslimitWitness implements AccessWitness {
    opcode: BN;
    stateRootLeave: undefined;
    gaslimit: BN;
    abiTypes: string[];
    get abiParams(): string[];
    constructor(gaslimit: BN);
}
export declare class ChainidWitness implements AccessWitness {
    opcode: BN;
    stateRootLeave: undefined;
    chainId: BN;
    abiTypes: string[];
    get abiParams(): string[];
    constructor(chainId: BN);
}
