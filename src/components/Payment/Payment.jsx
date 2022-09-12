import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

const Payment = () => {
  let [coin, setCoin] = useState("");

  return (
    <div>
    <form>
      <label>Cripto:</label>
      <select
        onChange={(e) => {
          setCoin(e.target.value);
        }}
      >
        <option value="BTC">BTC</option>
        <option value="XLM">XLM</option>
        <option>XRP</option>
        <option>XLM</option>
        <option>BNB</option>
        <option>DASH</option>
        <option>LTC</option>
      </select>
      <label>Email a transferir:</label>
      <input type="email"></input>

      <label>Monto a transferir:</label>
      <input type="number"></input>
      <button type="submit">Transferir</button>
    </form>
    </div>
  );
};

export default Payment;
