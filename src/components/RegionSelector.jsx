
import { Avatar, Box, Container, HStack, Icon, Select, Text } from "@chakra-ui/react";

import kr from '../resource/한국.svg'
import us from '../resource/북미.svg'
import jp from '../resource/일본.svg'
import ru from '../resource/러시아.svg'


export default function RegionSelector () {
    return (
        <Select bgColor={'#171715'} color={'#9a8866'} borderColor={'#9a8866'} borderRadius={0} w={'150px'}>
            <option>
                <HStack>
                    <Icon w={8} h={8} as={kr} />
                    <Text>한국</Text>
                </HStack>
            </option>
            <option>
                <HStack>
                    <Icon w={8} h={8} as={kr} />
                    <Text>북미</Text>
                </HStack>
            </option>
            <option>
                <HStack>
                    <Icon w={8} h={8} as={kr} />
                    <Text>일본</Text>
                </HStack>
            </option>
            <option>
                <HStack>
                    <Icon w={8} h={8} as={kr} />
                    <Text>러시아</Text>
                </HStack>
            </option>
        </Select>
    )
}