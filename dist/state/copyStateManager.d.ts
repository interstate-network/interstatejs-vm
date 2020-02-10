import StateManager from './stateManager';
declare function copyStateManager(stateManager: StateManager): StateManager & {
    _trie: any;
    _cache: any;
};
export default copyStateManager;
