
import { Avatar, Box, Container, HStack, Icon, Select, Text, Image } from "@chakra-ui/react";

import kr from '../resource/kr.png'
import us from '../resource/us.png'
import jp from '../resource/jp.png'
import rs from '../resource/rs.png'


export default function RegionSelector ({setter}) {
    return (
        <Select bgColor={'#171715'} color={'#9a8866'} borderColor={'#9a8866'} borderRadius={0} w={'150px'} onChange={setter} fontSize={'16px'}>
            <option value={'한국'}>
                <HStack>
                    <Avatar w={'10px'} h={'10px'} src={kr} />
                    <Text>한국</Text>
                </HStack>
            </option>
            <option value={'북미'}>
                <HStack>
                    <Image w={'10px'} h={'10px'} src={us} />
                    <Text>북미</Text>
                </HStack>
            </option>
            <option value={'일본'}>
                <HStack>
                    <Image w={'10px'} h={'10px'} src={jp} />
                    <Text>일본</Text>
                </HStack>
            </option>
            <option value={'러시아'}>
                <HStack>
                    <Image w={'10px'} h={'10px'} src={rs} />
                    <Text>러시아</Text>
                </HStack>
            </option>
        </Select>
    )
}