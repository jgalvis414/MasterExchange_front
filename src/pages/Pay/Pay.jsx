import React, { useState, useContext, useEffect } from "react";
import axios from "axios";
import { AuthContext } from "../../contexts/auth";
import {
  Button,
  Flex,
  Input,
  Text,
  Img,
  FormControl,
  FormLabel,
} from "@chakra-ui/react";
import Select from "react-select";



import swal from "sweetalert";
import DonaChartApex from "../DashBoard/DashBoardComponents/DonaApex";


const Pay = () => {
  const [coin, setCoin] = useState("none");
  const [amount, setAmount] = useState("");
  const [emailReciving, setEmailReciving] = useState("none");


  useEffect(() => {}, [coin]);
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    let response = await axios.post('http://localhost:8888/fn-paymentUsers',
    JSON.stringify({
      'user': user.email,
      emailReciving,
      coin,
      amount,
    }))

    if (response.data.status === 'success') {
      swal({
        title: "Dinero  enviado con exito",
        text: `Se enviaron ${response.data.amount} ${response.data.coin} a ${response.data.from} 
         fecha: ${response.data.date}
         txId: ${response.data.txId}`,
        icon: "success",
      })

    } else {
      swal({
        title: "Error",
        text: `${response.data.info}` ,
        icon: "error",
      })

    }

    
  };

  const handleChange = (e) => {
    setCoin(e.value);
  };

  const { user } = useContext(AuthContext);
  const recoveredUser = localStorage.getItem("user");

  const criptos = ["USDT", "DASH", "XLM", "BTC", "XRP", "LTC", "BNB", "ETH"];
  const options = criptos.map((item) => {
    return {
      value: item,
      label: (
        <div>
          <img
            src={`../../../../node_modules/cryptocurrency-icons/svg/color/${item}.svg`}
            height="30px"
            width="30px"
          />
          {item}{" "}
        </div>
      ),
    };
  });


  return (
    <>
      <Text fontSize="3xl" color="black" fontWeight="bold">
        Enviar dinero a otro usuario
      </Text>
      <Img
        src={`../../../../node_modules/cryptocurrency-icons/svg/color/${coin}.svg`}
        alt="exchange"
        border="0"
        width={20}
      />

      <Flex>
        <Text fontSize="4xl" color="white" fontWeight="bold">
          Recargas a tu wallet
        </Text>

        <form className="form" onSubmit={handleSubmit}>
          <div className="field" mt="25px" mb="25px">
          <Select
              options={options}
              onChange={handleChange}
              placeholder="Selecciona una cripto"
            />
            
          </div>
          <div className="field">
            <FormControl id="email">
              <FormLabel>Email </FormLabel>
              <Input type="email" onChange={(e) => setEmailReciving(e.target.value)} />

              <FormLabel>Monto </FormLabel>
              <Input type="number" onChange={(e) => setAmount(e.target.value)} />
            </FormControl>
          </div>
          <Button
                  id="submit"
                  type="submit"
                  bg={"purple.400"}
                  color={"white"}
                  _hover={{
                    bg: "purple.800",
                  }}
                >
                  Enviar
                </Button>

          
        </form>

 
        <div className="containerChart">
        <DonaChartApex user={user} />
      </div>

      </Flex>
    </>
  );
};
export default Pay;
