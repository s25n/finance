/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  BaseContract,
  BigNumber,
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

export interface IJoinFactoryInterface extends utils.Interface {
  functions: {
    "createJoin(address)": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "createJoin", values: [string]): string;

  decodeFunctionResult(functionFragment: "createJoin", data: BytesLike): Result;

  events: {
    "JoinCreated(address,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "JoinCreated"): EventFragment;
}

export type JoinCreatedEvent = TypedEvent<
  [string, string],
  { asset: string; pool: string }
>;

export type JoinCreatedEventFilter = TypedEventFilter<JoinCreatedEvent>;

export interface IJoinFactory extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: IJoinFactoryInterface;

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
    createJoin(
      asset: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  createJoin(
    asset: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    createJoin(asset: string, overrides?: CallOverrides): Promise<string>;
  };

  filters: {
    "JoinCreated(address,address)"(
      asset?: string | null,
      pool?: null
    ): JoinCreatedEventFilter;
    JoinCreated(asset?: string | null, pool?: null): JoinCreatedEventFilter;
  };

  estimateGas: {
    createJoin(
      asset: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    createJoin(
      asset: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}