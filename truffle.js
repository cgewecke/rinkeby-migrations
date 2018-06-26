const HDWalletProvider = require('truffle-hdwallet-provider');

// first read in the secrets.json to get our mnemonic
let secrets;
let infura;
let mnemonic;
if (fs.existsSync('secrets.js')) {
  secrets = require('./secrets);
  mnemonic = secrets.mnemonic;
  infura = secrets.infura;
} else {
  console.log('no secrets.js found. You can only deploy to the testrpc.');
  mnemonic = '';
}

module.exports = {
  networks: {
    rinkeby: {
      provider: () => new HDWalletProvider(mnemonic, `https://rinkeby.infura.io/${infura}`),
      network_id: 4,
      gas: 6000000,
      gasPrice: 20000000000,
    },
    ropsten: {
      provider: () => new HDWalletProvider(mnemonic, `https://ropsten.infura.io/${infura}`),
      network_id: 3,
      gas: 4700000,
      gasPrice: 20000000000,
    },
    development: {
      host: 'localhost',
      port: 8545,
      network_id: '*',
    }
  },
};
