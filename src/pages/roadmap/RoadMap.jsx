
import { 
    Box, 
    Container, 
    HStack, 
    VStack, 
    Text, 
    Button, 
    Modal, 
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalCloseButton,
    ModalBody,
    FormControl,
    FormLabel,
    Input,
    useDisclosure,
    useToast,
    Select,
    Textarea
} from "@chakra-ui/react"
import { useEffect, useState } from "react"
import SubMissionCard from "../../components/roadmap/SubMissionCard"
import axios from "axios"
import { API_SERVER, DISCORD_LOGIN_URL } from "application"

export default function RoadMap () {
    
    const createModal = useDisclosure()

    const toast = useToast()

    const [wait, setWait]         = useState()
    const [progress, setProgress] = useState()
    const [done, setDone]         = useState()

    const [category, setCategory] = useState('FR')

    const [title, setTitle]       = useState("")
    const [txt, setTxt]           = useState("")

    const onChangeCategory = (val) => { setCategory(val.target.value) }
    const onChangeTitle = (e) => { setTitle(e.target.value) }

    const clearFormData = () => {
        setTitle('')
        setTxt('')
    }

    const onSubmissionCreate = () => {
        if (localStorage.getItem('squadObject') === null) {
            window.location.href = DISCORD_LOGIN_URL
            return
        }

        createModal.onOpen()
    }

    const createRoadMap = () => {
        if (title.length <= 0 || txt.length <= 0) {
            toast({
                title:'내용을 입력해주세요',
                status: 'warning'
            })
            return
        }

        const parse = JSON.parse(localStorage.getItem('squadObject'))
        const packet = { title, txt, category, token: parse.token }
        axios.post(API_SERVER + '/roadmap', JSON.stringify(packet), {headers: {
            'Content-Type': 'application/json'
        }})
        .then(res => {
            setWait([res.data, ...wait])
            toast({
                title: '당신의 아이디어에 감사합니다',
                status: 'info'
            })
            createModal.onClose()
            clearFormData()
        })
    }

    useEffect(() => {
        axios.get(API_SERVER + '/roadmap').then(res => {
            setWait(res.data.waits)
            setProgress(res.data.progresses)
            setDone(res.data.done)
        })
    }, [])

    return (
        <Box bgColor={'black'} fontFamily={'Noto Sans KR'}>
            <Modal closeOnOverlayClick={false} isOpen={createModal.isOpen} onClose={createModal.onClose} isCentered p={'16px'}>
                <ModalOverlay 
                    backdropFilter={'auto'}
                    backdropBlur={'4px'}
                />
                <ModalContent bgColor={'#101010'} w={'448px'} h={'580px'} p={'12px'}>
                    <ModalHeader fontSize={'18px'}>RoadMap</ModalHeader>
                    <ModalCloseButton  />
                    <ModalBody p={'16px'} w={'100%'} h={'100%'}>
                        <VStack spacing={5}>
                            <FormControl isRequired>
                                <FormLabel fontSize={'13px'} color={'#A3A3A3'}>제목</FormLabel>
                                <Input bgColor={'#171715'} borderColor={'#9A8866'} onChange={onChangeTitle} value={title} placeholder="제목" h={'36px'} fontSize={'14px'} />
                            </FormControl>
                            <FormControl isRequired>
                                <FormLabel fontSize={'13px'} color={'#A3A3A3'}>문의 카테고리</FormLabel>
                                <Select bgColor={'#171715'} borderColor={'#9A8866'} h={'36px'} fontSize={'13px'} onChange={onChangeCategory}> 
                                    <option value={'FR'}  style={{backgroundColor: '#202020'}} fontSize={'13px'} color={'#A3A3A3'}>기능추가</option>
                                    <option value={'BUG'} style={{backgroundColor: '#202020'}} fontSize={'13px'} color={'#A3A3A3'}>버그수정</option>
                                    <option value={'ETC'} style={{backgroundColor: '#202020'}} fontSize={'13px'} color={'#A3A3A3'}>기타</option>
                                </Select>
                            </FormControl>
                            <FormControl isRequired h={'100%'}>
                                <FormLabel fontSize={'13px'} color={'#A3A3A3'}>당신의 의견</FormLabel>
                                <Textarea h={'220px'} borderColor={'#9A8866'} bgColor={'#171715'} fontSize={'14px'} value={txt} onChange={(e) => setTxt(e.target.value)}>

                                </Textarea>
                            </FormControl>
                            <Box display={'flex'} justifyContent={'flex-end'} mb={3} w={'100%'}>
                                <Button h={'30px'} fontSize={'12px'} bgColor={'#DA5A63'} color={'white'} _hover={{
                                    bgColor: 'crimson'
                                }} onClick={createRoadMap}>전송</Button>
                            </Box>
                        </VStack>
                    </ModalBody>
                </ModalContent>
            </Modal>
            <Container maxW={'1200px'} p={'32px'}>
                <HStack justifyContent={'space-between'}>
                    <HStack spacing={2}>
                        <Text letterSpacing={'-1px'}>비공개 문의 혹은 자세한 설명이 필요한 내용은</Text>
                        <Text letterSpacing={'-1px'} color={'#9A8866'} fontWeight={'bold'}> 디스코드 youngjun4522</Text>
                        <Text letterSpacing={'-1px'}> 로 문의 바랍니다 감사합니다.</Text>
                    </HStack>
                    <Box display={'flex'} justifyContent={'flex-end'} mb={3}>
                        <Button
                            onClick={onSubmissionCreate}
                            fontSize={"14px"}
                            bgColor={"#9A8866"}
                            color={"#29241D"}
                            borderRadius={0}
                            fontWeight={"bold"}
                            letterSpacing={"-1px"}
                            boxShadow={"0 0 100px rgba(65,61,52,1), 0 0 20px rgba(232,190,107,0.8)"}>
                            문의하기
                        </Button>
                    </Box>
                </HStack>
                <HStack w={'100%'} spacing={4} alignItems={'flex-start'} pt={3}>
                    <Box w={'100%'} borderRadius={10} border={'1px solid #303030'} pb={2}>
                        <VStack w={'100%'} alignItems={'flex-start'}>
                            <Box p={'16px 20px 6px 20px'} borderBottom={'1px solid #303030'} w={'100%'}>
                                <Text fontSize={'13px'} color={'#D8B4FE'} letterSpacing={'-1px'}>대기중</Text>
                            </Box>
                            <VStack p={'6px 8px 6px 8px'} w={'100%'} spacing={3}>
                                {wait && wait.map(w => 
                                    <SubMissionCard mission={{
                                        title: w.title,
                                        date: w.date,
                                        writer: w.writer,
                                        status: w.status,
                                        txt: w.txt,
                                        cate: w.cate
                                    }}/>)}
                            </VStack>
                        </VStack>
                    </Box>
                    <Box w={'100%'} borderRadius={10} border={'1px solid #303030'} pb={2}>
                        <VStack w={'100%'}>
                            <Box  p={'16px 20px 6px 20px'} borderBottom={'1px solid #303030'} w={'100%'}>
                                <Text fontSize={'13px'} color={'#FACC15'} letterSpacing={'-1px'}>진행중</Text>
                            </Box>
                            <VStack p={'6px 8px 6px 8px'} w={'100%'} spacing={3}>
                                {progress && progress.map(p => 
                                    <SubMissionCard mission={{
                                        title: p.title,
                                        date: p.date,
                                        writer: p.writer,
                                        status: p.status,
                                        txt: p.txt,
                                        cate: p.cate
                                }}/>)}
                            </VStack>
                        </VStack>
                    </Box>
                    <Box w={'100%'} borderRadius={10} border={'1px solid #303030'} pb={2}>
                        <VStack w={'100%'}>
                            <Box p={'16px 20px 6px 20px'} borderBottom={'1px solid #303030'} w={'100%'}>
                                <Text fontSize={'13px'} color={'#4ADE80'} letterSpacing={'-1px'}>완료</Text>
                            </Box>
                            <VStack p={'6px 8px 6px 8px'} w={'100%'} spacing={3}>
                                {done && done.map(d => 
                                    <SubMissionCard mission={{
                                        title: d.title,
                                        date: d.date,
                                        done: d.done_date,
                                        writer: d.writer,
                                        status: d.status,
                                        txt: d.txt,
                                        cate: d.cate,
                                }}/>)}
                            </VStack>
                        </VStack>
                    </Box>
                </HStack>
            </Container>
        </Box>
    )
}