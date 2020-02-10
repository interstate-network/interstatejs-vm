import { BN } from "ethereumjs-util";
import AccessWitness, { AbiEncodeable } from './accessWitness';
// const ABI = require("ethereumjs-abi");
const ABI = require('web3-eth-abi')
import toHex from './toHex';
import { CallWitness } from "./call";

export enum Status {
  exception = 0,
  success = 1,
  revert = 2,
  stop = 3
}

/* const prettyPrintWords = (abiEncodedString: any) =>
  abiEncodedString.slice(2).match(/.{64}/g)
    .map((word: any, index: any) => console.log(
      `0x${(index * 32).toString(16)} | ${word}`
    )) */

export function abiEncode(encodeable: AbiEncodeable): Buffer {
  return ABI.encodeParameters(encodeable.abiTypes, encodeable.abiParams);
}

export function encodeAccess(access: AccessWitness): string {
  const abiTypes = ['uint256', ...access.abiTypes];
  const abiParams = [toHex(access.opcode), ...access.abiParams];
  return toHex(abiEncode({ abiTypes, abiParams }));
}

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
  state_access_list: AccessWitness[] = [];
  status: Status | undefined;
  returndataHash: BN;
  calldata: Buffer;

  abiTypes: String[] = [
    'bytes32', // stateRootEnter
    'bytes32', // stateRootLeave
    'bool', // isStatic
    'address', // origin
    'address', // caller
    'address', // to
    'address', // context
    'uint256', // callvalue
    'uint256', // gasPrice
    'uint256', // gasAvailable
    'uint256', // gasUsed
    'uint256', // refund
    'bytes[]', // state_access_list
    'uint256', // status
    'bytes32', // returndataHash
    'bytes'    // calldata
  ];
  get abiParams() {
    return [
      toHex(this.stateRootEnter),
      toHex(this.stateRootLeave),
      this.isStatic,
      toHex(this.origin),
      toHex(this.caller),
      toHex(this.to),
      toHex(this.context),
      toHex(this.callvalue),
      toHex(this.gasPrice),
      toHex(this.gasAvailable),
      toHex(this.gasUsed),
      toHex(this.refund),
      this.state_access_list.map(encodeAccess),
      this.status,
      toHex(this.returndataHash),
      toHex(this.calldata)
    ];
  }
  
  encode(): string {
    return ABI.encodeParameters(this.abiTypes, this.abiParams);
  }

  constructor(
    stateRootEnter: BN,
    stateRootLeave: BN,
    isStatic: boolean,
    origin: BN,
    caller: BN,
    to: BN,
    context: BN,
    callvalue: BN,
    gasPrice: BN,
    gasAvailable: BN,
    gasUsed: BN,
    refund: BN,
    returndataHash: BN,
    calldata: Buffer
    ) {
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
}
