import React from 'react';
import {
	Button,
	Card,
	CardBody,
	CardHeader,
	Flex,
	FormControl,
	FormLabel,
	Heading,
	Input,
	Modal,
	ModalBody,
	ModalContent,
	ModalFooter,
	ModalHeader,
	ModalOverlay,
	Stack,
} from '@chakra-ui/react';
import { useAuthModal } from '../hooks/useAuthModal';



const AuthModal = () => {


	const handleCustomLoginAuth = (email: string, password: string) => {

		console.log('Custom login authentication:', email, password);
		closeLoginModal()
	};

	const handleCustomRegisterAuth = (email: string, password: string) => {

		console.log('Custom register authentication:', email, password);
		closeRegisterModal();
	};

	const { LoginButton, RegisterButton, AuthModalComponent, closeLoginModal, closeRegisterModal } = useAuthModal({
		customLoginOnAuth: handleCustomLoginAuth,
		customRegisterOnAuth: handleCustomRegisterAuth,
	});

	return (
		<Flex align='center' bg='black' justify='center' minH='100vh'>
			<Card>
				<CardHeader>
					<Heading size='md'>Magic Log</Heading>
				</CardHeader>
				<CardBody>
					<Stack spacing={4} direction='row' align='center'>
						<LoginButton>Login</LoginButton>
						<RegisterButton>Registro</RegisterButton>
					</Stack>
				</CardBody>
			</Card>
			<AuthModalComponent />
		</Flex>
	);
};

export default AuthModal;
