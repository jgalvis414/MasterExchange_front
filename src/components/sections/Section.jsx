import { SimpleGrid, Box, Heading, Container, Flex, Center,Text } from "@chakra-ui/layout"
import Section2 from "./Section2"
export default function Section() {
    return (
        <>

            <Container maxW='100%' centerContent>
                <Flex color='white'>
                    <Center w='100%'>
                        <Heading as="h2" color="black">
                            ¿Por que Deberias Elegirnos?
                        </Heading>
                    </Center>
                </Flex>
            </Container>
            <Section2/>
            <SimpleGrid minChildWidth='120px' spacing='40px'>
                <Box bg='tomato' height='80px'>
                    <Center>
                        <Text as="b">Texto de descripasdjasd asdasdisadsadjaskdjl
                            jdsakjf lasdjfkadsjflasjdkasljdlasdj
                        </Text>
                    </Center>
                </Box>
                <Box bg='tomato' height='80px'>
                    <Center>
                        <Text as="b">Texto de descripasdjasd asdasdisadsadjaskdjl
                            jdsakjf lasdjfkadsjflasjdkasljdlasdj
                        </Text>
                    </Center>
                </Box>
                <Box bg='tomato' height='80px'>
                    <Center>
                        <Text as="b">Texto de descripasdjasd asdasdisadsadjaskdjl
                            jdsakjf lasdjfkadsjflasjdkasljdlasdj
                        </Text>
                    </Center>
                </Box>
            </SimpleGrid>
        </>
    )
}