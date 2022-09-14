import Navbar from "../Navbar/Navbar";
import { Box, Flex, Button, Spacer, Heading,ButtonGroup } from "@chakra-ui/react";
import "./Header.css"

export default function Header() {
    return (
        <>
            <Flex minWidth='max-content' alignItems='center' gap='2' bg="gray.900" color="white">
                <Box p='2'>
                    <Heading size='lg'>Master Code</Heading>
                </Box>
                <Spacer/>
                <Navbar/>
                <ButtonGroup gap='2' align="left">
                    <Button colorScheme='teal'>Sign Up</Button>
                    <Button colorScheme='teal'>Log in</Button>
                </ButtonGroup>
            </Flex>
        </>
    )
}