import { Box, Button, ButtonGroup, Image, Select } from '@chakra-ui/react';
import useFilterStore from '../store/useFilterStore';

import boss from '../resource/icon/boss.png';
import gun from '../resource/icon/gun.png';
import money from '../resource/icon/money.png';
import quest from '../resource/icon/quest.png';
import asterlist from '../resource/icon/asterlist.png';

export default function PlayTypeSelector({ setter, isFilter = false }) {
	
	const { type, setType } = useFilterStore();
	
	if (!isFilter) {
		return (
			<Select onChange={ setter }
			        fontWeight={ 'bold' }
			        bgColor={ '#171715' }
			        color={ '#9a8866' }
			        borderColor={ '#9a8866' }
			        borderRadius={ 0 }
			        w={ '150px' }
			        fontSize={ '14px' }>
				<option value={ '플레이 유형' }>플레이 유형</option>
				<option value={ '파밍' }>파밍</option>
				<option value={ '퀘스트' }>퀘스트</option>
				<option value={ '교전' }>교전</option>
				<option value={ '보스런' }>보스런</option>
			</Select>
		);
	}
	
	return (
		<Box height={ '40px' }>
			<ButtonGroup size={ 'sm' } isAttached variant={ 'outline' }>
				<TypeButton image={ asterlist } typeName={ '플레이 유형' } />
				<TypeButton image={ money } typeName={ '파밍' } />
				<TypeButton image={ quest } typeName={ '퀘스트' } />
				<TypeButton image={ gun } typeName={ '교전' } />
				<TypeButton image={ boss } typeName={ '보스런' } />
			</ButtonGroup>
		</Box>
	);
}

const TypeButton = ({ image, typeName }) => {
	const { type, setType } = useFilterStore();
	
	return (
		
		<Button backgroundColor={ type === typeName ? 'white' : '#171715' }
		        transition={ 'background-color 0.1s ease-in-out' }
		        borderRadius={ '0' }
		        borderColor={ '#9a8866' } onClick={ () => {
			setType(typeName);
		} } height={ '40px' }><Image src={ image } width={ '20px' } height={ 'auto' } /></Button>
	
	);
};