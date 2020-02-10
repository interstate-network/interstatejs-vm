import { BN } from "ethereumjs-util";
import AccessWitness from './accessWitness';
import toHex from './toHex'

/* STORAGE */
export class SloadWitness implements AccessWitness {
  opcode = new BN(0x54);
  stateRootLeave: undefined;
  slot: BN;
  value: BN;

  abiTypes = ['uint256', 'uint256'];
  get abiParams() {
    return [
      this.slot,
      this.value
    ].map(toHex)
  }
  
  constructor(slot: BN, value: BN) {
    this.slot = slot;
    this.value = value;
  }
}

export class SstoreWitness implements AccessWitness {
  opcode = new BN(0x55);
  stateRootLeave: BN;
  slot: BN;
  value: BN;
  refund: BN;

  abiTypes = ['bytes32', 'uint256', 'uint256', 'uint256'];
  get abiParams() {
    return [
      this.stateRootLeave,
      this.slot,
      this.value,
      this.refund
    ].map(toHex)
  }
  
  constructor(stateRootLeave: BN, slot: BN, value: BN, refund: BN) {
    this.stateRootLeave = stateRootLeave;
    this.slot = slot;
    this.value = value;
    this.refund = refund;
  }
}