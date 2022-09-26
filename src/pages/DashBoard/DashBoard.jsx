import React, { useContext } from "react";
import { AuthContext } from "../../contexts/auth";
import Chart from "react-apexcharts";
//css styles
import "./DashBoard.css";
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Divider,
  VStack,
  StackDivider,
  Avatar,
  AvatarBadge,
  Box,
  Heading,
  SimpleGrid,
  Square,
  Text,
  Flex,
  Center,
  Select,
  Button,
  Badge,
  Link,
  Spacer
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
//instancias de endpoint
import { API, endpoint } from "../../instances/instances.js";

import axios from "axios";

const DashBoard = () => {
  const { authenticated, logout, user } = useContext(AuthContext);

  let [history, setHistory] = useState([]);
  let [criptos, setCriptos] = useState([]);
  let [deposit, setDeposit] = useState([]);
  let [data, setData] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        let email = user.email;
        // let response = await API.get( endpoint.DATA_USER + `?user=${email}` );
        let response = await axios.get(
          `https://comforting-bunny-ac7ccc.netlify.app/fn-getDataUser?user=${email}`
        );
        setHistory(response.data[0].pay);
        setCriptos(response.data[0].wallet);
        setDeposit(response.data[0].deposit);
        setData(response.data[0])
      } catch (err) {
        console.log("error", err);
      }
    })();
  }, []);

  let seriesDona = criptos?.map((x) => x.free);
  let optionsDona = {
    labels: criptos?.map((x) => x.coin),
    responsive: [
      {
        options: {
          chart: {
       
          },
          legend: {
            
            
          },
        },
      },
    ],
  };

  const handleLogout = () => {
    logout();
  };

  return (
    <>
      <body className="cuerpoDash">
        <Box bg="#131a42" color="#38a169"  borderRadius={9} >
          <Flex color="#38458a" h="150px" w='80%' backgroundColor='#8888' margin='auto'>
            <Center w="180px" >
              <VStack
                divider={<StackDivider borderColor="gray.200" />}
                spacing={6}
                align="stretch"
              >
                <Box h="30px">
                  <Avatar>
                    <AvatarBadge boxSize="1.25em" bg="green.500" />
                  </Avatar>
                </Box>
                <Box h="10px">
                  <Text color="white">{user.email}</Text>
                </Box>
              </VStack>
            </Center>
            <Box flex="2" >
              <Flex color="white">
                <Center w="40px">
        
                </Center>
                <Square>
                  <Heading color="white" marginTop={2}>
                    Bienvenido {data.name}!
                  </Heading>
                </Square>
              </Flex>

              <Box flex="1" marginTop={8}>
                <Text color="white">Saldo disponible: </Text>
              </Box>
            </Box>
            <Square w="200px" >
            
            </Square>
          </Flex>
          <br/>
          <SimpleGrid columns={[1, null, 2]} spacing="30px" marginTop={5} w='80%' margin='auto'>
          
          <Box
              bg="white"
              color="gray.900"
              border="solid 2px #38a169"
              borderRadius={9}
              marginRight={4}
            >
              <Flex color="white">
                <Center w="33.3%">
                <Link href="/recharge">
                  <Button
                    w={130}
                    bg="#38a169"
                    _hover={{ background: "green.600" }}
                  >
                    Recargar
                  </Button>
                  </Link>
                </Center>
                <Square w="33.3%">
                <Link href="/pay">
                  <Button
                    w={130}
                    bg="#38a169"
                    _hover={{ background: "green.600" }}
                  >
                    Pagar
                  </Button>
                  </Link>
                </Square>
  
                <Box flex="1" w="33.3%">
                <Link href="/market">
                  <Button
                    w={130}
                    bg="#38a169"
                    _hover={{ background: "green.600" }}
                  >
                    Comprar
                  </Button>
                  </Link>
                </Box>
              </Flex>
              <TableContainer border="solid 6px white" borderRadius={10} >
                <Table variant="striped" colorScheme="green" size='sm'>
                  <Thead>
                    <Tr>
                      <Th>CRIPTO</Th>
                      <Th>Cantidad</Th>
                    </Tr>
                  </Thead>
                  <Tbody>
                    {criptos?.map((x, k) => {
                      if (x.free > 0) {
                        return (
                          <Tr key={k}>
                            <Td>
                              {" "}
                              <img
                                src={`../../../../node_modules/cryptocurrency-icons/svg/color/${x.coin}.svg`}
                                alt="exchange"
                                border="0"
                                width={20}
                              />
                              {x.coin}
                            </Td>
                            <Td>{x.free}</Td>
                          </Tr>
                        );
                      }
                    })}
                  </Tbody>
                </Table>
              </TableContainer>
            </Box>
            <Box >
              <div className="containerChart">
                <label className="label">Crypto currency</label>
                <Chart options={optionsDona} series={seriesDona} type="pie" height='90%'/>
              </div>
            </Box>
           
          </SimpleGrid>
        </Box>
        <Divider orientation="horizontal" />
        <br/>
        
        <Box bg="white" w="100%" marginTop={10} width='80%' margin= 'auto' borderRadius={8} >
          <Heading align="center">Historial de pagos</Heading>
          <Divider orientation="horizontal" />

          <TableContainer border="solid 6px white" borderRadius={10} >
            <Table>
              <Thead>
                <Tr>
                  <Th>Transaccion</Th>
                  <Th>Cantidad</Th>
                  <Th>User</Th>
                  <Th>Fecha</Th>
                  <Th>Codigo</Th>
                </Tr>
              </Thead>
              <Tbody>
                {history?.map((x, k) => {
                  return (
                    <Tr
                      key={k}
                      background={x.type == "get" ? "#C6F6D5" : "#fed7d7"}
                    >
                      <Td>
                        {" "}
                        <img
                          src={`../../../../node_modules/cryptocurrency-icons/svg/color/${x.coin}.svg`}
                          alt="exchange"
                          border="0"
                          width={20}
                        />
                        {x.coin}
                        {x.type == "get" ? (
                          <Badge colorScheme="green">Recibido</Badge>
                        ) : (
                          <Badge colorScheme="red">Enviado</Badge>
                        )}
                      </Td>
                      <Td>{x.amount}</Td>
                      <Td>{x.to}</Td>
                      <Td>{x.date}</Td>
                      <Td>{x.txId}</Td>
                    </Tr>
                  );
                })}
              </Tbody>
            </Table>
          </TableContainer>
        </Box>

        <Divider orientation="horizontal" />
        <br/>
        <Box bg="white" w="100%" marginTop={10}  width='80%' margin= 'auto' borderRadius={8}>
          <Heading align="center">Depositos Realizados</Heading>
          <Divider orientation="horizontal" />
          <TableContainer border="solid 6px white" borderRadius={10}>
            <Table variant="striped" colorScheme="green">
              <Thead>
                <Tr>
                  <Th>transaccion</Th>
                  <Th>Cantidad</Th>
                  <Th>Hash</Th>
                  <Th>fecha</Th>
                </Tr>
              </Thead>
              <Tbody>
                {deposit?.map((x, k) => {
                  return (
                    <Tr key={k}>
                      <Td>
                        {" "}
                        <img
                          src={`../../../../node_modules/cryptocurrency-icons/svg/color/${x.coin}.svg`}
                          alt="exchange"
                          border="0"
                          width={20}
                        />
                        {x.coin}
                      </Td>
                      <Td>{x.amount}</Td>
                      <Td>{x.hash}</Td>
                      <Td>{x.date}</Td>
                    </Tr>
                  );
                })}
              </Tbody>
            </Table>
          </TableContainer>
        </Box>
      </body>
    </>
  );
};
export default DashBoard;

/*import React, { useContext } from "react";
import { AuthContext } from "../../contexts/auth";
import DonaChart from "./DashBoardComponents/DonaChart/DonaChart";
import { Button, Flex, Input, Text, Square, Link } from "@chakra-ui/react";
import DonaChartApex from "./DashBoardComponents/DonaApex";

//css styles

const DashBoard = () => {
  const { authenticated, logout, user } = useContext(AuthContext);

  const handleLogout = () => {
    logout();
  };
  return (
    <>
      <h1>DashBoard</h1>
      <Link href="/recharge">
        <Button>Recargar</Button>
      </Link>

      <Link href="/pay">
        <Button>Transferir</Button>
      </Link>

      <Link href="/whitdraw">
        <Button>Retirar</Button>
      </Link>

      <Button onClick={handleLogout}>Logout</Button>
      <div className="containerDashboard">
        <div className="containerBalance">Estimate Balance:</div>
        <div className="containerButtons">componente de botones</div>
      </div>

      <div className="containerChart">
        <DonaChartApex user={user} />
      </div>
      

    
    </>
  );
};
export default DashBoard;
*/
