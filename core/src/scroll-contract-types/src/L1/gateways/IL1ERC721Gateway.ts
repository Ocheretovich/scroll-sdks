/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumberish,
  BytesLike,
  FunctionFragment,
  Result,
  Interface,
  EventFragment,
  AddressLike,
  ContractRunner,
  ContractMethod,
  Listener,
} from "ethers";
import type {
  TypedContractEvent,
  TypedDeferredTopicFilter,
  TypedEventLog,
  TypedLogDescription,
  TypedListener,
  TypedContractMethod,
} from "../../../common";

export interface IL1ERC721GatewayInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "batchDepositERC721(address,address,uint256[],uint256)"
      | "batchDepositERC721(address,uint256[],uint256)"
      | "depositERC721(address,address,uint256,uint256)"
      | "depositERC721(address,uint256,uint256)"
      | "finalizeBatchWithdrawERC721"
      | "finalizeWithdrawERC721"
  ): FunctionFragment;

  getEvent(
    nameOrSignatureOrTopic:
      | "BatchDepositERC721"
      | "BatchRefundERC721"
      | "DepositERC721"
      | "FinalizeBatchWithdrawERC721"
      | "FinalizeWithdrawERC721"
      | "RefundERC721"
  ): EventFragment;

  encodeFunctionData(
    functionFragment: "batchDepositERC721(address,address,uint256[],uint256)",
    values: [AddressLike, AddressLike, BigNumberish[], BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "batchDepositERC721(address,uint256[],uint256)",
    values: [AddressLike, BigNumberish[], BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "depositERC721(address,address,uint256,uint256)",
    values: [AddressLike, AddressLike, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "depositERC721(address,uint256,uint256)",
    values: [AddressLike, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "finalizeBatchWithdrawERC721",
    values: [AddressLike, AddressLike, AddressLike, AddressLike, BigNumberish[]]
  ): string;
  encodeFunctionData(
    functionFragment: "finalizeWithdrawERC721",
    values: [AddressLike, AddressLike, AddressLike, AddressLike, BigNumberish]
  ): string;

  decodeFunctionResult(
    functionFragment: "batchDepositERC721(address,address,uint256[],uint256)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "batchDepositERC721(address,uint256[],uint256)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "depositERC721(address,address,uint256,uint256)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "depositERC721(address,uint256,uint256)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "finalizeBatchWithdrawERC721",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "finalizeWithdrawERC721",
    data: BytesLike
  ): Result;
}

export namespace BatchDepositERC721Event {
  export type InputTuple = [
    _l1Token: AddressLike,
    _l2Token: AddressLike,
    _from: AddressLike,
    _to: AddressLike,
    _tokenIds: BigNumberish[]
  ];
  export type OutputTuple = [
    _l1Token: string,
    _l2Token: string,
    _from: string,
    _to: string,
    _tokenIds: bigint[]
  ];
  export interface OutputObject {
    _l1Token: string;
    _l2Token: string;
    _from: string;
    _to: string;
    _tokenIds: bigint[];
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace BatchRefundERC721Event {
  export type InputTuple = [
    token: AddressLike,
    recipient: AddressLike,
    tokenIds: BigNumberish[]
  ];
  export type OutputTuple = [
    token: string,
    recipient: string,
    tokenIds: bigint[]
  ];
  export interface OutputObject {
    token: string;
    recipient: string;
    tokenIds: bigint[];
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace DepositERC721Event {
  export type InputTuple = [
    _l1Token: AddressLike,
    _l2Token: AddressLike,
    _from: AddressLike,
    _to: AddressLike,
    _tokenId: BigNumberish
  ];
  export type OutputTuple = [
    _l1Token: string,
    _l2Token: string,
    _from: string,
    _to: string,
    _tokenId: bigint
  ];
  export interface OutputObject {
    _l1Token: string;
    _l2Token: string;
    _from: string;
    _to: string;
    _tokenId: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace FinalizeBatchWithdrawERC721Event {
  export type InputTuple = [
    _l1Token: AddressLike,
    _l2Token: AddressLike,
    _from: AddressLike,
    _to: AddressLike,
    _tokenIds: BigNumberish[]
  ];
  export type OutputTuple = [
    _l1Token: string,
    _l2Token: string,
    _from: string,
    _to: string,
    _tokenIds: bigint[]
  ];
  export interface OutputObject {
    _l1Token: string;
    _l2Token: string;
    _from: string;
    _to: string;
    _tokenIds: bigint[];
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace FinalizeWithdrawERC721Event {
  export type InputTuple = [
    _l1Token: AddressLike,
    _l2Token: AddressLike,
    _from: AddressLike,
    _to: AddressLike,
    _tokenId: BigNumberish
  ];
  export type OutputTuple = [
    _l1Token: string,
    _l2Token: string,
    _from: string,
    _to: string,
    _tokenId: bigint
  ];
  export interface OutputObject {
    _l1Token: string;
    _l2Token: string;
    _from: string;
    _to: string;
    _tokenId: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace RefundERC721Event {
  export type InputTuple = [
    token: AddressLike,
    recipient: AddressLike,
    tokenId: BigNumberish
  ];
  export type OutputTuple = [token: string, recipient: string, tokenId: bigint];
  export interface OutputObject {
    token: string;
    recipient: string;
    tokenId: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export interface IL1ERC721Gateway extends BaseContract {
  connect(runner?: ContractRunner | null): IL1ERC721Gateway;
  waitForDeployment(): Promise<this>;

  interface: IL1ERC721GatewayInterface;

  queryFilter<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;
  queryFilter<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;

  on<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  on<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  once<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  once<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  listeners<TCEvent extends TypedContractEvent>(
    event: TCEvent
  ): Promise<Array<TypedListener<TCEvent>>>;
  listeners(eventName?: string): Promise<Array<Listener>>;
  removeAllListeners<TCEvent extends TypedContractEvent>(
    event?: TCEvent
  ): Promise<this>;

  "batchDepositERC721(address,address,uint256[],uint256)": TypedContractMethod<
    [
      _token: AddressLike,
      _to: AddressLike,
      _tokenIds: BigNumberish[],
      _gasLimit: BigNumberish
    ],
    [void],
    "payable"
  >;

  "batchDepositERC721(address,uint256[],uint256)": TypedContractMethod<
    [_token: AddressLike, _tokenIds: BigNumberish[], _gasLimit: BigNumberish],
    [void],
    "payable"
  >;

  "depositERC721(address,address,uint256,uint256)": TypedContractMethod<
    [
      _token: AddressLike,
      _to: AddressLike,
      _tokenId: BigNumberish,
      _gasLimit: BigNumberish
    ],
    [void],
    "payable"
  >;

  "depositERC721(address,uint256,uint256)": TypedContractMethod<
    [_token: AddressLike, _tokenId: BigNumberish, _gasLimit: BigNumberish],
    [void],
    "payable"
  >;

  finalizeBatchWithdrawERC721: TypedContractMethod<
    [
      _l1Token: AddressLike,
      _l2Token: AddressLike,
      _from: AddressLike,
      _to: AddressLike,
      _tokenIds: BigNumberish[]
    ],
    [void],
    "nonpayable"
  >;

  finalizeWithdrawERC721: TypedContractMethod<
    [
      _l1Token: AddressLike,
      _l2Token: AddressLike,
      _from: AddressLike,
      _to: AddressLike,
      _tokenId: BigNumberish
    ],
    [void],
    "nonpayable"
  >;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "batchDepositERC721(address,address,uint256[],uint256)"
  ): TypedContractMethod<
    [
      _token: AddressLike,
      _to: AddressLike,
      _tokenIds: BigNumberish[],
      _gasLimit: BigNumberish
    ],
    [void],
    "payable"
  >;
  getFunction(
    nameOrSignature: "batchDepositERC721(address,uint256[],uint256)"
  ): TypedContractMethod<
    [_token: AddressLike, _tokenIds: BigNumberish[], _gasLimit: BigNumberish],
    [void],
    "payable"
  >;
  getFunction(
    nameOrSignature: "depositERC721(address,address,uint256,uint256)"
  ): TypedContractMethod<
    [
      _token: AddressLike,
      _to: AddressLike,
      _tokenId: BigNumberish,
      _gasLimit: BigNumberish
    ],
    [void],
    "payable"
  >;
  getFunction(
    nameOrSignature: "depositERC721(address,uint256,uint256)"
  ): TypedContractMethod<
    [_token: AddressLike, _tokenId: BigNumberish, _gasLimit: BigNumberish],
    [void],
    "payable"
  >;
  getFunction(
    nameOrSignature: "finalizeBatchWithdrawERC721"
  ): TypedContractMethod<
    [
      _l1Token: AddressLike,
      _l2Token: AddressLike,
      _from: AddressLike,
      _to: AddressLike,
      _tokenIds: BigNumberish[]
    ],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "finalizeWithdrawERC721"
  ): TypedContractMethod<
    [
      _l1Token: AddressLike,
      _l2Token: AddressLike,
      _from: AddressLike,
      _to: AddressLike,
      _tokenId: BigNumberish
    ],
    [void],
    "nonpayable"
  >;

  getEvent(
    key: "BatchDepositERC721"
  ): TypedContractEvent<
    BatchDepositERC721Event.InputTuple,
    BatchDepositERC721Event.OutputTuple,
    BatchDepositERC721Event.OutputObject
  >;
  getEvent(
    key: "BatchRefundERC721"
  ): TypedContractEvent<
    BatchRefundERC721Event.InputTuple,
    BatchRefundERC721Event.OutputTuple,
    BatchRefundERC721Event.OutputObject
  >;
  getEvent(
    key: "DepositERC721"
  ): TypedContractEvent<
    DepositERC721Event.InputTuple,
    DepositERC721Event.OutputTuple,
    DepositERC721Event.OutputObject
  >;
  getEvent(
    key: "FinalizeBatchWithdrawERC721"
  ): TypedContractEvent<
    FinalizeBatchWithdrawERC721Event.InputTuple,
    FinalizeBatchWithdrawERC721Event.OutputTuple,
    FinalizeBatchWithdrawERC721Event.OutputObject
  >;
  getEvent(
    key: "FinalizeWithdrawERC721"
  ): TypedContractEvent<
    FinalizeWithdrawERC721Event.InputTuple,
    FinalizeWithdrawERC721Event.OutputTuple,
    FinalizeWithdrawERC721Event.OutputObject
  >;
  getEvent(
    key: "RefundERC721"
  ): TypedContractEvent<
    RefundERC721Event.InputTuple,
    RefundERC721Event.OutputTuple,
    RefundERC721Event.OutputObject
  >;

  filters: {
    "BatchDepositERC721(address,address,address,address,uint256[])": TypedContractEvent<
      BatchDepositERC721Event.InputTuple,
      BatchDepositERC721Event.OutputTuple,
      BatchDepositERC721Event.OutputObject
    >;
    BatchDepositERC721: TypedContractEvent<
      BatchDepositERC721Event.InputTuple,
      BatchDepositERC721Event.OutputTuple,
      BatchDepositERC721Event.OutputObject
    >;

    "BatchRefundERC721(address,address,uint256[])": TypedContractEvent<
      BatchRefundERC721Event.InputTuple,
      BatchRefundERC721Event.OutputTuple,
      BatchRefundERC721Event.OutputObject
    >;
    BatchRefundERC721: TypedContractEvent<
      BatchRefundERC721Event.InputTuple,
      BatchRefundERC721Event.OutputTuple,
      BatchRefundERC721Event.OutputObject
    >;

    "DepositERC721(address,address,address,address,uint256)": TypedContractEvent<
      DepositERC721Event.InputTuple,
      DepositERC721Event.OutputTuple,
      DepositERC721Event.OutputObject
    >;
    DepositERC721: TypedContractEvent<
      DepositERC721Event.InputTuple,
      DepositERC721Event.OutputTuple,
      DepositERC721Event.OutputObject
    >;

    "FinalizeBatchWithdrawERC721(address,address,address,address,uint256[])": TypedContractEvent<
      FinalizeBatchWithdrawERC721Event.InputTuple,
      FinalizeBatchWithdrawERC721Event.OutputTuple,
      FinalizeBatchWithdrawERC721Event.OutputObject
    >;
    FinalizeBatchWithdrawERC721: TypedContractEvent<
      FinalizeBatchWithdrawERC721Event.InputTuple,
      FinalizeBatchWithdrawERC721Event.OutputTuple,
      FinalizeBatchWithdrawERC721Event.OutputObject
    >;

    "FinalizeWithdrawERC721(address,address,address,address,uint256)": TypedContractEvent<
      FinalizeWithdrawERC721Event.InputTuple,
      FinalizeWithdrawERC721Event.OutputTuple,
      FinalizeWithdrawERC721Event.OutputObject
    >;
    FinalizeWithdrawERC721: TypedContractEvent<
      FinalizeWithdrawERC721Event.InputTuple,
      FinalizeWithdrawERC721Event.OutputTuple,
      FinalizeWithdrawERC721Event.OutputObject
    >;

    "RefundERC721(address,address,uint256)": TypedContractEvent<
      RefundERC721Event.InputTuple,
      RefundERC721Event.OutputTuple,
      RefundERC721Event.OutputObject
    >;
    RefundERC721: TypedContractEvent<
      RefundERC721Event.InputTuple,
      RefundERC721Event.OutputTuple,
      RefundERC721Event.OutputObject
    >;
  };
}
