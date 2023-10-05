
import { Box, Container, HStack, Select, Text } from "@chakra-ui/react";
import { useSearchParams } from "react-router-dom";
import useFilterStore from "../store/useFilterStore";

export default function MapSelector ({setter, isFilter=false}) {

    const {setMap} = useFilterStore()

    if (!isFilter) {
        return (
            <Select onChange={setter} fontWeight={'bold'} bgColor={'#171715'} color={'#9a8866'} borderColor={'#9a8866'} borderRadius={0} w={'150px'}  fontSize={'14px'}>
                <option value={'맵 선택'}>맵 선택</option>
                <option value={'전체'}>전체</option>
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
        <Select onChange={(e) => setMap(e.target.value)} fontWeight={'bold'} bgColor={'#171715'} color={'#9a8866'} borderColor={'#9a8866'} borderRadius={0} w={'150px'} fontSize={'14px'}>
            <option value={'맵 선택'}>맵 선택</option>
            <option value={'전체'}>전체</option>
            <option value={'커스텀'}>커스텀</option>
            <option value={'팩토리'}>팩토리</option>
            <option value={'우드'}>우드</option>
            <option value={'스트리트'}>스트리트</option>
            <option value={'쇼어라인'}>쇼어라인</option>
            <option value={'연구실'}>연구실</option>
        </Select>
    )
}