import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalCloseButton,
  } from '@chakra-ui/react'
import { useEffect } from 'react'


export default function TeamCreateModal ({onClose, isOpen}) {

    return (
        <Modal onClose={onClose} isOpen={isOpen} isCentered>
        <ModalOverlay />
            <ModalContent>
                <ModalHeader>Modal Title</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                </ModalBody>
            </ModalContent>
        </Modal>
    )
}