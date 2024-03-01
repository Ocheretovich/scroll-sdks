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

export interface ScrollChainInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "addProver"
      | "addSequencer"
      | "commitBatch"
      | "committedBatches"
      | "finalizeBatchWithProof"
      | "finalizedStateRoots"
      | "importGenesisBatch"
      | "initialize"
      | "isBatchFinalized"
      | "isProver"
      | "isSequencer"
      | "lastFinalizedBatchIndex"
      | "layer2ChainId"
      | "maxNumTxInChunk"
      | "messageQueue"
      | "owner"
      | "paused"
      | "removeProver"
      | "removeSequencer"
      | "renounceOwnership"
      | "revertBatch"
      | "setPause"
      | "transferOwnership"
      | "updateMaxNumTxInChunk"
      | "verifier"
      | "withdrawRoots"
  ): FunctionFragment;

  getEvent(
    nameOrSignatureOrTopic:
      | "CommitBatch"
      | "FinalizeBatch"
      | "Initialized"
      | "OwnershipTransferred"
      | "Paused"
      | "RevertBatch"
      | "Unpaused"
      | "UpdateMaxNumTxInChunk"
      | "UpdateProver"
      | "UpdateSequencer"
  ): EventFragment;

  encodeFunctionData(
    functionFragment: "addProver",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "addSequencer",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "commitBatch",
    values: [BigNumberish, BytesLike, BytesLike[], BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "committedBatches",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "finalizeBatchWithProof",
    values: [BytesLike, BytesLike, BytesLike, BytesLike, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "finalizedStateRoots",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "importGenesisBatch",
    values: [BytesLike, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "initialize",
    values: [AddressLike, AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "isBatchFinalized",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "isProver",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "isSequencer",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "lastFinalizedBatchIndex",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "layer2ChainId",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "maxNumTxInChunk",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "messageQueue",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(functionFragment: "paused", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "removeProver",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "removeSequencer",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "revertBatch",
    values: [BytesLike, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "setPause", values: [boolean]): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "updateMaxNumTxInChunk",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "verifier", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "withdrawRoots",
    values: [BigNumberish]
  ): string;

  decodeFunctionResult(functionFragment: "addProver", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "addSequencer",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "commitBatch",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "committedBatches",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "finalizeBatchWithProof",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "finalizedStateRoots",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "importGenesisBatch",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "isBatchFinalized",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "isProver", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "isSequencer",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "lastFinalizedBatchIndex",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "layer2ChainId",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "maxNumTxInChunk",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "messageQueue",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "paused", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "removeProver",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "removeSequencer",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "revertBatch",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "setPause", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "updateMaxNumTxInChunk",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "verifier", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "withdrawRoots",
    data: BytesLike
  ): Result;
}

export namespace CommitBatchEvent {
  export type InputTuple = [batchIndex: BigNumberish, batchHash: BytesLike];
  export type OutputTuple = [batchIndex: bigint, batchHash: string];
  export interface OutputObject {
    batchIndex: bigint;
    batchHash: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace FinalizeBatchEvent {
  export type InputTuple = [
    batchIndex: BigNumberish,
    batchHash: BytesLike,
    stateRoot: BytesLike,
    withdrawRoot: BytesLike
  ];
  export type OutputTuple = [
    batchIndex: bigint,
    batchHash: string,
    stateRoot: string,
    withdrawRoot: string
  ];
  export interface OutputObject {
    batchIndex: bigint;
    batchHash: string;
    stateRoot: string;
    withdrawRoot: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace InitializedEvent {
  export type InputTuple = [version: BigNumberish];
  export type OutputTuple = [version: bigint];
  export interface OutputObject {
    version: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace OwnershipTransferredEvent {
  export type InputTuple = [previousOwner: AddressLike, newOwner: AddressLike];
  export type OutputTuple = [previousOwner: string, newOwner: string];
  export interface OutputObject {
    previousOwner: string;
    newOwner: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace PausedEvent {
  export type InputTuple = [account: AddressLike];
  export type OutputTuple = [account: string];
  export interface OutputObject {
    account: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace RevertBatchEvent {
  export type InputTuple = [batchIndex: BigNumberish, batchHash: BytesLike];
  export type OutputTuple = [batchIndex: bigint, batchHash: string];
  export interface OutputObject {
    batchIndex: bigint;
    batchHash: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace UnpausedEvent {
  export type InputTuple = [account: AddressLike];
  export type OutputTuple = [account: string];
  export interface OutputObject {
    account: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace UpdateMaxNumTxInChunkEvent {
  export type InputTuple = [
    oldMaxNumTxInChunk: BigNumberish,
    newMaxNumTxInChunk: BigNumberish
  ];
  export type OutputTuple = [
    oldMaxNumTxInChunk: bigint,
    newMaxNumTxInChunk: bigint
  ];
  export interface OutputObject {
    oldMaxNumTxInChunk: bigint;
    newMaxNumTxInChunk: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace UpdateProverEvent {
  export type InputTuple = [account: AddressLike, status: boolean];
  export type OutputTuple = [account: string, status: boolean];
  export interface OutputObject {
    account: string;
    status: boolean;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace UpdateSequencerEvent {
  export type InputTuple = [account: AddressLike, status: boolean];
  export type OutputTuple = [account: string, status: boolean];
  export interface OutputObject {
    account: string;
    status: boolean;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export interface ScrollChain extends BaseContract {
  connect(runner?: ContractRunner | null): ScrollChain;
  waitForDeployment(): Promise<this>;

  interface: ScrollChainInterface;

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

  addProver: TypedContractMethod<[_account: AddressLike], [void], "nonpayable">;

  addSequencer: TypedContractMethod<
    [_account: AddressLike],
    [void],
    "nonpayable"
  >;

  commitBatch: TypedContractMethod<
    [
      _version: BigNumberish,
      _parentBatchHeader: BytesLike,
      _chunks: BytesLike[],
      _skippedL1MessageBitmap: BytesLike
    ],
    [void],
    "nonpayable"
  >;

  committedBatches: TypedContractMethod<[arg0: BigNumberish], [string], "view">;

  finalizeBatchWithProof: TypedContractMethod<
    [
      _batchHeader: BytesLike,
      _prevStateRoot: BytesLike,
      _postStateRoot: BytesLike,
      _withdrawRoot: BytesLike,
      _aggrProof: BytesLike
    ],
    [void],
    "nonpayable"
  >;

  finalizedStateRoots: TypedContractMethod<
    [arg0: BigNumberish],
    [string],
    "view"
  >;

  importGenesisBatch: TypedContractMethod<
    [_batchHeader: BytesLike, _stateRoot: BytesLike],
    [void],
    "nonpayable"
  >;

  initialize: TypedContractMethod<
    [
      _messageQueue: AddressLike,
      _verifier: AddressLike,
      _maxNumTxInChunk: BigNumberish
    ],
    [void],
    "nonpayable"
  >;

  isBatchFinalized: TypedContractMethod<
    [_batchIndex: BigNumberish],
    [boolean],
    "view"
  >;

  isProver: TypedContractMethod<[arg0: AddressLike], [boolean], "view">;

  isSequencer: TypedContractMethod<[arg0: AddressLike], [boolean], "view">;

  lastFinalizedBatchIndex: TypedContractMethod<[], [bigint], "view">;

  layer2ChainId: TypedContractMethod<[], [bigint], "view">;

  maxNumTxInChunk: TypedContractMethod<[], [bigint], "view">;

  messageQueue: TypedContractMethod<[], [string], "view">;

  owner: TypedContractMethod<[], [string], "view">;

  paused: TypedContractMethod<[], [boolean], "view">;

  removeProver: TypedContractMethod<
    [_account: AddressLike],
    [void],
    "nonpayable"
  >;

  removeSequencer: TypedContractMethod<
    [_account: AddressLike],
    [void],
    "nonpayable"
  >;

  renounceOwnership: TypedContractMethod<[], [void], "nonpayable">;

  revertBatch: TypedContractMethod<
    [_batchHeader: BytesLike, _count: BigNumberish],
    [void],
    "nonpayable"
  >;

  setPause: TypedContractMethod<[_status: boolean], [void], "nonpayable">;

  transferOwnership: TypedContractMethod<
    [newOwner: AddressLike],
    [void],
    "nonpayable"
  >;

  updateMaxNumTxInChunk: TypedContractMethod<
    [_maxNumTxInChunk: BigNumberish],
    [void],
    "nonpayable"
  >;

  verifier: TypedContractMethod<[], [string], "view">;

  withdrawRoots: TypedContractMethod<[arg0: BigNumberish], [string], "view">;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "addProver"
  ): TypedContractMethod<[_account: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "addSequencer"
  ): TypedContractMethod<[_account: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "commitBatch"
  ): TypedContractMethod<
    [
      _version: BigNumberish,
      _parentBatchHeader: BytesLike,
      _chunks: BytesLike[],
      _skippedL1MessageBitmap: BytesLike
    ],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "committedBatches"
  ): TypedContractMethod<[arg0: BigNumberish], [string], "view">;
  getFunction(
    nameOrSignature: "finalizeBatchWithProof"
  ): TypedContractMethod<
    [
      _batchHeader: BytesLike,
      _prevStateRoot: BytesLike,
      _postStateRoot: BytesLike,
      _withdrawRoot: BytesLike,
      _aggrProof: BytesLike
    ],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "finalizedStateRoots"
  ): TypedContractMethod<[arg0: BigNumberish], [string], "view">;
  getFunction(
    nameOrSignature: "importGenesisBatch"
  ): TypedContractMethod<
    [_batchHeader: BytesLike, _stateRoot: BytesLike],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "initialize"
  ): TypedContractMethod<
    [
      _messageQueue: AddressLike,
      _verifier: AddressLike,
      _maxNumTxInChunk: BigNumberish
    ],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "isBatchFinalized"
  ): TypedContractMethod<[_batchIndex: BigNumberish], [boolean], "view">;
  getFunction(
    nameOrSignature: "isProver"
  ): TypedContractMethod<[arg0: AddressLike], [boolean], "view">;
  getFunction(
    nameOrSignature: "isSequencer"
  ): TypedContractMethod<[arg0: AddressLike], [boolean], "view">;
  getFunction(
    nameOrSignature: "lastFinalizedBatchIndex"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "layer2ChainId"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "maxNumTxInChunk"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "messageQueue"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "owner"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "paused"
  ): TypedContractMethod<[], [boolean], "view">;
  getFunction(
    nameOrSignature: "removeProver"
  ): TypedContractMethod<[_account: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "removeSequencer"
  ): TypedContractMethod<[_account: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "renounceOwnership"
  ): TypedContractMethod<[], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "revertBatch"
  ): TypedContractMethod<
    [_batchHeader: BytesLike, _count: BigNumberish],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "setPause"
  ): TypedContractMethod<[_status: boolean], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "transferOwnership"
  ): TypedContractMethod<[newOwner: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "updateMaxNumTxInChunk"
  ): TypedContractMethod<
    [_maxNumTxInChunk: BigNumberish],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "verifier"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "withdrawRoots"
  ): TypedContractMethod<[arg0: BigNumberish], [string], "view">;

  getEvent(
    key: "CommitBatch"
  ): TypedContractEvent<
    CommitBatchEvent.InputTuple,
    CommitBatchEvent.OutputTuple,
    CommitBatchEvent.OutputObject
  >;
  getEvent(
    key: "FinalizeBatch"
  ): TypedContractEvent<
    FinalizeBatchEvent.InputTuple,
    FinalizeBatchEvent.OutputTuple,
    FinalizeBatchEvent.OutputObject
  >;
  getEvent(
    key: "Initialized"
  ): TypedContractEvent<
    InitializedEvent.InputTuple,
    InitializedEvent.OutputTuple,
    InitializedEvent.OutputObject
  >;
  getEvent(
    key: "OwnershipTransferred"
  ): TypedContractEvent<
    OwnershipTransferredEvent.InputTuple,
    OwnershipTransferredEvent.OutputTuple,
    OwnershipTransferredEvent.OutputObject
  >;
  getEvent(
    key: "Paused"
  ): TypedContractEvent<
    PausedEvent.InputTuple,
    PausedEvent.OutputTuple,
    PausedEvent.OutputObject
  >;
  getEvent(
    key: "RevertBatch"
  ): TypedContractEvent<
    RevertBatchEvent.InputTuple,
    RevertBatchEvent.OutputTuple,
    RevertBatchEvent.OutputObject
  >;
  getEvent(
    key: "Unpaused"
  ): TypedContractEvent<
    UnpausedEvent.InputTuple,
    UnpausedEvent.OutputTuple,
    UnpausedEvent.OutputObject
  >;
  getEvent(
    key: "UpdateMaxNumTxInChunk"
  ): TypedContractEvent<
    UpdateMaxNumTxInChunkEvent.InputTuple,
    UpdateMaxNumTxInChunkEvent.OutputTuple,
    UpdateMaxNumTxInChunkEvent.OutputObject
  >;
  getEvent(
    key: "UpdateProver"
  ): TypedContractEvent<
    UpdateProverEvent.InputTuple,
    UpdateProverEvent.OutputTuple,
    UpdateProverEvent.OutputObject
  >;
  getEvent(
    key: "UpdateSequencer"
  ): TypedContractEvent<
    UpdateSequencerEvent.InputTuple,
    UpdateSequencerEvent.OutputTuple,
    UpdateSequencerEvent.OutputObject
  >;

  filters: {
    "CommitBatch(uint256,bytes32)": TypedContractEvent<
      CommitBatchEvent.InputTuple,
      CommitBatchEvent.OutputTuple,
      CommitBatchEvent.OutputObject
    >;
    CommitBatch: TypedContractEvent<
      CommitBatchEvent.InputTuple,
      CommitBatchEvent.OutputTuple,
      CommitBatchEvent.OutputObject
    >;

    "FinalizeBatch(uint256,bytes32,bytes32,bytes32)": TypedContractEvent<
      FinalizeBatchEvent.InputTuple,
      FinalizeBatchEvent.OutputTuple,
      FinalizeBatchEvent.OutputObject
    >;
    FinalizeBatch: TypedContractEvent<
      FinalizeBatchEvent.InputTuple,
      FinalizeBatchEvent.OutputTuple,
      FinalizeBatchEvent.OutputObject
    >;

    "Initialized(uint8)": TypedContractEvent<
      InitializedEvent.InputTuple,
      InitializedEvent.OutputTuple,
      InitializedEvent.OutputObject
    >;
    Initialized: TypedContractEvent<
      InitializedEvent.InputTuple,
      InitializedEvent.OutputTuple,
      InitializedEvent.OutputObject
    >;

    "OwnershipTransferred(address,address)": TypedContractEvent<
      OwnershipTransferredEvent.InputTuple,
      OwnershipTransferredEvent.OutputTuple,
      OwnershipTransferredEvent.OutputObject
    >;
    OwnershipTransferred: TypedContractEvent<
      OwnershipTransferredEvent.InputTuple,
      OwnershipTransferredEvent.OutputTuple,
      OwnershipTransferredEvent.OutputObject
    >;

    "Paused(address)": TypedContractEvent<
      PausedEvent.InputTuple,
      PausedEvent.OutputTuple,
      PausedEvent.OutputObject
    >;
    Paused: TypedContractEvent<
      PausedEvent.InputTuple,
      PausedEvent.OutputTuple,
      PausedEvent.OutputObject
    >;

    "RevertBatch(uint256,bytes32)": TypedContractEvent<
      RevertBatchEvent.InputTuple,
      RevertBatchEvent.OutputTuple,
      RevertBatchEvent.OutputObject
    >;
    RevertBatch: TypedContractEvent<
      RevertBatchEvent.InputTuple,
      RevertBatchEvent.OutputTuple,
      RevertBatchEvent.OutputObject
    >;

    "Unpaused(address)": TypedContractEvent<
      UnpausedEvent.InputTuple,
      UnpausedEvent.OutputTuple,
      UnpausedEvent.OutputObject
    >;
    Unpaused: TypedContractEvent<
      UnpausedEvent.InputTuple,
      UnpausedEvent.OutputTuple,
      UnpausedEvent.OutputObject
    >;

    "UpdateMaxNumTxInChunk(uint256,uint256)": TypedContractEvent<
      UpdateMaxNumTxInChunkEvent.InputTuple,
      UpdateMaxNumTxInChunkEvent.OutputTuple,
      UpdateMaxNumTxInChunkEvent.OutputObject
    >;
    UpdateMaxNumTxInChunk: TypedContractEvent<
      UpdateMaxNumTxInChunkEvent.InputTuple,
      UpdateMaxNumTxInChunkEvent.OutputTuple,
      UpdateMaxNumTxInChunkEvent.OutputObject
    >;

    "UpdateProver(address,bool)": TypedContractEvent<
      UpdateProverEvent.InputTuple,
      UpdateProverEvent.OutputTuple,
      UpdateProverEvent.OutputObject
    >;
    UpdateProver: TypedContractEvent<
      UpdateProverEvent.InputTuple,
      UpdateProverEvent.OutputTuple,
      UpdateProverEvent.OutputObject
    >;

    "UpdateSequencer(address,bool)": TypedContractEvent<
      UpdateSequencerEvent.InputTuple,
      UpdateSequencerEvent.OutputTuple,
      UpdateSequencerEvent.OutputObject
    >;
    UpdateSequencer: TypedContractEvent<
      UpdateSequencerEvent.InputTuple,
      UpdateSequencerEvent.OutputTuple,
      UpdateSequencerEvent.OutputObject
    >;
  };
}
