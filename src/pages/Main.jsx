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
    useDisclosure
  } from "@chakra-ui/react";
  import Header from "../components/Header";
  import MapSelector from "../components/MapSelector";
  import RegionSelector from "../components/RegionSelector";
import TeamCreateModal from "../components/TeamCreateModal";
import { useState } from "react";
import LoginModal from "../components/LoginModal";

export default function Main () {

    const [posts, setPosts] = useState()

    const loginModal = useDisclosure()
    const teamModal = useDisclosure()

    const openModal = () => {
        const token = localStorage.getItem('squadToken')

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
                        <Th fontSize={'11px'} color={'#827357'}>메모</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    <Tr fontSize={'12px'} bgColor={'#121211'}>
                        <Td>
                            <HStack spacing={2}>
                            <Avatar size={'sm'} />
                            <VStack spacing={0} alignItems={'flex-start'}>
                                <Text color={'#9a8866'}>윤봉길의도시락</Text>
                                <Text color={'gray'}>#1234</Text>
                            </VStack>
                            </HStack>
                        </Td>
                        <Td color={'#AEAEB0'}>전체</Td>
                        <Td color={'#AEAEB0'}>한국</Td>
                        <Td color={'#9a8866'}>뉴비 퀘스트 깨드려요 같이해요~~~</Td>
                    </Tr>
                </Tbody>
                </Table>
            </TableContainer>
            </Box>
        </Container>
    </Box>
    )
}