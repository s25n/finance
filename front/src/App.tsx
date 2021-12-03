import React, { useContext } from 'react';
import { Web3Context } from './providers/Web3Provider';
import './App.css';
import { VscGear } from 'react-icons/vsc';

function App() {
  const { connected, address, reset, connect } = useContext(Web3Context)

  return (
    <div className="App">
      <div
        className="Header"
      >
        <header>
          <div className="Left">
            <h1>s25n</h1>
          </div>
          <div className="Right">
            <button
              className="Connect"
              onClick={connected ? reset : connect}
            >
              <div>
                {
                  connected ? address && `${address.slice(0, 4)}...${address.slice(-4)}` : "Connect a wallet"
                }
              </div>
              {
                connected &&
                <>
                  <div style={{ width: 20 }}></div>
                  <VscGear />
                </>
              }
            </button>
          </div>
        </header>
      </div>
    </div>
  );
}

export default App;
