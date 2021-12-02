import React, { useContext } from 'react';
import logo from './logo.svg';
import './App.css';
import { Web3Context } from './providers/Web3Provider';
import { VscGear } from 'react-icons/vsc';

function App() {
  const { connected, address, reset, connect } = useContext(Web3Context)

  return (
    <div className="App">
      <header className="App-header">
        <button
          style={{
            borderRadius: 25,
            transition: "transform 0.2s ease 0s, box- shadow 0.2s ease 0s",
            background: "rgb(248, 248, 248)",
            border: "1px solid rgb(248, 248, 248)",
            boxShadow: "rgb(233 233 233) 0px 0px 0px, rgb(255 255 255) 0px 0px 0px",
            cursor: "pointer",
            fontSize: 15,
            padding: "5px 10px",
            display: "flex",
            alignItems: "center",
          }}
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
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
