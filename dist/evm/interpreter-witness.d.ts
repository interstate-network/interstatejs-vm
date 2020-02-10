import copyStateManager from '../state/copyStateManager';
import { InterpreterStep, RunState } from './interpreter';
import BN = require('bn.js');
export declare function copyStep(step: InterpreterStep): InterpreterStep;
export declare function sha3(runState: RunState, offset: BN, length: BN): BN;
export { copyStateManager };
