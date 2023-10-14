import { Box, HStack, VStack, Text, Divider } from "@chakra-ui/react";


export default function NoticeBox () {
    return (
        <VStack spacing={7} w={'100%'} p={'20px'} borderRadius={'20px'} bgColor={'#121212'}>
            <Notice 
                title='최신 정보를 보려면 계속해서 새로고침을 해야 하나요?' 
                content='아니요, 타르코프 스쿼드는 웹소켓을 이용하여 통신하기에 최신 정보가 실시간으로 갱신됩니다.
                         앞으로도 사용자분들이 편하게 사이트를 이용하실 수 있도록 많은 노력을 할 예정입니다.' />
            <Divider borderColor={'#202020'}/>
            <Notice 
                title='최신 정보를 보려면 계속해서 새로고침을 해야 하나요?' 
                content='아니요, 타르코프 스쿼드는 웹소켓을 이용하여 통신하기에 최신 정보가 실시간으로 갱신됩니다.
                         앞으로도 사용자분들이 편하게 사이트를 이용하실 수 있도록 많은 노력을 할 예정입니다.' />
        </VStack>
    )
}

function Notice ({title, content}: {title: string, content: string}) {
    return (
        <HStack alignItems={'flex-start'} spacing={5}>
            <NoticeIcon />
            <VStack alignItems={'flex-start'}>
                <Text fontSize={'15px'} fontWeight={'bold'} letterSpacing={'-1px'}>{title}</Text>
                <Text fontSize={'13px'} color={'#AAAAAA'} letterSpacing={'-1px'}>
                    {content}
                </Text>
            </VStack>
        </HStack>
    )
}

function NoticeIcon () {
    return (
        <Box minW={'40px'} minH={'40px'} display={'flex'} justifyContent={'center'} alignItems={'center'} borderRadius={'50%'} bgColor={'#302c20'}>
            <svg style={{
                width: '20px',
                height: '20px',
                fill: '#ffe37d',
            }} version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M7 13.33c-2.384-1.15-4-3.549-4-6.325 0-3.866 3.134-7 7-7s7 3.134 7 7c0 2.776-1.616 5.174-3.958 6.306l-0.042 0.018v2.67h-6v-2.67zM7 17h6v1.5c0 0.83-0.67 1.5-1.5 1.5h-3c-0.828 0-1.5-0.672-1.5-1.5v0-1.5zM9 11.9v2.1h2v-2.1c2.299-0.481 4-2.492 4-4.899 0-2.761-2.239-5-5-5s-5 2.239-5 5c0 2.407 1.701 4.417 3.967 4.893l0.033 0.006z"></path></svg>
        </Box>
    )
}