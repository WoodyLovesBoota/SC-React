import { ethers } from "hardhat";

const main = async () => {
  const [deployer] = await ethers.getSigners();

  const MyContract = await ethers.getContractFactory("Woo");
  const contractOwner = "0x76453cde15f8779c0B106430506b0CdCB20Bd50f";
  const contract = MyContract.attach("0x58D3cCfE125D99CFF72FE1D2DC9E8321685b60BB");
  // await contract.mint(contractOwner, BigInt(1000000000000000000000));
  // await contract.transfer(
  //   "0x314Ae3e3723DCfC8362A904De41Ad2CA2246b2da",
  //   BigInt(300000000000000000000)
  // );
  console.log(await deployer.getAddress());
  const balance = await contract.balanceOf(contractOwner);
  const totalSupply = await contract.totalSupply();

  console.log("balance", balance);
  console.log("totalSupply", totalSupply);
};

// main()
//   .then(() => process.exit(0))
//   .catch((error) => {
//     console.error(error);
//     process.exit(1);
//   });

module.exports = {
  main,
};
