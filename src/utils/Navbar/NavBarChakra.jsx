import React, { useState, useContext } from "react";
import {
  Box,
  Flex,
  Avatar,
  Link,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  useColorMode,
  Center,
  HStack,
  IconButton,
  Img,
  Image
} from "@chakra-ui/react";
import {
  MoonIcon,
  SunIcon,
  HamburgerIcon,
  CloseIcon,
  AddIcon,
} from "@chakra-ui/icons";


const NavLink = ({ children }) => (
  <Link
    px={2}
    py={1}
    rounded={"md"}
    _hover={{
      textDecoration: "none",
      bg: useColorModeValue("gray.200", "gray.700"),
    }}
    href={"/"}
  >
    {children}
  </Link>
);



export default function Navbar5() {
   

  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <>
          <Box bg={useColorModeValue("#131a42")} px={4} minW="100%">
            <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
              <IconButton
                size={"md"}
                icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
                aria-label={"Open Menu"}
                display={{ md: "none" }}
                onClick={isOpen ? onClose : onOpen}
              />
              <HStack spacing={8} alignItems={"center"} color='white'>
                <Box w={["120px", "150px", "140px", "180px"]} h='20px'>
                <a href="/"><img src="https://i.ibb.co/DkpqKw7/exchange.png" alt="exchange" border="0" /></a>
                </Box>
                <HStack
                  as={"nav"}
                  alignItems={"center"}
                  spacing={4}
                  display={{ base: "none", md: "flex" }}
                >
                  <Link
                    px={2}
                    py={1}
                    rounded={"md"}
                    _hover={{
                      textDecoration: "none",
                      bg: useColorModeValue("green.200", "green.700"),
                    }}
                    href={"/"}
                  >
                    Inicio
                  </Link>
                  
                </HStack>
              </HStack>
    
              <Flex alignItems={"center"}>
             
                <Stack direction={"row"} spacing={2}>
        
                <Link href='/register' textColor='white'>
                  <Button w={["50px", "60px" ,"80px", "100px"]} colorScheme='green' align='center' id="buttonRegister" fontSize={["sm", "sm", "md", "md"]}>
                    Registro
                  </Button>
                </Link>
                <Link href={"/Login"} textColor="White">
                  <Button w={["65px", "90px" ,"100px", "120px"]} colorScheme='green' align='center' fontSize={["xs", "sm", "md", "md"]}>
                    Iniciar Sesión
                  </Button>
                </Link>
                 
                </Stack>
              </Flex>
            </Flex>
    
    
            {isOpen ? (
              <Box pb={4} display={{ md: "none" }}>
                <Stack as={"nav"} spacing={4} color="white">
                  <Link
                    href={"/"}
                  >
                    Inicio
                  </Link>
                  <Link
                    href={"/Login"}
                  >
                    Iniciar Sesión
                  </Link>
                </Stack>
              </Box>
            ) : null}
          </Box>
        </>
      );

 
 
}