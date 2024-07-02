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
  AddressLike,
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
} from "./common";

export interface UsdPriceFeedManagerAbiInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "assetDecimals"
      | "assetMultiplier"
      | "assetPriceAggregator"
      | "assetPriceAggregatorMultiplier"
      | "assetTimeLimit"
      | "assetToUsd"
      | "assetToUsdCustomPrice"
      | "assetToUsdCustomPriceBulk"
      | "assetValidity"
      | "setAsset"
      | "updateAssetTimeLimit"
      | "usdDecimals"
      | "usdToAsset"
      | "usdToAssetCustomPrice"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "assetDecimals",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "assetMultiplier",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "assetPriceAggregator",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "assetPriceAggregatorMultiplier",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "assetTimeLimit",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "assetToUsd",
    values: [AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "assetToUsdCustomPrice",
    values: [AddressLike, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "assetToUsdCustomPriceBulk",
    values: [AddressLike[], BigNumberish[], BigNumberish[]]
  ): string;
  encodeFunctionData(
    functionFragment: "assetValidity",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "setAsset",
    values: [AddressLike, AddressLike, boolean, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "updateAssetTimeLimit",
    values: [AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "usdDecimals",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "usdToAsset",
    values: [AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "usdToAssetCustomPrice",
    values: [AddressLike, BigNumberish, BigNumberish]
  ): string;

  decodeFunctionResult(
    functionFragment: "assetDecimals",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "assetMultiplier",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "assetPriceAggregator",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "assetPriceAggregatorMultiplier",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "assetTimeLimit",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "assetToUsd", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "assetToUsdCustomPrice",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "assetToUsdCustomPriceBulk",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "assetValidity",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "setAsset", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "updateAssetTimeLimit",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "usdDecimals",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "usdToAsset", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "usdToAssetCustomPrice",
    data: BytesLike
  ): Result;
}

export interface UsdPriceFeedManagerAbi extends BaseContract {
  connect(runner?: ContractRunner | null): UsdPriceFeedManagerAbi;
  waitForDeployment(): Promise<this>;

  interface: UsdPriceFeedManagerAbiInterface;

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

  assetDecimals: TypedContractMethod<[arg0: AddressLike], [bigint], "view">;

  assetMultiplier: TypedContractMethod<[arg0: AddressLike], [bigint], "view">;

  assetPriceAggregator: TypedContractMethod<
    [arg0: AddressLike],
    [string],
    "view"
  >;

  assetPriceAggregatorMultiplier: TypedContractMethod<
    [arg0: AddressLike],
    [bigint],
    "view"
  >;

  assetTimeLimit: TypedContractMethod<[arg0: AddressLike], [bigint], "view">;

  assetToUsd: TypedContractMethod<
    [asset: AddressLike, assetAmount: BigNumberish],
    [bigint],
    "view"
  >;

  assetToUsdCustomPrice: TypedContractMethod<
    [asset: AddressLike, assetAmount: BigNumberish, price: BigNumberish],
    [bigint],
    "view"
  >;

  assetToUsdCustomPriceBulk: TypedContractMethod<
    [tokens: AddressLike[], assets: BigNumberish[], prices: BigNumberish[]],
    [bigint],
    "view"
  >;

  assetValidity: TypedContractMethod<[arg0: AddressLike], [boolean], "view">;

  setAsset: TypedContractMethod<
    [
      asset: AddressLike,
      priceAggregator: AddressLike,
      validity: boolean,
      timeLimit: BigNumberish
    ],
    [void],
    "nonpayable"
  >;

  updateAssetTimeLimit: TypedContractMethod<
    [asset: AddressLike, timeLimit: BigNumberish],
    [void],
    "nonpayable"
  >;

  usdDecimals: TypedContractMethod<[], [bigint], "view">;

  usdToAsset: TypedContractMethod<
    [asset: AddressLike, usdAmount: BigNumberish],
    [bigint],
    "view"
  >;

  usdToAssetCustomPrice: TypedContractMethod<
    [asset: AddressLike, usdAmount: BigNumberish, price: BigNumberish],
    [bigint],
    "view"
  >;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "assetDecimals"
  ): TypedContractMethod<[arg0: AddressLike], [bigint], "view">;
  getFunction(
    nameOrSignature: "assetMultiplier"
  ): TypedContractMethod<[arg0: AddressLike], [bigint], "view">;
  getFunction(
    nameOrSignature: "assetPriceAggregator"
  ): TypedContractMethod<[arg0: AddressLike], [string], "view">;
  getFunction(
    nameOrSignature: "assetPriceAggregatorMultiplier"
  ): TypedContractMethod<[arg0: AddressLike], [bigint], "view">;
  getFunction(
    nameOrSignature: "assetTimeLimit"
  ): TypedContractMethod<[arg0: AddressLike], [bigint], "view">;
  getFunction(
    nameOrSignature: "assetToUsd"
  ): TypedContractMethod<
    [asset: AddressLike, assetAmount: BigNumberish],
    [bigint],
    "view"
  >;
  getFunction(
    nameOrSignature: "assetToUsdCustomPrice"
  ): TypedContractMethod<
    [asset: AddressLike, assetAmount: BigNumberish, price: BigNumberish],
    [bigint],
    "view"
  >;
  getFunction(
    nameOrSignature: "assetToUsdCustomPriceBulk"
  ): TypedContractMethod<
    [tokens: AddressLike[], assets: BigNumberish[], prices: BigNumberish[]],
    [bigint],
    "view"
  >;
  getFunction(
    nameOrSignature: "assetValidity"
  ): TypedContractMethod<[arg0: AddressLike], [boolean], "view">;
  getFunction(
    nameOrSignature: "setAsset"
  ): TypedContractMethod<
    [
      asset: AddressLike,
      priceAggregator: AddressLike,
      validity: boolean,
      timeLimit: BigNumberish
    ],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "updateAssetTimeLimit"
  ): TypedContractMethod<
    [asset: AddressLike, timeLimit: BigNumberish],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "usdDecimals"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "usdToAsset"
  ): TypedContractMethod<
    [asset: AddressLike, usdAmount: BigNumberish],
    [bigint],
    "view"
  >;
  getFunction(
    nameOrSignature: "usdToAssetCustomPrice"
  ): TypedContractMethod<
    [asset: AddressLike, usdAmount: BigNumberish, price: BigNumberish],
    [bigint],
    "view"
  >;

  filters: {};
}
