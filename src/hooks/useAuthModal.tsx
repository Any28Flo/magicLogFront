import React, { useState } from 'react';
import AuthModal, { AuthModalProps } from '../components/modal/AuthModal';
import { Button } from '@chakra-ui/react';

interface RegisterButton {
	children: React.JXS;
}
interface UseAuthModalOptions {
	customLoginOnAuth?: (email: string, password: string) => void;
	customRegisterOnAuth?: (email: string, password: string) => void;
}


export const useAuthModal = (options?: UseAuthModalOptions) => {
	const {
		customLoginOnAuth = (email: string, password: string) => {
			// Default login logic
			console.log('Default login:', email, password);
		},
		customRegisterOnAuth = (email: string, password: string) => {
			// Default register logic
			console.log('Default register:', email, password);
		},
	} = options || {};

	const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
	const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);

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
				onAuth={customLoginOnAuth}
				isLoginMode
			/>
			<AuthModal
				isOpen={isRegisterModalOpen}
				onClose={closeRegisterModal}
				onAuth={customRegisterOnAuth}
				isLoginMode={false}
			/>
		</>
	);

	return {
		LoginButton,
		RegisterButton,
		AuthModalComponent,
		closeLoginModal,
		closeRegisterModal
	};
};
