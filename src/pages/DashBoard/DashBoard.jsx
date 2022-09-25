import React, { useContext } from "react";
import { AuthContext } from "../../contexts/auth";
import DonaChart from "./DashBoardComponents/DonaChart/DonaChart";
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
  TableContainer, VStack, StackDivider, Avatar, AvatarBadge, Stack, Button, Box, Heading, SimpleGrid, Square, Text, Flex, Center, Grid, GridItem
} from "@chakra-ui/react";
import InputBuy from "../Market/InputBuy";
const DashBoard = () => {
  const { authenticated, logout, user } = useContext(AuthContext);

  const handleLogout = () => {
    logout();
  };

  return (
    <>
      <body className="cuerpoDash">
        <Box
          bg="#131a42"
          color="white"
          border=""
          borderRadius={9}>
          <Flex color='white' h="120px" border="solid " >
            <Center w='180px' border="solid" >
              <VStack
                divider={<StackDivider borderColor='gray.200' />}
                spacing={6}
                align='stretch'
              >
                <Box h='30px' >
                  <Avatar >
                    <AvatarBadge boxSize='1.25em' bg='green.500' />
                  </Avatar>
                </Box>
                <Box h='20px' >
                  <Text color="white">Hola Mundo</Text>
                </Box>
              </VStack>
            </Center>
            <Box flex='2' border="solid">
              <Flex color='white'>
                <Center w='50px'>
                  <div className="caja">
                    <img src="./node_modules/cryptocurrency-icons/svg/color/bnb.svg"
                      alt="icono de la moneda"
                    />
                  </div>
                </Center>
                <Square>
                  <Heading color="white" marginTop={2}>BNB</Heading>
                </Square>
              </Flex>

              <Box flex='1' marginTop={8}>
                <Text color="white">Saldo disponible: 0.0029182372$</Text>
              </Box>
            </Box>
            <Square w="200px" border="solid">
              <select name="" id="" className="select">
                <option>BTC</option>
                <option>XLM</option>
                <option>XRP</option>
                <option>XLM</option>
                <option>BNB</option>
                <option>DASH</option>
                <option>LTC</option>
              </select>
            </Square>
          </Flex>
          <SimpleGrid columns={[1, null, 2]} spacing='40px' marginTop={10}>
            <Box height='350px'>
              <div className="containerChart">
                <label className="label">Crypto currency</label>
                <DonaChart user={user} />
              </div>
            </Box>
            <Box bg='white' height='330px' color="gray.900">
              <TableContainer border="solid 6px white" borderRadius={10}>
                <Table variant='striped' colorScheme="green">
                  <TableCaption>Cantidad en Dolares de las Cryptomonedas</TableCaption>
                  <Thead>
                    <Tr>
                      <Th>Simbolo</Th>
                      <Th>Nombre</Th>
                      <Th isNumeric>Cantidad</Th>
                    </Tr>
                  </Thead>
                  <Tbody>
                    <Tr>
                      <Td><div className="caja">
                        <img src="./node_modules/cryptocurrency-icons/svg/color/bnb.svg"
                          alt="icono de la moneda"
                        />
                      </div>
                      </Td>
                      <Td>BNB</Td>
                      <Td isNumeric>25.4</Td>
                    </Tr>
                    <Tr>
                      <Td>
                        <div className="caja">
                          <img src="./node_modules/cryptocurrency-icons/svg/color/btc.svg"
                            alt="icono de la moneda"
                          />
                        </div>
                      </Td>
                      <Td>BTC</Td>
                      <Td isNumeric>30.48</Td>
                    </Tr>
                    <Tr>
                      <Td>
                        <div className="caja">
                          <img src="./node_modules/cryptocurrency-icons/svg/color/eth.svg"
                            alt="icono de la moneda"
                          />
                        </div></Td>
                      <Td>Etherum</Td>
                      <Td isNumeric>0.91444</Td>
                    </Tr>
                    <Tr>

                    </Tr>
                  </Tbody>
                  <Tfoot>
                    <Tr>
                      <Th>
                        <div className="caja">
                          <img src="./node_modules/cryptocurrency-icons/svg/color/usdt.svg"
                            alt="icono de la moneda"
                          />
                        </div></Th>
                      <Td>USDT</Td>
                      <Td isNumeric>24.983732</Td>
                    </Tr>
                  </Tfoot>
                </Table>
              </TableContainer>
            </Box>
          </SimpleGrid>
          <Box bg='tomato' w="100%">
            <Text>Hola</Text>
          </Box>

        </Box>
      </body>
    </>
  )
}
export default DashBoard;
