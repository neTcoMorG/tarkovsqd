import { Box, Button, ButtonGroup, Image, Select, Tooltip } from '@chakra-ui/react';
import useFilterStore, { Type } from '../store/useFilterStore';

import boss from '../resource/icon/boss.png';
import gun from '../resource/icon/gun.png';
import money from '../resource/icon/money.png';
import quest from '../resource/icon/quest.png';
import asterlist from '../resource/icon/asterlist.png';
import SelectorProps from '../types/selector';

export default function PlayTypeSelector({ setter, isFilter = false }: SelectorProps) {
	
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
				<TypeButton tooltip={ '전체' } image={ asterlist } typeName={ '플레이 유형' } />
				<TypeButton tooltip={ '파밍' } image={ money } typeName={ '파밍' } />
				<TypeButton tooltip={ '퀘스트' } image={ quest } typeName={ '퀘스트' } />
				<TypeButton tooltip={ '교전' } image={ gun } typeName={ '교전' } />
				<TypeButton tooltip={ '보스런' } image={ boss } typeName={ '보스런' } />
			</ButtonGroup>
		</Box>
	);
}

interface TypeButtonProps {
	image: string;
	typeName: Type;
	tooltip: string;
}

const TypeButton = ({ image, typeName, tooltip }: TypeButtonProps) => {
	const { type, setType } = useFilterStore();
	
	return (
		<Tooltip bgColor={ '#9a8866' } color={ '#373128' } fontSize={ '12px' } label={ tooltip }>
			<Button backgroundColor={ type === typeName ? '#101010' : '#171715' }
			        transition={ 'background-color 0.1s ease-in-out' }
			        borderRadius={ '0' }
			        borderColor={ '#9a8866' }
			        onClick={ () => {
				        setType(typeName);
			        } }
			        height={ '40px' }>
				<Image src={ image } width={ '20px' } height={ 'auto' } />
			</Button>
		</Tooltip>
	);
};