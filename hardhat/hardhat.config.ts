import { HardhatUserConfig } from "hardhat/config";
import "dotenv/config";
import "@nomicfoundation/hardhat-toolbox-viem";

const config: HardhatUserConfig = {
  solidity: "0.8.24",
  networks: {
    sepolia: {
      url: process.env.INFURA_URL,
      accounts: [process.env.PRIVATE_KEY || ""],
    },
    arbitrumSepolia: {
      url: "https://sepolia-rollup.arbitrum.io/rpc",
      chainId: 421614,
      accounts: [process.env.PRIVATE_KEY || ""],
    },
  },

  etherscan: {
    apiKey: {
      arbitrumSepolia: process.env.ARBISCAN_PRIVATE_KEY || "",
      sepolia: process.env.ETHERSCAN_PRIVATE_KEY || "",
    },
    customChains: [
      {
        network: "arbitrumSepolia",
        chainId: 421614,
        urls: {
          apiURL: "https://api-sepolia.arbiscan.io/api",
          browserURL: "https://sepolia.arbiscan.io/",
        },
      },
    ],
  },
};

export default config;
