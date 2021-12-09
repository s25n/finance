/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { Wand, WandInterface } from "../Wand";

const _abi = [
  {
    inputs: [
      {
        internalType: "contract ICauldronGov",
        name: "cauldron_",
        type: "address",
      },
      {
        internalType: "contract ILadleGov",
        name: "ladle_",
        type: "address",
      },
      {
        internalType: "contract IWitchGov",
        name: "witch_",
        type: "address",
      },
      {
        internalType: "contract IPoolFactory",
        name: "poolFactory_",
        type: "address",
      },
      {
        internalType: "contract IJoinFactory",
        name: "joinFactory_",
        type: "address",
      },
      {
        internalType: "contract IFYTokenFactory",
        name: "fyTokenFactory_",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "param",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "address",
        name: "value",
        type: "address",
      },
    ],
    name: "Point",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes4",
        name: "role",
        type: "bytes4",
      },
      {
        indexed: true,
        internalType: "bytes4",
        name: "newAdminRole",
        type: "bytes4",
      },
    ],
    name: "RoleAdminChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes4",
        name: "role",
        type: "bytes4",
      },
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "RoleGranted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes4",
        name: "role",
        type: "bytes4",
      },
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "RoleRevoked",
    type: "event",
  },
  {
    inputs: [],
    name: "BURN",
    outputs: [
      {
        internalType: "bytes4",
        name: "",
        type: "bytes4",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "EXIT",
    outputs: [
      {
        internalType: "bytes4",
        name: "",
        type: "bytes4",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "JOIN",
    outputs: [
      {
        internalType: "bytes4",
        name: "",
        type: "bytes4",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "LOCK",
    outputs: [
      {
        internalType: "bytes4",
        name: "",
        type: "bytes4",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "LOCK8605463013",
    outputs: [
      {
        internalType: "bytes4",
        name: "",
        type: "bytes4",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "MINT",
    outputs: [
      {
        internalType: "bytes4",
        name: "",
        type: "bytes4",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "ROOT",
    outputs: [
      {
        internalType: "bytes4",
        name: "",
        type: "bytes4",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "ROOT4146650865",
    outputs: [
      {
        internalType: "bytes4",
        name: "",
        type: "bytes4",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes6",
        name: "assetId",
        type: "bytes6",
      },
      {
        internalType: "address",
        name: "asset",
        type: "address",
      },
    ],
    name: "addAsset",
    outputs: [],
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
        internalType: "bytes6",
        name: "baseId",
        type: "bytes6",
      },
      {
        internalType: "uint32",
        name: "maturity",
        type: "uint32",
      },
      {
        internalType: "bytes6[]",
        name: "ilkIds",
        type: "bytes6[]",
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
    name: "addSeries",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "cauldron",
    outputs: [
      {
        internalType: "contract ICauldronGov",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "fyTokenFactory",
    outputs: [
      {
        internalType: "contract IFYTokenFactory",
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
        internalType: "bytes4",
        name: "role",
        type: "bytes4",
      },
    ],
    name: "getRoleAdmin",
    outputs: [
      {
        internalType: "bytes4",
        name: "",
        type: "bytes4",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "role",
        type: "bytes4",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "grantRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4[]",
        name: "roles",
        type: "bytes4[]",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "grantRoles",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "role",
        type: "bytes4",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "hasRole",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "joinFactory",
    outputs: [
      {
        internalType: "contract IJoinFactory",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "ladle",
    outputs: [
      {
        internalType: "contract ILadleGov",
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
        internalType: "bytes4",
        name: "role",
        type: "bytes4",
      },
    ],
    name: "lockRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes6",
        name: "assetId",
        type: "bytes6",
      },
      {
        internalType: "contract IMultiOracleGov",
        name: "oracle",
        type: "address",
      },
    ],
    name: "makeBase",
    outputs: [],
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
      {
        internalType: "contract IMultiOracleGov",
        name: "oracle",
        type: "address",
      },
      {
        internalType: "uint32",
        name: "ratio",
        type: "uint32",
      },
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
    ],
    name: "makeIlk",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "param",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "value",
        type: "address",
      },
    ],
    name: "point",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "poolFactory",
    outputs: [
      {
        internalType: "contract IPoolFactory",
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
        internalType: "bytes4",
        name: "role",
        type: "bytes4",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "renounceRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "role",
        type: "bytes4",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "revokeRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4[]",
        name: "roles",
        type: "bytes4[]",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "revokeRoles",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "role",
        type: "bytes4",
      },
      {
        internalType: "bytes4",
        name: "adminRole",
        type: "bytes4",
      },
    ],
    name: "setRoleAdmin",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "witch",
    outputs: [
      {
        internalType: "contract IWitchGov",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x60806040526243484960e81b600155635241544560e01b6002556003805465ffffffffffff1916653030000000001790553480156200003d57600080fd5b50604051620024da380380620024da83398101604081905262000060916200023c565b6200006d60003362000106565b620000816001600160e01b0319806200019e565b600380546001600160a01b03978816660100000000000002600160301b600160d01b0319909116179055600480549587166001600160a01b0319968716179055600580549487169486169490941790935560068054928616928516929092179091556007805491851691841691909117905560088054919093169116179055620002e9565b6001600160e01b031982166000908152602081815260408083206001600160a01b038516845290915290205460ff166200019a576001600160e01b031982166000818152602081815260408083206001600160a01b0386168085529252808320805460ff1916600117905551339391927fe6231789d19137da31d0550f4ba9ee379020a8cfb64cb79bf1790c996d2e616591a45b5050565b6001600160e01b03198116620001d0836001600160e01b03191660009081526020819052604090206001015460e01b90565b6001600160e01b031916146200019a576001600160e01b0319828116600081815260208190526040808220600101805463ffffffff191660e087901c17905551928416927fd348e2220a50b4500ec353f6e802d2f14dd1b5d6786148fd1bbcc570bf92d4739190a35050565b60008060008060008060c087890312156200025657600080fd5b86516200026381620002d0565b60208801519096506200027681620002d0565b60408801519095506200028981620002d0565b60608801519094506200029c81620002d0565b6080880151909350620002af81620002d0565b60a0880151909250620002c281620002d0565b809150509295509295509295565b6001600160a01b0381168114620002e657600080fd5b50565b6121e180620002f96000396000f3fe608060405234801561001057600080fd5b506004361061014f5760003560e01c801561015457806310ab94321461017a5780631295bd081461019d5780633e36f4c7146101b25780634219dc40146101c057806344faded0146101e0578063559742d9146101f35780635909c12f146101545780635ba5e9f014610206578063687f0e4c1461021957806376563cec1461022c5780637f9681481461023a578063836a3ce014610248578063892723b71461025b57806394b8e38f1461026e57806397ff6a0414610281578063a308e8511461029b578063a4f0d7d0146102ae578063ad82110f146102bd578063ae93c1b5146102d0578063c0a2526c146102e3578063ddf0c8b3146102f1578063de02cde714610304578063df03b1e414610317578063e665f9e41461032a578063effae3531461033d578063fc736ce214610350578063ffffffff146102ae575b600080fd5b61015c600081565b6040516001600160e01b031990911681526020015b60405180910390f35b61018d610188366004611c09565b610363565b6040519015158152602001610171565b6101b06101ab366004611bbe565b610376565b005b61015c6340c10f1960e01b81565b6006546101d3906001600160a01b031681565b6040516101719190611ebc565b6101b06101ee366004611c09565b61056f565b6101b0610201366004611bee565b6105ad565b61015c610214366004611bee565b6105ec565b6101b0610227366004611c09565b6105fd565b61015c6312e5ff7760e01b81565b61015c63ceae3abd60e01b81565b6007546101d3906001600160a01b031681565b6101b0610269366004611d14565b610658565b6004546101d3906001600160a01b031681565b6003546101d390600160301b90046001600160a01b031681565b6005546101d3906001600160a01b031681565b61015c6001600160e01b031981565b6101b06102cb366004611af9565b610ed5565b6101b06102de366004611c35565b610f57565b61015c632770a7eb60e21b81565b6008546101d3906001600160a01b031681565b6101b0610312366004611c09565b610f8a565b6101b0610325366004611c84565b610fbd565b6101b0610338366004611c68565b61130d565b6101b061034b366004611af9565b611636565b6101b061035e366004611c68565b6116ab565b600061036f8383611863565b9392505050565b61038c6000356001600160e01b03191633611863565b6103b15760405162461bcd60e51b81526004016103a890612089565b60405180910390fd5b816731b0bab6323937b760c11b14156103ed5760038054600160301b600160d01b031916600160301b6001600160a01b03841602179055610533565b81646c61646c6560d81b141561041d57600480546001600160a01b0319166001600160a01b038316179055610533565b81640eed2e8c6d60db1b141561044d57600580546001600160a01b0319166001600160a01b038316179055610533565b816a706f6f6c466163746f727960a81b141561048357600680546001600160a01b0319166001600160a01b038316179055610533565b816a6a6f696e466163746f727960a81b14156104b957600780546001600160a01b0319166001600160a01b038316179055610533565b816d6679546f6b656e466163746f727960901b14156104f257600880546001600160a01b0319166001600160a01b038316179055610533565b60405162461bcd60e51b81526020600482015260166024820152752ab73932b1b7b3b734bd32b2103830b930b6b2ba32b960511b60448201526064016103a8565b817fd61f2f59686784f82db8673820acfa642f9709c800724e09f7ac0e1aaedf4af7826040516105639190611ebc565b60405180910390a25050565b8161058261057c82611898565b33611863565b61059e5760405162461bcd60e51b81526004016103a890612065565b6105a883836118ba565b505050565b806105ba61057c82611898565b6105d65760405162461bcd60e51b81526004016103a890612065565b6105e8826001600160e01b0319611929565b5050565b60006105f782611898565b92915050565b6001600160a01b038116331461064e5760405162461bcd60e51b81526020600482015260166024820152752932b737bab731b29037b7363c903337b91039b2b63360511b60448201526064016103a8565b6105e882826118ba565b61066e6000356001600160e01b03191633611863565b61068a5760405162461bcd60e51b81526004016103a890612089565b600354604051630cdf468960e11b8152600091600160301b90046001600160a01b0316906319be8d12906106c2908a90600401611f6b565b60206040518083038186803b1580156106da57600080fd5b505afa1580156106ee573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107129190611adc565b90506001600160a01b03811661075b5760405162461bcd60e51b815260206004820152600e60248201526d10985cd9481b9bdd08199bdd5b9960921b60448201526064016103a8565b600480546040516330705b1b60e11b81526000926001600160a01b03909216916360e0b6369161078d918c9101611f6b565b60206040518083038186803b1580156107a557600080fd5b505afa1580156107b9573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107dd9190611adc565b90506001600160a01b0381166108265760405162461bcd60e51b815260206004820152600e60248201526d129bda5b881b9bdd08199bdd5b9960921b60448201526064016103a8565b60035460405163b2bb4cc760e01b8152600091600160301b90046001600160a01b03169063b2bb4cc79061085e908c90600401611f6b565b60206040518083038186803b15801561087657600080fd5b505afa15801561088a573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108ae9190611adc565b90506001600160a01b0381166108fd5760405162461bcd60e51b815260206004820152601460248201527310da1a481bdc9858db19481b9bdd08199bdd5b9960621b60448201526064016103a8565b60085460405163839b132d60e01b81526000916001600160a01b03169063839b132d90610938908d90869088908f908d908d90600401611ffe565b602060405180830381600087803b15801561095257600080fd5b505af1158015610966573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061098a9190611adc565b604080516002808252606082018352929350600092909160208301908036833701905050905063ceae3abd60e01b816000815181106109cb576109cb612132565b6001600160e01b03199092166020928302919091019091015280516312e5ff7760e01b9082906001908110610a0257610a02612132565b6001600160e01b03199092166020928302919091019091015260405163effae35360e01b81526001600160a01b0385169063effae35390610a499084908690600401611eea565b600060405180830381600087803b158015610a6357600080fd5b505af1158015610a77573d6000803e3d6000fd5b5060029250610a84915050565b604051908082528060200260200182016040528015610aad578160200160208202803683370190505b5090506340c10f1960e01b81600081518110610acb57610acb612132565b6001600160e01b0319909216602092830291909101909101528051632770a7eb60e21b9082906001908110610b0257610b02612132565b6001600160e01b0319909216602092830291909101909101526004805460405163effae35360e01b81526001600160a01b038086169363effae35393610b4f938793919091169101611eea565b600060405180830381600087803b158015610b6957600080fd5b505af1158015610b7d573d6000803e3d6000fd5b505060405163de02cde760e01b81526001600160a01b038516925063de02cde79150610bb0906000903390600401611f48565b600060405180830381600087803b158015610bca57600080fd5b505af1158015610bde573d6000803e3d6000fd5b5050604051631a1fc39360e21b81526001600160a01b038516925063687f0e4c9150610c11906000903090600401611f48565b600060405180830381600087803b158015610c2b57600080fd5b505af1158015610c3f573d6000803e3d6000fd5b5050600354604051634b6e6f9360e11b81526001600160a01b03600160301b9092049190911692506396dcdf269150610ca9908f908f9087906004016001600160d01b031993841681529190921660208201526001600160a01b0391909116604082015260600190565b600060405180830381600087803b158015610cc357600080fd5b505af1158015610cd7573d6000803e3d6000fd5b50506003546040516353eecb7760e01b8152600160301b9091046001600160a01b031692506353eecb779150610d15908f908d908d90600401611fa3565b600060405180830381600087803b158015610d2f57600080fd5b505af1158015610d43573d6000803e3d6000fd5b505060065460405163e343361560e01b81526001600160a01b03909116925063e34336159150610d799088908690600401611ed0565b602060405180830381600087803b158015610d9357600080fd5b505af1158015610da7573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610dcb9190611adc565b506006546040516304136ce760e31b81526000916001600160a01b03169063209b673890610dff9089908790600401611ed0565b60206040518083038186803b158015610e1757600080fd5b505afa158015610e2b573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610e4f9190611adc565b9050600460009054906101000a90046001600160a01b03166001600160a01b03166333e6035a8e836040518363ffffffff1660e01b8152600401610e94929190611f80565b600060405180830381600087803b158015610eae57600080fd5b505af1158015610ec2573d6000803e3d6000fd5b5050505050505050505050505050505050565b60005b82518110156105a857610f0661057c848381518110610ef957610ef9612132565b6020026020010151611898565b610f225760405162461bcd60e51b81526004016103a890612065565b610f45838281518110610f3757610f37612132565b6020026020010151836118ba565b80610f4f81612109565b915050610ed8565b81610f6461057c82611898565b610f805760405162461bcd60e51b81526004016103a890612065565b6105a88383611929565b81610f9761057c82611898565b610fb35760405162461bcd60e51b81526004016103a890612065565b6105a883836119a8565b610fd36000356001600160e01b03191633611863565b610fef5760405162461bcd60e51b81526004016103a890612089565b6001600160a01b0385166110155760405162461bcd60e51b81526004016103a8906120b0565b60055460405163cf17b4e960e01b81526000916001600160a01b03169063cf17b4e990611046908a90600401611f6b565b60806040518083038186803b15801561105e57600080fd5b505afa158015611072573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906110969190611e04565b50505090506000816001600160601b0316116110ee5760405162461bcd60e51b8152602060048201526017602482015276092dcd2e8d2c2d8d2f4ca40d2d8d640d2dc40aed2e8c6d604b1b60448201526064016103a8565b60035460405163477b5efd60e11b81526001600160d01b0319808b166004830152891660248201526001600160a01b03888116604483015263ffffffff88166064830152600160301b90920490911690638ef6bdfa90608401600060405180830381600087803b15801561116157600080fd5b505af1158015611175573d6000803e3d6000fd5b505060035460405163d3fc152b60e01b81526001600160d01b0319808d1660048301528b1660248201526001600160601b038816604482015262ffffff8716606482015260ff86166084820152600160301b9091046001600160a01b0316925063d3fc152b915060a401600060405180830381600087803b1580156111f957600080fd5b505af115801561120d573d6000803e3d6000fd5b5050600480546040516330705b1b60e11b8152600094506001600160a01b0390911692506360e0b63691611243918c9101611f6b565b60206040518083038186803b15801561125b57600080fd5b505afa15801561126f573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906112939190611adc565b60055460405163de02cde760e01b81529192506001600160a01b038084169263de02cde7926112d0926312e5ff7760e01b92911690600401611f48565b600060405180830381600087803b1580156112ea57600080fd5b505af11580156112fe573d6000803e3d6000fd5b50505050505050505050505050565b6113236000356001600160e01b03191633611863565b61133f5760405162461bcd60e51b81526004016103a890612089565b6001600160a01b0381166113865760405162461bcd60e51b815260206004820152600e60248201526d105cdcd95d081c995c5d5a5c995960921b60448201526064016103a8565b6003546040516339997e7960e21b8152600160301b9091046001600160a01b03169063e665f9e4906113be9085908590600401611f80565b600060405180830381600087803b1580156113d857600080fd5b505af11580156113ec573d6000803e3d6000fd5b505060075460405163d448c1c560e01b8152600093506001600160a01b03909116915063d448c1c590611423908590600401611ebc565b602060405180830381600087803b15801561143d57600080fd5b505af1158015611451573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906114759190611adc565b604080516002808252606082018352929350600092909160208301908036833701905050905063ceae3abd60e01b816000815181106114b6576114b6612132565b6001600160e01b03199092166020928302919091019091015280516312e5ff7760e01b90829060019081106114ed576114ed612132565b6001600160e01b0319909216602092830291909101909101526004805460405163effae35360e01b81526001600160a01b038086169363effae3539361153a938793919091169101611eea565b600060405180830381600087803b15801561155457600080fd5b505af1158015611568573d6000803e3d6000fd5b505060405163de02cde760e01b81526001600160a01b038516925063de02cde7915061159b906000903390600401611f48565b600060405180830381600087803b1580156115b557600080fd5b505af11580156115c9573d6000803e3d6000fd5b5050600480546040516349c29d2b60e01b81526001600160a01b0390911693506349c29d2b92506115fe918891879101611f80565b600060405180830381600087803b15801561161857600080fd5b505af115801561162c573d6000803e3d6000fd5b5050505050505050565b60005b82518110156105a85761165a61057c848381518110610ef957610ef9612132565b6116765760405162461bcd60e51b81526004016103a890612065565b61169983828151811061168b5761168b612132565b6020026020010151836119a8565b806116a381612109565b915050611639565b6116c16000356001600160e01b03191633611863565b6116dd5760405162461bcd60e51b81526004016103a890612089565b6001600160a01b0381166117035760405162461bcd60e51b81526004016103a8906120b0565b600354604051630aae4fa960e31b8152600160301b9091046001600160a01b0316906355727d489061173b9085908590600401611f80565b600060405180830381600087803b15801561175557600080fd5b505af1158015611769573d6000803e3d6000fd5b5050600480546040516330705b1b60e11b8152600094506001600160a01b0390911692506360e0b6369161179f91879101611f6b565b60206040518083038186803b1580156117b757600080fd5b505afa1580156117cb573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906117ef9190611adc565b60055460405163de02cde760e01b81529192506001600160a01b038084169263de02cde79261182c9263ceae3abd60e01b92911690600401611f48565b600060405180830381600087803b15801561184657600080fd5b505af115801561185a573d6000803e3d6000fd5b50505050505050565b6001600160e01b031982166000908152602081815260408083206001600160a01b038516845290915290205460ff1692915050565b6001600160e01b03191660009081526020819052604090206001015460e01b90565b6118c48282611863565b156105e8576001600160e01b031982166000818152602081815260408083206001600160a01b0386168085529252808320805460ff1916905551339391927f4ddc7b757e7bdd7254a9cd39452d307a52761bc824625c6a33104a075d8099e691a45050565b6001600160e01b0319811661193d83611898565b6001600160e01b031916146105e8576001600160e01b0319828116600081815260208190526040808220600101805463ffffffff191660e087901c17905551928416927fd348e2220a50b4500ec353f6e802d2f14dd1b5d6786148fd1bbcc570bf92d4739190a35050565b6119b28282611863565b6105e8576001600160e01b031982166000818152602081815260408083206001600160a01b0386168085529252808320805460ff1916600117905551339391927fe6231789d19137da31d0550f4ba9ee379020a8cfb64cb79bf1790c996d2e616591a45050565b8035611a248161215e565b919050565b80356001600160e01b031981168114611a2457600080fd5b80356001600160d01b031981168114611a2457600080fd5b600082601f830112611a6a57600080fd5b81356001600160401b03811115611a8357611a83612148565b611a96601f8201601f19166020016120d9565b818152846020838601011115611aab57600080fd5b816020850160208301376000918101602001919091529392505050565b803563ffffffff81168114611a2457600080fd5b600060208284031215611aee57600080fd5b815161036f8161215e565b60008060408385031215611b0c57600080fd5b82356001600160401b0380821115611b2357600080fd5b818501915085601f830112611b3757600080fd5b8135602082821115611b4b57611b4b612148565b8160051b9250611b5c8184016120d9565b8281528181019085830185870184018b1015611b7757600080fd5b600096505b84871015611ba157611b8d81611a29565b835260019690960195918301918301611b7c565b509650611bb19050878201611a19565b9450505050509250929050565b60008060408385031215611bd157600080fd5b823591506020830135611be38161215e565b809150509250929050565b600060208284031215611c0057600080fd5b61036f82611a29565b60008060408385031215611c1c57600080fd5b611c2583611a29565b91506020830135611be38161215e565b60008060408385031215611c4857600080fd5b611c5183611a29565b9150611c5f60208401611a29565b90509250929050565b60008060408385031215611c7b57600080fd5b611c2583611a41565b600080600080600080600060e0888a031215611c9f57600080fd5b611ca888611a41565b9650611cb660208901611a41565b95506040880135611cc68161215e565b9450611cd460608901611ac8565b93506080880135611ce481612196565b925060a0880135611cf481612176565b915060c0880135611d0481612187565b8091505092959891949750929550565b600080600080600080600060c0888a031215611d2f57600080fd5b611d3888611a41565b9650611d4660208901611a41565b9550611d5460408901611ac8565b945060608801356001600160401b0380821115611d7057600080fd5b818a0191508a601f830112611d8457600080fd5b813581811115611d9357600080fd5b8b60208260051b8501011115611da857600080fd5b6020830196508095505060808a0135915080821115611dc657600080fd5b611dd28b838c01611a59565b935060a08a0135915080821115611de857600080fd5b50611df58a828b01611a59565b91505092959891949750929550565b60008060008060808587031215611e1a57600080fd5b8451611e2581612196565b6020860151909450611e3681612176565b6040860151909350611e4781612187565b60608601519092506001600160801b0381168114611e6457600080fd5b939692955090935050565b6000815180845260005b81811015611e9557602081850181015186830182015201611e79565b81811115611ea7576000602083870101525b50601f01601f19169290920160200192915050565b6001600160a01b0391909116815260200190565b6001600160a01b0392831681529116602082015260400190565b604080825283519082018190526000906020906060840190828701845b82811015611f2d5781516001600160e01b03191684529284019290840190600101611f07565b5050506001600160a01b039490941692019190915250919050565b6001600160e01b03199290921682526001600160a01b0316602082015260400190565b6001600160d01b031991909116815260200190565b6001600160d01b03199290921682526001600160a01b0316602082015260400190565b6001600160d01b0319848116825260406020808401829052908301849052600091859160608501845b87811015611ff15783611fde86611a41565b1682529382019390820190600101611fcc565b5098975050505050505050565b6001600160d01b0319871681526001600160a01b0386811660208301528516604082015263ffffffff8416606082015260c06080820181905260009061204690830185611e6f565b82810360a08401526120588185611e6f565b9998505050505050505050565b6020808252600a908201526927b7363c9030b236b4b760b11b604082015260600190565b6020808252600d908201526c1058d8d95cdcc819195b9a5959609a1b604082015260600190565b6020808252600f908201526e13dc9858db19481c995c5d5a5c9959608a1b604082015260600190565b604051601f8201601f191681016001600160401b038111828210171561210157612101612148565b604052919050565b600060001982141561212b57634e487b7160e01b600052601160045260246000fd5b5060010190565b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052604160045260246000fd5b6001600160a01b038116811461217357600080fd5b50565b62ffffff8116811461217357600080fd5b60ff8116811461217357600080fd5b6001600160601b038116811461217357600080fdfea2646970667358221220afe65edcbee16293f6da043e6e0aa2c96f6b441af0bdc4cff4fe91e8d81223b864736f6c63430008060033";

type WandConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: WandConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Wand__factory extends ContractFactory {
  constructor(...args: WandConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  deploy(
    cauldron_: string,
    ladle_: string,
    witch_: string,
    poolFactory_: string,
    joinFactory_: string,
    fyTokenFactory_: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<Wand> {
    return super.deploy(
      cauldron_,
      ladle_,
      witch_,
      poolFactory_,
      joinFactory_,
      fyTokenFactory_,
      overrides || {}
    ) as Promise<Wand>;
  }
  getDeployTransaction(
    cauldron_: string,
    ladle_: string,
    witch_: string,
    poolFactory_: string,
    joinFactory_: string,
    fyTokenFactory_: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      cauldron_,
      ladle_,
      witch_,
      poolFactory_,
      joinFactory_,
      fyTokenFactory_,
      overrides || {}
    );
  }
  attach(address: string): Wand {
    return super.attach(address) as Wand;
  }
  connect(signer: Signer): Wand__factory {
    return super.connect(signer) as Wand__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): WandInterface {
    return new utils.Interface(_abi) as WandInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): Wand {
    return new Contract(address, _abi, signerOrProvider) as Wand;
  }
}
