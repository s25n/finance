import { ethers, BigNumber } from 'ethers'

export const ETH = ethers.utils.formatBytes32String('00').slice(0, 14)
export const DAI = ethers.utils.formatBytes32String('01').slice(0, 14)

export const MAX128 = BigNumber.from(2).pow(128).sub(1)
export const MAX256 = BigNumber.from(2).pow(256).sub(1)