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
  ContractRunner,
  ContractMethod,
  Listener,
} from "ethers";
import type {
  TypedContractEvent,
  TypedDeferredTopicFilter,
  TypedEventLog,
  TypedListener,
  TypedContractMethod,
} from "../../../common";

export interface IL2GasPriceOracleInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "calculateIntrinsicGasFee"
      | "estimateCrossDomainMessageFee"
      | "l2BaseFee"
      | "whitelist"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "calculateIntrinsicGasFee",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "estimateCrossDomainMessageFee",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "l2BaseFee", values?: undefined): string;
  encodeFunctionData(functionFragment: "whitelist", values?: undefined): string;

  decodeFunctionResult(
    functionFragment: "calculateIntrinsicGasFee",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "estimateCrossDomainMessageFee",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "l2BaseFee", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "whitelist", data: BytesLike): Result;
}

export interface IL2GasPriceOracle extends BaseContract {
  connect(runner?: ContractRunner | null): IL2GasPriceOracle;
  waitForDeployment(): Promise<this>;

  interface: IL2GasPriceOracleInterface;

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

  calculateIntrinsicGasFee: TypedContractMethod<
    [_message: BytesLike],
    [bigint],
    "view"
  >;

  estimateCrossDomainMessageFee: TypedContractMethod<
    [_gasLimit: BigNumberish],
    [bigint],
    "view"
  >;

  l2BaseFee: TypedContractMethod<[], [bigint], "view">;

  whitelist: TypedContractMethod<[], [string], "view">;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "calculateIntrinsicGasFee"
  ): TypedContractMethod<[_message: BytesLike], [bigint], "view">;
  getFunction(
    nameOrSignature: "estimateCrossDomainMessageFee"
  ): TypedContractMethod<[_gasLimit: BigNumberish], [bigint], "view">;
  getFunction(
    nameOrSignature: "l2BaseFee"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "whitelist"
  ): TypedContractMethod<[], [string], "view">;

  filters: {};
}
