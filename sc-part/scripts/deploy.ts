import { ethers } from "hardhat";

async function main() {
  const [deployer] = await ethers.getSigners();

  console.log("Deploying contracts with the account:", deployer.address);
  console.log("Account balance:", (await deployer.getAddress()).toString());

  const decimals = 1_000_000_000_000_000_000;
  const SUPPLY_CAP = BigInt(1_000_000 * decimals);

  const TokenFactory = await ethers.getContractFactory("Woo");
  const token = await TokenFactory.deploy("Woo", "WT", SUPPLY_CAP);

  console.log("Token address:", await token.getAddress());
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
