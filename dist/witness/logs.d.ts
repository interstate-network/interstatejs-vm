/// <reference types="bn.js" />
import AccessWitness from './accessWitness';
import { BN } from 'ethereumjs-util';
export declare class Log0Witness implements AccessWitness {
    opcode: BN;
    dataHash: BN;
    abiTypes: string[];
    get abiParams(): string[];
    constructor(dataHash: BN);
}
export declare class Log1Witness implements AccessWitness {
    opcode: BN;
    topic: BN;
    dataHash: BN;
    abiTypes: string[];
    get abiParams(): string[];
    constructor(topic: BN, dataHash: BN);
}
export declare class Log2Witness implements AccessWitness {
    opcode: BN;
    topic0: BN;
    topic1: BN;
    dataHash: BN;
    abiTypes: string[];
    get abiParams(): string[];
    constructor(topic0: BN, topic1: BN, dataHash: BN);
}
export declare class Log3Witness implements AccessWitness {
    opcode: BN;
    topic0: BN;
    topic1: BN;
    topic2: BN;
    dataHash: BN;
    abiTypes: string[];
    get abiParams(): string[];
    constructor(topic0: BN, topic1: BN, topic2: BN, dataHash: BN);
}
export declare class Log4Witness implements AccessWitness {
    opcode: BN;
    topic0: BN;
    topic1: BN;
    topic2: BN;
    topic3: BN;
    dataHash: BN;
    abiTypes: string[];
    get abiParams(): string[];
    constructor(topic0: BN, topic1: BN, topic2: BN, topic3: BN, dataHash: BN);
}
