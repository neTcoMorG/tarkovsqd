import { Button, HStack, Modal, ModalBody, ModalContent, ModalOverlay, Text, VStack } from '@chakra-ui/react';
import { DISCORD_LOGIN_URL } from '../application';

interface LoginModalProps {
	onClose: () => void;
	isOpen: boolean;
	teamModalOpen: () => void;
}

export default function LoginModal({ onClose, isOpen, teamModalOpen }: LoginModalProps) {
	
	const afterButton = () => {
		onClose();
		teamModalOpen();
	};
	
	return (
		<Modal onClose={ onClose } isOpen={ isOpen } isCentered>
			<ModalOverlay />
			<ModalContent p={ '24px 20px 24px 20px' } bgColor={ '#121211' }>
				<ModalBody>
					<VStack spacing={ 5 }>
						<Text fontSize={ '15px' } fontWeight={ 'bold' } color={ '#827357' }>아직 디스코드 계정을 연동하지 않았어요</Text>
						<Text fontSize={ '12px' } textAlign={ 'center' } color={ '#AEAEB0' }>
							디스코드 계정을 연결하시면<br /> 글 등록 시간과 제한이 줄어요
							지금 등록할래요?</Text>
						<HStack>
							<Button onClick={ afterButton }
							        p={ '10px 16px 10px 16px' }
							        color={ 'white' }
							        fontSize={ '14px' }
							        bgColor={ '#202020' }>나중에 하기</Button>
							<Button p={ '10px 16px 10px 16px' } color={ 'white' } fontSize={ '14px' } bgColor={ '#827357' }
							        onClick={ () => window.location.href = DISCORD_LOGIN_URL }
							>지금 연동하기</Button>
						</HStack>
					</VStack>
				</ModalBody>
			</ModalContent>
		</Modal>
	);
}