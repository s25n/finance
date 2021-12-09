import "dotenv/config";
import "@typechain/hardhat";
import "@nomiclabs/hardhat-ethers";
import "hardhat-deploy";

import { HardhatUserConfig } from "hardhat/types";

const config: HardhatUserConfig = {
  solidity: {
    version: "0.8.6",
    settings: {
      outputSelection: {
        "*": {
          "*": ["storageLayout"],
        },
      },
      optimizer: {
        enabled: true,
        runs: 1,
      },
    },
  },
  namedAccounts: {
    deployer: 0,
    governance: 1,
    council: 2,
    guardian: 3,
  },
  networks: {
    ganache: {
      url: "http://0.0.0.0:8545",
    },
    testnet: {
      url: "https://data-seed-prebsc-1-s1.binance.org:8545",
      chainId: 97,
      accounts: [process.env.ADMIN || ""],
    },
  },
  etherscan: {
    apiKey: process.env.ETHERSCAN_API_KEY,
  },
};

export default config;
