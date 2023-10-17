import { Box, Modal, ModalHeader, ModalOverlay, ModalContent, Text, ModalBody, VStack, HStack, Button, useDisclosure } from "@chakra-ui/react";
import { useEffect } from "react";

export default function Rule () {

    const {onOpen, onClose, isOpen} = useDisclosure()

    const onAgreeClick = () => {
        localStorage.setItem('squadRule', "true")
        onClose()
    }

    useEffect(() => {
        const squadObject: string | null = localStorage.getItem('squadRule')
        if (squadObject === null) {
            onOpen()
        }
    }, [])

    return (
        <Modal onClose={onClose} isOpen={isOpen} isCentered closeOnOverlayClick={false}>
            <ModalOverlay />
            <ModalContent bgColor={'#151515'} p={'20px 0 20px 0'}>
                <ModalHeader w={'100%'}>
                    <VStack textAlign={'center'} spacing={3}>
                        <Text color={'#9A8866'} fontSize={'24px'}>다인큐 기본적인 에티켓</Text>
                    </VStack>
                </ModalHeader>
                <ModalBody p={5}>
                    <VStack alignItems={'flex-start'} spacing={5}>
                        <HStack width={'100%'} spacing={4} alignItems={'flex-start'} bgColor={'#121212'} p={'12px 24px 12px 24px'} borderRadius={10}>
                            <NoticeIcon />
                            <VStack alignItems={'flex-start'}>
                                <Text fontSize={'18px'} fontWeight={'bold'}>잡음을 최소화 해주세요!</Text>
                                <Text fontSize={'14px'} color={'#EEEEEE'}>
                                    과자나 음료를 먹는 소리나 기타 잡담은 게임이 끝나거나 음소거를! 
                                    성공적인 레이드를 위해서 타인의 플레이를 존중해요
                                </Text>
                            </VStack>
                        </HStack>
                        <HStack width={'100%'} spacing={4} alignItems={'flex-start'} bgColor={'#121212'} p={'12px 24px 12px 24px'} borderRadius={10}>
                            <NoticeIcon />
                            <VStack alignItems={'flex-start'}>
                                <Text fontSize={'18px'} fontWeight={'bold'}>엄호는 확실하게</Text>
                                <Text fontSize={'14px'} color={'#EEEEEE'}>
                                    동료가 잡은 유저나 스캐브를 같이 파밍하면 죽음뿐! <br/>
                                    본인이 잡지 않았다면 동료가 파밍을 끝날때까지 확실한 엄호! 그 후 챙겨도
                                    늦지 않아요!
                                </Text>
                            </VStack>
                        </HStack>
                        <HStack width={'100%'} spacing={4} alignItems={'flex-start'} bgColor={'#121212'} p={'12px 24px 12px 24px'} borderRadius={10}>
                            <NoticeIcon />
                            <VStack alignItems={'flex-start'}>
                                <Text fontSize={'18px'} fontWeight={'bold'}>실수는 진심어린 사과로</Text>
                                <Text fontSize={'14px'} color={'#EEEEEE'}>
                                    본인의 실수에 대한 진심어린 사과는 절대 자존심을 내려놓는 일이 아니에요 <br/>
                                </Text>
                            </VStack>
                        </HStack>
                        <Button 
                            onClick={onAgreeClick}
                            boxShadow={ '0 0 100px rgba(65,61,52,1), 0 0 10px rgba(232,190,107,0.8)'}
                            mt={5} bgColor={'#9A8866'} fontSize={'16px'} w={'100%'}>위 내용에 동의합니다</Button>
                    </VStack>
                </ModalBody>
            </ModalContent>
        </Modal>
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
