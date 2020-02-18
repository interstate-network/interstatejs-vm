import { BN } from "ethereumjs-util";
import AccessWitness from './accessWitness';
import toHex from './toHex';
/* CALL */
export class CallWitness implements AccessWitness {
  opcode = new BN(0xf1);
  stateRootLeave: BN;
  gas: BN;
  gasUsed: BN = new BN(0);
  gasRefund: BN = new BN(0);
  address: BN;
  value: BN;
  calldataHash: BN;
  success: Boolean;
  returndata: Buffer;

  abiTypes = [
    'bytes32', // stateRootLeave
    'uint256', // gas
    'uint256', // gasUsed
    'uint256', // gasRefund
    'address', // address
    'uint256', // value
    'bytes32', // calldataHash
    'bool',    // success
    'bytes'    // returndata
  ];

  get abiParams() {
    return [
      toHex(this.stateRootLeave),
      toHex(this.gas),
      toHex(this.gasUsed),
      toHex(this.gasRefund),
      toHex(this.address),
      toHex(this.value),
      toHex(this.calldataHash),
      this.success,
      toHex(this.returndata)
    ];
  }

  constructor(
    stateRootLeave: BN,
    gas: BN,
    gasUsed: BN,
    gasRefund: BN,
    address: BN,
    value: BN,
    calldataHash: BN,
    success: Boolean,
    returndata: Buffer
    ) {
      this.stateRootLeave = stateRootLeave;
      this.gas = gas;
      this.gasUsed = gasUsed;
      this.gasRefund = gasRefund;
      this.address = address;
      this.value = value;
      this.calldataHash = calldataHash;
      this.success = success;
      this.returndata = returndata;
  }
}

export class CallCodeWitness extends CallWitness {
  opcode = new BN(0xf2);
}

export class DelegateCallWitness implements AccessWitness {
  opcode = new BN(0xf4);
  stateRootLeave: BN;
  gas: BN;
  gasUsed: BN;
  gasRefund: BN;
  address: BN;
  calldataHash: BN;
  success: Boolean;
  returndata: Buffer;

  abiTypes = [
    'bytes32', // stateRootLeave
    'uint256', // gas
    'uint256', // gasUsed
    'uint256', // gasRefund
    'address', // address
    'bytes32', // calldataHash
    'bool',    // success
    'bytes'    // returndata
  ];

  get abiParams() {
    return [
      toHex(this.stateRootLeave),
      toHex(this.gas),
      toHex(this.gasUsed),
      toHex(this.gasRefund),
      toHex(this.address),
      toHex(this.calldataHash),
      this.success,
      toHex(this.returndata)
    ];
  }

  constructor(
    stateRootLeave: BN,
    gas: BN,
    gasUsed: BN,
    gasRefund: BN,
    address: BN,
    calldataHash: BN,
    success: Boolean,
    returndata: Buffer
    ) {
      this.stateRootLeave = stateRootLeave;
      this.gas = gas;
      this.gasUsed = gasUsed;
      this.gasRefund = gasRefund;
      this.address = address;
      this.calldataHash = calldataHash;
      this.success = success;
      this.returndata = returndata;
  }
}

export class StaticCallWitness implements AccessWitness {
  opcode = new BN(0xfa);
  gas: BN;
  gasUsed: BN;
  address: BN;
  calldataHash: BN;
  success: Boolean;
  returndata: Buffer;

  abiTypes = [
    'uint256',
    'uint256',
    'address',
    'bytes32',
    'bool',
    'bytes'
  ];

  get abiParams() {
    return [
      toHex(this.gas),
      toHex(this.gasUsed),
      toHex(this.address),
      toHex(this.calldataHash),
      this.success,
      toHex(this.returndata)
    ];
  }
  constructor(
    gas: BN,
    gasUsed: BN,
    address: BN,
    calldataHash: BN,
    success: Boolean,
    returndata: Buffer
    ) {
      this.gas = gas;
      this.gasUsed = gasUsed;
      this.address = address;
      this.calldataHash = calldataHash;
      this.success = success;
      this.returndata = returndata;
  }
}
