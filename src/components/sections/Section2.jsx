import { Flex, Box, Spacer, Text } from "@chakra-ui/layout";

export default function Section2() {
    return (
        <>
            <Flex marginTop={12} textAlign="center">
                <Box w='180px' h='10' bg='red.500' marginLeft={4}>
                    <Text>
                        Icono 1
                    </Text>
                </Box>
                <Spacer />
                <Box w='180px' h='10' bg='red.500' >
                    <Text>
                        Icono 2
                    </Text>
                </Box>
                <Spacer />
                <Box w='180px' h='10' bg='red.500' marginRight={4} >
                    <Text>
                        Icono 3
                    </Text>
                </Box>
            </Flex>
        </>
    )
}