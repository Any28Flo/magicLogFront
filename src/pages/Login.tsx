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
	Toast,
} from '@chakra-ui/react';
import { useToast } from '@chakra-ui/react';

import { useMutation } from 'react-query';

import { useAuthModal } from '../hooks/useAuthModal';
import { register, login } from '../services/useAuth';
import { useAppContext } from '../context/appContext';
import { useNavigate } from 'react-router-dom';



const Login = () => {
	const toast = useToast();
	const navigate = useNavigate();
	const { dispatch } = useAppContext();

	const createUserMutation = useMutation(register, {
		onMutate: (variables) => {

			console.log('Mutation starting...', variables);

		},
		onSuccess: (data) => {
			closeRegisterModal();
			toast({
				title: data.msg,
				status: 'success',
				duration: 4000,
				isClosable: true,
			});

		},
		onError: (error) => {
			closeRegisterModal();
			toast({
				title: error?.response?.data?.errors[0]?.msg,
				status: 'error',
				duration: 4000,
				isClosable: true,
			});
		},
	});
	const loginUserMutation = useMutation(login, {
		onMutate: (variables) => {
			console.log('Mutation starting...', variables);
		},
		onSuccess: (data) => {
			closeRegisterModal();

			dispatch({
				type: 'login',
				payload: {
					token: data.token,
					user: {
						email: data.user.email,
						role: data.user.role,
					}
				}
			})
			localStorage.setItem('token', JSON.stringify(data.token));
			localStorage.setItem('user', JSON.stringify(data.user));
			navigate('/dashboard');
		},
		onError: (error) => {
			closeRegisterModal();
			toast({
				title: error?.response?.data?.msg,
				status: 'error',
				duration: 4000,
				isClosable: true,
			});
		},
	});


	const handleCustomLoginAuth = async (email: string, password: string) => {

		closeLoginModal()
		await loginUserMutation.mutateAsync({ email, password });
	};

	const handleCustomRegisterAuth = async (email: string, password: string) => {
		const newUser = {
			email,
			password,
			role: 'vendedor'
		};

		await createUserMutation.mutateAsync(newUser);
	};

	const { LoginButton, RegisterButton, AuthModalComponent, closeLoginModal, closeRegisterModal } = useAuthModal({
		customLoginOnAuth: handleCustomLoginAuth,
		customRegisterOnAuth: handleCustomRegisterAuth,
	});


	return (
		<Flex align='center' bg="gray-100" justify='center' minH='100vh'>
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

export default Login;
