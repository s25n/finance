import { ethers } from "ethers";

export const CHI = ethers.utils.formatBytes32String("CHI").slice(0, 14);
export const RATE = ethers.utils.formatBytes32String("RATE").slice(0, 14);

export const ETH = ethers.utils.formatBytes32String("00").slice(0, 14);
export const DAI = ethers.utils.formatBytes32String("01").slice(0, 14);

export const SERIESID = ethers.utils.formatBytes32String("series").slice(0, 14);
