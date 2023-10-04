
import { Box, Container, HStack, Select, Text } from "@chakra-ui/react";

export default function MapSelector () {
    return (
        <Select bgColor={'#171715'} color={'#9a8866'} borderColor={'#9a8866'} borderRadius={0} w={'150px'}>
            <option>전체</option>
            <option>커스텀</option>
            <option>팩토리</option>
            <option>우드</option>
            <option>스트리트</option>
            <option>쇼어라인</option>
            <option>연구실</option>
        </Select>
    )
}