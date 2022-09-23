import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Link,
  Button,
  Heading,
  Text,
  useColorModeValue,
  InputRightElement,
  InputGroup
} from "@chakra-ui/react";

import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/auth";

export default function SimpleCard() {
  const { authenticated, login } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [show, setShow] = useState(false)
  const handleClick = () => setShow(!show)

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('e',e.preventDefault())
    console.log("submit", { email, password });
    login(email, password); //intengracion con el contexto y la Api
  };

  if (!authenticated) {
  return (
    <Flex
      minH={"93.9vh"}
      align={"center"}
      justify={"center"}
      bgImage= "url('../../public/assets/parallax-img-1.jpg')"
      bgRepeat="no-repeat"
      bgSize="cover"
      backgroundPosition="center"
      
    >
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={20} px={6}>
        <Stack align={"center"}>
          <Heading fontSize={"4xl"} color="gray.100">Inicio de sesion</Heading>
        </Stack>
        <Box
            width='450px'
            height='400px'
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          p={10}
        >
          <Stack spacing={4}>
            <form onSubmit={handleSubmit}>
              <FormControl id="email">
                <FormLabel mb={"8px"}>Email address</FormLabel>
                <Input
                  mb={"16px"}
                  borderColor="gray.400"
                  size='lg'
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </FormControl>
              <FormControl id="password">
                <FormLabel mb="8px">Password</FormLabel>
                <InputGroup size='lg'>
                  <Input
                    borderColor="gray.400"
                    mb="16px"
                    pr='4.5rem'
                    type={show ? 'text' : 'password'}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <InputRightElement width='4.5rem'>
                    <Button h='1.6rem' size='sm' onClick={handleClick}>
                      {show ? 'Hide' : 'Show'}
                    </Button>
                  </InputRightElement>
                </InputGroup>
              </FormControl>
              <Stack spacing={10}>
                <Stack
                  direction={{ base: "column", sm: "row" }}
                  align={"start"}
                  justify={"start"}
                >
                  <Link color={"#131a42"} href={'/Register'}>Primera vez? registrate aqui</Link>
                </Stack>
                <Button
                  id="submit"
                  type="submit"
                  bg={"#131a42"}
                  color={"white"}
                  _hover={{
                    filter: "auto",
                    opacity: ".9"
                  }}
                >
                  Sign in
                </Button>
              </Stack>
            </form>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  ); 
}  else {  navigate("/dashboard");}
}
