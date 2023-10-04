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
    Image
} from "@chakra-ui/react";

import Header from "../components/Header";
import MapSelector from "../components/MapSelector";
import RegionSelector from "../components/RegionSelector";
import TeamCreateModal from "../components/TeamCreateModal";
import LoginModal from "../components/LoginModal";
import usePostStore from "../store/usePostStore";

import kr from '../resource/kr.png'
import us from '../resource/us.png'
import jp from '../resource/jp.png'
import rs from '../resource/rs.png'

export default function Main () {

    const loginModal = useDisclosure()
    const teamModal = useDisclosure()

    const {posts, setPosts} = usePostStore()

    const openModal = () => {
        const token = localStorage.getItem('squadObject')

        if (token === null) {
            loginModal.onOpen()
            return
        }

        teamModal.onOpen()
    }

    return (
    <Box w={'100%'} bgColor={'black'}>
        <LoginModal onClose={loginModal.onClose} isOpen={loginModal.isOpen} teamModalOpen={teamModal.onOpen} />
        <TeamCreateModal onClose={teamModal.onClose} isOpen={teamModal.isOpen} />
        <Header />
        <Container maxW={'1200px'} mt={8}>
            <HStack justifyContent={'space-between'}>
            <HStack spacing={4}>
                <MapSelector />
                <RegionSelector />
            </HStack>
            <Button bgColor={'#827357'} color={'#29241D'} borderRadius={0} fontWeight={'bold'} letterSpacing={'-1px'} onClick={openModal}>팀원 찾기</Button>
            </HStack>
            <Box bgColor={'#171715'} mt={6}>
            <TableContainer w={'100%'}>
                <Table w={'100%'}>
                <Thead>
                    <Tr>
                        <Th w={'250px'} fontSize={'11px'} color={'#827357'}>디스코드</Th>
                        <Th w={'200px'} fontSize={'11px'} color={'#827357'}>맵</Th>
                        <Th w={'210px'} color={'#827357'}>서버</Th>
                        <Th fontSize={'11px'} color={'#827357'} w={'370px'}>메모</Th>
                        <Th fontSize={'11px'} color={'#827357'}>등록 시간</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {posts && posts.map(p => 
                        <Tr fontSize={'12px'} bgColor={'#121211'} cursor={'pointer'}>
                        <Td>
                            <HStack spacing={2}>
                                <Avatar size={'sm'} src={p.avatar_url} />
                                <VStack spacing={0} alignItems={'flex-start'}>
                                    <Text color={'#9a8866'}>{p.nickname}</Text>
                                    {p.verify === true ?  <Text color={'#5865f2'} fontSize={'10px'} letterSpacing={'-1px'}>디스코드 인증</Text>
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

                        <Td color={'#9a8866'} fontWeight={'bold'}>{p.memo}</Td>
                        <Td color={'gray'}>{p.time}</Td>
                    </Tr>)}
                </Tbody>
                </Table>
            </TableContainer>
            </Box>
        </Container>
    </Box>
    )
}