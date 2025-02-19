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
} from "./common";

export type DhwInfoStruct = {
  sharesMinted: BigNumberish;
  assetsWithdrawn: BigNumberish[];
  yieldPercentage: BigNumberish;
  valueAtDhw: BigNumberish;
  totalSstsAtDhw: BigNumberish;
};

export type DhwInfoStructOutput = [
  sharesMinted: bigint,
  assetsWithdrawn: bigint[],
  yieldPercentage: bigint,
  valueAtDhw: bigint,
  totalSstsAtDhw: bigint
] & {
  sharesMinted: bigint;
  assetsWithdrawn: bigint[];
  yieldPercentage: bigint;
  valueAtDhw: bigint;
  totalSstsAtDhw: bigint;
};

export type SwapInfoStruct = {
  swapTarget: AddressLike;
  token: AddressLike;
  swapCallData: BytesLike;
};

export type SwapInfoStructOutput = [
  swapTarget: string,
  token: string,
  swapCallData: string
] & { swapTarget: string; token: string; swapCallData: string };

export type DoHardWorkParameterBagStruct = {
  strategies: AddressLike[][];
  swapInfo: SwapInfoStruct[][][];
  compoundSwapInfo: SwapInfoStruct[][][];
  strategySlippages: BigNumberish[][][];
  baseYields: BigNumberish[][];
  tokens: AddressLike[];
  exchangeRateSlippages: [BigNumberish, BigNumberish][];
  validUntil: BigNumberish;
};

export type DoHardWorkParameterBagStructOutput = [
  strategies: string[][],
  swapInfo: SwapInfoStructOutput[][][],
  compoundSwapInfo: SwapInfoStructOutput[][][],
  strategySlippages: bigint[][][],
  baseYields: bigint[][],
  tokens: string[],
  exchangeRateSlippages: [bigint, bigint][],
  validUntil: bigint
] & {
  strategies: string[][];
  swapInfo: SwapInfoStructOutput[][][];
  compoundSwapInfo: SwapInfoStructOutput[][][];
  strategySlippages: bigint[][][];
  baseYields: bigint[][];
  tokens: string[];
  exchangeRateSlippages: [bigint, bigint][];
  validUntil: bigint;
};

export type PlatformFeesStruct = {
  ecosystemFeeReceiver: AddressLike;
  ecosystemFeePct: BigNumberish;
  treasuryFeeReceiver: AddressLike;
  treasuryFeePct: BigNumberish;
};

export type PlatformFeesStructOutput = [
  ecosystemFeeReceiver: string,
  ecosystemFeePct: bigint,
  treasuryFeeReceiver: string,
  treasuryFeePct: bigint
] & {
  ecosystemFeeReceiver: string;
  ecosystemFeePct: bigint;
  treasuryFeeReceiver: string;
  treasuryFeePct: bigint;
};

export type RedeemFastParameterBagStruct = {
  strategies: AddressLike[];
  strategyShares: BigNumberish[];
  assetGroup: AddressLike[];
  withdrawalSlippages: BigNumberish[][];
};

export type RedeemFastParameterBagStructOutput = [
  strategies: string[],
  strategyShares: bigint[],
  assetGroup: string[],
  withdrawalSlippages: bigint[][]
] & {
  strategies: string[];
  strategyShares: bigint[];
  assetGroup: string[];
  withdrawalSlippages: bigint[][];
};

export type StrategyAtIndexStruct = {
  exchangeRates: BigNumberish[];
  assetsDeposited: BigNumberish[];
  sharesMinted: BigNumberish;
  totalSSTs: BigNumberish;
  totalStrategyValue: BigNumberish;
  dhwYields: BigNumberish;
};

