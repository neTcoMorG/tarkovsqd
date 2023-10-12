import { Button } from '@chakra-ui/react';

import useFilterStore from '../../../store/useFilterStore';
import SelectorProps from '../../../types/selector';
import { isMobile } from 'react-device-detect';

export default function SherfaSelector({
	                                       setter,
                                       }: SelectorProps) {
	const { toggleSherfa } = useFilterStore();
	
	return (
		<Button
			onClick={ () => toggleSherfa() }
			fontWeight={ 'bold' }
			bgColor={ '#171715' }
			color={ '#9a8866' }
			borderColor={ '#9a8866' }
			borderRadius={ 0 }
			w={ isMobile ? '130px' : '150px' }
			fontSize={ isMobile ? '11px' : '14px' }
		>
			인증된 유저만
		</Button>
	);
}
