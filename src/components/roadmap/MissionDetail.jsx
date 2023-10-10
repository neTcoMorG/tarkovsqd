
import { 
    Avatar, 
    VStack, 
    Text, 
    Box, 
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalCloseButton,
    HStack,
    Center,
    Textarea,
} from "@chakra-ui/react";

export default function MissionDetail ({onClose, isOpen, data}) {
    console.log(data)
    return (
        <Modal isOpen={isOpen} onClose={onClose} isCentered>
            <ModalOverlay />
            <ModalContent minW={'72rem'} pb={'200px'} bgColor={'#262626'} borderRadius={15}>
                <ModalHeader />
                <ModalCloseButton />
                <ModalBody p={'15px 32px 32px 32px'}>
                    <Center w={'100%'}>
                        <HStack w={'100%'} alignItems={'flex-start'} p={'0 32px 0 32px'} spacing={10}>
                            <VStack w={'745px'} alignItems={'flex-start'} pr={'30px'}>
                                <Box borderBottom={'1px solid #393939'} w={'100%'} pb={3}>
                                    <Text fontSize={'18px'} fontWeight={'bold'}>{data.title}</Text>
                                </Box>
                                <Box pt={5} w={'100%'}>
                                    <Text fontSize={'15px'} color={'#EEEEEE'}>{data.txt}</Text>
                                </Box>
                            </VStack>
                            <VStack w={'258px'} h={'100%'} alignItems={'flex-start'} spacing={5} pt={8}>
                                <HStack justifyContent={'flex-start'} spacing={'40px'}>
                                    <Text fontWeight={'bold'} w={'45px'} fontSize={'14px'} color={'#727272'}>작성자</Text>
                                    <HStack spacing={3}>
                                        <Avatar m={0} size={'sm'} src={data.writer.avatar_url} />
                                        <Text color={'#737373'} fontSize={'14px'}>{data.writer.nickname}</Text>
                                    </HStack>    
                                </HStack>
                                <HStack justifyContent={'flex-start'} spacing={'40px'}>
                                    <Text fontWeight={'bold'} w={'45px'} fontSize={'14px'} color={'#727272'}>상태</Text>
                                    <HStack spacing={3}>
                                        {data.status === "WAIT"     ? <Text fontSize={'14px'} color={'#D8B4FE'}>대기중</Text> : null}
                                        {data.status === "PROGRESS" ? <Text fontSize={'14px'} color={'#FACC15'}>진행중</Text> : null}
                                        {data.status === "DONE"     ? <Text fontSize={'14px'} color={'#4ADE80'}>완료</Text>   : null}
                                    </HStack>    
                                </HStack>
                                <HStack justifyContent={'flex-start'} spacing={'40px'}>
                                    <Text fontWeight={'bold'} w={'45px'} fontSize={'14px'} color={'#727272'}>분류</Text>
                                    <HStack spacing={3}>
                                        {data.cate === "FR" ? <Text color={'#737373'} fontSize={'14px'}>기능 추가</Text>:<Text color={'#737373'} fontSize={'14px'}>버그 수정</Text>}
                                    </HStack>    
                                </HStack>
                                <HStack justifyContent={'flex-start'} spacing={'40px'}>
                                    <Text fontWeight={'bold'} w={'45px'} fontSize={'14px'} color={'#727272'}>작성일</Text>
                                    <HStack spacing={3}>
                                        <Text color={'#737373'} fontSize={'14px'}>{data.date}</Text>
                                    </HStack>    
                                </HStack>
                                {data.done && 
                                    <HStack justifyContent={'flex-start'} spacing={'40px'}>
                                        <Text fontWeight={'bold'} w={'45px'} fontSize={'14px'} color={'#727272'}>완료일</Text>
                                        <HStack spacing={3}>
                                            <Text color={'#737373'} fontSize={'14px'}>{data.done}</Text>
                                        </HStack>    
                                    </HStack>}
                            </VStack>
                        </HStack>
                    </Center>
                </ModalBody>
            </ModalContent>
        </Modal>
    )
}