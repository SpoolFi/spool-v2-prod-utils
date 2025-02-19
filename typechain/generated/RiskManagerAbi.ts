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

export interface RiskManagerAbiInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "calculateAllocation"
      | "getAllocationProvider"
      | "getRiskProvider"
      | "getRiskScores"
      | "getRiskTolerance"
      | "setAllocationProvider"
      | "setRiskProvider"
      | "setRiskScores"
      | "setRiskTolerance"
  ): FunctionFragment;

  getEvent(
    nameOrSignatureOrTopic:
      | "AllocationProviderSet"
      | "RiskProviderSet"
      | "RiskScoresUpdated"
      | "RiskToleranceSet"
  ): EventFragment;

  encodeFunctionData(
    functionFragment: "calculateAllocation",
    values: [AddressLike, AddressLike[]]
  ): string;
  encodeFunctionData(
    functionFragment: "getAllocationProvider",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "getRiskProvider",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "getRiskScores",
    values: [AddressLike, AddressLike[]]
  ): string;
  encodeFunctionData(
    functionFragment: "getRiskTolerance",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "setAllocationProvider",
    values: [AddressLike, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "setRiskProvider",
    values: [AddressLike, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "setRiskScores",
    values: [BigNumberish[], AddressLike[]]
  ): string;
  encodeFunctionData(
    functionFragment: "setRiskTolerance",
    values: [AddressLike, BigNumberish]
  ): string;

  decodeFunctionResult(
    functionFragment: "calculateAllocation",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getAllocationProvider",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getRiskProvider",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getRiskScores",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getRiskTolerance",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setAllocationProvider",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setRiskProvider",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setRiskScores",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setRiskTolerance",
    data: BytesLike
  ): Result;
}

export namespace AllocationProviderSetEvent {
  export type InputTuple = [
    smartVault: AddressLike,
    allocationProvider: AddressLike
  ];
  export type OutputTuple = [smartVault: string, allocationProvider: string];
  export interface OutputObject {
    smartVault: string;
    allocationProvider: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace RiskProviderSetEvent {
  export type InputTuple = [smartVault: AddressLike, riskProvider: AddressLike];
  export type OutputTuple = [smartVault: string, riskProvider: string];
  export interface OutputObject {
    smartVault: string;
    riskProvider: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace RiskScoresUpdatedEvent {
  export type InputTuple = [
    riskProvider: AddressLike,
    strategies: AddressLike[],
    riskScores: BigNumberish[]
  ];
  export type OutputTuple = [
    riskProvider: string,
    strategies: string[],
    riskScores: bigint[]
  ];
  export interface OutputObject {
    riskProvider: string;
    strategies: string[];
    riskScores: bigint[];
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace RiskToleranceSetEvent {
  export type InputTuple = [
    smartVault: AddressLike,
    riskTolerance: BigNumberish
  ];
  export type OutputTuple = [smartVault: string, riskTolerance: bigint];
  export interface OutputObject {
    smartVault: string;
    riskTolerance: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export interface RiskManagerAbi extends BaseContract {
  connect(runner?: ContractRunner | null): RiskManagerAbi;
  waitForDeployment(): Promise<this>;

  interface: RiskManagerAbiInterface;

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

  calculateAllocation: TypedContractMethod<
    [smartVault: AddressLike, strategies: AddressLike[]],
    [bigint],
    "view"
  >;

  getAllocationProvider: TypedContractMethod<
    [smartVault: AddressLike],
    [string],
    "view"
  >;

  getRiskProvider: TypedContractMethod<
    [smartVault: AddressLike],
    [string],
    "view"
  >;

  getRiskScores: TypedContractMethod<
    [riskProvider: AddressLike, strategies: AddressLike[]],
    [bigint[]],
    "view"
  >;

  getRiskTolerance: TypedContractMethod<
    [smartVault: AddressLike],
    [bigint],
    "view"
  >;

  setAllocationProvider: TypedContractMethod<
    [smartVault: AddressLike, allocationProvider: AddressLike],
    [void],
    "nonpayable"
  >;

  setRiskProvider: TypedContractMethod<
    [smartVault: AddressLike, riskProvider: AddressLike],
    [void],
    "nonpayable"
  >;

  setRiskScores: TypedContractMethod<
    [riskScores: BigNumberish[], strategies: AddressLike[]],
    [void],
    "nonpayable"
  >;

  setRiskTolerance: TypedContractMethod<
    [smartVault: AddressLike, riskTolerance: BigNumberish],
    [void],
    "nonpayable"
  >;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "calculateAllocation"
  ): TypedContractMethod<
    [smartVault: AddressLike, strategies: AddressLike[]],
    [bigint],
    "view"
  >;
  getFunction(
    nameOrSignature: "getAllocationProvider"
  ): TypedContractMethod<[smartVault: AddressLike], [string], "view">;
  getFunction(
    nameOrSignature: "getRiskProvider"
  ): TypedContractMethod<[smartVault: AddressLike], [string], "view">;
  getFunction(
    nameOrSignature: "getRiskScores"
  ): TypedContractMethod<
    [riskProvider: AddressLike, strategies: AddressLike[]],
    [bigint[]],
    "view"
  >;
  getFunction(
    nameOrSignature: "getRiskTolerance"
  ): TypedContractMethod<[smartVault: AddressLike], [bigint], "view">;
  getFunction(
    nameOrSignature: "setAllocationProvider"
  ): TypedContractMethod<
    [smartVault: AddressLike, allocationProvider: AddressLike],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "setRiskProvider"
  ): TypedContractMethod<
    [smartVault: AddressLike, riskProvider: AddressLike],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "setRiskScores"
  ): TypedContractMethod<
    [riskScores: BigNumberish[], strategies: AddressLike[]],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "setRiskTolerance"
  ): TypedContractMethod<
    [smartVault: AddressLike, riskTolerance: BigNumberish],
    [void],
    "nonpayable"
  >;

  getEvent(
    key: "AllocationProviderSet"
  ): TypedContractEvent<
    AllocationProviderSetEvent.InputTuple,
    AllocationProviderSetEvent.OutputTuple,
    AllocationProviderSetEvent.OutputObject
  >;
  getEvent(
    key: "RiskProviderSet"
  ): TypedContractEvent<
    RiskProviderSetEvent.InputTuple,
    RiskProviderSetEvent.OutputTuple,
    RiskProviderSetEvent.OutputObject
  >;
  getEvent(
    key: "RiskScoresUpdated"
  ): TypedContractEvent<
    RiskScoresUpdatedEvent.InputTuple,
    RiskScoresUpdatedEvent.OutputTuple,
    RiskScoresUpdatedEvent.OutputObject
  >;
  getEvent(
    key: "RiskToleranceSet"
  ): TypedContractEvent<
    RiskToleranceSetEvent.InputTuple,
    RiskToleranceSetEvent.OutputTuple,
    RiskToleranceSetEvent.OutputObject
  >;

  filters: {
    "AllocationProviderSet(address,address)": TypedContractEvent<
      AllocationProviderSetEvent.InputTuple,
      AllocationProviderSetEvent.OutputTuple,
      AllocationProviderSetEvent.OutputObject
    >;
    AllocationProviderSet: TypedContractEvent<
      AllocationProviderSetEvent.InputTuple,
      AllocationProviderSetEvent.OutputTuple,
      AllocationProviderSetEvent.OutputObject
    >;

    "RiskProviderSet(address,address)": TypedContractEvent<
      RiskProviderSetEvent.InputTuple,
      RiskProviderSetEvent.OutputTuple,
      RiskProviderSetEvent.OutputObject
    >;
    RiskProviderSet: TypedContractEvent<
      RiskProviderSetEvent.InputTuple,
      RiskProviderSetEvent.OutputTuple,
      RiskProviderSetEvent.OutputObject
    >;

    "RiskScoresUpdated(address,address[],uint8[])": TypedContractEvent<
      RiskScoresUpdatedEvent.InputTuple,
      RiskScoresUpdatedEvent.OutputTuple,
      RiskScoresUpdatedEvent.OutputObject
    >;
    RiskScoresUpdated: TypedContractEvent<
      RiskScoresUpdatedEvent.InputTuple,
      RiskScoresUpdatedEvent.OutputTuple,
      RiskScoresUpdatedEvent.OutputObject
    >;

    "RiskToleranceSet(address,int8)": TypedContractEvent<
      RiskToleranceSetEvent.InputTuple,
      RiskToleranceSetEvent.OutputTuple,
      RiskToleranceSetEvent.OutputObject
    >;
    RiskToleranceSet: TypedContractEvent<
      RiskToleranceSetEvent.InputTuple,
      RiskToleranceSetEvent.OutputTuple,
      RiskToleranceSetEvent.OutputObject
    >;
  };
}
