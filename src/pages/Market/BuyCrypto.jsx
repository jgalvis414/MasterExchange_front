import React from "react";
import { useState, useEffect } from "react";
import LineChart from "./LineChart";
import InputBuy from "./InputBuy";
import './BuyCrypto.css';
import Footer from "../../utils/Footer/Footer";

const BuyCryto = () => {
  const [crypto, setCrypto] = useState(null);

  return (
    <>
      <div className="bodyMarket">
        <select className="select-group"
          onChange={(e) => {
            setCrypto(e.target.value);
          }}
        >
          <option>BTC</option>
          <option>XLM</option>
          <option>XRP</option>
          <option>XLM</option>
          <option>BNB</option>
          <option>DASH</option>
          <option>LTC</option>
        </select>
        <div className="containerBuy">
          <div className="chartContainer">
            <LineChart crypto={crypto} />
          </div>

          <div className="flex2">
            
          </div>

          <div className="inputContainer">
            <InputBuy crypto={crypto} />
          </div>
        </div>
      </div>
      <Footer/>
      
    </>
  );
};

export default BuyCryto;
