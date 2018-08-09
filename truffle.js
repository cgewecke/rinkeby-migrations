const HDWalletProvider = require('truffle-hdwallet-provider');
const fs = require('fs');
// first read in the secrets.json to get our mnemonic
let secrets;
let infura;
let mnemonic;
let mint;
let ganache;
if (fs.existsSync('secrets.js')) {
  secrets = require('./secrets');
  mnemonic = secrets.mnemonic;
  infura = secrets.infura;
  mint = secrets.mint;
  ganache = 'dial dry credit solar dirt supply sister town more thank cheap busy';
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
      confirmations: 2,
    },
    ropsten: {
      provider: () => new HDWalletProvider(mnemonic, `https://ropsten.infura.io/${infura}`),
      network_id: 3,
      gas: 6000000,
      gasPrice: 20000000000,
      confirmations: 2,
    },

    // Roderik's parity cluster testnet for SettleMint
    minttestnet: {
      provider: () => new HDWalletProvider(mint, 'https://minttestnet.settlemint.com'),
      gasPrice: 0x00,
      network_id: '8995',
    },

    // Ganache
    development: {
      provider: () => new HDWalletProvider(ganache, `http://127.0.0.1:8545`),
      network_id: '*'
    }
  },
};
