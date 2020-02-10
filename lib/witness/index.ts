import * as call from './call';
import * as globalState from './global-state';
import * as header from './header';
import * as history from './history';
import * as machine from './machine';
import * as message from './message';
import * as accessWitness from './accessWitness';
import * as storage from './storage';
import * as logs from './logs';
import * as toHex from './toHex';

export default {
  ...call,
  ...globalState,
  ...header,
  ...history,
  ...machine,
  ...message,
  ...accessWitness,
  ...storage,
  ...logs,
  toHex
};