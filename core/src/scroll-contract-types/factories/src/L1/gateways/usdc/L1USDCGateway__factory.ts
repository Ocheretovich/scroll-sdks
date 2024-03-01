/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Contract,
  ContractFactory,
  ContractTransactionResponse,
  Interface,
} from "ethers";
import type {
  Signer,
  AddressLike,
  ContractDeployTransaction,
  ContractRunner,
} from "ethers";
import type { NonPayableOverrides } from "../../../../../common";
import type {
  L1USDCGateway,
  L1USDCGatewayInterface,
} from "../../../../../src/L1/gateways/usdc/L1USDCGateway";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_l1USDC",
        type: "address",
      },
      {
        internalType: "address",
        name: "_l2USDC",
        type: "address",
      },
      {
        internalType: "address",
        name: "_counterpart",
        type: "address",
      },
      {
        internalType: "address",
        name: "_router",
        type: "address",
      },
      {
        internalType: "address",
        name: "_messenger",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "ErrorCallerIsNotCounterpartGateway",
    type: "error",
  },
  {
    inputs: [],
    name: "ErrorCallerIsNotMessenger",
    type: "error",
  },
  {
    inputs: [],
    name: "ErrorNotInDropMessageContext",
    type: "error",
  },
  {
    inputs: [],
    name: "ErrorZeroAddress",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "l1Token",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "l2Token",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "DepositERC20",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "l1Token",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "l2Token",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "FinalizeWithdrawERC20",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint8",
        name: "version",
        type: "uint8",
      },
    ],
    name: "Initialized",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "RefundERC20",
    type: "event",
  },
  {
    inputs: [],
    name: "burnAllLockedUSDC",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "circleCaller",
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
    inputs: [],
    name: "counterpart",
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
        name: "_token",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_gasLimit",
        type: "uint256",
      },
    ],
    name: "depositERC20",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_token",
        type: "address",
      },
      {
        internalType: "address",
        name: "_to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_gasLimit",
        type: "uint256",
      },
    ],
    name: "depositERC20",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_token",
        type: "address",
      },
      {
        internalType: "address",
        name: "_to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "_data",
        type: "bytes",
      },
      {
        internalType: "uint256",
        name: "_gasLimit",
        type: "uint256",
      },
    ],
    name: "depositERC20AndCall",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "depositPaused",
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
        name: "_l1Token",
        type: "address",
      },
      {
        internalType: "address",
        name: "_l2Token",
        type: "address",
      },
      {
        internalType: "address",
        name: "_from",
        type: "address",
      },
      {
        internalType: "address",
        name: "_to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "_data",
        type: "bytes",
      },
    ],
    name: "finalizeWithdrawERC20",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "getL2ERC20Address",
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
        name: "_counterpart",
        type: "address",
      },
      {
        internalType: "address",
        name: "_router",
        type: "address",
      },
      {
        internalType: "address",
        name: "_messenger",
        type: "address",
      },
    ],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "l1USDC",
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
    inputs: [],
    name: "l2USDC",
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
    inputs: [],
    name: "messenger",
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
        internalType: "bytes",
        name: "_message",
        type: "bytes",
      },
    ],
    name: "onDropMessage",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
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
        internalType: "bool",
        name: "_paused",
        type: "bool",
      },
    ],
    name: "pauseDeposit",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bool",
        name: "_paused",
        type: "bool",
      },
    ],
    name: "pauseWithdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "router",
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
    inputs: [],
    name: "totalBridgedUSDC",
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
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_caller",
        type: "address",
      },
    ],
    name: "updateCircleCaller",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "withdrawPaused",
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
] as const;

