import type { FC } from 'react';
import {
	Box,
	Button,
	Container,
	Drawer,
	DrawerBody,
	DrawerContent,
	Flex,
	IconButton,
	Image,
	Text,
	Link,
	useDisclosure,
} from '@chakra-ui/react';
import { Outlet } from 'react-router-dom';

import { useAppContext } from '../context/appContext';
import { useNavigate } from 'react-router-dom';

import Store from '../assets/store.png';


const Layout = () => {
	const { dispatch, user } = useAppContext();
	const navigate = useNavigate();
	const logout = () => {
		dispatch({
			type: 'logout'

		})
		localStorage.removeItem('token');
		localStorage.removeItem('user');
		navigate('/');
	};
	return (
		<Box bg="gray-100" color='white' minH='100vh'>
			<Container
				as={Flex}
				flexDir='column'
				gap={{ base: '8', lg: '16' }}
				maxW='container.xl'
				p='4'
				pb='16'
				color='gray.800'
			>
				<Flex align='center' justify='space-between'>
					<Image
						maxW={{ base: '20', lg: '20' }}
						src={Store}
						w='full'
					/>
					{
						user &&
						<>
							<Text> Usuario : {user.email}</Text>
							<Button
								colorScheme='teal'
								onClick={logout}
								size='lg'
								variant='outline'
								_hover={{
									bg: 'teal.400',
									borderColor: 'teal.400',
									color: 'white',
									fontWeight: 'semibold',
								}}
							>
								Cerrar sesión
							</Button>
						</>
					}
				</Flex>
				<Outlet />
			</Container>


		</Box>
	);
}

export default Layout;
