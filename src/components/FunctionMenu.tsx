import { HamburgerIcon } from '@chakra-ui/icons';
import { IconButton, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import axios from 'axios';
import { API_SERVER } from '../application';
import TokenGetter from '../utils/TokenGetter';

interface FunctionMenu {
	UUID: string;
	postId: bigint;
}

export default function FunctionMenu({ UUID, postId }: FunctionMenu) {
	
	const onDelete = async () => {
		await axios.post(API_SERVER + '/post/delete', JSON.stringify({ id: postId }), {
			headers: {
				Authorization: TokenGetter(),
				'Content-Type': 'application/json',
			},
		});
	};
	
	const isOwner = (UUID: string) => {
		const data = localStorage.getItem('squadObject') !== null ? JSON.parse(localStorage.getItem('squadObject') as string) : null;
		
		if (!data) return false;
		
		return data ? data.uuid === UUID : false;
	};
	
	return (
		<Menu>
			<MenuButton as={ IconButton } aria-label="functions" icon={ <HamburgerIcon /> } variant={ 'outline' }
			            border={ 'none' } p={ 0 } margin={ 0 } size={ 'xs' } />
			<MenuList bgColor={ 'black' } width={ '10px' } border={ '1px solid #9A8866' }>
				<MenuItem
					p={ '0 0 0 12px' }
					bgColor={ 'black' }
					color={ isOwner(UUID) ? 'crimson' : undefined }
					onClick={ isOwner(UUID) ? onDelete : undefined }
				>
					{ isOwner(UUID) ? '삭제' : '신고' }
				</MenuItem>
			</MenuList>
		</Menu>
	);
}