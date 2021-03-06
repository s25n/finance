/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { IWitchGov, IWitchGovInterface } from "../IWitchGov";

const _abi = [
  {
    inputs: [
      {
        internalType: "bytes6",
        name: "",
        type: "bytes6",
      },
    ],
    name: "limits",
    outputs: [
      {
        internalType: "uint96",
        name: "",
        type: "uint96",
      },
      {
        internalType: "uint24",
        name: "",
        type: "uint24",
      },
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
      {
        internalType: "uint128",
        name: "",
        type: "uint128",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

export class IWitchGov__factory {
  static readonly abi = _abi;
  static createInterface(): IWitchGovInterface {
    return new utils.Interface(_abi) as IWitchGovInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IWitchGov {
    return new Contract(address, _abi, signerOrProvider) as IWitchGov;
  }
}
