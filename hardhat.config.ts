require("dotenv").config()

import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

const config: HardhatUserConfig = {
  solidity: {
    compilers: [
      {
        version: "0.8.7",
      },
    ],
    overrides: {
      "contracts/HelloWorld.sol": {
        version: "0.8.7",
        settings: {}
      },
      "contracts/DataFeed.sol": {
        version: "0.8.7",
        settings: {}
      }
    }
  },
  networks: {
    goerli: {
      url: process.env.GOERLI_RPC_URL || process.env.GOERLI_URL || "",
      chainId: 5,
      accounts:
        process.env.PRIVATE_KEY !== undefined ? [process.env.PRIVATE_KEY] : [],
    },
  },
  etherscan: {
    apiKey: process.env.ETHERSCAN_API_KEY
  }
};

export default config;
