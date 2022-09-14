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
          <Box bg={useColorModeValue("#270537")} px={4}>
            <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
              <IconButton
                size={"md"}
                icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
                aria-label={"Open Menu"}
                display={{ md: "none" }}
                onClick={isOpen ? onClose : onOpen}
              />
              <HStack spacing={8} alignItems={"center"} color='white'>
                <Box w="180px" h='20px'>
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
                  <Link
                    
                    px={2}
                    py={1}
                    rounded={"md"}
                    _hover={{
                      textDecoration: "none",
                      bg: useColorModeValue("green.200", "green.700"),
                    }}
                    href={"/Login"}
                  >
                    Iniciar Sesión
                  </Link>
                </HStack>
              </HStack>
    
              <Flex alignItems={"center"}>
             
                <Stack direction={"row"} spacing={2}>
        
                <Link href='/register' textColor='white'>
              <Button colorScheme='green' align='center' id="buttonRegister">
                Registro
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