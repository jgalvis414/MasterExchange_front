import React from "react";
import { useState, useEffect } from "react";
//instancias de endpoint
import { API, endpoint } from "../../instances/instances.js";
import {
  Button,
  Flex,
  Input,
  Text,
  Square,
  Link,
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  StatGroup,
} from "@chakra-ui/react";

const InputBuy = (props) => {
  let [data, setData] = useState("");
  let [amount, setAmount] = useState(0);

  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((seconds) => seconds + 1);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    {
      console.log(props.crypto);
    }
    (async () => {
      try {
        if (props.crypto != null) {
          let response = await API.get(endpoint.PRICE_COIN + `${props.crypto}`);
          response = Number(response.data);
          setData(response.toFixed(2));
        } else {
        }
      } catch (err) {
        console.log("error", err);
      }
    })();
  }, [props.crypto, seconds]);

  return (
    <>
      <StatGroup>
        <Stat>
          <StatLabel>
            {props.crypto}{" "}
            <img
              src={`../../../../node_modules/cryptocurrency-icons/svg/color/${props.crypto}.svg`}
              alt="exchange"
              border="0"
              width={30}
            />
          </StatLabel>
          <StatNumber>{data}$</StatNumber>
          <StatHelpText></StatHelpText>
        </Stat>
      </StatGroup>

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
