import React from 'react';
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
interface UseAuthModalOptions {
	customAuthModalProps?: AuthModalProps;
	customOnAuth?: (email: string, password: string) => void;
}

const AuthModal: React.FC<AuthModalProps> = ({ isOpen, onClose, onAuth, isLoginMode }) => {
	const [email, setEmail] = React.useState('');
	const [password, setPassword] = React.useState('');

	const handleAuth = () => {
		onAuth(email, password);
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
							value={email}
							onChange={(e) => setEmail(e.target.value)}
						/>
					</FormControl>
					<FormControl mt={4}>
						<FormLabel>Contraseña</FormLabel>
						<Input
							type="password"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
						/>
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
