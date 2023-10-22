import { 
    Box, 
    HStack, 
    VStack,
    Text,
    Container
} from "@chakra-ui/react";

import strip from '../../resource/texture/strip.png'
import red_strip from '../../resource/texture/red_strip.png'

export default function Donate () {
    return (
        <Box bgColor={'#0e0e0e'}>
            <Box w={'100%'} backgroundImage={red_strip} p={'30px'}>
                <Container minW={'1100px'}>
                    <Text>아아</Text>
                </Container>
            </Box>
            <Container minW={'1100px'} pt={20}>
                <HStack>
                    <VStack>
                        <Text>전기 값</Text>
                    </VStack>
                </HStack>
            </Container>
        </Box>
    )
}