export type StrategyAtIndexStructOutput = [
  exchangeRates: bigint[],
  assetsDeposited: bigint[],
  sharesMinted: bigint,
  totalSSTs: bigint,
  totalStrategyValue: bigint,
  dhwYields: bigint
] & {
  exchangeRates: bigint[];
  assetsDeposited: bigint[];
  sharesMinted: bigint;
  totalSSTs: bigint;
  totalStrategyValue: bigint;
  dhwYields: bigint;
};

export interface StrategyRegistryAbiInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "addDeposits"
      | "addWithdrawals"
      | "assetRatioAtLastDhw"
      | "claimWithdrawals"
      | "currentIndex"
      | "depositedAssets"
      | "dhwTimestamps"
      | "doHardWork"
      | "emergencyWithdraw"
      | "emergencyWithdrawalWallet"
      | "getDhwYield"
      | "initialize"
      | "platformFees"
      | "redeemFast"
      | "redeemStrategyShares"
      | "redeemStrategySharesView"
      | "registerStrategy"
      | "removeStrategy"
      | "setEcosystemFee"
      | "setEcosystemFeeReceiver"
      | "setEmergencyWithdrawalWallet"
      | "setStrategyApy"
      | "setTreasuryFee"
      | "setTreasuryFeeReceiver"
      | "sharesRedeemed"
      | "strategyAPYs"
      | "strategyAtIndexBatch"
  ): FunctionFragment;

  getEvent(
    nameOrSignatureOrTopic:
      | "EcosystemFeeReceiverSet"
      | "EcosystemFeeSet"
      | "EmergencyWithdrawalWalletSet"
      | "Initialized"
      | "StrategyApyUpdated"
      | "StrategyDhw"
      | "StrategyEmergencyWithdrawn"
      | "StrategyRegistered"
      | "StrategyRemoved"
      | "StrategySharesFastRedeemed"
      | "StrategySharesRedeemed"
      | "TreasuryFeeReceiverSet"
      | "TreasuryFeeSet"
  ): EventFragment;

  encodeFunctionData(
    functionFragment: "addDeposits",
    values: [AddressLike[], BigNumberish[][]]
  ): string;
  encodeFunctionData(
    functionFragment: "addWithdrawals",
    values: [AddressLike[], BigNumberish[]]
  ): string;
  encodeFunctionData(
    functionFragment: "assetRatioAtLastDhw",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "claimWithdrawals",
    values: [AddressLike[], BigNumberish, BigNumberish[]]
  ): string;
  encodeFunctionData(
    functionFragment: "currentIndex",
    values: [AddressLike[]]
  ): string;
  encodeFunctionData(
    functionFragment: "depositedAssets",
    values: [AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "dhwTimestamps",
    values: [AddressLike[], BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "doHardWork",
    values: [DoHardWorkParameterBagStruct]
  ): string;
  encodeFunctionData(
    functionFragment: "emergencyWithdraw",
    values: [AddressLike[], BigNumberish[][], boolean]
  ): string;
  encodeFunctionData(
    functionFragment: "emergencyWithdrawalWallet",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getDhwYield",
    values: [AddressLike[], BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "initialize",
    values: [BigNumberish, BigNumberish, AddressLike, AddressLike, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "platformFees",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "redeemFast",
    values: [RedeemFastParameterBagStruct]
  ): string;
  encodeFunctionData(
    functionFragment: "redeemStrategyShares",
    values: [AddressLike[], BigNumberish[], BigNumberish[][]]
  ): string;
  encodeFunctionData(
    functionFragment: "redeemStrategySharesView",
    values: [AddressLike[], BigNumberish[], BigNumberish[][], AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "registerStrategy",
    values: [AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "removeStrategy",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "setEcosystemFee",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setEcosystemFeeReceiver",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "setEmergencyWithdrawalWallet",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "setStrategyApy",
    values: [AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setTreasuryFee",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setTreasuryFeeReceiver",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "sharesRedeemed",
    values: [AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "strategyAPYs",
    values: [AddressLike[]]
  ): string;
  encodeFunctionData(
    functionFragment: "strategyAtIndexBatch",
    values: [AddressLike[], BigNumberish, BigNumberish]
  ): string;

  decodeFunctionResult(
    functionFragment: "addDeposits",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "addWithdrawals",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "assetRatioAtLastDhw",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "claimWithdrawals",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "currentIndex",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "depositedAssets",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "dhwTimestamps",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "doHardWork", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "emergencyWithdraw",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "emergencyWithdrawalWallet",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getDhwYield",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "platformFees",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "redeemFast", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "redeemStrategyShares",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "redeemStrategySharesView",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "registerStrategy",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "removeStrategy",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setEcosystemFee",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setEcosystemFeeReceiver",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setEmergencyWithdrawalWallet",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setStrategyApy",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setTreasuryFee",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setTreasuryFeeReceiver",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "sharesRedeemed",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "strategyAPYs",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "strategyAtIndexBatch",
    data: BytesLike
  ): Result;
}

export namespace EcosystemFeeReceiverSetEvent {
  export type InputTuple = [ecosystemFeeReceiver: AddressLike];
  export type OutputTuple = [ecosystemFeeReceiver: string];
  export interface OutputObject {
    ecosystemFeeReceiver: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace EcosystemFeeSetEvent {
  export type InputTuple = [feePct: BigNumberish];
  export type OutputTuple = [feePct: bigint];
  export interface OutputObject {
    feePct: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace EmergencyWithdrawalWalletSetEvent {
  export type InputTuple = [wallet: AddressLike];
  export type OutputTuple = [wallet: string];
  export interface OutputObject {
    wallet: string;
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

export namespace StrategyApyUpdatedEvent {
  export type InputTuple = [strategy: AddressLike, apy: BigNumberish];
  export type OutputTuple = [strategy: string, apy: bigint];
  export interface OutputObject {
    strategy: string;
    apy: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace StrategyDhwEvent {
  export type InputTuple = [
    strategy: AddressLike,
    dhwIndex: BigNumberish,
    dhwInfo: DhwInfoStruct
  ];
  export type OutputTuple = [
    strategy: string,
    dhwIndex: bigint,
    dhwInfo: DhwInfoStructOutput
  ];
  export interface OutputObject {
    strategy: string;
    dhwIndex: bigint;
    dhwInfo: DhwInfoStructOutput;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace StrategyEmergencyWithdrawnEvent {
  export type InputTuple = [strategy: AddressLike];
  export type OutputTuple = [strategy: string];
  export interface OutputObject {
    strategy: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace StrategyRegisteredEvent {
  export type InputTuple = [strategy: AddressLike];
  export type OutputTuple = [strategy: string];
  export interface OutputObject {
    strategy: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace StrategyRemovedEvent {
  export type InputTuple = [strategy: AddressLike];
  export type OutputTuple = [strategy: string];
  export interface OutputObject {
    strategy: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace StrategySharesFastRedeemedEvent {
  export type InputTuple = [
    strategy: AddressLike,
    shares: BigNumberish,
    assetsWithdrawn: BigNumberish[]
  ];
  export type OutputTuple = [
    strategy: string,
    shares: bigint,
    assetsWithdrawn: bigint[]
  ];
  export interface OutputObject {
    strategy: string;
    shares: bigint;
    assetsWithdrawn: bigint[];
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace StrategySharesRedeemedEvent {
  export type InputTuple = [
    strategy: AddressLike,
    owner: AddressLike,
    recipient: AddressLike,
    shares: BigNumberish,
    assetsWithdrawn: BigNumberish[]
  ];
  export type OutputTuple = [
    strategy: string,
    owner: string,
    recipient: string,
    shares: bigint,
    assetsWithdrawn: bigint[]
  ];
  export interface OutputObject {
    strategy: string;
    owner: string;
    recipient: string;
    shares: bigint;
    assetsWithdrawn: bigint[];
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace TreasuryFeeReceiverSetEvent {
  export type InputTuple = [treasuryFeeReceiver: AddressLike];
  export type OutputTuple = [treasuryFeeReceiver: string];
  export interface OutputObject {
    treasuryFeeReceiver: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace TreasuryFeeSetEvent {
  export type InputTuple = [feePct: BigNumberish];
  export type OutputTuple = [feePct: bigint];
  export interface OutputObject {
    feePct: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export interface StrategyRegistryAbi extends BaseContract {
  connect(runner?: ContractRunner | null): StrategyRegistryAbi;
  waitForDeployment(): Promise<this>;

  interface: StrategyRegistryAbiInterface;

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

  addDeposits: TypedContractMethod<
    [strategies_: AddressLike[], amounts: BigNumberish[][]],
    [bigint],
    "nonpayable"
  >;

  addWithdrawals: TypedContractMethod<
    [strategies_: AddressLike[], strategyShares: BigNumberish[]],
    [bigint],
    "nonpayable"
  >;

  assetRatioAtLastDhw: TypedContractMethod<
    [strategy: AddressLike],
    [bigint[]],
    "view"
  >;

  claimWithdrawals: TypedContractMethod<
    [
      strategies_: AddressLike[],
      dhwIndexes: BigNumberish,
      strategyShares: BigNumberish[]
    ],
    [bigint[]],
    "nonpayable"
  >;

  currentIndex: TypedContractMethod<
    [strategies: AddressLike[]],
    [bigint[]],
    "view"
  >;

  depositedAssets: TypedContractMethod<
    [strategy: AddressLike, index: BigNumberish],
    [bigint[]],
    "view"
  >;

  dhwTimestamps: TypedContractMethod<
    [strategies: AddressLike[], dhwIndexes: BigNumberish],
    [bigint[]],
    "view"
  >;

  doHardWork: TypedContractMethod<
    [dhwParams: DoHardWorkParameterBagStruct],
    [void],
    "nonpayable"
  >;

  emergencyWithdraw: TypedContractMethod<
    [
      strategies: AddressLike[],
      withdrawalSlippages: BigNumberish[][],
      removeStrategies: boolean
    ],
    [void],
    "nonpayable"
  >;

  emergencyWithdrawalWallet: TypedContractMethod<[], [string], "view">;

  getDhwYield: TypedContractMethod<
    [strategies: AddressLike[], dhwIndexes: BigNumberish],
    [bigint[]],
    "view"
  >;

  initialize: TypedContractMethod<
    [
      ecosystemFeePct_: BigNumberish,
      treasuryFeePct_: BigNumberish,
      ecosystemFeeReceiver_: AddressLike,
      treasuryFeeReceiver_: AddressLike,
      emergencyWithdrawalWallet_: AddressLike
    ],
    [void],
    "nonpayable"
  >;

  platformFees: TypedContractMethod<[], [PlatformFeesStructOutput], "view">;

  redeemFast: TypedContractMethod<
    [redeemFastParams: RedeemFastParameterBagStruct],
    [bigint[]],
    "nonpayable"
  >;

  redeemStrategyShares: TypedContractMethod<
    [
      strategies: AddressLike[],
      shares: BigNumberish[],
      withdrawalSlippages: BigNumberish[][]
    ],
    [void],
    "nonpayable"
  >;

  redeemStrategySharesView: TypedContractMethod<
    [
      strategies: AddressLike[],
      shares: BigNumberish[],
      withdrawalSlippages: BigNumberish[][],
      redeemer: AddressLike
    ],
    [void],
    "nonpayable"
  >;

  registerStrategy: TypedContractMethod<
    [strategy: AddressLike, apy: BigNumberish],
    [void],
    "nonpayable"
  >;

  removeStrategy: TypedContractMethod<
    [strategy: AddressLike],
    [void],
    "nonpayable"
  >;

  setEcosystemFee: TypedContractMethod<
    [ecosystemFeePct_: BigNumberish],
    [void],
    "nonpayable"
  >;

  setEcosystemFeeReceiver: TypedContractMethod<
    [ecosystemFeePct_: AddressLike],
    [void],
    "nonpayable"
  >;

  setEmergencyWithdrawalWallet: TypedContractMethod<
    [emergencyWithdrawalWallet_: AddressLike],
    [void],
    "nonpayable"
  >;

  setStrategyApy: TypedContractMethod<
    [strategy: AddressLike, apy: BigNumberish],
    [void],
    "nonpayable"
  >;

  setTreasuryFee: TypedContractMethod<
    [treasuryFeePct_: BigNumberish],
    [void],
    "nonpayable"
  >;

  setTreasuryFeeReceiver: TypedContractMethod<
    [treasuryFeeReceiver_: AddressLike],
    [void],
    "nonpayable"
  >;

  sharesRedeemed: TypedContractMethod<
    [strategy: AddressLike, index: BigNumberish],
    [bigint],
    "view"
  >;

  strategyAPYs: TypedContractMethod<
    [strategies: AddressLike[]],
    [bigint[]],
    "view"
  >;

  strategyAtIndexBatch: TypedContractMethod<
    [
      strategies: AddressLike[],
      dhwIndexes: BigNumberish,
      assetGroupLength: BigNumberish
    ],
    [StrategyAtIndexStructOutput[]],
    "view"
  >;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "addDeposits"
  ): TypedContractMethod<
    [strategies_: AddressLike[], amounts: BigNumberish[][]],
    [bigint],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "addWithdrawals"
  ): TypedContractMethod<
    [strategies_: AddressLike[], strategyShares: BigNumberish[]],
    [bigint],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "assetRatioAtLastDhw"
  ): TypedContractMethod<[strategy: AddressLike], [bigint[]], "view">;
  getFunction(
    nameOrSignature: "claimWithdrawals"
  ): TypedContractMethod<
    [
      strategies_: AddressLike[],
      dhwIndexes: BigNumberish,
      strategyShares: BigNumberish[]
    ],
    [bigint[]],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "currentIndex"
  ): TypedContractMethod<[strategies: AddressLike[]], [bigint[]], "view">;
  getFunction(
    nameOrSignature: "depositedAssets"
  ): TypedContractMethod<
    [strategy: AddressLike, index: BigNumberish],
    [bigint[]],
    "view"
  >;
  getFunction(
    nameOrSignature: "dhwTimestamps"
  ): TypedContractMethod<
    [strategies: AddressLike[], dhwIndexes: BigNumberish],
    [bigint[]],
    "view"
  >;
  getFunction(
    nameOrSignature: "doHardWork"
  ): TypedContractMethod<
    [dhwParams: DoHardWorkParameterBagStruct],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "emergencyWithdraw"
  ): TypedContractMethod<
    [
      strategies: AddressLike[],
      withdrawalSlippages: BigNumberish[][],
      removeStrategies: boolean
    ],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "emergencyWithdrawalWallet"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "getDhwYield"
  ): TypedContractMethod<
    [strategies: AddressLike[], dhwIndexes: BigNumberish],
    [bigint[]],
    "view"
  >;
  getFunction(
    nameOrSignature: "initialize"
  ): TypedContractMethod<
    [
      ecosystemFeePct_: BigNumberish,
      treasuryFeePct_: BigNumberish,
      ecosystemFeeReceiver_: AddressLike,
      treasuryFeeReceiver_: AddressLike,
      emergencyWithdrawalWallet_: AddressLike
    ],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "platformFees"
  ): TypedContractMethod<[], [PlatformFeesStructOutput], "view">;
  getFunction(
    nameOrSignature: "redeemFast"
  ): TypedContractMethod<
    [redeemFastParams: RedeemFastParameterBagStruct],
    [bigint[]],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "redeemStrategyShares"
  ): TypedContractMethod<
    [
      strategies: AddressLike[],
      shares: BigNumberish[],
      withdrawalSlippages: BigNumberish[][]
    ],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "redeemStrategySharesView"
  ): TypedContractMethod<
    [
      strategies: AddressLike[],
      shares: BigNumberish[],
      withdrawalSlippages: BigNumberish[][],
      redeemer: AddressLike
    ],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "registerStrategy"
  ): TypedContractMethod<
    [strategy: AddressLike, apy: BigNumberish],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "removeStrategy"
  ): TypedContractMethod<[strategy: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "setEcosystemFee"
  ): TypedContractMethod<
    [ecosystemFeePct_: BigNumberish],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "setEcosystemFeeReceiver"
  ): TypedContractMethod<[ecosystemFeePct_: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "setEmergencyWithdrawalWallet"
  ): TypedContractMethod<
    [emergencyWithdrawalWallet_: AddressLike],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "setStrategyApy"
  ): TypedContractMethod<
    [strategy: AddressLike, apy: BigNumberish],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "setTreasuryFee"
  ): TypedContractMethod<[treasuryFeePct_: BigNumberish], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "setTreasuryFeeReceiver"
  ): TypedContractMethod<
    [treasuryFeeReceiver_: AddressLike],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "sharesRedeemed"
  ): TypedContractMethod<
    [strategy: AddressLike, index: BigNumberish],
    [bigint],
    "view"
  >;
  getFunction(
    nameOrSignature: "strategyAPYs"
  ): TypedContractMethod<[strategies: AddressLike[]], [bigint[]], "view">;
  getFunction(
    nameOrSignature: "strategyAtIndexBatch"
  ): TypedContractMethod<
    [
      strategies: AddressLike[],
      dhwIndexes: BigNumberish,
      assetGroupLength: BigNumberish
    ],
    [StrategyAtIndexStructOutput[]],
    "view"
  >;

  getEvent(
    key: "EcosystemFeeReceiverSet"
  ): TypedContractEvent<
    EcosystemFeeReceiverSetEvent.InputTuple,
    EcosystemFeeReceiverSetEvent.OutputTuple,
    EcosystemFeeReceiverSetEvent.OutputObject
  >;
  getEvent(
    key: "EcosystemFeeSet"
  ): TypedContractEvent<
    EcosystemFeeSetEvent.InputTuple,
    EcosystemFeeSetEvent.OutputTuple,
    EcosystemFeeSetEvent.OutputObject
  >;
  getEvent(
    key: "EmergencyWithdrawalWalletSet"
  ): TypedContractEvent<
    EmergencyWithdrawalWalletSetEvent.InputTuple,
    EmergencyWithdrawalWalletSetEvent.OutputTuple,
    EmergencyWithdrawalWalletSetEvent.OutputObject
  >;
  getEvent(
    key: "Initialized"
  ): TypedContractEvent<
    InitializedEvent.InputTuple,
    InitializedEvent.OutputTuple,
    InitializedEvent.OutputObject
  >;
  getEvent(
    key: "StrategyApyUpdated"
  ): TypedContractEvent<
    StrategyApyUpdatedEvent.InputTuple,
    StrategyApyUpdatedEvent.OutputTuple,
    StrategyApyUpdatedEvent.OutputObject
  >;
  getEvent(
    key: "StrategyDhw"
  ): TypedContractEvent<
    StrategyDhwEvent.InputTuple,
    StrategyDhwEvent.OutputTuple,
    StrategyDhwEvent.OutputObject
  >;
  getEvent(
    key: "StrategyEmergencyWithdrawn"
  ): TypedContractEvent<
    StrategyEmergencyWithdrawnEvent.InputTuple,
    StrategyEmergencyWithdrawnEvent.OutputTuple,
    StrategyEmergencyWithdrawnEvent.OutputObject
  >;
  getEvent(
    key: "StrategyRegistered"
  ): TypedContractEvent<
    StrategyRegisteredEvent.InputTuple,
    StrategyRegisteredEvent.OutputTuple,
    StrategyRegisteredEvent.OutputObject
  >;
  getEvent(
    key: "StrategyRemoved"
  ): TypedContractEvent<
    StrategyRemovedEvent.InputTuple,
    StrategyRemovedEvent.OutputTuple,
    StrategyRemovedEvent.OutputObject
  >;
  getEvent(
    key: "StrategySharesFastRedeemed"
  ): TypedContractEvent<
    StrategySharesFastRedeemedEvent.InputTuple,
    StrategySharesFastRedeemedEvent.OutputTuple,
    StrategySharesFastRedeemedEvent.OutputObject
  >;
  getEvent(
    key: "StrategySharesRedeemed"
  ): TypedContractEvent<
    StrategySharesRedeemedEvent.InputTuple,
    StrategySharesRedeemedEvent.OutputTuple,
    StrategySharesRedeemedEvent.OutputObject
  >;
  getEvent(
    key: "TreasuryFeeReceiverSet"
  ): TypedContractEvent<
    TreasuryFeeReceiverSetEvent.InputTuple,
    TreasuryFeeReceiverSetEvent.OutputTuple,
    TreasuryFeeReceiverSetEvent.OutputObject
  >;
  getEvent(
    key: "TreasuryFeeSet"
  ): TypedContractEvent<
    TreasuryFeeSetEvent.InputTuple,
    TreasuryFeeSetEvent.OutputTuple,
    TreasuryFeeSetEvent.OutputObject
  >;

  filters: {
    "EcosystemFeeReceiverSet(address)": TypedContractEvent<
      EcosystemFeeReceiverSetEvent.InputTuple,
      EcosystemFeeReceiverSetEvent.OutputTuple,
      EcosystemFeeReceiverSetEvent.OutputObject
    >;
    EcosystemFeeReceiverSet: TypedContractEvent<
      EcosystemFeeReceiverSetEvent.InputTuple,
      EcosystemFeeReceiverSetEvent.OutputTuple,
      EcosystemFeeReceiverSetEvent.OutputObject
    >;

    "EcosystemFeeSet(uint256)": TypedContractEvent<
      EcosystemFeeSetEvent.InputTuple,
      EcosystemFeeSetEvent.OutputTuple,
      EcosystemFeeSetEvent.OutputObject
    >;
    EcosystemFeeSet: TypedContractEvent<
      EcosystemFeeSetEvent.InputTuple,
      EcosystemFeeSetEvent.OutputTuple,
      EcosystemFeeSetEvent.OutputObject
    >;

    "EmergencyWithdrawalWalletSet(address)": TypedContractEvent<
      EmergencyWithdrawalWalletSetEvent.InputTuple,
      EmergencyWithdrawalWalletSetEvent.OutputTuple,
      EmergencyWithdrawalWalletSetEvent.OutputObject
    >;
    EmergencyWithdrawalWalletSet: TypedContractEvent<
      EmergencyWithdrawalWalletSetEvent.InputTuple,
      EmergencyWithdrawalWalletSetEvent.OutputTuple,
      EmergencyWithdrawalWalletSetEvent.OutputObject
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

    "StrategyApyUpdated(address,int256)": TypedContractEvent<
      StrategyApyUpdatedEvent.InputTuple,
      StrategyApyUpdatedEvent.OutputTuple,
      StrategyApyUpdatedEvent.OutputObject
    >;
    StrategyApyUpdated: TypedContractEvent<
      StrategyApyUpdatedEvent.InputTuple,
      StrategyApyUpdatedEvent.OutputTuple,
      StrategyApyUpdatedEvent.OutputObject
    >;

    "StrategyDhw(address,uint256,tuple)": TypedContractEvent<
      StrategyDhwEvent.InputTuple,
      StrategyDhwEvent.OutputTuple,
      StrategyDhwEvent.OutputObject
    >;
    StrategyDhw: TypedContractEvent<
      StrategyDhwEvent.InputTuple,
      StrategyDhwEvent.OutputTuple,
      StrategyDhwEvent.OutputObject
    >;

    "StrategyEmergencyWithdrawn(address)": TypedContractEvent<
      StrategyEmergencyWithdrawnEvent.InputTuple,
      StrategyEmergencyWithdrawnEvent.OutputTuple,
      StrategyEmergencyWithdrawnEvent.OutputObject
    >;
    StrategyEmergencyWithdrawn: TypedContractEvent<
      StrategyEmergencyWithdrawnEvent.InputTuple,
      StrategyEmergencyWithdrawnEvent.OutputTuple,
      StrategyEmergencyWithdrawnEvent.OutputObject
    >;

    "StrategyRegistered(address)": TypedContractEvent<
      StrategyRegisteredEvent.InputTuple,
      StrategyRegisteredEvent.OutputTuple,
      StrategyRegisteredEvent.OutputObject
    >;
    StrategyRegistered: TypedContractEvent<
      StrategyRegisteredEvent.InputTuple,
      StrategyRegisteredEvent.OutputTuple,
      StrategyRegisteredEvent.OutputObject
    >;

    "StrategyRemoved(address)": TypedContractEvent<
      StrategyRemovedEvent.InputTuple,
      StrategyRemovedEvent.OutputTuple,
      StrategyRemovedEvent.OutputObject
    >;
    StrategyRemoved: TypedContractEvent<
      StrategyRemovedEvent.InputTuple,
      StrategyRemovedEvent.OutputTuple,
      StrategyRemovedEvent.OutputObject
    >;

    "StrategySharesFastRedeemed(address,uint256,uint256[])": TypedContractEvent<
      StrategySharesFastRedeemedEvent.InputTuple,
      StrategySharesFastRedeemedEvent.OutputTuple,
      StrategySharesFastRedeemedEvent.OutputObject
    >;
    StrategySharesFastRedeemed: TypedContractEvent<
      StrategySharesFastRedeemedEvent.InputTuple,
      StrategySharesFastRedeemedEvent.OutputTuple,
      StrategySharesFastRedeemedEvent.OutputObject
    >;

    "StrategySharesRedeemed(address,address,address,uint256,uint256[])": TypedContractEvent<
      StrategySharesRedeemedEvent.InputTuple,
      StrategySharesRedeemedEvent.OutputTuple,
      StrategySharesRedeemedEvent.OutputObject
    >;
    StrategySharesRedeemed: TypedContractEvent<
      StrategySharesRedeemedEvent.InputTuple,
      StrategySharesRedeemedEvent.OutputTuple,
      StrategySharesRedeemedEvent.OutputObject
    >;

    "TreasuryFeeReceiverSet(address)": TypedContractEvent<
      TreasuryFeeReceiverSetEvent.InputTuple,
      TreasuryFeeReceiverSetEvent.OutputTuple,
      TreasuryFeeReceiverSetEvent.OutputObject
    >;
    TreasuryFeeReceiverSet: TypedContractEvent<
      TreasuryFeeReceiverSetEvent.InputTuple,
      TreasuryFeeReceiverSetEvent.OutputTuple,
      TreasuryFeeReceiverSetEvent.OutputObject
    >;

    "TreasuryFeeSet(uint256)": TypedContractEvent<
      TreasuryFeeSetEvent.InputTuple,
      TreasuryFeeSetEvent.OutputTuple,
      TreasuryFeeSetEvent.OutputObject
    >;
    TreasuryFeeSet: TypedContractEvent<
      TreasuryFeeSetEvent.InputTuple,
      TreasuryFeeSetEvent.OutputTuple,
      TreasuryFeeSetEvent.OutputObject
    >;
  };
}
