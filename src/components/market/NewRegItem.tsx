import { Box, Text } from "@chakra-ui/react";

export default function NewRegItem () {
    return (
        <>
            <Box p={'32px 0 32px 0'}>
                <Text fontWeight={'bold'} color={'#9a8866'} letterSpacing={'-1px'} fontSize={'18px'}>서비스 준비중 입니다</Text>
                <Text fontSize={'14px'} color={'#AEAEB0'} pt={4}>
                    암시장은 유저들 간 루블, 달러, 유로 같은 재화나 아이템으로 거래를 등록할 수 있는 중계 플랫폼 입니다 <br/>

                </Text>
            </Box>
        </>
    )
} 