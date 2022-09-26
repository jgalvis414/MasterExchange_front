import React, { useState, useContext, useEffect } from "react";
import axios from "axios";
import { AuthContext } from "../../contexts/auth";
import {
  Button,
  Flex,
  Input,
  Text,
  Square,
  Img,
  SimpleGrid,
  Box,
  Heading,
  useDisclosure,
  Collapse
} from "@chakra-ui/react";
import Select from "react-select";

import swal from "sweetalert";
import { API, endpoint } from "../../instances/instances";

const Recharge = () => {
  const [coin, setCoin] = useState("none");

  const [hash, setHash] = useState("");

  const [amount, setAmount] = useState("");

  const [wallet, setWallet] = useState("");

  useEffect(() => {
    if (coin != "none") {
      (async () => {
        let response = await API.get(endpoint.GET_WALLET + coin);
        //let response = await axios.get(`http://localhost:8888/.netlify/functions/fn-getWalletNetwork?crypto=${coin}`);

        setWallet(response.data);
      })();
    }
  }, [coin]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    let res = await API.post(
      endpoint.VALIDATE_DEPOSIT,
      JSON.stringify({ amount, coin, email, hash })
    );

    console.log(res.data);

    if (res.data == true) {
      swal({
        title: "Dinero acreditado con exito",
        text: `Se acredito ${amount} ${coin}`,
        icon: "success",
      }).then(function () {
        window.location = "/dashboard";
      });
    } else {
      alert(res.data);
    }
  };
  const { isOpen, onToggle } = useDisclosure();

  const handleChange = (e) => {
    setCoin(e.value);
    onToggle();
  };

  const { user } = useContext(AuthContext);
  const recoveredUser = localStorage.getItem("user");
  let email = JSON.parse(recoveredUser).email;

  const criptos = [
    "USDT",
    "DASH",
    "XLM",
    "BTC",
    "XRP",
    "LTC",
    "BNB",
    "ETH",
    "DOGE",
    "ADA",
    "SOL",
  ];
  const options = criptos.map((item) => {
    return {
      value: item,
      label: (
        <div>
          <img
            src={`../../assets/cryptos/iconos/${item}.svg`}
            height="30px"
            width="30px"
          />
          {item}{" "}
        </div>
      ),
    };
  });

  const Steps = () => {
    return (
      <div>
        <Text>Instrucciones para recargar:</Text>
        <Text> Paso 1: Selecciona la moneda que deseas recargar</Text>
        <Text>
          Paso 2: Tranfiere a esta wallet: {wallet.address} utilizando el tag :{" "}
          {wallet.tag}
        </Text>
        <Text>
          Paso 3: Ingresa el Hash de la transaccion generado en la transaccion
          junto a la cantidad que depositaste
        </Text>
        <Text>Paso 4: Disfruta de Master Exchange</Text>
      </div>
    );
  };

  return (
    <>
      <br />
      <br />
      <Heading align="center">Recarga tu cuenta</Heading>
      <br />
      <br />
      <SimpleGrid
        columns={[1, null, 2]}
        spacing="40px"
        width="80%"
        margin="auto"
      >
        <Box border="solid" padding={2}>
          <form onSubmit={handleSubmit}>
            <div>
              <Select
                options={options}
                onChange={handleChange}
                placeholder="Selecciona una cripto"
              />
            </div>
            <div>
              <label>Hash de la transaccion</label>

              <Input
                type="text"
                name="hash"
                id="hash"
                value={hash}
                onChange={(e) => setHash(e.target.value)}
              />
              <br />
              <br />
            </div>

            <div>
              <Text fontSize="3x1">Monto</Text>
              <Input
                type="number"
                name="number"
                id="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
              />
            </div>
            <div>
              <Button type="submit">Recargar</Button>
            </div>
          </form>
        </Box>
        <Box>
          <Collapse in={isOpen} animateOpacity>
            <Box p="40px" color="black" mt="4" rounded="md" shadow="md">
              {coin != "none" ? Steps() : ""}
            </Box>
          </Collapse>
        </Box>
      </SimpleGrid>
      <br />
      <br />
    </>
  );
};
export default Recharge;
