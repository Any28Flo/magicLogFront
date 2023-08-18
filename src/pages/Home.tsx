import { Flex, Box } from '@chakra-ui/react';
import type { FC } from 'react';
import { Outlet } from 'react-router-dom';

interface HomeProps { }

const Home: FC<HomeProps> = () => {
	return (

		<>
			<Flex
				direction="row"
				height="100vh" // Set the height of the grid to fill the viewport
			>
				<Box bg="blue.500" flex="1" >
					{/* First row */}
					Row 1
				</Box>
				<Box bg="green.500" flex="4" >
					<Outlet />
				</Box>
			</Flex>

		</>
	);
}

export default Home;
