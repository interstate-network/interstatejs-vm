import { BN } from "ethereumjs-util";
import AccessWitness from './accessWitness';
import toHex from "./toHex";

/* HISTORY */
export class BlockHashWitness implements AccessWitness {
  opcode = new BN(0x40);
  stateRootLeave: undefined;
  number: BN;
  hash: BN;
  abiTypes = ['uint256', 'bytes32'];

  get abiParams() {
    return [this.number, this.hash].map(toHex);
  }

  constructor(number: BN, hash: BN) {
    this.number = number;
    this.hash = hash;
  }
}