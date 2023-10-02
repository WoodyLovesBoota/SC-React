import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
require("dotenv").config();
const { API_URL, PRIVATE_KEY } = process.env;

// const config: HardhatUserConfig = {
//   solidity: "0.8.0",
// };

module.exports = {
  solidity: "0.8.0",
  defaultNetwork: "sepolia",
  networks: {
    hardhat: {},
    sepolia: {
      url: API_URL,
      accounts: [`0x${PRIVATE_KEY}`],
    },
  },
};

// export default config;
