/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { Join, JoinInterface } from "../Join";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "asset_",
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
        internalType: "uint256",
        name: "fee",
        type: "uint256",
      },
    ],
    name: "FlashFeeFactorSet",
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
    inputs: [],
    name: "asset",
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
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        internalType: "uint128",
        name: "amount",
        type: "uint128",
      },
    ],
    name: "exit",
    outputs: [
      {
        internalType: "uint128",
        name: "",
        type: "uint128",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "flashFee",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "flashFeeFactor",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IERC3156FlashBorrower",
        name: "receiver",
        type: "address",
      },
      {
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "flashLoan",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
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
    inputs: [
      {
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        internalType: "uint128",
        name: "amount",
        type: "uint128",
      },
    ],
    name: "join",
    outputs: [
      {
        internalType: "uint128",
        name: "",
        type: "uint128",
      },
    ],
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
    ],
    name: "lockRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "token",
        type: "address",
      },
    ],
    name: "maxFlashLoan",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
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
        internalType: "contract IERC20",
        name: "token",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
    ],
    name: "retrieve",
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
        internalType: "uint256",
        name: "flashFeeFactor_",
        type: "uint256",
      },
    ],
    name: "setFlashFeeFactor",
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
    name: "storedBalance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x60a06040526000196002553480156200001757600080fd5b5060405162001823380380620018238339810160408190526200003a91620001a7565b6200004760003362000071565b6200005b6001600160e01b03198062000109565b60601b6001600160601b031916608052620001d9565b6001600160e01b031982166000908152602081815260408083206001600160a01b038516845290915290205460ff1662000105576001600160e01b031982166000818152602081815260408083206001600160a01b0386168085529252808320805460ff1916600117905551339391927fe6231789d19137da31d0550f4ba9ee379020a8cfb64cb79bf1790c996d2e616591a45b5050565b6001600160e01b031981166200013b836001600160e01b03191660009081526020819052604090206001015460e01b90565b6001600160e01b0319161462000105576001600160e01b0319828116600081815260208190526040808220600101805463ffffffff191660e087901c17905551928416927fd348e2220a50b4500ec353f6e802d2f14dd1b5d6786148fd1bbcc570bf92d4739190a35050565b600060208284031215620001ba57600080fd5b81516001600160a01b0381168114620001d257600080fd5b9392505050565b60805160601c61160162000222600039600081816101ab01528181610451015281816105e001528181610778015281816108ac015281816109ec0152610bdc01526116016000f3fe608060405234801561001057600080fd5b50600436106101185760003560e01c801561011d57806310ab94321461014357806312e5ff7714610166578063159c03dd1461019157806338d52e0f146101a657806344faded0146101da578063559742d9146101ed5780635909c12f1461011d5780635ba5e9f0146102005780635cffe9de14610213578063613255ab14610226578063687f0e4c14610247578063a4f0d7d01461025a578063ad82110f14610269578063ae93c1b51461027c578063bac7340c1461028f578063ceae3abd14610298578063d9d98ce4146102ab578063de02cde7146102be578063e9eca994146102d1578063effae353146102da578063f06c2dfc146102ed578063ffffffff1461025a575b600080fd5b610125600081565b6040516001600160e01b031990911681526020015b60405180910390f35b610156610151366004611166565b610300565b604051901515815260200161013a565b610179610174366004610fda565b610313565b6040516001600160801b03909116815260200161013a565b6101a461019f366004611307565b61035a565b005b6101cd7f000000000000000000000000000000000000000000000000000000000000000081565b60405161013a9190611368565b6101a46101e8366004611166565b6103bf565b6101a46101fb36600461114b565b6103fd565b61012561020e36600461114b565b61043c565b6101566102213660046111e3565b61044d565b610239610234366004610fbd565b6105dc565b60405190815260200161013a565b6101a4610255366004611166565b610626565b6101256001600160e01b031981565b6101a461027736600461104b565b610681565b6101a461028a366004611192565b610703565b61023960025481565b6101796102a6366004610fda565b610736565b6102396102b936600461101f565b610774565b6101a46102cc366004611166565b6107d0565b61023960015481565b6101a46102e836600461104b565b610803565b6101a46102fb3660046111c5565b610878565b600061030c83836109b2565b9392505050565b600061032b6000356001600160e01b031916336109b2565b6103505760405162461bcd60e51b81526004016103479061142f565b60405180910390fd5b61030c83836109e7565b6103706000356001600160e01b031916336109b2565b61038c5760405162461bcd60e51b81526004016103479061142f565b600281905560405181907ff68737d5e8496ca5e19cbdd129d7c94946f794b55f680f7df5a9893eb689044990600090a250565b816103d26103cc82610a53565b336109b2565b6103ee5760405162461bcd60e51b8152600401610347906113dd565b6103f88383610a75565b505050565b8061040a6103cc82610a53565b6104265760405162461bcd60e51b8152600401610347906113dd565b610438826001600160e01b0319610ae4565b5050565b600061044782610a53565b92915050565b60007f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316846001600160a01b0316146104a05760405162461bcd60e51b815260040161034790611401565b60006104ab84610b63565b905060006104c06104bb86610bb0565b610b63565b90506104cc87836109e7565b506040516323e30c8b60e01b81527f439148f0bbc682ca079e46d6e2c2f0c1e3b820f1a291b069d8882abf8cf18dd9906001600160a01b038916906323e30c8b906105239033908b90889088908c9060040161137c565b602060405180830381600087803b15801561053d57600080fd5b505af1158015610551573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105759190611132565b146105bb5760405162461bcd60e51b81526020600482015260166024820152752737b716b1b7b6b83634b0b73a103137b93937bbb2b960511b6044820152606401610347565b6105ce876105c983856114ad565b610bc7565b506001979650505050505050565b60007f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316826001600160a01b03161461061e576000610447565b505060015490565b6001600160a01b03811633146106775760405162461bcd60e51b81526020600482015260166024820152752932b737bab731b29037b7363c903337b91039b2b63360511b6044820152606401610347565b6104388282610a75565b60005b82518110156103f8576106b26103cc8483815181106106a5576106a5611587565b6020026020010151610a53565b6106ce5760405162461bcd60e51b8152600401610347906113dd565b6106f18382815181106106e3576106e3611587565b602002602001015183610a75565b806106fb81611556565b915050610684565b816107106103cc82610a53565b61072c5760405162461bcd60e51b8152600401610347906113dd565b6103f88383610ae4565b600061074e6000356001600160e01b031916336109b2565b61076a5760405162461bcd60e51b81526004016103479061142f565b61030c8383610bc7565b60007f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316836001600160a01b0316146107c75760405162461bcd60e51b815260040161034790611401565b61030c82610bb0565b816107dd6103cc82610a53565b6107f95760405162461bcd60e51b8152600401610347906113dd565b6103f88383610ccd565b60005b82518110156103f8576108276103cc8483815181106106a5576106a5611587565b6108435760405162461bcd60e51b8152600401610347906113dd565b61086683828151811061085857610858611587565b602002602001015183610ccd565b8061087081611556565b915050610806565b61088e6000356001600160e01b031916336109b2565b6108aa5760405162461bcd60e51b81526004016103479061142f565b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316826001600160a01b031614156109215760405162461bcd60e51b8152602060048201526012602482015271155cd948195e1a5d08199bdc88185cdcd95d60721b6044820152606401610347565b61043881836001600160a01b03166370a08231306040518263ffffffff1660e01b81526004016109519190611368565b60206040518083038186803b15801561096957600080fd5b505afa15801561097d573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109a19190611132565b6001600160a01b0385169190610d3e565b6001600160e01b031982166000908152602081815260408083206001600160a01b038516845290915290205460ff1692915050565b6000807f00000000000000000000000000000000000000000000000000000000000000009050826001600160801b031660016000828254610a28919061150f565b90915550610a4b90506001600160a01b038216856001600160801b038616610d3e565b509092915050565b6001600160e01b03191660009081526020819052604090206001015460e01b90565b610a7f82826109b2565b15610438576001600160e01b031982166000818152602081815260408083206001600160a01b0386168085529252808320805460ff1916905551339391927f4ddc7b757e7bdd7254a9cd39452d307a52761bc824625c6a33104a075d8099e691a45050565b6001600160e01b03198116610af883610a53565b6001600160e01b03191614610438576001600160e01b0319828116600081815260208190526040808220600101805463ffffffff191660e087901c17905551928416927fd348e2220a50b4500ec353f6e802d2f14dd1b5d6786148fd1bbcc570bf92d4739190a35050565b60006001600160801b03821115610bac5760405162461bcd60e51b815260206004820152600d60248201526c43617374206f766572666c6f7760981b6044820152606401610347565b5090565b600061044760025483610e3390919063ffffffff16565b6001546040516370a0823160e01b81526000917f000000000000000000000000000000000000000000000000000000000000000091839082906001600160a01b038516906370a0823190610c1f903090600401611368565b60206040518083038186803b158015610c3757600080fd5b505afa158015610c4b573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610c6f9190611132565b610c79919061150f565b9050610c8e6001600160801b038616836114d8565b6001556001600160801b038516811015610cc357610cc36001600160a01b03841687306001600160801b038916859003610e51565b5092949350505050565b610cd782826109b2565b610438576001600160e01b031982166000818152602081815260408083206001600160a01b0386168085529252808320805460ff1916600117905551339391927fe6231789d19137da31d0550f4ba9ee379020a8cfb64cb79bf1790c996d2e616591a45050565b604080516001600160a01b038481166024830152604480830185905283518084039091018152606490920183526020820180516001600160e01b031663a9059cbb60e01b1790529151600092839290871691610d9a919061134c565b6000604051808303816000865af19150503d8060008114610dd7576040519150601f19603f3d011682016040523d82523d6000602084013e610ddc565b606091505b5091509150818015610e06575080511580610e06575080806020019051810190610e069190611110565b610e2c57610e1381610f36565b60405162461bcd60e51b815260040161034791906113ca565b5050505050565b6000610e3f82846114f0565b670de0b6b3a764000090049392505050565b604080516001600160a01b0385811660248301528481166044830152606480830185905283518084039091018152608490920183526020820180516001600160e01b03166323b872dd60e01b1790529151600092839290881691610eb5919061134c565b6000604051808303816000865af19150503d8060008114610ef2576040519150601f19603f3d011682016040523d82523d6000602084013e610ef7565b606091505b5091509150818015610f21575080511580610f21575080806020019051810190610f219190611110565b610f2e57610e1381610f36565b505050505050565b6060604482511015610f7b57505060408051808201909152601d81527f5472616e73616374696f6e2072657665727465642073696c656e746c79000000602082015290565b600482019150818060200190518101906104479190611291565b8035610fa0816115b3565b919050565b80356001600160e01b031981168114610fa057600080fd5b600060208284031215610fcf57600080fd5b813561030c816115b3565b60008060408385031215610fed57600080fd5b8235610ff8816115b3565b915060208301356001600160801b038116811461101457600080fd5b809150509250929050565b6000806040838503121561103257600080fd5b823561103d816115b3565b946020939093013593505050565b6000806040838503121561105e57600080fd5b82356001600160401b038082111561107557600080fd5b818501915085601f83011261108957600080fd5b813560208282111561109d5761109d61159d565b8160051b92506110ae818401611456565b8281528181019085830185870184018b10156110c957600080fd5b600096505b848710156110f3576110df81610fa5565b8352600196909601959183019183016110ce565b5096506111039050878201610f95565b9450505050509250929050565b60006020828403121561112257600080fd5b8151801515811461030c57600080fd5b60006020828403121561114457600080fd5b5051919050565b60006020828403121561115d57600080fd5b61030c82610fa5565b6000806040838503121561117957600080fd5b61118283610fa5565b91506020830135611014816115b3565b600080604083850312156111a557600080fd5b6111ae83610fa5565b91506111bc60208401610fa5565b90509250929050565b600080604083850312156111d857600080fd5b8235611182816115b3565b600080600080608085870312156111f957600080fd5b8435611204816115b3565b93506020850135611214816115b3565b92506040850135915060608501356001600160401b0381111561123657600080fd5b8501601f8101871361124757600080fd5b803561125a61125582611486565b611456565b81815288602083850101111561126f57600080fd5b8160208401602083013760006020838301015280935050505092959194509250565b6000602082840312156112a357600080fd5b81516001600160401b038111156112b957600080fd5b8201601f810184136112ca57600080fd5b80516112d861125582611486565b8181528560208385010111156112ed57600080fd5b6112fe826020830160208601611526565b95945050505050565b60006020828403121561131957600080fd5b5035919050565b60008151808452611338816020860160208601611526565b601f01601f19169290920160200192915050565b6000825161135e818460208701611526565b9190910192915050565b6001600160a01b0391909116815260200190565b6001600160a01b038681168252851660208201526001600160801b0384811660408301528316606082015260a0608082018190526000906113bf90830184611320565b979650505050505050565b60208152600061030c6020830184611320565b6020808252600a908201526927b7363c9030b236b4b760b11b604082015260600190565b602080825260149082015273556e737570706f727465642063757272656e637960601b604082015260600190565b6020808252600d908201526c1058d8d95cdcc819195b9a5959609a1b604082015260600190565b604051601f8201601f191681016001600160401b038111828210171561147e5761147e61159d565b604052919050565b60006001600160401b0382111561149f5761149f61159d565b50601f01601f191660200190565b60006001600160801b038281168482168083038211156114cf576114cf611571565b01949350505050565b600082198211156114eb576114eb611571565b500190565b600081600019048311821515161561150a5761150a611571565b500290565b60008282101561152157611521611571565b500390565b60005b83811015611541578181015183820152602001611529565b83811115611550576000848401525b50505050565b600060001982141561156a5761156a611571565b5060010190565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052604160045260246000fd5b6001600160a01b03811681146115c857600080fd5b5056fea26469706673582212202aa39e87c5297d6e56c726712584ff035e69a263e064bbbc2a1fd9efa4689aae64736f6c63430008060033";

type JoinConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: JoinConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Join__factory extends ContractFactory {
  constructor(...args: JoinConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  deploy(
    asset_: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<Join> {
    return super.deploy(asset_, overrides || {}) as Promise<Join>;
  }
  getDeployTransaction(
    asset_: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(asset_, overrides || {});
  }
  attach(address: string): Join {
    return super.attach(address) as Join;
  }
  connect(signer: Signer): Join__factory {
    return super.connect(signer) as Join__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): JoinInterface {
    return new utils.Interface(_abi) as JoinInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): Join {
    return new Contract(address, _abi, signerOrProvider) as Join;
  }
}