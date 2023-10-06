
import { Select } from "@chakra-ui/react";
import useFilterStore from "../store/useFilterStore";

export default function PlayTypeSelector ({setter, isFilter=false}) {

    const {setType} = useFilterStore()

    if (!isFilter) {
        return (
            <Select onChange={setter} fontWeight={'bold'} bgColor={'#171715'} color={'#9a8866'} borderColor={'#9a8866'} borderRadius={0} w={'150px'} fontSize={'14px'}>
                <option value={'플레이 유형'}>플레이 유형</option>
                <option value={'파밍'}>파밍</option>
                <option value={'퀘스트'}>퀘스트</option>
                <option value={'교전'}>교전</option>
                <option value={'보스런'}>보스런</option>
            </Select>
        )
    }

    return (
        <Select onChange={(e) => setType(e.target.value)} fontWeight={'bold'} bgColor={'#171715'} color={'#9a8866'} borderColor={'#9a8866'} borderRadius={0} w={'150px'} fontSize={'14px'}>
                <option value={'플레이 유형'}>플레이 유형</option>
                <option value={'파밍'}>파밍</option>
                <option value={'퀘스트'}>퀘스트</option>
                <option value={'교전'}>교전</option>
                <option value={'보스런'}>보스런</option>
        </Select>
    )
}