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
    Button,
    useToast
  } from '@chakra-ui/react'
import { useState } from 'react'
import MapSelector from './MapSelector'
import RegionSelector from './RegionSelector'
import axios from 'axios'
import { API_SERVER } from '../application'
import PlayTypeSelector from './PlayTypeSelector'


export default function TeamCreateModal ({onClose, isOpen}) {

    const profile = JSON.parse(localStorage.getItem('squadObject'))
    
    const toast = useToast()

    const [nickname, setNickname] = useState("")
    const [map, setMap]           = useState("")
    const [server, setServer]     = useState("")
    const [type, setType]         = useState("")
    const [memo, setMemo]         = useState("")

    const validate = () => {
        if (map === "" || map === "맵 선택") {
            toast({
                title: '맵을 선택해주세요',
                status: 'warning'
            })
            return false
        }

        if (type === "" || type === "플레이 유형") {
            toast({
                title: '플레이 유형을 선택해주세요',
                status: 'warning'
            })
            return false
        }

        if (server === "" || server === "서버 선택") {
            toast({
                title: '서버를 선택해주세요',
                status: 'warning'
            })
            return false
        }

        if (profile === null && nickname === "") {
            toast({
                title: '디스코드 아이디를 입력해주세요',
                status: 'warning'
            })
            return false
        }

        if (memo === null || memo === "") {
            toast({
                title: '메모를 적어주세요',
                status: 'warning'
            })
            return false
        }
    
        return true
    }

    const customClose = () => {
        setNickname('')
        setMap('')
        setServer('')
        setType('')
        setMemo('')
        onClose()
    }

    const sendCreatePacket = () => {
        if (validate()) {
            const packet = profile !== null ?
            {
                token: profile.token,
                map,
                server,
                memo,
                type,
            } 
            : {
                nickname,
                map,
                server,
                memo,
                type,
            }

            axios.post(API_SERVER + '/post', JSON.stringify(packet), {headers: {'Content-Type': 'application/json'}})
            .then(() => {
                customClose()
            })
            return
        }
    }
    
    return (
        <Modal onClose={customClose} isOpen={isOpen} isCentered>
            <ModalOverlay />
            <ModalContent bgColor={'#121211'}p={'12px 0 12px 0'}>
                <ModalHeader borderBottom={'1px solid #202020'} pt={3} pb={4} fontSize={'16px'} letterSpacing={'-1px'}>같이할 사람 찾기</ModalHeader>
                <ModalCloseButton />
                <ModalBody pt={5}>
                    <VStack alignItems={'flex-start'} spacing={8}>
                        <FormControl isRequired>
                            <FormLabel color={'#AEAEB0'} fontSize={'14px'}>디스코드 아이디</FormLabel>
                            <HStack spacing={4}>
                                {profile && <>
                                    <Input fontSize={'14px'} p={'12px'} borderColor={'#827357'} value={profile.username} w={'180px'} disabled/> 
                                    <Text color={'#5865f2'} fontSize={'14px'} letterSpacing={'-1px'}>스쿼드와 디스코드가 연동되어있어요!</Text>
                                </>}
                                {!profile && <>
                                    <Input fontSize={'14px'} p={'12px'} borderColor={'#827357'} onChange={(e) => setNickname(e.target.value)} value={nickname} w={'180px'} placeholder='디스코드 아이디' /> 
                                </>}
                            </HStack>
                        </FormControl>
                        <HStack spacing={5}>
                            <FormControl>
                                <FormLabel color={'#AEAEB0'} fontSize={'14px'}>맵</FormLabel>
                                <MapSelector      setter={(e) => setMap(e.target.value)} /> 
                            </FormControl>
                            <FormControl>
                                <FormLabel color={'#AEAEB0'} fontSize={'14px'}>플레이 유형</FormLabel>
                                <PlayTypeSelector setter={(e) => setType(e.target.value)} />
                            </FormControl>
                            <FormControl>
                                <FormLabel color={'#AEAEB0'} fontSize={'14px'}>서버</FormLabel>
                                <RegionSelector   setter={(e) => setServer(e.target.value)} />
                            </FormControl>
                        </HStack>
                        <FormControl>
                            <FormLabel color={'#AEAEB0'} fontSize={'14px'}>메모</FormLabel>
                            <Input onChange={(e) => setMemo(e.target.value)} value={memo} fontSize={'14px'} p={'12px'} borderColor={'#827357'} placeholder={'랩 가서 떡상할 사람~'} />
                        </FormControl>
                        <Button onClick={sendCreatePacket} w={'100%'} fontSize={'15px'} borderRadius={0} bgColor={'#827357'} letterSpacing={'-1px'}>등록하기</Button>
                    </VStack>
                </ModalBody>
            </ModalContent>
        </Modal>
    )
}