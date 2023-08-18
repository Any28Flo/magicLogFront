import React from 'react';
import AuthModal, { AuthModalProps } from '../components/modal/AuthModal';
import { Button } from '@chakra-ui/react';

interface RegisterButton {
	children: React.JXS;
}


export const useAuthModal = () => {
	const [isLoginModalOpen, setIsLoginModalOpen] = React.useState(false);
	const [isRegisterModalOpen, setIsRegisterModalOpen] = React.useState(false);

	const openLoginModal = () => {
		setIsLoginModalOpen(true);
	};

	const closeLoginModal = () => {
		setIsLoginModalOpen(false);
	};

	const openRegisterModal = () => {
		setIsRegisterModalOpen(true);
	};

	const closeRegisterModal = () => {
		setIsRegisterModalOpen(false);
	};

	const LoginButton = ({ children }: RegisterButton) => (
		<Button variant='solid' colorScheme='teal' onClick={openLoginModal}>
			{children}
		</Button>
	);

	const RegisterButton = ({ children }: RegisterButton) => (
		<Button variant='outline' colorScheme='teal' onClick={openRegisterModal}>
			{children}
		</Button>
	);

	const AuthModalComponent: React.FC = () => (
		<>
			<AuthModal
				isOpen={isLoginModalOpen}
				onClose={closeLoginModal}
				onAuth={(email, password) => {
					// Implement your login logic here
					console.log('Logging in with:', email, password);
					closeLoginModal();
				}}
				isLoginMode
			/>
			<AuthModal
				isOpen={isRegisterModalOpen}
				onClose={closeRegisterModal}
				onAuth={(email, password) => {
					// Implement your register logic here
					console.log('Registering with:', email, password);
					closeRegisterModal();
				}}
				isLoginMode={false}
			/>
		</>
	);

	return {
		LoginButton,
		RegisterButton,
		AuthModalComponent,
	};
};
