const level = require('level-mem');
const WriteStream = require('level-ws');
import Cache from './cache';
import PStateManager from './promisified'
import { BN } from 'ethereumjs-util';

async function getRoot(stateManager: PStateManager) {
  const newTrie = stateManager._wrapped._trie.copy() as any;
	const scratch = level();
  if (newTrie._scratch) await new Promise((resolve, reject) => newTrie.createScratchReadStream(newTrie._scratch).pipe(WriteStream(scratch)).on('close', () => resolve()));
	newTrie._scratch = scratch;
  newTrie._getDBs = [newTrie._scratch].concat(newTrie._getDBs);
  newTrie.__putDBs = newTrie._putDBs;
	newTrie._putDBs = [newTrie._scratch];
	//newTrie._putRaw = newTrie.putRaw;
	//newTrie.putRaw = stateManager._trie.putRaw;
  const cache = new Cache(newTrie);
	stateManager._wrapped._cache._cache.forEach((key: any	, value: any) => {
	  cache._cache = cache._cache.insert(key, Object.assign({}, value));
	});
  await new Promise((resolve, reject) => cache.flush((err: any) => err ? reject(err) : resolve()));
  return new BN(newTrie._root)
}

export default getRoot;