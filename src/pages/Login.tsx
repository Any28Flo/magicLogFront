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

interface AuthModalProps {

}

const AuthModal: React.FC<AuthModalProps> = () => {


	const handleCustomAuth = (email: string, password: string) => {
		// Your custom authentication logic
		console.log('Custom authentication:', email, password);
	};

	const { LoginButton, RegisterButton, AuthModalComponent } = useAuthModal();

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
