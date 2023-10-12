import { Button, HStack, Image, Text } from '@chakra-ui/react';

import useFilterStore from '../../../store/useFilterStore';
import SelectorProps from '../../../types/selector';
import { isMobile } from 'react-device-detect';

import sherpa from '../../../resource/icon/sherfa.png'

export default function SherfaSelector({setter}: SelectorProps) {
	
	const { toggleSherfa, isSherfa } = useFilterStore();
	
	return (
			<Button
				onClick={ () => toggleSherfa() }
				fontWeight={ 'bold' }
				bgColor={"#171715"}
				color={"#9a8866"}
				border={isSherfa ? '1px solid #9a8866' : '1px solid gray'} 
				borderRadius={ 0 }
				w={ isMobile ? 'auto' : '150px' }>
				<HStack spacing={2}>
					<Text fontSize={ isMobile ? '11px' : '14px' } 
						color={isSherfa ? '#9a8866' : 'gray'}>쉐르파 유저만</Text>
					<Image w={'20px'} h={'20px'} objectFit={'cover'} src={sherpa} />
				</HStack>
			</Button>
	);
}
