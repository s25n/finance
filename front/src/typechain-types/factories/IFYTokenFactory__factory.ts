/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import { Provider } from "@ethersproject/providers";
import type {
  IFYTokenFactory,
  IFYTokenFactoryInterface,
} from "../IFYTokenFactory";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "fyToken",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "asset",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint32",
        name: "maturity",
        type: "uint32",
      },
    ],
    name: "FYTokenCreated",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "bytes6",
        name: "baseId",
        type: "bytes6",
      },
      {
        internalType: "contract IOracle",
        name: "oracle",
        type: "address",
      },
      {
        internalType: "contract IJoin",
        name: "baseJoin",
        type: "address",
      },
      {
        internalType: "uint32",
        name: "maturity",
        type: "uint32",
      },
      {
        internalType: "string",
        name: "name",
        type: "string",
      },
      {
        internalType: "string",
        name: "symbol",
        type: "string",
      },
    ],
    name: "createFYToken",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
];

export class IFYTokenFactory__factory {
  static readonly abi = _abi;
  static createInterface(): IFYTokenFactoryInterface {
    return new utils.Interface(_abi) as IFYTokenFactoryInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IFYTokenFactory {
    return new Contract(address, _abi, signerOrProvider) as IFYTokenFactory;
  }
}
