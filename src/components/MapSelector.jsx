
import { Box, Container, HStack, Select, Text } from "@chakra-ui/react";

export default function MapSelector ({setter, disabled=false}) {

    if (disabled) {
        return (
            <Select disabled fontWeight={'bold'} bgColor={'#171715'} color={'#9a8866'} borderColor={'#9a8866'} borderRadius={0} w={'150px'} onChange={setter} fontSize={'14px'}>
                <option value={null}>전체</option>
                <option value={'커스텀'}>커스텀</option>
                <option value={'팩토리'}>팩토리</option>
                <option value={'우드'}>우드</option>
                <option value={'스트리트'}>스트리트</option>
                <option value={'쇼어라인'}>쇼어라인</option>
                <option value={'연구실'}>연구실</option>
            </Select>
        )
    }

    return (
        <Select fontWeight={'bold'} bgColor={'#171715'} color={'#9a8866'} borderColor={'#9a8866'} borderRadius={0} w={'150px'} onChange={setter} fontSize={'14px'}>
            <option value={null}>전체</option>
            <option value={'커스텀'}>커스텀</option>
            <option value={'팩토리'}>팩토리</option>
            <option value={'우드'}>우드</option>
            <option value={'스트리트'}>스트리트</option>
            <option value={'쇼어라인'}>쇼어라인</option>
            <option value={'연구실'}>연구실</option>
        </Select>
    )
}