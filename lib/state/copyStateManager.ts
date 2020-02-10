const clone = require('clone');
import StateManager from './stateManager'

function copyStateManager(stateManager: StateManager) {
  return Object.assign({}, stateManager, {
    _trie: stateManager._trie.copy(),
  	_cache: Object.assign(clone(stateManager._cache), {
  		_checkpoints: stateManager._cache._checkpoints.slice()
  	})
	});
}

export default copyStateManager;
