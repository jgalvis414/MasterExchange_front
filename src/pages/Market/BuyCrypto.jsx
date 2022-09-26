import React from "react";
import { useState, useEffect } from "react";
import LineChart from "./LineChart";
import InputBuy from "./InputBuy";
//import './BuyCrypto.css'
import { Select } from "@chakra-ui/react";

const BuyCryto = () => {
  const [crypto, setCrypto] = useState('BTC');


  return (
    <>
      <div>
        <Select className="select-group"
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
        </Select>
        <div className="containerBuy">
        <div className="inputContainer">
            <InputBuy crypto={crypto} />
          </div>
          <div className="chartContainer">
            <LineChart crypto={crypto} />
          </div>
         
        </div>
      </div>
    </>
  );
};

export default BuyCryto;
