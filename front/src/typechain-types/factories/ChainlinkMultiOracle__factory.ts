/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  ChainlinkMultiOracle,
  ChainlinkMultiOracleInterface,
} from "../ChainlinkMultiOracle";

const _abi = [
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
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes6",
        name: "baseId",
        type: "bytes6",
      },
      {
        indexed: false,
        internalType: "contract IERC20Metadata",
        name: "base",
        type: "address",
      },
      {
        indexed: true,
        internalType: "bytes6",
        name: "quoteId",
        type: "bytes6",
      },
      {
        indexed: false,
        internalType: "contract IERC20Metadata",
        name: "quote",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "source",
        type: "address",
      },
    ],
    name: "SourceSet",
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
    inputs: [
      {
        internalType: "bytes32",
        name: "baseId",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "quoteId",
        type: "bytes32",
      },
      {
        internalType: "uint256",
        name: "amountBase",
        type: "uint256",
      },
    ],
    name: "get",
    outputs: [
      {
        internalType: "uint256",
        name: "amountQuote",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "updateTime",
        type: "uint256",
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
        internalType: "bytes32",
        name: "baseId",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "quoteId",
        type: "bytes32",
      },
      {
        internalType: "uint256",
        name: "amountBase",
        type: "uint256",
      },
    ],
    name: "peek",
    outputs: [
      {
        internalType: "uint256",
        name: "amountQuote",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "updateTime",
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
    inputs: [
      {
        internalType: "bytes6",
        name: "baseId",
        type: "bytes6",
      },
      {
        internalType: "contract IERC20Metadata",
        name: "base",
        type: "address",
      },
      {
        internalType: "bytes6",
        name: "quoteId",
        type: "bytes6",
      },
      {
        internalType: "contract IERC20Metadata",
        name: "quote",
        type: "address",
      },
      {
        internalType: "address",
        name: "source",
        type: "address",
      },
    ],
    name: "setSource",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes6",
        name: "",
        type: "bytes6",
      },
      {
        internalType: "bytes6",
        name: "",
        type: "bytes6",
      },
    ],
    name: "sources",
    outputs: [
      {
        internalType: "address",
        name: "source",
        type: "address",
      },
      {
        internalType: "uint8",
        name: "baseDecimals",
        type: "uint8",
      },
      {
        internalType: "uint8",
        name: "quoteDecimals",
        type: "uint8",
      },
      {
        internalType: "bool",
        name: "inverse",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x60806040526243484960e81b600155635241544560e01b6002556003805465ffffffffffff19166530300000000017905534801561003c57600080fd5b5061004860003361005f565b61005a6001600160e01b0319806100f6565b610192565b6001600160e01b031982166000908152602081815260408083206001600160a01b038516845290915290205460ff166100f2576001600160e01b031982166000818152602081815260408083206001600160a01b0386168085529252808320805460ff1916600117905551339391927fe6231789d19137da31d0550f4ba9ee379020a8cfb64cb79bf1790c996d2e616591a45b5050565b6001600160e01b03198116610127836001600160e01b03191660009081526020819052604090206001015460e01b90565b6001600160e01b031916146100f2576001600160e01b0319828116600081815260208190526040808220600101805463ffffffff191660e087901c17905551928416927fd348e2220a50b4500ec353f6e802d2f14dd1b5d6786148fd1bbcc570bf92d4739190a35050565b611389806101a16000396000f3fe608060405234801561001057600080fd5b50600436106100d65760003560e01c80156100db57806310ab94321461010157806344faded014610124578063462f9a2814610139578063559742d9146101615780635909c12f146100db5780635ba5e9f01461017457806368284fd414610139578063687f0e4c146101875780639f1ed3c01461019a578063a4f0d7d014610222578063ad82110f14610231578063ae93c1b514610244578063de02cde714610257578063ef532f2e1461026a578063effae3531461027d578063ffffffff14610222575b600080fd5b6100e3600081565b6040516001600160e01b031990911681526020015b60405180910390f35b61011461010f366004610fd6565b610290565b60405190151581526020016100f8565b610137610132366004610fd6565b6102a5565b005b61014c610147366004610f8f565b6102ec565b604080519283526020830191909152016100f8565b61013761016f366004610fbb565b61037f565b6100e3610182366004610fbb565b6103be565b610137610195366004610fd6565b6103c9565b6101ef6101a8366004611040565b60046020908152600092835260408084209091529082529020546001600160a01b0381169060ff600160a01b8204811691600160a81b8104821691600160b01b9091041684565b604080516001600160a01b0395909516855260ff93841660208601529190921690830152151560608201526080016100f8565b6100e36001600160e01b031981565b61013761023f366004610eb2565b610424565b61013761025236600461100d565b6104a6565b610137610265366004610fd6565b6104d9565b61013761027836600461106a565b61050c565b61013761028b366004610eb2565b610918565b600061029c838361098d565b90505b92915050565b816102b86102b2826109c2565b3361098d565b6102dd5760405162461bcd60e51b81526004016102d49061116b565b60405180910390fd5b6102e783836109e4565b505050565b60008083851415610301575081905042610377565b60035460d01b6001600160d01b03191685148061032c575060035460d01b6001600160d01b03191684145b156103565761034c61033d86610a53565b61034686610a53565b85610aa2565b9092509050610377565b61037161036286610a53565b61036b86610a53565b85610d24565b90925090505b935093915050565b8061038c6102b2826109c2565b6103a85760405162461bcd60e51b81526004016102d49061116b565b6103ba826001600160e01b0319610d70565b5050565b600061029f826109c2565b6001600160a01b038116331461041a5760405162461bcd60e51b81526020600482015260166024820152752932b737bab731b29037b7363c903337b91039b2b63360511b60448201526064016102d4565b6103ba82826109e4565b60005b82518110156102e7576104556102b2848381518110610448576104486112ef565b60200260200101516109c2565b6104715760405162461bcd60e51b81526004016102d49061116b565b610494838281518110610486576104866112ef565b6020026020010151836109e4565b8061049e816112be565b915050610427565b816104b36102b2826109c2565b6104cf5760405162461bcd60e51b81526004016102d49061116b565b6102e78383610d70565b816104e66102b2826109c2565b6105025760405162461bcd60e51b81526004016102d49061116b565b6102e78383610def565b6105226000356001600160e01b0319163361098d565b61055e5760405162461bcd60e51b815260206004820152600d60248201526c1058d8d95cdcc819195b9a5959609a1b60448201526064016102d4565b6040518060800160405280826001600160a01b03168152602001856001600160a01b031663313ce5676040518163ffffffff1660e01b815260040160206040518083038186803b1580156105b157600080fd5b505afa1580156105c5573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105e99190611127565b60ff168152602001836001600160a01b031663313ce5676040518163ffffffff1660e01b815260040160206040518083038186803b15801561062a57600080fd5b505afa15801561063e573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106629190611127565b60ff9081168252600060209283018190526001600160d01b0319808a16808352600485526040808420928a16808552928652928390208651815496880151888601516060909901511515600160b01b0260ff60b01b19998816600160a81b029990991661ffff60a81b1991909716600160a01b026001600160a81b03199098166001600160a01b03928316179790971796909616949094179590951790925551918416929091600080516020611334833981519152906107259089908890611151565b60405180910390a46001600160d01b031985811690841614610911576040518060800160405280826001600160a01b03168152602001836001600160a01b031663313ce5676040518163ffffffff1660e01b815260040160206040518083038186803b15801561079457600080fd5b505afa1580156107a8573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107cc9190611127565b60ff168152602001856001600160a01b031663313ce5676040518163ffffffff1660e01b815260040160206040518083038186803b15801561080d57600080fd5b505afa158015610821573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108459190611127565b60ff908116825260016020928301526001600160d01b03198087166000818152600485526040808220938c16808352938652908190208651815496880151888401516060909901511515600160b01b0260ff60b01b19998816600160a81b029990991661ffff60a81b1991909716600160a01b026001600160a81b03199098166001600160a01b03928316179790971796909616949094179590951790925592519184169291600080516020611334833981519152906109089087908a90611151565b60405180910390a45b5050505050565b60005b82518110156102e75761093c6102b2848381518110610448576104486112ef565b6109585760405162461bcd60e51b81526004016102d49061116b565b61097b83828151811061096d5761096d6112ef565b602002602001015183610def565b80610985816112be565b91505061091b565b6001600160e01b031982166000908152602081815260408083206001600160a01b038516845290915290205460ff1692915050565b6001600160e01b03191660009081526020819052604090206001015460e01b90565b6109ee828261098d565b156103ba576001600160e01b031982166000818152602081815260408083206001600160a01b0386168085529252808320805460ff1916905551339391927f4ddc7b757e7bdd7254a9cd39452d307a52761bc824625c6a33104a075d8099e691a45050565b806001600160d01b031981168114610a9d5760405162461bcd60e51b815260206004820152600d60248201526c43617374206f766572666c6f7760981b60448201526064016102d4565b919050565b6001600160d01b031980841660009081526004602090815260408083209386168352928152828220835160808101855290546001600160a01b03811680835260ff600160a01b8304811694840194909452600160a81b8204841695830195909552600160b01b90049091161515606082015290918291829182918291610b5d5760405162461bcd60e51b815260206004820152601060248201526f14dbdd5c98d9481b9bdd08199bdd5b9960821b60448201526064016102d4565b80600001516001600160a01b031663feaf968c6040518163ffffffff1660e01b815260040160a06040518083038186803b158015610b9a57600080fd5b505afa158015610bae573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610bd291906110d7565b90985091965091945092505060008413610c255760405162461bcd60e51b81526020600482015260146024820152730436861696e6c696e6b207072696365203c3d20360641b60448201526064016102d4565b84610c655760405162461bcd60e51b815260206004820152601060248201526f125b98dbdb5c1b195d19481c9bdd5b9960821b60448201526064016102d4565b826001600160501b0316826001600160501b03161015610cb55760405162461bcd60e51b815260206004820152600b60248201526a5374616c6520707269636560a81b60448201526064016102d4565b6060810151151560011415610cf157838160400151600a610cd691906111f4565b610ce0908961129f565b610cea919061118f565b9550610d18565b6020810151610d0190600a6111f4565b610d0b858961129f565b610d15919061118f565b95505b50505050935093915050565b600354600090819081908190610d3f90889060d01b87610aa2565b6003549193509150610d559060d01b8784610aa2565b909450925082811015610d66578092505b5050935093915050565b6001600160e01b03198116610d84836109c2565b6001600160e01b031916146103ba576001600160e01b0319828116600081815260208190526040808220600101805463ffffffff191660e087901c17905551928416927fd348e2220a50b4500ec353f6e802d2f14dd1b5d6786148fd1bbcc570bf92d4739190a35050565b610df9828261098d565b6103ba576001600160e01b031982166000818152602081815260408083206001600160a01b0386168085529252808320805460ff1916600117905551339391927fe6231789d19137da31d0550f4ba9ee379020a8cfb64cb79bf1790c996d2e616591a45050565b8035610a9d8161131b565b80356001600160e01b031981168114610a9d57600080fd5b80356001600160d01b031981168114610a9d57600080fd5b80516001600160501b0381168114610a9d57600080fd5b60008060408385031215610ec557600080fd5b82356001600160401b0380821115610edc57600080fd5b818501915085601f830112610ef057600080fd5b8135602082821115610f0457610f04611305565b8160051b604051601f19603f83011681018181108682111715610f2957610f29611305565b604052838152828101945085830182870184018b1015610f4857600080fd5b600096505b84871015610f7257610f5e81610e6b565b865260019690960195948301948301610f4d565b509650610f829050878201610e60565b9450505050509250929050565b600080600060608486031215610fa457600080fd5b505081359360208301359350604090920135919050565b600060208284031215610fcd57600080fd5b61029c82610e6b565b60008060408385031215610fe957600080fd5b610ff283610e6b565b915060208301356110028161131b565b809150509250929050565b6000806040838503121561102057600080fd5b61102983610e6b565b915061103760208401610e6b565b90509250929050565b6000806040838503121561105357600080fd5b61105c83610e83565b915061103760208401610e83565b600080600080600060a0868803121561108257600080fd5b61108b86610e83565b9450602086013561109b8161131b565b93506110a960408701610e83565b925060608601356110b98161131b565b915060808601356110c98161131b565b809150509295509295909350565b600080600080600060a086880312156110ef57600080fd5b6110f886610e9b565b945060208601519350604086015192506060860151915061111b60808701610e9b565b90509295509295909350565b60006020828403121561113957600080fd5b815160ff8116811461114a57600080fd5b9392505050565b6001600160a01b0392831681529116602082015260400190565b6020808252600a908201526927b7363c9030b236b4b760b11b604082015260600190565b6000826111ac57634e487b7160e01b600052601260045260246000fd5b500490565b600181815b808511156111ec5781600019048211156111d2576111d26112d9565b808516156111df57918102915b93841c93908002906111b6565b509250929050565b600061029c60ff84168360008261120d5750600161029f565b8161121a5750600061029f565b8160018114611230576002811461123a57611256565b600191505061029f565b60ff84111561124b5761124b6112d9565b50506001821b61029f565b5060208310610133831016604e8410600b8410161715611279575081810a61029f565b61128383836111b1565b8060001904821115611297576112976112d9565b029392505050565b60008160001904831182151516156112b9576112b96112d9565b500290565b60006000198214156112d2576112d26112d9565b5060010190565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052604160045260246000fd5b6001600160a01b038116811461133057600080fd5b5056fe26b9cbe85bc9fe135c1f8b26f796bf531318f10b85c6de287da571f47b2711f5a2646970667358221220ea2c4f5f8e7bc7db012cac95976ae3f87760aca0e6e19449ad384800d042efbc64736f6c63430008060033";

type ChainlinkMultiOracleConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ChainlinkMultiOracleConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ChainlinkMultiOracle__factory extends ContractFactory {
  constructor(...args: ChainlinkMultiOracleConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ChainlinkMultiOracle> {
    return super.deploy(overrides || {}) as Promise<ChainlinkMultiOracle>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): ChainlinkMultiOracle {
    return super.attach(address) as ChainlinkMultiOracle;
  }
  connect(signer: Signer): ChainlinkMultiOracle__factory {
    return super.connect(signer) as ChainlinkMultiOracle__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ChainlinkMultiOracleInterface {
    return new utils.Interface(_abi) as ChainlinkMultiOracleInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ChainlinkMultiOracle {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as ChainlinkMultiOracle;
  }
}
