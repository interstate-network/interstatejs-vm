import AccessWitness from './accessWitness';
import { BN } from 'ethereumjs-util';
import toHex from './toHex';

export class Log0Witness implements AccessWitness {
  opcode: BN = new BN(0xa0);
  dataHash: BN;
  
  abiTypes = ['bytes32'];
  get abiParams() {
    return [
      toHex(this.dataHash),
    ];
  }

  constructor(dataHash: BN) {
    this.dataHash = dataHash;
  }
}

export class Log1Witness implements AccessWitness {
  opcode: BN = new BN(0xa0);
  topic: BN;
  dataHash: BN;
  
  abiTypes = ['bytes32', 'bytes32'];
  get abiParams() {
    return [
      this.topic,
      this.dataHash,
    ].map(toHex);
  }

  constructor(topic: BN, dataHash: BN) {
    this.dataHash = dataHash;
    this.topic = topic;
  }
}

export class Log2Witness implements AccessWitness {
  opcode: BN = new BN(0xa0);
  topic0: BN;
  topic1: BN;
  dataHash: BN;
  
  abiTypes = ['bytes32'];
  get abiParams() {
    return [
      this.topic0,
      this.topic1,
      this.dataHash,
    ].map(toHex);
  }

  constructor(topic0: BN, topic1: BN, dataHash: BN) {
    this.topic0 = topic0;
    this.topic1 = topic1;
    this.dataHash = dataHash;
  }
}

export class Log3Witness implements AccessWitness {
  opcode: BN = new BN(0xa0);
  topic0: BN;
  topic1: BN;
  topic2: BN;
  dataHash: BN;
  
  abiTypes = ['bytes32'];
  get abiParams() {
    return [
      this.topic0,
      this.topic1,
      this.topic2,
      this.dataHash,
    ].map(toHex);
  }

  constructor(topic0: BN, topic1: BN, topic2: BN, dataHash: BN) {
    this.topic0 = topic0;
    this.topic1 = topic1;
    this.topic2 = topic2;
    this.dataHash = dataHash;
  }
}

export class Log4Witness implements AccessWitness {
  opcode: BN = new BN(0xa0);
  topic0: BN;
  topic1: BN;
  topic2: BN;
  topic3: BN;
  dataHash: BN;
  
  abiTypes = ['bytes32'];
  get abiParams() {
    return [
      this.topic0,
      this.topic1,
      this.topic2,
      this.topic3,
      this.dataHash,
    ].map(toHex);
  }

  constructor(topic0: BN, topic1: BN, topic2: BN, topic3: BN, dataHash: BN) {
    this.topic0 = topic0;
    this.topic1 = topic1;
    this.topic2 = topic2;
    this.topic3 = topic3;
    this.dataHash = dataHash;
  }
}