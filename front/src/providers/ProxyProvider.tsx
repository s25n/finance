import { ethers } from 'ethers';
import { createContext, useContext, useEffect, useState } from 'react';
import contracts from '../envs/contracts';
import { Web3Context } from './Web3Provider';
import proxyFactoryAbi from '../abi/DSProxyFactory.json';

interface ProxyState {
  isProxy: boolean
}

const INIT_STATE = {
  isProxy: false
}

interface IProxyContext extends ProxyState {
  build: () => void
}

export const ProxyContext = createContext<IProxyContext>({} as IProxyContext);

const proxyFactory = new ethers.Contract(
  contracts.proxyFactory,
  proxyFactoryAbi,
)

const ProxyProvider: React.FC = (props) => {
  const [state, setState] = useState<ProxyState>({
    ...INIT_STATE
  })
  const { connected, address, provider} = useContext(Web3Context);

  useEffect(() => {
    if(connected && address && provider){
      proxyFactory
        .connect(provider)
        .isProxy(address)
        .then((isProxy: boolean) => {
          setState((state) => {
            return {
              ...state,
              isProxy,
            }
          })
        })
    }
  }, [connected, address, provider])

  const build = () => {
    if (!provider) return;

    proxyFactory
      .connect(provider.getSigner(address))["build()"]()
      .then((tx: any) => {
        console.log(tx)
      })
  }

  return (
    <ProxyContext.Provider value={{
      ...state,
      build
    }}>
      {props.children}
    </ProxyContext.Provider>
  );
}

export default ProxyProvider;