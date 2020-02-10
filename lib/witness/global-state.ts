import { BN } from "ethereumjs-util";
import AccessWitness from './accessWitness';
import toHex from './toHex';

/* GLOBAL STATE */
export class BalanceWitness implements AccessWitness {
  opcode = new BN(0x31);
  stateRootLeave: undefined;
  address: BN;
  balance: BN;
  abiTypes = ['address', 'uint256'];

  get abiParams() {
    return [this.address, this.balance].map(toHex);
  }
  
  constructor(address: BN, balance: BN) {
    this.address = address;
    this.balance = balance;
  }
}

export class SelfBalanceWitness implements AccessWitness {
  opcode = new BN(0x47);
  stateRootLeave: undefined;
  selfBalance: BN;
  abiTypes = ['uint256'];

  get abiParams() {
    return [this.selfBalance].map(toHex);
  }
  
  constructor(selfBalance: BN) {
    this.selfBalance = selfBalance;
  }
}

export class ExtCodeHashWitness implements AccessWitness {
  opcode = new BN(0x3f);
  stateRootLeave: undefined;
  address: BN;
  hash: BN;
  abiTypes = ['address', 'bytes32'];

  get abiParams() {
    return [this.address, this.hash].map(toHex);
  }

  constructor(address: BN, hash: BN) {
    this.address = address;
    this.hash = hash;
  }
}

export class ExtCodeSizeWitness implements AccessWitness {
  opcode = new BN(0x3b);
  stateRootLeave: undefined;
  address: BN;
  size: BN;
  abiTypes = ['address', 'uint256'];

  get abiParams() {
    return [this.address, this.size].map(toHex);
  }

  constructor(address: BN, size: BN) {
    this.address = address;
    this.size = size;
  }
}

export class ExtCodeCopyWitness implements AccessWitness {
  opcode = new BN(0x3c);
  stateRootLeave: undefined;
  address: BN;
  exists: Boolean;
  abiTypes = ['address', 'bool'];

  get abiParams() {
    return [toHex(this.address), this.exists];
  }

  constructor(address: BN, exists: Boolean) {
    this.address = address;
    this.exists = exists;
  }
}