const _bytecode =
  "0x6101206040523480156200001257600080fd5b506040516200230b3803806200230b8339810160408190526200003591620001da565b8282826001600160a01b03831615806200005657506001600160a01b038116155b15620000755760405163a7f9319d60e01b815260040160405180910390fd5b6001600160a01b0392831660805290821660a052811660c05285161580620000a457506001600160a01b038416155b80620000b757506001600160a01b038216155b15620000d65760405163a7f9319d60e01b815260040160405180910390fd5b620000e0620000fc565b5050506001600160a01b0391821660e05216610100526200024a565b600054610100900460ff1615620001695760405162461bcd60e51b815260206004820152602760248201527f496e697469616c697a61626c653a20636f6e747261637420697320696e697469604482015266616c697a696e6760c81b606482015260840160405180910390fd5b60005460ff90811614620001bb576000805460ff191660ff9081179091556040519081527f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb38474024989060200160405180910390a15b565b80516001600160a01b0381168114620001d557600080fd5b919050565b600080600080600060a08688031215620001f357600080fd5b620001fe86620001bd565b94506200020e60208701620001bd565b93506200021e60408701620001bd565b92506200022e60608701620001bd565b91506200023e60808701620001bd565b90509295509295909350565b60805160a05160c05160e05161010051612013620002f860003960008181610215015281816103bc01528181610d8301528181610e93015261119001526000818161035c0152818161077801528181610c43015261111b01526000818161026a0152818161049c015281816104e4015281816108150152818161085d0152610df5015260008181610463015261130a0152600081816102d3015281816108e80152610e2401526120136000f3fe6080604052600436106101405760003560e01c8063797594b0116100b6578063c676ad291161006f578063c676ad291461039e578063ebd462cb146103de578063f0d7c29c146103fe578063f219fa661461041e578063f2fde38b14610431578063f887ea401461045157600080fd5b8063797594b0146102c157806384bd13b0146102f55780638da5cb5b14610308578063a260459614610326578063a6f736691461034a578063c0c53b8b1461037e57600080fd5b806321846ebb1161010857806321846ebb146101ee57806329e96f9e146102035780632f3ffb9f146102375780633cb747bf14610258578063415855d61461028c578063715018a6146102ac57600080fd5b806302befd24146101455780630aea8c261461017b57806314298c51146101905780631f878ae6146101a357806321425ee0146101db575b600080fd5b34801561015157600080fd5b5060fb5461016690600160a01b900460ff1681565b60405190151581526020015b60405180910390f35b61018e610189366004611952565b610485565b005b61018e61019e366004611a0f565b610499565b3480156101af57600080fd5b5060fb546101c3906001600160a01b031681565b6040516001600160a01b039091168152602001610172565b61018e6101e9366004611a51565b6106c2565b3480156101fa57600080fd5b5061018e610701565b34801561020f57600080fd5b506101c37f000000000000000000000000000000000000000000000000000000000000000081565b34801561024357600080fd5b5060fb5461016690600160a81b900460ff1681565b34801561026457600080fd5b506101c37f000000000000000000000000000000000000000000000000000000000000000081565b34801561029857600080fd5b5061018e6102a7366004611a94565b6107d8565b3480156102b857600080fd5b5061018e6107fe565b3480156102cd57600080fd5b506101c37f000000000000000000000000000000000000000000000000000000000000000081565b61018e610303366004611ab8565b610812565b34801561031457600080fd5b506065546001600160a01b03166101c3565b34801561033257600080fd5b5061033c60fc5481565b604051908152602001610172565b34801561035657600080fd5b506101c37f000000000000000000000000000000000000000000000000000000000000000081565b34801561038a57600080fd5b5061018e610399366004611b50565b610a06565b3480156103aa57600080fd5b506101c36103b9366004611b9b565b507f000000000000000000000000000000000000000000000000000000000000000090565b3480156103ea57600080fd5b5061018e6103f9366004611a94565b610b1d565b34801561040a57600080fd5b5061018e610419366004611b9b565b610b43565b61018e61042c366004611bb8565b610b6d565b34801561043d57600080fd5b5061018e61044c366004611b9b565b610b7a565b34801561045d57600080fd5b506101c37f000000000000000000000000000000000000000000000000000000000000000081565b6104928585858585610bf3565b5050505050565b337f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316146104e2576040516385bd908d60e01b815260040160405180910390fd5b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316636e296e456040518163ffffffff1660e01b8152600401602060405180830381865afa158015610540573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105649190611bfe565b6001600160a01b0316736f297c61b5c92ef107ffd30cd56affe5a273e8416001600160a01b0316146105a957604051630d08b8ff60e01b815260040160405180910390fd5b6105b1610f0b565b638431f5c160e01b6105c7600460008486611c1b565b6105d091611c45565b6001600160e01b0319161461061f5760405162461bcd60e51b815260206004820152601060248201526f34b73b30b634b21039b2b632b1ba37b960811b60448201526064015b60405180910390fd5b600080806106308460048188611c1b565b81019061063d9190611c75565b509450509350509250610651838383610f64565b6106656001600160a01b0384168383610fc2565b816001600160a01b0316836001600160a01b03167fdbdf8eb487847e4c0f22847f5dac07f2d3690f96f581a6ae4b102769917645a8836040516106aa91815260200190565b60405180910390a35050506106be60018055565b5050565b6106fc83338460005b6040519080825280601f01601f1916602001820160405280156106f5576020820181803683370190505b5085610bf3565b505050565b60fb546001600160a01b0316336001600160a01b0316146107595760405162461bcd60e51b815260206004820152601260248201527137b7363c9031b4b931b6329031b0b63632b960711b6044820152606401610616565b60fc80546000909155604051630852cd8d60e31b8152600481018290527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906342966c6890602401600060405180830381600087803b1580156107c457600080fd5b505af1158015610492573d6000803e3d6000fd5b6107e061102b565b60fb8054911515600160a01b0260ff60a01b19909216919091179055565b61080661102b565b6108106000611085565b565b337f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03161461085b576040516385bd908d60e01b815260040160405180910390fd5b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316636e296e456040518163ffffffff1660e01b8152600401602060405180830381865afa1580156108b9573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108dd9190611bfe565b6001600160a01b03167f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03161461092e576040516307b140f360e51b815260040160405180910390fd5b610936610f0b565b610945878787878787876110d7565b6109596001600160a01b0388168585610fc2565b6109998483838080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525061126f92505050565b846001600160a01b0316866001600160a01b0316886001600160a01b03167fc6f985873b37805705f6bce756dce3d1ff4b603e298d506288cce499926846a7878787876040516109ec9493929190611d05565b60405180910390a46109fd60018055565b50505050505050565b600054610100900460ff1615808015610a265750600054600160ff909116105b80610a405750303b158015610a40575060005460ff166001145b610aa35760405162461bcd60e51b815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201526d191e481a5b9a5d1a585b1a5e995960921b6064820152608401610616565b6000805460ff191660011790558015610ac6576000805461ff0019166101001790555b610ad18484846112f1565b8015610b17576000805461ff0019169055604051600181527f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb38474024989060200160405180910390a15b50505050565b610b2561102b565b60fb8054911515600160a81b0260ff60a81b19909216919091179055565b610b4b61102b565b60fb80546001600160a01b0319166001600160a01b0392909216919091179055565b610b1784848460006106cb565b610b8261102b565b6001600160a01b038116610be75760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b6064820152608401610616565b610bf081611085565b50565b610bfb610f0b565b60008311610c415760405162461bcd60e51b815260206004820152601360248201527219195c1bdcda5d081e995c9bc8185b5bdd5b9d606a1b6044820152606401610616565b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316856001600160a01b031614610cb95760405162461bcd60e51b81526020600482015260146024820152731bdb9b1e481554d110c81a5cc8185b1b1bddd95960621b6044820152606401610616565b60fb54600160a01b900460ff1615610d045760405162461bcd60e51b815260206004820152600e60248201526d19195c1bdcda5d081c185d5cd95960921b6044820152606401610616565b6000610d11868585611301565b8051919650945090915015610d5e5760405162461bcd60e51b815260206004820152601360248201527218d85b1b081a5cc81b9bdd08185b1b1bddd959606a1b6044820152606401610616565b8360fc6000828254610d709190611d63565b9091555050604051600090610db39088907f00000000000000000000000000000000000000000000000000000000000000009085908a908a908a90602401611dcc565b60408051601f198184030181529181526020820180516001600160e01b0316638431f5c160e01b17905251635f7b157760e01b81529091506001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001690635f7b1577903490610e55907f00000000000000000000000000000000000000000000000000000000000000009060009087908a908a90600401611e1b565b6000604051808303818588803b158015610e6e57600080fd5b505af1158015610e82573d6000803e3d6000fd5b5050505050816001600160a01b03167f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316886001600160a01b03167f31cd3b976e4d654022bf95c68a2ce53f1d5d94afabe0454d2832208eeb40af25898989604051610ef893929190611e5d565b60405180910390a4505061049260018055565b600260015403610f5d5760405162461bcd60e51b815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c006044820152606401610616565b6002600155565b3415610fa65760405162461bcd60e51b81526020600482015260116024820152706e6f6e7a65726f206d73672e76616c756560781b6044820152606401610616565b8060fc6000828254610fb89190611e8d565b9091555050505050565b6040516001600160a01b0383166024820152604481018290526106fc90849063a9059cbb60e01b906064015b60408051601f198184030181529190526020810180516001600160e01b03166001600160e01b031990931692909217909152611526565b60018055565b6065546001600160a01b031633146108105760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610616565b606580546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b34156111195760405162461bcd60e51b81526020600482015260116024820152706e6f6e7a65726f206d73672e76616c756560781b6044820152606401610616565b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316876001600160a01b03161461118e5760405162461bcd60e51b81526020600482015260116024820152706c3120746f6b656e206e6f74205553444360781b6044820152606401610616565b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316866001600160a01b0316146112035760405162461bcd60e51b81526020600482015260116024820152706c3220746f6b656e206e6f74205553444360781b6044820152606401610616565b60fb54600160a81b900460ff161561124f5760405162461bcd60e51b815260206004820152600f60248201526e1dda5d1a191c985dc81c185d5cd959608a1b6044820152606401610616565b8260fc60008282546112619190611e8d565b909155505050505050505050565b6000815111801561128a57506000826001600160a01b03163b115b156106be5760405163109b953160e01b81526001600160a01b0383169063109b9531906112bb908490600401611ea0565b600060405180830381600087803b1580156112d557600080fd5b505af11580156112e9573d6000803e3d6000fd5b505050505050565b6112f96115fb565b6106fc61162a565b600080606033807f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03168190036113d5578580602001905181019061134d9190611eb3565b60405163314a8eef60e21b81526001600160a01b0380841660048301528b81166024830152604482018b905291985091925083169063c52a3bbc906064016020604051808303816000875af11580156113aa573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906113ce9190611f40565b96506114d3565b6040516370a0823160e01b81523060048201526000906001600160a01b038a16906370a0823190602401602060405180830381865afa15801561141c573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906114409190611f40565b90506114576001600160a01b038a1683308b611659565b6040516370a0823160e01b81523060048201526000906001600160a01b038b16906370a0823190602401602060405180830381865afa15801561149e573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906114c29190611f40565b90506114ce8282611e8d565b985050505b600087116115195760405162461bcd60e51b815260206004820152601360248201527219195c1bdcda5d081e995c9bc8185b5bdd5b9d606a1b6044820152606401610616565b9795965093949350505050565b600061157b826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564815250856001600160a01b03166116919092919063ffffffff16565b905080516000148061159c57508080602001905181019061159c9190611f59565b6106fc5760405162461bcd60e51b815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e6044820152691bdd081cdd58d8d9595960b21b6064820152608401610616565b600054610100900460ff166116225760405162461bcd60e51b815260040161061690611f76565b6108106116a8565b600054610100900460ff166116515760405162461bcd60e51b815260040161061690611f76565b6108106116cf565b6040516001600160a01b0380851660248301528316604482015260648101829052610b179085906323b872dd60e01b90608401610fee565b60606116a084846000856116ff565b949350505050565b600054610100900460ff166110255760405162461bcd60e51b815260040161061690611f76565b600054610100900460ff166116f65760405162461bcd60e51b815260040161061690611f76565b61081033611085565b6060824710156117605760405162461bcd60e51b815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f6044820152651c8818d85b1b60d21b6064820152608401610616565b600080866001600160a01b0316858760405161177c9190611fc1565b60006040518083038185875af1925050503d80600081146117b9576040519150601f19603f3d011682016040523d82523d6000602084013e6117be565b606091505b50915091506117cf878383876117da565b979650505050505050565b60608315611849578251600003611842576001600160a01b0385163b6118425760405162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006044820152606401610616565b50816116a0565b6116a0838381511561185e5781518083602001fd5b8060405162461bcd60e51b81526004016106169190611ea0565b6001600160a01b0381168114610bf057600080fd5b634e487b7160e01b600052604160045260246000fd5b604051601f8201601f1916810167ffffffffffffffff811182821017156118cc576118cc61188d565b604052919050565b600067ffffffffffffffff8211156118ee576118ee61188d565b50601f01601f191660200190565b600082601f83011261190d57600080fd5b813561192061191b826118d4565b6118a3565b81815284602083860101111561193557600080fd5b816020850160208301376000918101602001919091529392505050565b600080600080600060a0868803121561196a57600080fd5b853561197581611878565b9450602086013561198581611878565b935060408601359250606086013567ffffffffffffffff8111156119a857600080fd5b6119b4888289016118fc565b95989497509295608001359392505050565b60008083601f8401126119d857600080fd5b50813567ffffffffffffffff8111156119f057600080fd5b602083019150836020828501011115611a0857600080fd5b9250929050565b60008060208385031215611a2257600080fd5b823567ffffffffffffffff811115611a3957600080fd5b611a45858286016119c6565b90969095509350505050565b600080600060608486031215611a6657600080fd5b8335611a7181611878565b95602085013595506040909401359392505050565b8015158114610bf057600080fd5b600060208284031215611aa657600080fd5b8135611ab181611a86565b9392505050565b600080600080600080600060c0888a031215611ad357600080fd5b8735611ade81611878565b96506020880135611aee81611878565b95506040880135611afe81611878565b94506060880135611b0e81611878565b93506080880135925060a088013567ffffffffffffffff811115611b3157600080fd5b611b3d8a828b016119c6565b989b979a50959850939692959293505050565b600080600060608486031215611b6557600080fd5b8335611b7081611878565b92506020840135611b8081611878565b91506040840135611b9081611878565b809150509250925092565b600060208284031215611bad57600080fd5b8135611ab181611878565b60008060008060808587031215611bce57600080fd5b8435611bd981611878565b93506020850135611be981611878565b93969395505050506040820135916060013590565b600060208284031215611c1057600080fd5b8151611ab181611878565b60008085851115611c2b57600080fd5b83861115611c3857600080fd5b5050820193919092039150565b6001600160e01b03198135818116916004851015611c6d5780818660040360031b1b83161692505b505092915050565b60008060008060008060c08789031215611c8e57600080fd5b8635611c9981611878565b95506020870135611ca981611878565b94506040870135611cb981611878565b93506060870135611cc981611878565b92506080870135915060a087013567ffffffffffffffff811115611cec57600080fd5b611cf889828a016118fc565b9150509295509295509295565b6001600160a01b0385168152602081018490526060604082018190528101829052818360808301376000818301608090810191909152601f909201601f191601019392505050565b634e487b7160e01b600052601160045260246000fd5b80820180821115611d7657611d76611d4d565b92915050565b60005b83811015611d97578181015183820152602001611d7f565b50506000910152565b60008151808452611db8816020860160208601611d7c565b601f01601f19169290920160200192915050565b6001600160a01b03878116825286811660208301528581166040830152841660608201526080810183905260c060a08201819052600090611e0f90830184611da0565b98975050505050505050565b600060018060a01b03808816835286602084015260a06040840152611e4360a0840187611da0565b606084019590955292909216608090910152509392505050565b60018060a01b0384168152826020820152606060408201526000611e846060830184611da0565b95945050505050565b81810381811115611d7657611d76611d4d565b602081526000611ab16020830184611da0565b60008060408385031215611ec657600080fd5b8251611ed181611878565b602084015190925067ffffffffffffffff811115611eee57600080fd5b8301601f81018513611eff57600080fd5b8051611f0d61191b826118d4565b818152866020838501011115611f2257600080fd5b611f33826020830160208601611d7c565b8093505050509250929050565b600060208284031215611f5257600080fd5b5051919050565b600060208284031215611f6b57600080fd5b8151611ab181611a86565b6020808252602b908201527f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206960408201526a6e697469616c697a696e6760a81b606082015260800190565b60008251611fd3818460208701611d7c565b919091019291505056fea2646970667358221220b64c07d5298c66911e1a6ce75d93fd33a62d11ac88e1259ae0e1236d672ff78b64736f6c63430008100033";

type L1USDCGatewayConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: L1USDCGatewayConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class L1USDCGateway__factory extends ContractFactory {
  constructor(...args: L1USDCGatewayConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    _l1USDC: AddressLike,
    _l2USDC: AddressLike,
    _counterpart: AddressLike,
    _router: AddressLike,
    _messenger: AddressLike,
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(
      _l1USDC,
      _l2USDC,
      _counterpart,
      _router,
      _messenger,
      overrides || {}
    );
  }
  override deploy(
    _l1USDC: AddressLike,
    _l2USDC: AddressLike,
    _counterpart: AddressLike,
    _router: AddressLike,
    _messenger: AddressLike,
    overrides?: NonPayableOverrides & { from?: string }
  ) {
    return super.deploy(
      _l1USDC,
      _l2USDC,
      _counterpart,
      _router,
      _messenger,
      overrides || {}
    ) as Promise<
      L1USDCGateway & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): L1USDCGateway__factory {
    return super.connect(runner) as L1USDCGateway__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): L1USDCGatewayInterface {
    return new Interface(_abi) as L1USDCGatewayInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): L1USDCGateway {
    return new Contract(address, _abi, runner) as unknown as L1USDCGateway;
  }
}
