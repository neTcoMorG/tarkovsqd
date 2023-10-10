import { VStack, Text, Badge, useDisclosure } from "@chakra-ui/react";
import MissionDetail from "./MissionDetail";


export default function SubMissionCard ({mission}) {
    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
        <>
        {mission && 
        <>
            <MissionDetail onClose={onClose} isOpen={isOpen} data={mission} />
            <VStack
                onClick={onOpen}
                cursor={'pointer'}
                w={'100%'}
                justifyContent={'center'}
                alignItems={'flex-start'} 
                h={'95px'} 
                bgColor={'#202020'} spacing={1} p={'10px'} borderRadius={10}>
                <Text fontSize={'13px'} style={{
                    overflow:'hidden',
                    display: "-webkit-box",
                    WebkitLineClamp: 1,
                    WebkitBoxOrient: 'vertical',
                    textOverflow: 'ellipsis',
                }}>{mission.title}</Text>
                <Text fontSize={'12px'} color={'#737373'}>{mission.date}</Text>
                {mission.cate === "FR" ? 
                <Badge 
                    p={'2px 10px 2px 10px'}
                    mt={1} 
                    borderRadius={10} 
                    bgColor={'#292929'} 
                    color={'#919191'}
                    fontSize={'6px'}
                    textAlign={'center'}
                    border={'1px solid #3b3b3b'}>기능 추가</Badge> : null}
                {mission.cate === "BUG" ?
                <Badge 
                    p={'2px 10px 2px 10px'}
                    mt={1} 
                    borderRadius={10} 
                    bgColor={'#292929'} 
                    color={'#919191'}
                    fontSize={'6px'}
                    textAlign={'center'}
                    border={'1px solid #3b3b3b'}>버그 수정</Badge> : null}
                {mission.cate === "ETC" ? 
                    <Badge
                    p={'2px 10px 2px 10px'}
                    mt={1} 
                    borderRadius={10} 
                    bgColor={'#292929'} 
                    color={'#919191'}
                    fontSize={'6px'}
                    textAlign={'center'}
                    border={'1px solid #3b3b3b'}>기타</Badge> : null}
            </VStack>
        </>
        }
        </>
    )
}