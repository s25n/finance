import React, { useEffect, useState, useContext } from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";
import Borrow from "./components/Borrow";
import Pool from "./components/Pool";
import Lend from "./components/Lend";
import Header from "./components/Header";
import { ModeType } from "./enum/modeType";
import SelectMode from "./components/SelectMode";
import { Web3Context } from "./providers/Web3Provider";
import { VscGear } from "react-icons/vsc";

function App() {
  const { connected, address, reset, connect } = useContext(Web3Context);

  return (
    <div className="App">
      <Router>
        <Header />
        <SelectMode />
        <div>
          <Routes>
            <Route path="/borrow" element={<Borrow />} />
            <Route path="/lend" element={<Lend />} />
            <Route path="/pool" element={<Pool />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
