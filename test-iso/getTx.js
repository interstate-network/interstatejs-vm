const Transaction = require('interstatejs-tx').Transaction;
const BN = require('bn.js')

const gas = 6e6;
const gasPrice = 1;

const defaultKey = Buffer.from(
  'e331b6d69882b4cb4ea581d88e0b604039a3de5967688d3dcffdd2270c0fd109',
  'hex',
);

/* from must be a private key */
const getTxOpts = ({ from = defaultKey, to, data, value }) => {
  const tx = new Transaction({ to, data, value, gas, gasPrice }, { chain: 'mainnet', hardfork: 'petersburg' });
  tx.sign(from);
  tx.getSenderAddress();
  return {
    skipNonce: true,
    skipBalance: true,
    tx,
  }
};

module.exports = getTxOpts;