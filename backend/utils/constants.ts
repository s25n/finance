import { ethers } from "ethers";

export const ETH = ethers.utils.formatBytes32String("00").slice(0, 14);
export const DAI = ethers.utils.formatBytes32String("01").slice(0, 14);
