/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { ICauldron, ICauldronInterface } from "../ICauldron";

const _abi = [
  {
    inputs: [
      {
        internalType: "bytes6",
        name: "seriesId",
        type: "bytes6",
      },
    ],
    name: "accrual",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes6",
        name: "assetsId",
        type: "bytes6",
      },
    ],
    name: "assets",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes12",
        name: "vault",
        type: "bytes12",
      },
    ],
    name: "balances",
    outputs: [
      {
        components: [
          {
            internalType: "uint128",
            name: "art",
            type: "uint128",
          },
          {
            internalType: "uint128",
            name: "ink",
            type: "uint128",
          },
        ],
        internalType: "struct DataTypes.Balances",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "bytes12",
        name: "vaultId",
        type: "bytes12",
      },
      {
        internalType: "bytes6",
        name: "seriesId",
        type: "bytes6",
      },
      {
        internalType: "bytes6",
        name: "ilkId",
        type: "bytes6",
      },
    ],
    name: "build",
    outputs: [
      {
        components: [
          {
            internalType: "address",
            name: "owner",
            type: "address",
          },
          {
            internalType: "bytes6",
            name: "seriesId",
            type: "bytes6",
          },
          {
            internalType: "bytes6",
            name: "ilkId",
            type: "bytes6",
          },
        ],
        internalType: "struct DataTypes.Vault",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes6",
        name: "baseId",
        type: "bytes6",
      },
      {
        internalType: "bytes6",
        name: "ilkId",
        type: "bytes6",
      },
    ],
    name: "debt",
    outputs: [
      {
        components: [
          {
            internalType: "uint96",
            name: "max",
            type: "uint96",
          },
          {
            internalType: "uint24",
            name: "min",
            type: "uint24",
          },
          {
            internalType: "uint8",
            name: "dec",
            type: "uint8",
          },
          {
            internalType: "uint128",
            name: "sum",
            type: "uint128",
          },
        ],
        internalType: "struct DataTypes.Debt",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes6",
        name: "seriesId",
        type: "bytes6",
      },
      {
        internalType: "uint128",
        name: "base",
        type: "uint128",
      },
    ],
    name: "debtFromBase",
    outputs: [
      {
        internalType: "uint128",
        name: "art",
        type: "uint128",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes6",
        name: "seriesId",
        type: "bytes6",
      },
      {
        internalType: "uint128",
        name: "art",
        type: "uint128",
      },
    ],
    name: "debtToBase",
    outputs: [
      {
        internalType: "uint128",
        name: "base",
        type: "uint128",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes12",
        name: "vault",
        type: "bytes12",
      },
    ],
    name: "destroy",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes12",
        name: "vaultId",
        type: "bytes12",
      },
      {
        internalType: "address",
        name: "receiver",
        type: "address",
      },
    ],
    name: "give",
    outputs: [
      {
        components: [
          {
            internalType: "address",
            name: "owner",
            type: "address",
          },
          {
            internalType: "bytes6",
            name: "seriesId",
            type: "bytes6",
          },
          {
            internalType: "bytes6",
            name: "ilkId",
            type: "bytes6",
          },
        ],
        internalType: "struct DataTypes.Vault",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes6",
        name: "baseId",
        type: "bytes6",
      },
    ],
    name: "lendingOracles",
    outputs: [
      {
        internalType: "contract IOracle",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes12",
        name: "vaultId",
        type: "bytes12",
      },
    ],
    name: "level",
    outputs: [
      {
        internalType: "int256",
        name: "",
        type: "int256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes6",
        name: "seriesId",
        type: "bytes6",
      },
    ],
    name: "mature",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes12",
        name: "vaultId",
        type: "bytes12",
      },
      {
        internalType: "int128",
        name: "ink",
        type: "int128",
      },
      {
        internalType: "int128",
        name: "art",
        type: "int128",
      },
    ],
    name: "pour",
    outputs: [
      {
        components: [
          {
            internalType: "uint128",
            name: "art",
            type: "uint128",
          },
          {
            internalType: "uint128",
            name: "ink",
            type: "uint128",
          },
        ],
        internalType: "struct DataTypes.Balances",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes12",
        name: "vaultId",
        type: "bytes12",
      },
      {
        internalType: "bytes6",
        name: "seriesId",
        type: "bytes6",
      },
      {
        internalType: "int128",
        name: "art",
        type: "int128",
      },
    ],
    name: "roll",
    outputs: [
      {
        components: [
          {
            internalType: "address",
            name: "owner",
            type: "address",
          },
          {
            internalType: "bytes6",
            name: "seriesId",
            type: "bytes6",
          },
          {
            internalType: "bytes6",
            name: "ilkId",
            type: "bytes6",
          },
        ],
        internalType: "struct DataTypes.Vault",
        name: "",
        type: "tuple",
      },
      {
        components: [
          {
            internalType: "uint128",
            name: "art",
            type: "uint128",
          },
          {
            internalType: "uint128",
            name: "ink",
            type: "uint128",
          },
        ],
        internalType: "struct DataTypes.Balances",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes6",
        name: "seriesId",
        type: "bytes6",
      },
    ],
    name: "series",
    outputs: [
      {
        components: [
          {
            internalType: "contract IFYToken",
            name: "fyToken",
            type: "address",
          },
          {
            internalType: "bytes6",
            name: "baseId",
            type: "bytes6",
          },
          {
            internalType: "uint32",
            name: "maturity",
            type: "uint32",
          },
        ],
        internalType: "struct DataTypes.Series",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes12",
        name: "vaultId",
        type: "bytes12",
      },
      {
        internalType: "uint128",
        name: "ink",
        type: "uint128",
      },
      {
        internalType: "uint128",
        name: "art",
        type: "uint128",
      },
    ],
    name: "slurp",
    outputs: [
      {
        components: [
          {
            internalType: "uint128",
            name: "art",
            type: "uint128",
          },
          {
            internalType: "uint128",
            name: "ink",
            type: "uint128",
          },
        ],
        internalType: "struct DataTypes.Balances",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes6",
        name: "baseId",
        type: "bytes6",
      },
      {
        internalType: "bytes6",
        name: "ilkId",
        type: "bytes6",
      },
    ],
    name: "spotOracles",
    outputs: [
      {
        components: [
          {
            internalType: "contract IOracle",
            name: "oracle",
            type: "address",
          },
          {
            internalType: "uint32",
            name: "ratio",
            type: "uint32",
          },
        ],
        internalType: "struct DataTypes.SpotOracle",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes12",
        name: "from",
        type: "bytes12",
      },
      {
        internalType: "bytes12",
        name: "to",
        type: "bytes12",
      },
      {
        internalType: "uint128",
        name: "ink",
        type: "uint128",
      },
      {
        internalType: "uint128",
        name: "art",
        type: "uint128",
      },
    ],
    name: "stir",
    outputs: [
      {
        components: [
          {
            internalType: "uint128",
            name: "art",
            type: "uint128",
          },
          {
            internalType: "uint128",
            name: "ink",
            type: "uint128",
          },
        ],
        internalType: "struct DataTypes.Balances",
        name: "",
        type: "tuple",
      },
      {
        components: [
          {
            internalType: "uint128",
            name: "art",
            type: "uint128",
          },
          {
            internalType: "uint128",
            name: "ink",
            type: "uint128",
          },
        ],
        internalType: "struct DataTypes.Balances",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes12",
        name: "vaultId",
        type: "bytes12",
      },
      {
        internalType: "bytes6",
        name: "seriesId",
        type: "bytes6",
      },
      {
        internalType: "bytes6",
        name: "ilkId",
        type: "bytes6",
      },
    ],
    name: "tweak",
    outputs: [
      {
        components: [
          {
            internalType: "address",
            name: "owner",
            type: "address",
          },
          {
            internalType: "bytes6",
            name: "seriesId",
            type: "bytes6",
          },
          {
            internalType: "bytes6",
            name: "ilkId",
            type: "bytes6",
          },
        ],
        internalType: "struct DataTypes.Vault",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes12",
        name: "vault",
        type: "bytes12",
      },
    ],
    name: "vaults",
    outputs: [
      {
        components: [
          {
            internalType: "address",
            name: "owner",
            type: "address",
          },
          {
            internalType: "bytes6",
            name: "seriesId",
            type: "bytes6",
          },
          {
            internalType: "bytes6",
            name: "ilkId",
            type: "bytes6",
          },
        ],
        internalType: "struct DataTypes.Vault",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

export class ICauldron__factory {
  static readonly abi = _abi;
  static createInterface(): ICauldronInterface {
    return new utils.Interface(_abi) as ICauldronInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ICauldron {
    return new Contract(address, _abi, signerOrProvider) as ICauldron;
  }
}