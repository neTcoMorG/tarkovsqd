import { HamburgerIcon } from "@chakra-ui/icons";
import { IconButton, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";

export default function FunctionMenu ({postUUID}) {

    const isOwner = (postUUID) => {
        const data = localStorage.getItem('squadObject') !== null ? JSON.parse(localStorage.getItem('squadObject')) : null  
        if (!data) { return false }
        return data ? data.uuid === postUUID : false
    }

    return (
        <Menu >
            <MenuButton as={IconButton} aria-label="functions" icon={<HamburgerIcon />} variant={'outline'} 
            border={'none'} p={0} margin={0} size={'xs'} />
            <MenuList bgColor={'black'}  width={'10px'} border={'1px solid #9A8866'}>
                {isOwner(postUUID) ? 
                <>
                    <MenuItem p={'0 0 0 12px'} bgColor={'black'} color={'crimson'}>삭제</MenuItem>
                </>
                :<>
                    <MenuItem p={'0 0 0 12px'} bgColor={'black'}>신고</MenuItem>
                </>}
            </MenuList>
        </Menu>
    )
}