import { BN } from "ethereumjs-util";

export interface AbiEncodeable {
  abiTypes: String[];
  abiParams: any[];
}

export default interface AccessWitness extends AbiEncodeable {
  opcode: BN;
  stateRootLeave?: BN | undefined;
}