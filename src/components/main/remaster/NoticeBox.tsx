import { Box, HStack, VStack, Text, Tooltip } from "@chakra-ui/react";
import { useEffect, useState } from "react";

export default function NoticeBox ({p}: {p? : any}) {

    const [tip1, setTip1] = useState<Boolean>(false)
    const [tip2, setTip2] = useState<Boolean>(false)

    const onClickHidden = (id: any) => {
        const squadTip: any = localStorage.getItem('squadTip')
        let parse = JSON.parse(squadTip)

        if (id === 1) {
            parse.tip1 = false
            setTip1(false)
        }
        else {
            parse.tip2 = false
            setTip2(false)
        }
        localStorage.setItem('squadTip', JSON.stringify(parse))
    }

    useEffect(() => {
        let tipObject: any = localStorage.getItem('squadTip')

        if (tipObject === null) {
            setTip1(true)
            setTip2(true)
            localStorage.setItem("squadTip", JSON.stringify({tip1: true, tip2: true}))
        }
        else {
            tipObject = JSON.parse(tipObject)
            if (tipObject.tip1) {
                setTip1(true)
            }
            if (tipObject.tip2) {
                setTip2(true)
            }
        }
    }, [])

    return (
        <HStack spacing={10} w={'100%'} p={p}>
            {tip1 && <Notice 
                        title='최신 정보를 보려면 계속해서 새로고침을 해야 하나요?' 
                        content='아니요, 타르코프 스쿼드는 웹소켓을 이용하여 통신하기에 최신 정보가 실시간으로 갱신됩니다.
                                 앞으로도 사용자분들이 편하게 사이트를 이용하실 수 있도록 많은 노력을 할 예정입니다.' 
                        onClose={() => onClickHidden(1)}/>}

            {tip2 && <Notice 
                title='사용자 아이디를 보고 직접 써야 하나요?' 
                content='아니요, 사용자 아이디를 클릭하면 클립보드에 복사됩니다.
                         인증되지 않은 사용자의 경우, 없는 아이디인 경우가 있을 수도 있으니 주의 바랍니다.' 
                onClose={() => onClickHidden(2)}/>}
        </HStack>
    )
}

function Notice ({title, content, onClose}: {title: string, content: string, onClose: any}) {
    return (
        <Tooltip label={'확인했습니다. (클릭해서 숨기기)'}>
            <HStack onClick={onClose} cursor={'pointer'} p={'20px'} pr={'20px'} w={'50%'} alignItems={'flex-start'} spacing={5} bgColor={'#121212'} borderRadius={10}>
                <NoticeIcon />
                <VStack alignItems={'flex-start'}>
                    <Text fontSize={'16px'} fontWeight={'bold'} letterSpacing={'-1px'}>{title}</Text>
                    <Text whiteSpace={'pre-wrap'} fontSize={'13px'} color={'#AAAAAA'}>
                        {content}
                    </Text>
                </VStack>
            </HStack>
        </Tooltip>
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
