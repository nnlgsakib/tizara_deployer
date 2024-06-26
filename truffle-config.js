const HDWalletProvider = require('@truffle/hdwallet-provider');
const {mainnet_rpc} = require('msc-js');
const MNEMONIC = "garlic satoshi artwork coin middle coil unique vapor clay mixture chief mobile";
const privatkey =   ['0x0c7dee41c5d202fa97708a35afcdb5b2f8e65d0d968f7a882a0263463ccc12d6']
const PROJECT_ID = "ab2d4fbcfbc14fdc990905bb7e2cb097";
const ETHERSCAN = "MJE46ZWVV3GJ21UUTG2P1C7BG3K1YNFJFP"; 
const BSC = "QPBKJJ3A5IHHNFGHHVF68AVY3T7M89JNUN";
module.exports = {
/**
* Networks define how you connect to your ethereum client and let you set the
* defaults web3 uses to send transactions. If you don't specify one truffle
* will spin up a managed Ganache instance for you on port 9545 when you
* run `develop` or `test`. You can ask a truffle command to use a specific
* network from the command line, e.g
*
* $ truffle test --network <network-name>
*/

plugins: [
 'truffle-plugin-verify'
],
api_keys: {
 etherscan: ETHERSCAN
},
api_keys: {
 bscscan: BSC
},
networks: {
 // Useful for testing. The `development` name is special - truffle uses it by default
 // if it's defined here and no other network is specified at the command line.
 // You should run a client (like ganache, geth, or parity) in a separate terminal
 // tab if you use this network and you must also set the `host`, `port` and `network_id`
 // options below to some value.
 //
 // development: {
 //  host: "127.0.0.1",     // Localhost (default: none)
 //  port: 8545,            // Standard Ethereum port (default: none)
 //  network_id: "*",       // Any network (default: none)
 // },
 //
 // An additional network, but with some advanced options…
 // advanced: {
 //   port: 8777,             // Custom port
 //   network_id: 1342,       // Custom network
 //   gas: 8500000,           // Gas sent with each transaction (default: ~6700000)
 //   gasPrice: 20000000000,  // 20 gwei (in wei) (default: 100 gwei)
 //   from: <address>,        // Account to send transactions from (default: accounts[0])
 //   websocket: true         // Enable EventEmitter interface for web3 (default: false)
 // },
 //
 // Useful for deploying to a public network.
 // Note: It's important to wrap the provider as a function to ensure truffle uses a new provider every time.
 goerli: {
   provider: () => new HDWalletProvider(MNEMONIC, `https://goerli.infura.io/v3/${PROJECT_ID}`),
    network_id: 5,       // Goerli's id
    confirmations: 2,    // # of confirmations to wait between deployments. (default: 0)
    timeoutBlocks: 200,  // # of blocks before a deployment times out  (minimum/default: 50)
   skipDryRun: true     // Skip dry run before migrations? (default: false for public nets )
 },
 testnet: {
   provider: () => new HDWalletProvider(MNEMONIC, `https://data-seed-prebsc-1-s1.binance.org:8545`),
   network_id: 97,
   confirmations: 10,
   timeoutBlocks: 200,
   skipDryRun: true
 },
 bsc: {
   provider: () => new HDWalletProvider(privatkey, `https://bsc-dataseed1.binance.org`),
   network_id: 56,
   confirmations: 10,
   timeoutBlocks: 200,
   skipDryRun: true
 },
 msc: {
 provider : () => new HDWalletProvider(privatkey, mainnet_rpc.http),
  network_id: 9996,
  confirmations: 1,
  timeoutBlocks: 200,
  skipDryRun: true
},
 //
 // Useful for private networks
  private: {
    provider: () => new HDWalletProvider(MNEMONIC, mainnet_rpc.http),
    network_id: 4,   // This network is yours, in the cloud.
    production: true    // Treats this network as if it was a public net. (default: false)
  }
},

// Set default mocha options here, use special reporters, etc.
mocha: {
 // timeout: 100000
},

// Configure your compilers
compilers: {
 solc: {
   version: "0.8.25" ,// Fetch exact version from solc-bin (default: truffle's version)
   // docker: true,        // Use "0.5.1" you've installed locally with docker (default: false)
   settings: {          // See the solidity docs for advice about optimization and evmVersion
    optimizer: {
      enabled: true,
      runs: 200
    },
    evmVersion: "london"
   }
 }
}
};