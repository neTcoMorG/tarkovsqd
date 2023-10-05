import { 
    Box, 
    Container, 
    HStack, 
    Button,
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    TableContainer,
    Avatar,
    VStack,
    Text,
    useDisclosure,
    Image,
    useToast,
    Tooltip,
    Center
} from "@chakra-ui/react";

import Header from "../components/Header";
import MapSelector from "../components/MapSelector";
import RegionSelector from "../components/RegionSelector";
import TeamCreateModal from "../components/TeamCreateModal";
import LoginModal from "../components/LoginModal";
import usePostStore from "../store/usePostStore";

import strip from '../resource/strip.png'
import bg from '../resource/bg.png'
import kr from '../resource/kr.png'
import us from '../resource/us.png'
import jp from '../resource/jp.png'
import rs from '../resource/rs.png'
import reset from '../resource/reset.svg'


import PlayTypeSelector from "../components/PlayTypeSelector";
import { useEffect } from "react";
import { API_SERVER } from "../application";
import axios from "axios";
import useFilterStore from "../store/useFilterStore";

export default function Main () {

    const toast = useToast()
    const loginModal = useDisclosure()
    const teamModal = useDisclosure()

    const {posts, initPosts}  = usePostStore()  
    const {map, server} = useFilterStore()

    const openModal = () => {
        const token = localStorage.getItem('squadObject')

        if (token === null) {
            loginModal.onOpen()
            return
        }

        teamModal.onOpen()
    }

    const handleCopyClipBoard = (e) => {
        try {
            navigator.clipboard.writeText(e.target.innerHTML)
            toast({
                title: '디스코드 아이디가 복사되었어요',
                status: 'info'
            })
        } 
        catch (error) { alert('클립보드 복사에 실패하였습니다.') }
    };

    const searchQueryGenerator = () => {
        const query = new URLSearchParams()
        if (map !== null) {
            query.append("map", map)
        }
        if (server !== null) {
            query.append("server", server)
        }

        return query.toString()
    }

    const onResetFilterClick = () => {
        axios.get(API_SERVER + '/post').then(res => {
            initPosts(res.data.content)
        })
    }

    useEffect(() => {
        console.log(API_SERVER + '/post?' + searchQueryGenerator())
        axios.get(API_SERVER + '/post?' + searchQueryGenerator()).then(res => {
            initPosts(res.data.content)
        })
    }, [map, server])

    return (
    <Box w={'100%'} bgColor={'black'} backgroundImage={bg} backgroundSize={'cover'} backgroundRepeat={'no-repeat'} backgroundAttachment={'fixed'} pb={'400px'}>
        <LoginModal onClose={loginModal.onClose} isOpen={loginModal.isOpen} teamModalOpen={teamModal.onOpen} />
        <TeamCreateModal onClose={teamModal.onClose} isOpen={teamModal.isOpen} />
        <Header />
        <Container maxW={'1200px'} mt={10}>
            <Box w={'100%'} p={'18px 24px 18px 24px'} bgColor={'#151515'} border={'1px solid #9a886650'}>
                <VStack alignItems={'flex-start'} spacing={3}>
                    <Text fontSize={'18px'} letterSpacing={'-1px'} fontWeight={'bold'} color={'#9A8866'}>공지사항</Text>
                    <Text fontSize={'15px'}>
                        필터링 기능(맵, 서버)이 추가되었습니다. <br/>
                        사용자 프로필을 클릭하면 빠르게 디스코드 아이디를 복사할 수 있습니다. <br/>
                    </Text>
                </VStack>
            </Box>
            <HStack justifyContent={'space-between'} pt={5}>
                <HStack spacing={4}>
                    <Tooltip fontSize={'12px'} label={'필터 초기화'}>
                        <Box bgColor={'#121211'} border={'1px solid #9A8866'} cursor={'pointer'} onClick={onResetFilterClick}>
                            <Image p={'6px'} src={reset} h={'38px'} w={'39px'} />
                        </Box>
                    </Tooltip>
                    <MapSelector      isFilter={true} />
                    <PlayTypeSelector disabled={true} />
                    <RegionSelector   isFilter={true} />
                </HStack>
                <Button fontSize={'14px'} bgColor={'#9A8866'} color={'#29241D'} borderRadius={0} fontWeight={'bold'} letterSpacing={'-1px'} onClick={openModal}>팀원 찾기</Button>
            </HStack>
            <Box bgColor={'#171715'} mt={6}>
                <TableContainer w={'100%'}>
                    <Table>
                        <Thead bgImage={strip}>
                            <Tr>
                                <Th textShadow={'1px 1px 1px rgba(0,0,0,.004)'} w={'250px'} fontSize={'11px'} color={'#9A8866'}>디스코드</Th>
                                <Th textShadow={'1px 1px 1px rgba(0,0,0,.004)'} w={'180px'} fontSize={'11px'} color={'#9A8866'}>맵</Th>
                                <Th textShadow={'1px 1px 1px rgba(0,0,0,.004)'} w={'200px'} color={'#9A8866'}>서버</Th>
                                <Th textShadow={'1px 1px 1px rgba(0,0,0,.004)'} fontSize={'11px'} color={'#9A8866'} w={'450px'}>메모</Th>
                                <Th textShadow={'1px 1px 1px rgba(0,0,0,.004)'} fontSize={'11px'} color={'#9A8866'}>등록 시간</Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            {posts && posts.map(p => 
                            <Tr fontSize={'12px'} bgColor={'#151515'}>
                                <Td>
                                    <HStack spacing={2}>
                                        <Avatar size={'sm'} src={p.avatar_url} />
                                        <VStack spacing={0} alignItems={'flex-start'}>
                                            <Tooltip fontSize={'10px'} label={'아이디 복사'}>
                                                <Text color={'#9A8866'} cursor={'pointer'} onClick={handleCopyClipBoard}>{p.nickname}</Text>
                                            </Tooltip>
                                            {p.verify === true ?  <Text color={'#5865f2'} fontSize={'10px'} letterSpacing={'-1px'}>디스코드 인증됨</Text>
                                            : <Text color={'gray'} fontSize={'10px'} letterSpacing={'-1px'}>디스코드 미인증</Text>}
                                        </VStack>
                                    </HStack>
                                </Td>
                                <Td color={'#AEAEB0'} fontWeight={'bold'}>{p.map}</Td>
                                
                                {p.server === '한국' && <Td>
                                    <HStack><Image w={'18px'} h={'18px'} src={kr} /><Text color={'#AEAEB0'}>{p.server}</Text></HStack></Td>}
                                {p.server === '북미' && <Td color={'#AEAEB0'}>
                                    <HStack><Image w={'18px'} h={'18px'} src={us} /><Text color={'#AEAEB0'}>{p.server}</Text></HStack></Td>}
                                {p.server === '일본' && <Td color={'#AEAEB0'}>
                                    <HStack><Image w={'18px'} h={'18px'} src={jp} /><Text color={'#AEAEB0'}>{p.server}</Text></HStack></Td>}
                                {p.server === '러시아' && <Td color={'#AEAEB0'}>
                                    <HStack><Image w={'18px'} h={'18px'} src={rs} /><Text color={'#AEAEB0'}>{p.server}</Text></HStack></Td>}
                                {p.server ===  '상관없음' && <Td color={'#AEAEB0'}>
                                    <HStack><Text color={'#AEAEB0'}>{p.server}</Text></HStack></Td>}

                                <Td wordBreak={'break-all'} pr={10}>
                                    <Text 
                                        color={'#9a8866'}  
                                        whiteSpace={'normal'} 
                                        fontWeight={'bold'}
                                        style={{
                                            overflow:'hidden',
                                            display: "-webkit-box",
                                            WebkitLineClamp: 2,
                                            WebkitBoxOrient: 'vertical',
                                            textOverflow: 'ellipsis',
                                        }}>{p.memo}</Text>
                                </Td>

                                <Td color={'gray'}>{p.time}</Td>
                            </Tr>)}
                        </Tbody>
                    </Table>
                </TableContainer>
                {posts && posts.length <= 0 ? 
                    <>
                        <Center h={'100%'} p={'200px 0 200px'}>
                            <Text fontSize={'24px'} color={'#9A8866'} letterSpacing={'-1px'}>아무런 데이터가 없음</Text>
                        </Center>
                    </> : null}
            </Box>
        </Container>
    </Box>
    )
}