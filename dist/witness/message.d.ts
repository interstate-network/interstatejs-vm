/// <reference types="node" />
/// <reference types="bn.js" />
import { BN } from "ethereumjs-util";
import AccessWitness, { AbiEncodeable } from './accessWitness';
export declare enum Status {
    exception = 0,
    success = 1,
    revert = 2,
    stop = 3
}
export declare function abiEncode(encodeable: AbiEncodeable): Buffer;
export declare function encodeAccess(access: AccessWitness): string;
export default class MessageWitness implements AbiEncodeable {
    stateRootEnter: BN;
    stateRootLeave: BN;
    isStatic: boolean;
    origin: BN;
    caller: BN;
    to: BN;
    context: BN;
    callvalue: BN;
    gasPrice: BN;
    gasAvailable: BN;
    gasUsed: BN;
    refund: BN;
    state_access_list: AccessWitness[];
    status: Status | undefined;
    returndataHash: BN;
    calldata: Buffer;
    abiTypes: String[];
    get abiParams(): (string | boolean | string[] | Status | undefined)[];
    encode(): string;
    constructor(stateRootEnter: BN, stateRootLeave: BN, isStatic: boolean, origin: BN, caller: BN, to: BN, context: BN, callvalue: BN, gasPrice: BN, gasAvailable: BN, gasUsed: BN, refund: BN, returndataHash: BN, calldata: Buffer);
}
