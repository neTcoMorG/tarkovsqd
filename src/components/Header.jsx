
import {
    Box,
    Container,
    HStack,
    Text,
}
from '@chakra-ui/react'

export default function Header () {
    return (
        <Box w={'100%'} bgColor={'black'} p={'32px 0 32px 0'} boxShadow={'0 0 100px rgba(65,61,52,1), 0 0 6px rgba(232,190,107,0.8)'} zIndex={10}>
            <Container maxW={'1200px'}>
                <HStack spacing={4}>
                    <Text color={'#9a8866'} fontSize={'32px'} letterSpacing={'-1px'} fontWeight={'bold'}>Squad</Text>
                </HStack>
            </Container>
        </Box>
    )
}