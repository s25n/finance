import { createContext, useState } from 'react';
import Web3Modal from "web3modal";
import WalletConnectProvider from "@walletconnect/web3-provider";
import Web3 from "web3";
import { ethers, providers } from 'ethers';

interface Web3State {
  fetching: boolean;
  address: string;
  web3: any;
  provider: providers.Web3Provider | null;
  connected: boolean;
  chainId: number;
  networkId: number;
  pendingRequest: boolean;
  result: any | null;
}

const web3Modal = new Web3Modal({
  network: "mainnet", // optional
  cacheProvider: true, // optional
  providerOptions: {
    walletconnect: {
      package: WalletConnectProvider,
      options: {
        infuraId: process.env.REACT_APP_INFURA_PROJECT_ID
      }
    }
  }
});

const INIT_STATE = {
  fetching: false,
  address: "",
  web3: null,
  provider: null,
  connected: false,
  chainId: 1,
  networkId: 1,
  pendingRequest: false,
  result: null
}

interface IWeb3Context extends Web3State {
  connect: () => Promise<void>,
  reset: () => Promise<void>
}

export const Web3Context = createContext<IWeb3Context>({} as IWeb3Context);

const Web3Provider: React.FC = (props) => {
  const [state, setState] = useState<Web3State>({
    ...INIT_STATE
  })

  const connect = async () => {
    const web3ModalConnection = await web3Modal.connect();
    const web3 = new Web3(web3ModalConnection);
    const accounts = await web3.eth.getAccounts();
    const address = accounts[0];
    const networkId = await web3.eth.net.getId();
    const chainId = await web3.eth.getChainId();
    const provider = new ethers.providers.Web3Provider(web3.givenProvider);

    setState({
      ...state,
      web3,
      provider,
      connected: true,
      address,
      chainId,
      networkId
    });

    subscribeProvider(provider)
  }

  const subscribeProvider = async (provider: any) => {
    if (!provider.on) {
      return;
    }
    provider.on("accountsChanged", async (accounts: string[]) => {
      setState({ ...state, address: accounts[0] });
    });
  };

  const reset = async () => {
    const { web3 } = state;
    if (web3 && web3.currentProvider && web3.currentProvider.close) {
      await web3.currentProvider.close();
    }
    await web3Modal.clearCachedProvider();
    setState({
      ...INIT_STATE
    })
  };

  return (
    <Web3Context.Provider value={{
      ...state,
      connect,
      reset,
    }}>
      {props.children}
    </Web3Context.Provider>
  );
}

export default Web3Provider;