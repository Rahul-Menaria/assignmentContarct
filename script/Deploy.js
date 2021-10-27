const { ethers } = require("hardhat");

async function main(){
    const [deployer] = await ethers.getSigners();
    console.log(`Deployer Address:${deployer.address}`);

    const Nonceblox = await ethers.getContractFactory('Nonceblox');

    const nonceblox = await Nonceblox.deploy();

    console.log(`Contract Address: ${nonceblox.address}`);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
