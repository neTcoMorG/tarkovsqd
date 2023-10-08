import { Text } from '@chakra-ui/react';
import { useEffect, useState } from 'react';

interface TimerProps {
	time: string;
}

export default function Timer({ time }: TimerProps) {
	
	const [ txt, setTxt ] = useState<string>();
	
	const apiTime = new Date(time);
	useEffect(() => {
		setInterval(() => {
			const currentTime = new Date();
			const diff = currentTime.getTime() - apiTime.getTime();
			
			const elapsedSeconds = Math.floor(diff / 1000);
			
			if (elapsedSeconds < 60) {
				setTxt(elapsedSeconds + ' 초 전');
			} else if (elapsedSeconds < 3600) {
				const min = Math.floor(elapsedSeconds / 60);
				setTxt(min + ' 분 전');
			} else {
				const hour = Math.floor(elapsedSeconds / 3600);
				setTxt(hour + ' 시간 전');
			}
		}, 1000);
	}, []);
	
	return (
		<>
			{ time &&
				<Text color={ 'gray' }>
					{ txt }
				</Text> }
		</>
	);
}