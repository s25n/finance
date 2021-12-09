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

export interface WandInterface extends utils.Interface {
  functions: {
    "BURN()": FunctionFragment;
    "EXIT()": FunctionFragment;
    "JOIN()": FunctionFragment;
    "LOCK()": FunctionFragment;
    "LOCK8605463013()": FunctionFragment;
    "MINT()": FunctionFragment;
    "ROOT()": FunctionFragment;
    "ROOT4146650865()": FunctionFragment;
    "addAsset(bytes6,address)": FunctionFragment;
    "addSeries(bytes6,bytes6,uint32,bytes6[],string,string)": FunctionFragment;
    "cauldron()": FunctionFragment;
    "fyTokenFactory()": FunctionFragment;
    "getRoleAdmin(bytes4)": FunctionFragment;
    "grantRole(bytes4,address)": FunctionFragment;
    "grantRoles(bytes4[],address)": FunctionFragment;
    "hasRole(bytes4,address)": FunctionFragment;
    "joinFactory()": FunctionFragment;
    "ladle()": FunctionFragment;
    "lockRole(bytes4)": FunctionFragment;
    "makeBase(bytes6,address)": FunctionFragment;
    "makeIlk(bytes6,bytes6,address,uint32,uint96,uint24,uint8)": FunctionFragment;
    "point(bytes32,address)": FunctionFragment;
    "poolFactory()": FunctionFragment;
    "renounceRole(bytes4,address)": FunctionFragment;
    "revokeRole(bytes4,address)": FunctionFragment;
    "revokeRoles(bytes4[],address)": FunctionFragment;
    "setRoleAdmin(bytes4,bytes4)": FunctionFragment;
    "witch()": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "BURN", values?: undefined): string;
  encodeFunctionData(functionFragment: "EXIT", values?: undefined): string;
  encodeFunctionData(functionFragment: "JOIN", values?: undefined): string;
  encodeFunctionData(functionFragment: "LOCK", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "LOCK8605463013",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "MINT", values?: undefined): string;
  encodeFunctionData(functionFragment: "ROOT", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "ROOT4146650865",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "addAsset",
    values: [BytesLike, string]
  ): string;
  encodeFunctionData(
    functionFragment: "addSeries",
    values: [BytesLike, BytesLike, BigNumberish, BytesLike[], string, string]
  ): string;
  encodeFunctionData(functionFragment: "cauldron", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "fyTokenFactory",
    values?: undefined
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
  encodeFunctionData(
    functionFragment: "joinFactory",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "ladle", values?: undefined): string;
  encodeFunctionData(functionFragment: "lockRole", values: [BytesLike]): string;
  encodeFunctionData(
    functionFragment: "makeBase",
    values: [BytesLike, string]
  ): string;
  encodeFunctionData(
    functionFragment: "makeIlk",
    values: [
      BytesLike,
      BytesLike,
      string,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "point",
    values: [BytesLike, string]
  ): string;
  encodeFunctionData(
    functionFragment: "poolFactory",
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
    functionFragment: "setRoleAdmin",
    values: [BytesLike, BytesLike]
  ): string;
  encodeFunctionData(functionFragment: "witch", values?: undefined): string;

  decodeFunctionResult(functionFragment: "BURN", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "EXIT", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "JOIN", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "LOCK", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "LOCK8605463013",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "MINT", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "ROOT", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "ROOT4146650865",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "addAsset", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "addSeries", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "cauldron", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "fyTokenFactory",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getRoleAdmin",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "grantRole", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "grantRoles", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "hasRole", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "joinFactory",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "ladle", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "lockRole", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "makeBase", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "makeIlk", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "point", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "poolFactory",
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
    functionFragment: "setRoleAdmin",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "witch", data: BytesLike): Result;

  events: {
    "Point(bytes32,address)": EventFragment;
    "RoleAdminChanged(bytes4,bytes4)": EventFragment;
    "RoleGranted(bytes4,address,address)": EventFragment;
    "RoleRevoked(bytes4,address,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "Point"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "RoleAdminChanged"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "RoleGranted"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "RoleRevoked"): EventFragment;
}

export type PointEvent = TypedEvent<
  [string, string],
  { param: string; value: string }
>;

export type PointEventFilter = TypedEventFilter<PointEvent>;

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

export interface Wand extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: WandInterface;

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
    BURN(overrides?: CallOverrides): Promise<[string]>;

    EXIT(overrides?: CallOverrides): Promise<[string]>;

    JOIN(overrides?: CallOverrides): Promise<[string]>;

    LOCK(overrides?: CallOverrides): Promise<[string]>;

    LOCK8605463013(overrides?: CallOverrides): Promise<[string]>;

    MINT(overrides?: CallOverrides): Promise<[string]>;

    ROOT(overrides?: CallOverrides): Promise<[string]>;

    ROOT4146650865(overrides?: CallOverrides): Promise<[string]>;

    addAsset(
      assetId: BytesLike,
      asset: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    addSeries(
      seriesId: BytesLike,
      baseId: BytesLike,
      maturity: BigNumberish,
      ilkIds: BytesLike[],
      name: string,
      symbol: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    cauldron(overrides?: CallOverrides): Promise<[string]>;

    fyTokenFactory(overrides?: CallOverrides): Promise<[string]>;

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

    joinFactory(overrides?: CallOverrides): Promise<[string]>;

    ladle(overrides?: CallOverrides): Promise<[string]>;

    lockRole(
      role: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    makeBase(
      assetId: BytesLike,
      oracle: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    makeIlk(
      baseId: BytesLike,
      ilkId: BytesLike,
      oracle: string,
      ratio: BigNumberish,
      max: BigNumberish,
      min: BigNumberish,
      dec: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    point(
      param: BytesLike,
      value: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    poolFactory(overrides?: CallOverrides): Promise<[string]>;

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

    setRoleAdmin(
      role: BytesLike,
      adminRole: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    witch(overrides?: CallOverrides): Promise<[string]>;
  };

  BURN(overrides?: CallOverrides): Promise<string>;

  EXIT(overrides?: CallOverrides): Promise<string>;

  JOIN(overrides?: CallOverrides): Promise<string>;

  LOCK(overrides?: CallOverrides): Promise<string>;

  LOCK8605463013(overrides?: CallOverrides): Promise<string>;

  MINT(overrides?: CallOverrides): Promise<string>;

  ROOT(overrides?: CallOverrides): Promise<string>;

  ROOT4146650865(overrides?: CallOverrides): Promise<string>;

  addAsset(
    assetId: BytesLike,
    asset: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  addSeries(
    seriesId: BytesLike,
    baseId: BytesLike,
    maturity: BigNumberish,
    ilkIds: BytesLike[],
    name: string,
    symbol: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  cauldron(overrides?: CallOverrides): Promise<string>;

  fyTokenFactory(overrides?: CallOverrides): Promise<string>;

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

  joinFactory(overrides?: CallOverrides): Promise<string>;

  ladle(overrides?: CallOverrides): Promise<string>;

  lockRole(
    role: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  makeBase(
    assetId: BytesLike,
    oracle: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  makeIlk(
    baseId: BytesLike,
    ilkId: BytesLike,
    oracle: string,
    ratio: BigNumberish,
    max: BigNumberish,
    min: BigNumberish,
    dec: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  point(
    param: BytesLike,
    value: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  poolFactory(overrides?: CallOverrides): Promise<string>;

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

  setRoleAdmin(
    role: BytesLike,
    adminRole: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  witch(overrides?: CallOverrides): Promise<string>;

  callStatic: {
    BURN(overrides?: CallOverrides): Promise<string>;

    EXIT(overrides?: CallOverrides): Promise<string>;

    JOIN(overrides?: CallOverrides): Promise<string>;

    LOCK(overrides?: CallOverrides): Promise<string>;

    LOCK8605463013(overrides?: CallOverrides): Promise<string>;

    MINT(overrides?: CallOverrides): Promise<string>;

    ROOT(overrides?: CallOverrides): Promise<string>;

    ROOT4146650865(overrides?: CallOverrides): Promise<string>;

    addAsset(
      assetId: BytesLike,
      asset: string,
      overrides?: CallOverrides
    ): Promise<void>;

    addSeries(
      seriesId: BytesLike,
      baseId: BytesLike,
      maturity: BigNumberish,
      ilkIds: BytesLike[],
      name: string,
      symbol: string,
      overrides?: CallOverrides
    ): Promise<void>;

    cauldron(overrides?: CallOverrides): Promise<string>;

    fyTokenFactory(overrides?: CallOverrides): Promise<string>;

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

    joinFactory(overrides?: CallOverrides): Promise<string>;

    ladle(overrides?: CallOverrides): Promise<string>;

    lockRole(role: BytesLike, overrides?: CallOverrides): Promise<void>;

    makeBase(
      assetId: BytesLike,
      oracle: string,
      overrides?: CallOverrides
    ): Promise<void>;

    makeIlk(
      baseId: BytesLike,
      ilkId: BytesLike,
      oracle: string,
      ratio: BigNumberish,
      max: BigNumberish,
      min: BigNumberish,
      dec: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    point(
      param: BytesLike,
      value: string,
      overrides?: CallOverrides
    ): Promise<void>;

    poolFactory(overrides?: CallOverrides): Promise<string>;

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

    setRoleAdmin(
      role: BytesLike,
      adminRole: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    witch(overrides?: CallOverrides): Promise<string>;
  };

  filters: {
    "Point(bytes32,address)"(
      param?: BytesLike | null,
      value?: null
    ): PointEventFilter;
    Point(param?: BytesLike | null, value?: null): PointEventFilter;

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
    BURN(overrides?: CallOverrides): Promise<BigNumber>;

    EXIT(overrides?: CallOverrides): Promise<BigNumber>;

    JOIN(overrides?: CallOverrides): Promise<BigNumber>;

    LOCK(overrides?: CallOverrides): Promise<BigNumber>;

    LOCK8605463013(overrides?: CallOverrides): Promise<BigNumber>;

    MINT(overrides?: CallOverrides): Promise<BigNumber>;

    ROOT(overrides?: CallOverrides): Promise<BigNumber>;

    ROOT4146650865(overrides?: CallOverrides): Promise<BigNumber>;

    addAsset(
      assetId: BytesLike,
      asset: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    addSeries(
      seriesId: BytesLike,
      baseId: BytesLike,
      maturity: BigNumberish,
      ilkIds: BytesLike[],
      name: string,
      symbol: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    cauldron(overrides?: CallOverrides): Promise<BigNumber>;

    fyTokenFactory(overrides?: CallOverrides): Promise<BigNumber>;

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

    joinFactory(overrides?: CallOverrides): Promise<BigNumber>;

    ladle(overrides?: CallOverrides): Promise<BigNumber>;

    lockRole(
      role: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    makeBase(
      assetId: BytesLike,
      oracle: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    makeIlk(
      baseId: BytesLike,
      ilkId: BytesLike,
      oracle: string,
      ratio: BigNumberish,
      max: BigNumberish,
      min: BigNumberish,
      dec: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    point(
      param: BytesLike,
      value: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    poolFactory(overrides?: CallOverrides): Promise<BigNumber>;

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

    setRoleAdmin(
      role: BytesLike,
      adminRole: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    witch(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    BURN(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    EXIT(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    JOIN(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    LOCK(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    LOCK8605463013(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    MINT(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    ROOT(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    ROOT4146650865(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    addAsset(
      assetId: BytesLike,
      asset: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    addSeries(
      seriesId: BytesLike,
      baseId: BytesLike,
      maturity: BigNumberish,
      ilkIds: BytesLike[],
      name: string,
      symbol: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    cauldron(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    fyTokenFactory(overrides?: CallOverrides): Promise<PopulatedTransaction>;

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

    joinFactory(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    ladle(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    lockRole(
      role: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    makeBase(
      assetId: BytesLike,
      oracle: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    makeIlk(
      baseId: BytesLike,
      ilkId: BytesLike,
      oracle: string,
      ratio: BigNumberish,
      max: BigNumberish,
      min: BigNumberish,
      dec: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    point(
      param: BytesLike,
      value: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    poolFactory(overrides?: CallOverrides): Promise<PopulatedTransaction>;

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

    setRoleAdmin(
      role: BytesLike,
      adminRole: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    witch(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
