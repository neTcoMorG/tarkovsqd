import { Avatar, HStack, VStack, Text, Image, Box, Divider } from "@chakra-ui/react"

import discord from '../../../resource/icon/discord.png'
import sherpa  from '../../../resource/icon/sherfa.png'

import rubble from '../../../resource/icon/money.png'
import us from '../../../resource/flag/us.png'

export default function PostList () {
    return (
        <VStack spacing={5} bgColor={'#121212'} borderRadius={'20px'} p={'20px'} alignItems={'flex-start'}>
            <Post />
            <Divider borderColor={'#202020'} />
            <Post />
            <Divider borderColor={'#202020'} />
            <Post />
            <Divider borderColor={'#202020'} />
            <Post />
            <Divider borderColor={'#202020'} />
            <Post />
        </VStack>
    )
}

function Post () {
    return (    
        <HStack alignItems={'flex-start'} spacing={5}>
            <Avatar w={'50px'} h={'50px'} border={'2px solid #9a8866'} />
            <VStack alignItems={'flex-start'} spacing={3}>
                <HStack>
                    <HStack spacing={2}>
                        <Text fontSize={'15px'} fontWeight={'bold'} color={'#9A8866'} pr={2}>gridk</Text>
                        <HStack p={'5px 10px 5px 10px'} bgColor={'#1A1A1A'} borderRadius={5}>
                            <Image src={discord} h={'15px'} w={'15px'} objectFit={'cover'} />
                            <Text fontSize={'12px'} color={'#AAAAAA'}>디스코드 인증됨</Text>
                        </HStack>
                        <HStack p={'5px 10px 5px 10px'} bgColor={'#1A1A1A'} borderRadius={5}>
                            <Image src={sherpa} h={'15px'} w={'15px'} objectFit={'cover'} />
                            <Text fontSize={'12px'} color={'#92d050'}>쉐르파 유저</Text>
                        </HStack>
                    </HStack>
                </HStack>
                <Conditional />
                <HStack spacing={3}>
                    <MessageIcon />
                    <Text fontSize={'14px'}>매일 저녁시간 같이 하실분 구합니다. 초보가능</Text>
                </HStack>
            </VStack>
        </HStack>
    )
}

function Conditional () {
    return (
        <HStack p={'7px 15px 7px 15px'} bgColor={'#1a1a1a'} borderRadius={5} fontFamily={''}>
            <HStack spacing={4}>
                <HStack>
                    <Text fontSize={'13px'} color={'#AAAAAA'}>맵: </Text>
                    <Text fontSize={'13px'} color={'#AAAAAA'}>스트리트</Text>
                </HStack>
                <Box w={'1px'} h={'15px'} bgColor={'#202020'} />
                <HStack>
                    <Text fontSize={'13px'} color={'#AAAAAA'}>플레이 유형: </Text>
                    <Image src={rubble} h={'15px'} w={'15px'} objectFit={'contain'} />
                </HStack>
                <Box w={'1px'} h={'15px'} bgColor={'#202020'} />
                <HStack>
                    <Text fontSize={'13px'} color={'#AAAAAA'}>서버: </Text>
                    <Image src={us} h={'15px'} w={'15px'} objectFit={'contain'} />
                </HStack>
                <Box w={'1px'} h={'15px'} bgColor={'#202020'} />
                <HStack>
                    <Text fontSize={'13px'} color={'#AAAAAA'}>등록시간: </Text>
                    <Text fontSize={'13px'} color={'#AAAAAA'}>5분 전</Text>
                </HStack>
            </HStack>
        </HStack>
    )
}

function MessageIcon () {
    return (
        <svg 
            style={{
                fill: 'white',
                width: '20px',
                height: '20px'
            }}
            version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18 8.016v-2.016h-8.016v2.016h8.016zM18 11.016v-2.016h-8.016v2.016h8.016zM15 14.016v-2.016h-5.016v2.016h5.016zM8.016 8.016v-2.016h-2.016v2.016h2.016zM8.016 11.016v-2.016h-2.016v2.016h2.016zM8.016 14.016v-2.016h-2.016v2.016h2.016zM20.016 2.016q0.797 0 1.383 0.586t0.586 1.383v12q0 0.797-0.586 1.406t-1.383 0.609h-14.016l-3.984 3.984v-18q0-0.797 0.586-1.383t1.383-0.586h16.031z"></path></svg>
    )
}