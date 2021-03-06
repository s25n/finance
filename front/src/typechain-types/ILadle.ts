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
import { FunctionFragment, Result } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";

export type VaultStruct = {
  owner: string;
  seriesId: BytesLike;
  ilkId: BytesLike;
};

export type VaultStructOutput = [string, string, string] & {
  owner: string;
  seriesId: string;
  ilkId: string;
};

export interface ILadleInterface extends utils.Interface {
  functions: {
    "build(bytes6,bytes6,uint8)": FunctionFragment;
    "cauldron()": FunctionFragment;
    "close(bytes12,address,int128,int128)": FunctionFragment;
    "destroy(bytes12)": FunctionFragment;
    "joins(bytes6)": FunctionFragment;
    "pour(bytes12,address,int128,int128)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "build",
    values: [BytesLike, BytesLike, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "cauldron", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "close",
    values: [BytesLike, string, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "destroy", values: [BytesLike]): string;
  encodeFunctionData(functionFragment: "joins", values: [BytesLike]): string;
  encodeFunctionData(
    functionFragment: "pour",
    values: [BytesLike, string, BigNumberish, BigNumberish]
  ): string;

  decodeFunctionResult(functionFragment: "build", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "cauldron", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "close", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "destroy", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "joins", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "pour", data: BytesLike): Result;

  events: {};
}

export interface ILadle extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: ILadleInterface;

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
    build(
      seriesId: BytesLike,
      ilkId: BytesLike,
      salt: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    cauldron(overrides?: CallOverrides): Promise<[string]>;

    close(
      vaultId: BytesLike,
      to: string,
      ink: BigNumberish,
      art: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    destroy(
      vaultId: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    joins(arg0: BytesLike, overrides?: CallOverrides): Promise<[string]>;

    pour(
      vaultId: BytesLike,
      to: string,
      ink: BigNumberish,
      art: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  build(
    seriesId: BytesLike,
    ilkId: BytesLike,
    salt: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  cauldron(overrides?: CallOverrides): Promise<string>;

  close(
    vaultId: BytesLike,
    to: string,
    ink: BigNumberish,
    art: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  destroy(
    vaultId: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  joins(arg0: BytesLike, overrides?: CallOverrides): Promise<string>;

  pour(
    vaultId: BytesLike,
    to: string,
    ink: BigNumberish,
    art: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    build(
      seriesId: BytesLike,
      ilkId: BytesLike,
      salt: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [string, VaultStructOutput] & {
        vaultId: string;
        vault: VaultStructOutput;
      }
    >;

    cauldron(overrides?: CallOverrides): Promise<string>;

    close(
      vaultId: BytesLike,
      to: string,
      ink: BigNumberish,
      art: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    destroy(vaultId: BytesLike, overrides?: CallOverrides): Promise<void>;

    joins(arg0: BytesLike, overrides?: CallOverrides): Promise<string>;

    pour(
      vaultId: BytesLike,
      to: string,
      ink: BigNumberish,
      art: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {};

  estimateGas: {
    build(
      seriesId: BytesLike,
      ilkId: BytesLike,
      salt: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    cauldron(overrides?: CallOverrides): Promise<BigNumber>;

    close(
      vaultId: BytesLike,
      to: string,
      ink: BigNumberish,
      art: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    destroy(
      vaultId: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    joins(arg0: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;

    pour(
      vaultId: BytesLike,
      to: string,
      ink: BigNumberish,
      art: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    build(
      seriesId: BytesLike,
      ilkId: BytesLike,
      salt: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    cauldron(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    close(
      vaultId: BytesLike,
      to: string,
      ink: BigNumberish,
      art: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    destroy(
      vaultId: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    joins(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    pour(
      vaultId: BytesLike,
      to: string,
      ink: BigNumberish,
      art: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
