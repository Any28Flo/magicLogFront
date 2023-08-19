import React, { useState } from 'react';
import {
	Button,
	FormControl,
	FormLabel,
	Input,
	Modal,
	ModalBody,
	ModalContent,
	ModalFooter,
	ModalHeader,
	ModalOverlay,
} from '@chakra-ui/react';

export interface AuthModalProps {
	isOpen: boolean;
	onClose: () => void;
	onAuth: (email: string, password: string) => void;
	isLoginMode: boolean;
}

interface LoginForm {
	email: string;
	password: string;
}

const initialFormState: LoginForm = {
	email: '',
	password: '',
};
const AuthModal: React.FC<AuthModalProps> = ({ isOpen, onClose, onAuth, isLoginMode }) => {
	const [formValues, setFormValues] = useState<LoginForm>(initialFormState);
	const [errors, setErrors] = useState<{ [key: string]: string }>({});

	const handleAuth = () => {
		if (validateForm()) {
			onAuth(formValues.email, formValues.password);
		}

	};
	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setFormValues((prevValues) => ({
			...prevValues,
			[name]: value,
		}));
	};


	const validateForm = () => {
		const newErrors: { [key: string]: string } = {};

		if (!formValues.email) {
			newErrors.email = 'Email is required';
		}

		if (!formValues.password) {
			newErrors.password = 'Password is required';
		}

		setErrors(newErrors);
		return Object.keys(newErrors).length === 0;
	};
	return (
		<Modal isOpen={isOpen} onClose={onClose}>
			<ModalOverlay />
			<ModalContent>
				<ModalHeader>{isLoginMode ? 'Login' : 'Registro'}</ModalHeader>
				<ModalBody>
					<FormControl>
						<FormLabel>Email</FormLabel>
						<Input
							type="email"
							name="email"
							value={formValues.email}
							onChange={handleInputChange}
							isInvalid={!!errors.email}

						/>
						{errors.email && <p>{errors.email}</p>}
					</FormControl>
					<FormControl mt={4}>
						<FormLabel>Contraseña</FormLabel>
						<Input
							type="password"
							name="password"
							value={formValues.password}
							onChange={handleInputChange}
							isInvalid={!!errors.password}

						/>
						{errors.password && <p>{errors.password}</p>}
					</FormControl>

				</ModalBody>
				<ModalFooter>
					<Button colorScheme="blue" mr={3} onClick={handleAuth}>
						{isLoginMode ? 'Login' : 'Registro'}
					</Button>
					<Button onClick={onClose}>Cancelar</Button>
				</ModalFooter>
			</ModalContent>
		</Modal>
	);
};

export default AuthModal;
