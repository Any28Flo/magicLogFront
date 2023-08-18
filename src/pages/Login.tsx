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
import { useQuery, useMutation } from 'react-query';

import { useAuthModal } from '../hooks/useAuthModal';
import { register } from '../services/useAuth';



const AuthModal = () => {

	const createUserMutation = useMutation(register);
	const handleCreateUser = async (email: string, password: string) => {
		const newUser = {
			email,
			password,
			role: 'vendedor'
		};

		await createUserMutation.mutateAsync(newUser);
	};

	const handleCustomLoginAuth = async (email: string, password: string) => {
		closeLoginModal()
	};

	const handleCustomRegisterAuth = async (email: string, password: string) => {
		await handleCreateUser(email, password)

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
