/**
 * @type import('hardhat/config').HardhatUserConfig
 */
require('@nomiclabs/hardhat-waffle');
const INFURA_URL = 'Your INFURA URL HERE';
const PRIVATE_KEY = 'Enter your Private Key Here';
module.exports = {
  solidity: "0.8.3",
  networks:{
    rinkeby:{
      url: INFURA_URL,
      accounts:[`0x${PRIVATE_KEY}`]
    }
  }
};
