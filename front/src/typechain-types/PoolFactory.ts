/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";

export interface PoolFactoryInterface extends utils.Interface {
  functions: {
    "LOCK()": FunctionFragment;
    "LOCK8605463013()": FunctionFragment;
    "POOL_BYTECODE_HASH()": FunctionFragment;
    "ROOT()": FunctionFragment;
    "ROOT4146650865()": FunctionFragment;
    "calculatePoolAddress(address,address)": FunctionFragment;
    "createPool(address,address)": FunctionFragment;
    "g1()": FunctionFragment;
    "g2()": FunctionFragment;
    "getPool(address,address)": FunctionFragment;
    "getRoleAdmin(bytes4)": FunctionFragment;
    "grantRole(bytes4,address)": FunctionFragment;
    "grantRoles(bytes4[],address)": FunctionFragment;
    "hasRole(bytes4,address)": FunctionFragment;
    "lockRole(bytes4)": FunctionFragment;
    "nextBase()": FunctionFragment;
    "nextFYToken()": FunctionFragment;
    "renounceRole(bytes4,address)": FunctionFragment;
    "revokeRole(bytes4,address)": FunctionFragment;
    "revokeRoles(bytes4[],address)": FunctionFragment;
    "setParameter(bytes32,int128)": FunctionFragment;
    "setRoleAdmin(bytes4,bytes4)": FunctionFragment;
    "ts()": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "LOCK", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "LOCK8605463013",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "POOL_BYTECODE_HASH",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "ROOT", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "ROOT4146650865",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "calculatePoolAddress",
    values: [string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "createPool",
    values: [string, string]
  ): string;
  encodeFunctionData(functionFragment: "g1", values?: undefined): string;
  encodeFunctionData(functionFragment: "g2", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "getPool",
    values: [string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "getRoleAdmin",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "grantRole",
    values: [BytesLike, string]
  ): string;
  encodeFunctionData(
    functionFragment: "grantRoles",
    values: [BytesLike[], string]
  ): string;
  encodeFunctionData(
    functionFragment: "hasRole",
    values: [BytesLike, string]
  ): string;
  encodeFunctionData(functionFragment: "lockRole", values: [BytesLike]): string;
  encodeFunctionData(functionFragment: "nextBase", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "nextFYToken",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "renounceRole",
    values: [BytesLike, string]
  ): string;
  encodeFunctionData(
    functionFragment: "revokeRole",
    values: [BytesLike, string]
  ): string;
  encodeFunctionData(
    functionFragment: "revokeRoles",
    values: [BytesLike[], string]
  ): string;
  encodeFunctionData(
    functionFragment: "setParameter",
    values: [BytesLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setRoleAdmin",
    values: [BytesLike, BytesLike]
  ): string;
  encodeFunctionData(functionFragment: "ts", values?: undefined): string;

  decodeFunctionResult(functionFragment: "LOCK", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "LOCK8605463013",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "POOL_BYTECODE_HASH",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "ROOT", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "ROOT4146650865",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "calculatePoolAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "createPool", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "g1", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "g2", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "getPool", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getRoleAdmin",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "grantRole", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "grantRoles", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "hasRole", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "lockRole", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "nextBase", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "nextFYToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "renounceRole",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "revokeRole", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "revokeRoles",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setParameter",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setRoleAdmin",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "ts", data: BytesLike): Result;

  events: {
    "ParameterSet(bytes32,int128)": EventFragment;
    "PoolCreated(address,address,address)": EventFragment;
    "RoleAdminChanged(bytes4,bytes4)": EventFragment;
    "RoleGranted(bytes4,address,address)": EventFragment;
    "RoleRevoked(bytes4,address,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "ParameterSet"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "PoolCreated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "RoleAdminChanged"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "RoleGranted"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "RoleRevoked"): EventFragment;
}

export type ParameterSetEvent = TypedEvent<
  [string, BigNumber],
  { parameter: string; value: BigNumber }
>;

export type ParameterSetEventFilter = TypedEventFilter<ParameterSetEvent>;

export type PoolCreatedEvent = TypedEvent<
  [string, string, string],
  { base: string; fyToken: string; pool: string }
>;

export type PoolCreatedEventFilter = TypedEventFilter<PoolCreatedEvent>;

export type RoleAdminChangedEvent = TypedEvent<
  [string, string],
  { role: string; newAdminRole: string }
>;

export type RoleAdminChangedEventFilter =
  TypedEventFilter<RoleAdminChangedEvent>;

export type RoleGrantedEvent = TypedEvent<
  [string, string, string],
  { role: string; account: string; sender: string }
>;

export type RoleGrantedEventFilter = TypedEventFilter<RoleGrantedEvent>;

export type RoleRevokedEvent = TypedEvent<
  [string, string, string],
  { role: string; account: string; sender: string }
>;

export type RoleRevokedEventFilter = TypedEventFilter<RoleRevokedEvent>;

export interface PoolFactory extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: PoolFactoryInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    LOCK(overrides?: CallOverrides): Promise<[string]>;

    LOCK8605463013(overrides?: CallOverrides): Promise<[string]>;

    POOL_BYTECODE_HASH(overrides?: CallOverrides): Promise<[string]>;

    ROOT(overrides?: CallOverrides): Promise<[string]>;

    ROOT4146650865(overrides?: CallOverrides): Promise<[string]>;

    calculatePoolAddress(
      base: string,
      fyToken: string,
      overrides?: CallOverrides
    ): Promise<[string]>;

    createPool(
      base: string,
      fyToken: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    g1(overrides?: CallOverrides): Promise<[BigNumber]>;

    g2(overrides?: CallOverrides): Promise<[BigNumber]>;

    getPool(
      base: string,
      fyToken: string,
      overrides?: CallOverrides
    ): Promise<[string] & { pool: string }>;

    getRoleAdmin(role: BytesLike, overrides?: CallOverrides): Promise<[string]>;

    grantRole(
      role: BytesLike,
      account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    grantRoles(
      roles: BytesLike[],
      account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    hasRole(
      role: BytesLike,
      account: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    lockRole(
      role: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    nextBase(overrides?: CallOverrides): Promise<[string]>;

    nextFYToken(overrides?: CallOverrides): Promise<[string]>;

    renounceRole(
      role: BytesLike,
      account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    revokeRole(
      role: BytesLike,
      account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    revokeRoles(
      roles: BytesLike[],
      account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setParameter(
      parameter: BytesLike,
      value: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setRoleAdmin(
      role: BytesLike,
      adminRole: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    ts(overrides?: CallOverrides): Promise<[BigNumber]>;
  };

  LOCK(overrides?: CallOverrides): Promise<string>;

  LOCK8605463013(overrides?: CallOverrides): Promise<string>;

  POOL_BYTECODE_HASH(overrides?: CallOverrides): Promise<string>;

  ROOT(overrides?: CallOverrides): Promise<string>;

  ROOT4146650865(overrides?: CallOverrides): Promise<string>;

  calculatePoolAddress(
    base: string,
    fyToken: string,
    overrides?: CallOverrides
  ): Promise<string>;

  createPool(
    base: string,
    fyToken: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  g1(overrides?: CallOverrides): Promise<BigNumber>;

  g2(overrides?: CallOverrides): Promise<BigNumber>;

  getPool(
    base: string,
    fyToken: string,
    overrides?: CallOverrides
  ): Promise<string>;

  getRoleAdmin(role: BytesLike, overrides?: CallOverrides): Promise<string>;

  grantRole(
    role: BytesLike,
    account: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  grantRoles(
    roles: BytesLike[],
    account: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  hasRole(
    role: BytesLike,
    account: string,
    overrides?: CallOverrides
  ): Promise<boolean>;

  lockRole(
    role: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  nextBase(overrides?: CallOverrides): Promise<string>;

  nextFYToken(overrides?: CallOverrides): Promise<string>;

  renounceRole(
    role: BytesLike,
    account: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  revokeRole(
    role: BytesLike,
    account: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  revokeRoles(
    roles: BytesLike[],
    account: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setParameter(
    parameter: BytesLike,
    value: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setRoleAdmin(
    role: BytesLike,
    adminRole: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  ts(overrides?: CallOverrides): Promise<BigNumber>;

  callStatic: {
    LOCK(overrides?: CallOverrides): Promise<string>;

    LOCK8605463013(overrides?: CallOverrides): Promise<string>;

    POOL_BYTECODE_HASH(overrides?: CallOverrides): Promise<string>;

    ROOT(overrides?: CallOverrides): Promise<string>;

    ROOT4146650865(overrides?: CallOverrides): Promise<string>;

    calculatePoolAddress(
      base: string,
      fyToken: string,
      overrides?: CallOverrides
    ): Promise<string>;

    createPool(
      base: string,
      fyToken: string,
      overrides?: CallOverrides
    ): Promise<string>;

    g1(overrides?: CallOverrides): Promise<BigNumber>;

    g2(overrides?: CallOverrides): Promise<BigNumber>;

    getPool(
      base: string,
      fyToken: string,
      overrides?: CallOverrides
    ): Promise<string>;

    getRoleAdmin(role: BytesLike, overrides?: CallOverrides): Promise<string>;

    grantRole(
      role: BytesLike,
      account: string,
      overrides?: CallOverrides
    ): Promise<void>;

    grantRoles(
      roles: BytesLike[],
      account: string,
      overrides?: CallOverrides
    ): Promise<void>;

    hasRole(
      role: BytesLike,
      account: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    lockRole(role: BytesLike, overrides?: CallOverrides): Promise<void>;

    nextBase(overrides?: CallOverrides): Promise<string>;

    nextFYToken(overrides?: CallOverrides): Promise<string>;

    renounceRole(
      role: BytesLike,
      account: string,
      overrides?: CallOverrides
    ): Promise<void>;

    revokeRole(
      role: BytesLike,
      account: string,
      overrides?: CallOverrides
    ): Promise<void>;

    revokeRoles(
      roles: BytesLike[],
      account: string,
      overrides?: CallOverrides
    ): Promise<void>;

    setParameter(
      parameter: BytesLike,
      value: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    setRoleAdmin(
      role: BytesLike,
      adminRole: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    ts(overrides?: CallOverrides): Promise<BigNumber>;
  };

  filters: {
    "ParameterSet(bytes32,int128)"(
      parameter?: null,
      value?: null
    ): ParameterSetEventFilter;
    ParameterSet(parameter?: null, value?: null): ParameterSetEventFilter;

    "PoolCreated(address,address,address)"(
      base?: string | null,
      fyToken?: string | null,
      pool?: null
    ): PoolCreatedEventFilter;
    PoolCreated(
      base?: string | null,
      fyToken?: string | null,
      pool?: null
    ): PoolCreatedEventFilter;

    "RoleAdminChanged(bytes4,bytes4)"(
      role?: BytesLike | null,
      newAdminRole?: BytesLike | null
    ): RoleAdminChangedEventFilter;
    RoleAdminChanged(
      role?: BytesLike | null,
      newAdminRole?: BytesLike | null
    ): RoleAdminChangedEventFilter;

    "RoleGranted(bytes4,address,address)"(
      role?: BytesLike | null,
      account?: string | null,
      sender?: string | null
    ): RoleGrantedEventFilter;
    RoleGranted(
      role?: BytesLike | null,
      account?: string | null,
      sender?: string | null
    ): RoleGrantedEventFilter;

    "RoleRevoked(bytes4,address,address)"(
      role?: BytesLike | null,
      account?: string | null,
      sender?: string | null
    ): RoleRevokedEventFilter;
    RoleRevoked(
      role?: BytesLike | null,
      account?: string | null,
      sender?: string | null
    ): RoleRevokedEventFilter;
  };

  estimateGas: {
    LOCK(overrides?: CallOverrides): Promise<BigNumber>;

    LOCK8605463013(overrides?: CallOverrides): Promise<BigNumber>;

    POOL_BYTECODE_HASH(overrides?: CallOverrides): Promise<BigNumber>;

    ROOT(overrides?: CallOverrides): Promise<BigNumber>;

    ROOT4146650865(overrides?: CallOverrides): Promise<BigNumber>;

    calculatePoolAddress(
      base: string,
      fyToken: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    createPool(
      base: string,
      fyToken: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    g1(overrides?: CallOverrides): Promise<BigNumber>;

    g2(overrides?: CallOverrides): Promise<BigNumber>;

    getPool(
      base: string,
      fyToken: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getRoleAdmin(
      role: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    grantRole(
      role: BytesLike,
      account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    grantRoles(
      roles: BytesLike[],
      account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    hasRole(
      role: BytesLike,
      account: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    lockRole(
      role: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    nextBase(overrides?: CallOverrides): Promise<BigNumber>;

    nextFYToken(overrides?: CallOverrides): Promise<BigNumber>;

    renounceRole(
      role: BytesLike,
      account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    revokeRole(
      role: BytesLike,
      account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    revokeRoles(
      roles: BytesLike[],
      account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setParameter(
      parameter: BytesLike,
      value: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setRoleAdmin(
      role: BytesLike,
      adminRole: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    ts(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    LOCK(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    LOCK8605463013(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    POOL_BYTECODE_HASH(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    ROOT(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    ROOT4146650865(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    calculatePoolAddress(
      base: string,
      fyToken: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    createPool(
      base: string,
      fyToken: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    g1(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    g2(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getPool(
      base: string,
      fyToken: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getRoleAdmin(
      role: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    grantRole(
      role: BytesLike,
      account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    grantRoles(
      roles: BytesLike[],
      account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    hasRole(
      role: BytesLike,
      account: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    lockRole(
      role: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    nextBase(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    nextFYToken(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    renounceRole(
      role: BytesLike,
      account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    revokeRole(
      role: BytesLike,
      account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    revokeRoles(
      roles: BytesLike[],
      account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setParameter(
      parameter: BytesLike,
      value: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setRoleAdmin(
      role: BytesLike,
      adminRole: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    ts(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
