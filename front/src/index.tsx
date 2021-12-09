import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Web3Provider from './providers/Web3Provider';
import reportWebVitals from './reportWebVitals';
import ProxyProvider from './providers/ProxyProvider';

ReactDOM.render(
  <React.StrictMode>
    <Web3Provider>
      <ProxyProvider>
        <App />
      </ProxyProvider>
    </Web3Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
