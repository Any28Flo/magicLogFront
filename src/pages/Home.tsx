import { Flex, Box } from '@chakra-ui/react';
import type { FC } from 'react';
import { Outlet } from 'react-router-dom';
import Navigation from '../components/Navigation';
import { useAppContext } from '../context/appContext';

interface HomeProps { }

const Home: FC<HomeProps> = () => {
	const { user } = useAppContext();
	const { role } = user;
	return (

		<>
			<Flex
				direction="row"
				height="100vh" // Set the height of the grid to fill the viewport
			>
				<Box bg="gray.200" color='gray.800' flex="1" maxW='sm' borderWidth='1px' borderRadius='lg' >
					{/* TODO : Add menu */}
					<h2>Menu</h2>
					<Navigation userRole={role} />
				</Box>
				<Box flex="4" bg='gray.300' color='gray.800' borderWidth='1px' borderRadius='lg' padding='6'>
					<Flex bg='gray.300' color='gray.800' justify='space-around' flexDirection='column'>
						<Outlet />
					</Flex>
				</Box>
			</Flex>

		</>
	);
}

export default Home;
