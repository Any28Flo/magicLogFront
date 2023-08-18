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
	Link,
	useDisclosure,
} from '@chakra-ui/react';
import { Outlet } from 'react-router-dom';
interface LayoutProps { }

const Layout: FC<LayoutProps> = () => {
	return (
		<Box bg='black' color='white' minH='100vh'>
			<Container
				as={Flex}
				flexDir='column'
				gap={{ base: '8', lg: '16' }}
				maxW='container.xl'
				p='4'
				pb='16'
			>
				<Flex align='center' justify='space-between'>
					<Image
						maxW={{ base: '40', lg: '64' }}
						src='https://burguerqueen11.web.app/static/media/Logo-BQ2.e31b9446.png'
						w='full'
					/>

				</Flex>
				<Outlet />
			</Container>


		</Box>
	);
}

export default Layout;
