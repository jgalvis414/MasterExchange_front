import React , {useContext }from "react";
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
} from "@chakra-ui/react";
import {
  MoonIcon,
  SunIcon,
  HamburgerIcon,
  CloseIcon,
  AddIcon,
} from "@chakra-ui/icons";

import { AuthContext } from "../../contexts/auth";


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

export default function NavBarLogged() {
    const { logout } = useContext(AuthContext);

  const handleLogout = () => {
    logout();
  };

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
                <Box>Master Exchange</Box>
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
                    href={"/Market"}
                  >
                    Market
                  </Link>
                  <Link
                    px={2}
                    py={1}
                    rounded={"md"}
                    _hover={{
                      textDecoration: "none",
                      bg: useColorModeValue("green.200", "green.700"),
                    }}
                    href={"/dashboard"}
                  >
                    DashBoard
                  </Link>
                
                </HStack>
              </HStack>
    
              <Flex alignItems={"center"}>
             
                <Stack direction={"row"} spacing={2}>
        
             
              <Button colorScheme='green' align='center' onClick={handleLogout} >
                Salir
              </Button>
               
                 
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
                    href={"/market"}
                  >
                    Market
                  </Link>
                  <Link
                    href={"/dashboard"}
                  >
                    Dashboard
                  </Link>
                </Stack>
              </Box>
            ) : null}
          </Box>
        </>
      );

 
 
}