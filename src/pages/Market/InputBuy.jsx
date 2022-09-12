import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

const InputBuy = (props) => {
  let [data, setData] = useState("");
  let [amount, setAmount] = useState(0);

  useEffect(() => {
    {
      console.log(props.crypto);
    }
    (async () => {
      try {
        if (props.crypto != null) {
          let response = await axios.get(
            `http://localhost:8888/.netlify/functions/fn-tickerPrice?crypto=${props.crypto}`
          );
          response = Number(response.data);
          setData(response.toFixed(2));
        } else {
        }
      } catch (err) {
        console.log("error", err);
      }
    })();
  }, [props.crypto]);

  return (
    <>
      <form>
        <h2>
          {" "}
          {props.crypto != null ? `${props.crypto} Price Calculator` : " "}
        </h2>
        <input
          type="text"
          name="inputname"
          value={props.crypto != null ? ` 1 ${props.crypto} = ${data}$` : " "}
          disabled
        ></input>
        <input
          type="number"
          onChange={(event) => {
            setAmount(event.target.value);
          }}
        ></input>
        <p>Precio USDT: {(amount * data).toFixed(2)}</p>
        <button>Comprar</button>
      </form>
    </>
  );
};

export default InputBuy;
