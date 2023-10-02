import React from "react";
import logo from "./logo.svg";
import "./App.css";
import abi from "./utils/Woo.json";
// import { ethers } from "hardhat";
import { Contract, Signer } from "ethers";

// const main = async () => {
//   const MyContract = await ethers.getContractFactory("Woo");
//   const contract = MyContract.attach("0x58D3cCfE125D99CFF72FE1D2DC9E8321685b60BB");
//   const balance = await contract.balanceOf("0x76453cde15f8779c0B106430506b0CdCB20Bd50f");
//   console.log(balance);
// };

// main()
//   .then(() => process.exit(0))
//   .catch((error) => {
//     console.error(error);
//     process.exit(1);
//   });

function App() {
  const behavior = require("../../sc-part/behavior.ts");
  behavior.main();
  return <div className="App"></div>;
}

export default App;
