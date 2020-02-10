import { BN } from "ethereumjs-util";
import AccessWitness from './accessWitness';
import toHex from './toHex'

/* HEADER */
export class CoinbaseWitness implements AccessWitness {
  opcode = new BN(0x41);
  stateRootLeave: undefined;
  coinbase: BN;

  abiTypes = ['address'];
  
  get abiParams() {
    return [toHex(this.coinbase)];
  }

  constructor(coinbase: BN) {
    this.coinbase = coinbase;
  }
}

export class TimestampWitness implements AccessWitness {
  opcode = new BN(0x42);
  stateRootLeave: undefined;
  timestamp: BN;

  abiTypes = ['uint256'];
  
  get abiParams() {
    return [toHex(this.timestamp)];
  }

  constructor(timestamp: BN) {
    this.timestamp = timestamp;
  }
}

export class NumberWitness implements AccessWitness {
  opcode = new BN(0x43);
  stateRootLeave: undefined;
  number: BN;

  abiTypes = ['uint256'];
  
  get abiParams() {
    return [toHex(this.number)];
  }

  constructor(number: BN) {
    this.number = number;
  }
}

export class DifficultyWitness implements AccessWitness {
  opcode = new BN(0x44);
  stateRootLeave: undefined;
  difficulty: BN;

  abiTypes = ['uint256'];
  
  get abiParams() {
    return [toHex(this.difficulty)];
  }

  constructor(difficulty: BN) {
    this.difficulty = difficulty;
  }
}

export class GaslimitWitness implements AccessWitness {
  opcode = new BN(0x45);
  stateRootLeave: undefined;
  gaslimit: BN;

  abiTypes = ['uint256'];
  
  get abiParams() {
    return [toHex(this.gaslimit)];
  }

  constructor(gaslimit: BN) {
    this.gaslimit = gaslimit;
  }
}

export class ChainidWitness implements AccessWitness {
  opcode = new BN(0x46);
  stateRootLeave: undefined;
  chainId: BN;

  abiTypes = ['uint256'];
  
  get abiParams() {
    return [toHex(this.chainId)];
  }

  constructor(chainId: BN) {
    this.chainId = chainId;
  }
}