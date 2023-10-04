import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalCloseButton,
    VStack,
    Input,
    FormControl,
    FormLabel,
    HStack,
    Text,
    Button
  } from '@chakra-ui/react'
import { useEffect } from 'react'
import MapSelector from './MapSelector'
import RegionSelector from './RegionSelector'


export default function TeamCreateModal ({onClose, isOpen}) {

    const profile = JSON.parse(localStorage.getItem('squadObject'))

    return (
        <Modal onClose={onClose} isOpen={isOpen} isCentered>
            <ModalOverlay />
            <ModalContent bgColor={'#121211'} p={'12px 0 12px 0'}>
                <ModalHeader borderBottom={'1px solid #202020'} pt={3} pb={4} fontSize={'16px'} letterSpacing={'-1px'}>같이할 사람 찾기</ModalHeader>
                <ModalCloseButton />
                <ModalBody pt={5}>
                    <VStack alignItems={'flex-start'} spacing={8}>
                        <FormControl isRequired>
                            <FormLabel color={'#AEAEB0'} fontSize={'14px'}>디스코드 아이디</FormLabel>
                            <HStack spacing={4}>
                                {profile && 
                                    <Input fontSize={'14px'} p={'12px'} borderColor={'#827357'} value={profile.username} w={'180px'} disabled/> }
                                <Text color={'#5865f2'} fontSize={'14px'} letterSpacing={'-1px'}>스쿼드와 디스코드가 연동되어있어요!</Text>
                            </HStack>
                        </FormControl>
                        <HStack spacing={5}>
                            <FormControl isRequired>
                                <FormLabel color={'#AEAEB0'} fontSize={'14px'}>맵</FormLabel>
                                <MapSelector />
                            </FormControl>
                            <FormControl isRequired>
                                <FormLabel color={'#AEAEB0'} fontSize={'14px'}>서버</FormLabel>
                                <RegionSelector />
                            </FormControl>
                        </HStack>
                        <FormControl>
                            <FormLabel color={'#AEAEB0'} fontSize={'14px'}>메모</FormLabel>
                            <Input fontSize={'14px'} p={'12px'} borderColor={'#827357'} placeholder={'랩 가서 떡상할 사람~'} />
                        </FormControl>
                        <Button w={'100%'} fontSize={'15px'} borderRadius={0} bgColor={'#827357'} letterSpacing={'-1px'}>등록하기</Button>
                    </VStack>
                </ModalBody>
            </ModalContent>
        </Modal>
    )
}