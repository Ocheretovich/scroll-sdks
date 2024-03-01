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

export interface IL1MessageQueueInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "appendCrossDomainMessage"
      | "appendEnforcedTransaction"
      | "calculateIntrinsicGasFee"
      | "computeTransactionHash"
      | "dropCrossDomainMessage"
      | "estimateCrossDomainMessageFee"
      | "getCrossDomainMessage"
      | "isMessageDropped"
      | "isMessageSkipped"
      | "nextCrossDomainMessageIndex"
      | "pendingQueueIndex"
      | "popCrossDomainMessage"
  ): FunctionFragment;

  getEvent(
    nameOrSignatureOrTopic:
      | "DequeueTransaction"
      | "DropTransaction"
      | "QueueTransaction"
      | "UpdateGasOracle"
      | "UpdateMaxGasLimit"
  ): EventFragment;

  encodeFunctionData(
    functionFragment: "appendCrossDomainMessage",
    values: [AddressLike, BigNumberish, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "appendEnforcedTransaction",
    values: [AddressLike, AddressLike, BigNumberish, BigNumberish, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "calculateIntrinsicGasFee",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "computeTransactionHash",
    values: [
      AddressLike,
      BigNumberish,
      BigNumberish,
      AddressLike,
      BigNumberish,
      BytesLike
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "dropCrossDomainMessage",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "estimateCrossDomainMessageFee",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getCrossDomainMessage",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "isMessageDropped",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "isMessageSkipped",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "nextCrossDomainMessageIndex",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "pendingQueueIndex",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "popCrossDomainMessage",
    values: [BigNumberish, BigNumberish, BigNumberish]
  ): string;

  decodeFunctionResult(
    functionFragment: "appendCrossDomainMessage",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "appendEnforcedTransaction",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "calculateIntrinsicGasFee",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "computeTransactionHash",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "dropCrossDomainMessage",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "estimateCrossDomainMessageFee",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getCrossDomainMessage",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "isMessageDropped",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "isMessageSkipped",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "nextCrossDomainMessageIndex",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "pendingQueueIndex",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "popCrossDomainMessage",
    data: BytesLike
  ): Result;
}

export namespace DequeueTransactionEvent {
  export type InputTuple = [
    startIndex: BigNumberish,
    count: BigNumberish,
    skippedBitmap: BigNumberish
  ];
  export type OutputTuple = [
    startIndex: bigint,
    count: bigint,
    skippedBitmap: bigint
  ];
  export interface OutputObject {
    startIndex: bigint;
    count: bigint;
    skippedBitmap: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace DropTransactionEvent {
  export type InputTuple = [index: BigNumberish];
  export type OutputTuple = [index: bigint];
  export interface OutputObject {
    index: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace QueueTransactionEvent {
  export type InputTuple = [
    sender: AddressLike,
    target: AddressLike,
    value: BigNumberish,
    queueIndex: BigNumberish,
    gasLimit: BigNumberish,
    data: BytesLike
  ];
  export type OutputTuple = [
    sender: string,
    target: string,
    value: bigint,
    queueIndex: bigint,
    gasLimit: bigint,
    data: string
  ];
  export interface OutputObject {
    sender: string;
    target: string;
    value: bigint;
    queueIndex: bigint;
    gasLimit: bigint;
    data: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace UpdateGasOracleEvent {
  export type InputTuple = [
    _oldGasOracle: AddressLike,
    _newGasOracle: AddressLike
  ];
  export type OutputTuple = [_oldGasOracle: string, _newGasOracle: string];
  export interface OutputObject {
    _oldGasOracle: string;
    _newGasOracle: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace UpdateMaxGasLimitEvent {
  export type InputTuple = [
    _oldMaxGasLimit: BigNumberish,
    _newMaxGasLimit: BigNumberish
  ];
  export type OutputTuple = [_oldMaxGasLimit: bigint, _newMaxGasLimit: bigint];
  export interface OutputObject {
    _oldMaxGasLimit: bigint;
    _newMaxGasLimit: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export interface IL1MessageQueue extends BaseContract {
  connect(runner?: ContractRunner | null): IL1MessageQueue;
  waitForDeployment(): Promise<this>;

  interface: IL1MessageQueueInterface;

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

  appendCrossDomainMessage: TypedContractMethod<
    [target: AddressLike, gasLimit: BigNumberish, data: BytesLike],
    [void],
    "nonpayable"
  >;

  appendEnforcedTransaction: TypedContractMethod<
    [
      sender: AddressLike,
      target: AddressLike,
      value: BigNumberish,
      gasLimit: BigNumberish,
      data: BytesLike
    ],
    [void],
    "nonpayable"
  >;

  calculateIntrinsicGasFee: TypedContractMethod<
    [_calldata: BytesLike],
    [bigint],
    "view"
  >;

  computeTransactionHash: TypedContractMethod<
    [
      sender: AddressLike,
      queueIndex: BigNumberish,
      value: BigNumberish,
      target: AddressLike,
      gasLimit: BigNumberish,
      data: BytesLike
    ],
    [string],
    "view"
  >;

  dropCrossDomainMessage: TypedContractMethod<
    [index: BigNumberish],
    [void],
    "nonpayable"
  >;

  estimateCrossDomainMessageFee: TypedContractMethod<
    [gasLimit: BigNumberish],
    [bigint],
    "view"
  >;

  getCrossDomainMessage: TypedContractMethod<
    [queueIndex: BigNumberish],
    [string],
    "view"
  >;

  isMessageDropped: TypedContractMethod<
    [queueIndex: BigNumberish],
    [boolean],
    "view"
  >;

  isMessageSkipped: TypedContractMethod<
    [queueIndex: BigNumberish],
    [boolean],
    "view"
  >;

  nextCrossDomainMessageIndex: TypedContractMethod<[], [bigint], "view">;

  pendingQueueIndex: TypedContractMethod<[], [bigint], "view">;

  popCrossDomainMessage: TypedContractMethod<
    [
      startIndex: BigNumberish,
      count: BigNumberish,
      skippedBitmap: BigNumberish
    ],
    [void],
    "nonpayable"
  >;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "appendCrossDomainMessage"
  ): TypedContractMethod<
    [target: AddressLike, gasLimit: BigNumberish, data: BytesLike],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "appendEnforcedTransaction"
  ): TypedContractMethod<
    [
      sender: AddressLike,
      target: AddressLike,
      value: BigNumberish,
      gasLimit: BigNumberish,
      data: BytesLike
    ],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "calculateIntrinsicGasFee"
  ): TypedContractMethod<[_calldata: BytesLike], [bigint], "view">;
  getFunction(
    nameOrSignature: "computeTransactionHash"
  ): TypedContractMethod<
    [
      sender: AddressLike,
      queueIndex: BigNumberish,
      value: BigNumberish,
      target: AddressLike,
      gasLimit: BigNumberish,
      data: BytesLike
    ],
    [string],
    "view"
  >;
  getFunction(
    nameOrSignature: "dropCrossDomainMessage"
  ): TypedContractMethod<[index: BigNumberish], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "estimateCrossDomainMessageFee"
  ): TypedContractMethod<[gasLimit: BigNumberish], [bigint], "view">;
  getFunction(
    nameOrSignature: "getCrossDomainMessage"
  ): TypedContractMethod<[queueIndex: BigNumberish], [string], "view">;
  getFunction(
    nameOrSignature: "isMessageDropped"
  ): TypedContractMethod<[queueIndex: BigNumberish], [boolean], "view">;
  getFunction(
    nameOrSignature: "isMessageSkipped"
  ): TypedContractMethod<[queueIndex: BigNumberish], [boolean], "view">;
  getFunction(
    nameOrSignature: "nextCrossDomainMessageIndex"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "pendingQueueIndex"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "popCrossDomainMessage"
  ): TypedContractMethod<
    [
      startIndex: BigNumberish,
      count: BigNumberish,
      skippedBitmap: BigNumberish
    ],
    [void],
    "nonpayable"
  >;

  getEvent(
    key: "DequeueTransaction"
  ): TypedContractEvent<
    DequeueTransactionEvent.InputTuple,
    DequeueTransactionEvent.OutputTuple,
    DequeueTransactionEvent.OutputObject
  >;
  getEvent(
    key: "DropTransaction"
  ): TypedContractEvent<
    DropTransactionEvent.InputTuple,
    DropTransactionEvent.OutputTuple,
    DropTransactionEvent.OutputObject
  >;
  getEvent(
    key: "QueueTransaction"
  ): TypedContractEvent<
    QueueTransactionEvent.InputTuple,
    QueueTransactionEvent.OutputTuple,
    QueueTransactionEvent.OutputObject
  >;
  getEvent(
    key: "UpdateGasOracle"
  ): TypedContractEvent<
    UpdateGasOracleEvent.InputTuple,
    UpdateGasOracleEvent.OutputTuple,
    UpdateGasOracleEvent.OutputObject
  >;
  getEvent(
    key: "UpdateMaxGasLimit"
  ): TypedContractEvent<
    UpdateMaxGasLimitEvent.InputTuple,
    UpdateMaxGasLimitEvent.OutputTuple,
    UpdateMaxGasLimitEvent.OutputObject
  >;

  filters: {
    "DequeueTransaction(uint256,uint256,uint256)": TypedContractEvent<
      DequeueTransactionEvent.InputTuple,
      DequeueTransactionEvent.OutputTuple,
      DequeueTransactionEvent.OutputObject
    >;
    DequeueTransaction: TypedContractEvent<
      DequeueTransactionEvent.InputTuple,
      DequeueTransactionEvent.OutputTuple,
      DequeueTransactionEvent.OutputObject
    >;

    "DropTransaction(uint256)": TypedContractEvent<
      DropTransactionEvent.InputTuple,
      DropTransactionEvent.OutputTuple,
      DropTransactionEvent.OutputObject
    >;
    DropTransaction: TypedContractEvent<
      DropTransactionEvent.InputTuple,
      DropTransactionEvent.OutputTuple,
      DropTransactionEvent.OutputObject
    >;

    "QueueTransaction(address,address,uint256,uint64,uint256,bytes)": TypedContractEvent<
      QueueTransactionEvent.InputTuple,
      QueueTransactionEvent.OutputTuple,
      QueueTransactionEvent.OutputObject
    >;
    QueueTransaction: TypedContractEvent<
      QueueTransactionEvent.InputTuple,
      QueueTransactionEvent.OutputTuple,
      QueueTransactionEvent.OutputObject
    >;

    "UpdateGasOracle(address,address)": TypedContractEvent<
      UpdateGasOracleEvent.InputTuple,
      UpdateGasOracleEvent.OutputTuple,
      UpdateGasOracleEvent.OutputObject
    >;
    UpdateGasOracle: TypedContractEvent<
      UpdateGasOracleEvent.InputTuple,
      UpdateGasOracleEvent.OutputTuple,
      UpdateGasOracleEvent.OutputObject
    >;

    "UpdateMaxGasLimit(uint256,uint256)": TypedContractEvent<
      UpdateMaxGasLimitEvent.InputTuple,
      UpdateMaxGasLimitEvent.OutputTuple,
      UpdateMaxGasLimitEvent.OutputObject
    >;
    UpdateMaxGasLimit: TypedContractEvent<
      UpdateMaxGasLimitEvent.InputTuple,
      UpdateMaxGasLimitEvent.OutputTuple,
      UpdateMaxGasLimitEvent.OutputObject
    >;
  };
}
