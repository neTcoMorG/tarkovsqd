import { HamburgerIcon } from "@chakra-ui/icons";
import { IconButton, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import axios from "axios";
import { API_SERVER } from "../application";
import TokenGetter from "../utils/TokenGetter";

export default function FunctionMenu ({UUID, postId}) {

    const onDelete = () => {
        axios.post(API_SERVER + '/post/delete', JSON.stringify({id: postId}), {headers: {
            Authorization: TokenGetter(),
            'Content-Type': 'application/json'
        }})
    }

    const isOwner = (UUID) => {
        const data = localStorage.getItem('squadObject') !== null ? JSON.parse(localStorage.getItem('squadObject')) : null  
        if (!data) { return false }
        return data ? data.uuid === UUID : false
    }

    return (
        <Menu >
            <MenuButton as={IconButton} aria-label="functions" icon={<HamburgerIcon />} variant={'outline'} 
            border={'none'} p={0} margin={0} size={'xs'} />
            <MenuList bgColor={'black'}  width={'10px'} border={'1px solid #9A8866'}>
                {isOwner(UUID) ? 
                <>
                    <MenuItem p={'0 0 0 12px'} bgColor={'black'} color={'crimson'} onClick={onDelete}>삭제</MenuItem>
                </>
                :<>
                    <MenuItem p={'0 0 0 12px'} bgColor={'black'}>신고</MenuItem>
                </>}
            </MenuList>
        </Menu>
    )
}