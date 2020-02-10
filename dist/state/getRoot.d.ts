/// <reference types="bn.js" />
import PStateManager from './promisified';
import { BN } from 'ethereumjs-util';
declare function getRoot(stateManager: PStateManager): Promise<BN>;
export default getRoot;
