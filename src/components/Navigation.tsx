
import { Flex, Link } from '@chakra-ui/layout';
import navigationLinks from '../../routes/navigationLinks';
import { Link as RouterLink } from 'react-router-dom';


interface NavigationProps {
	userRole: string;
}


const Navigation: React.FC<NavigationProps> = ({ userRole }) => {

	const routes = navigationLinks[userRole] || []


	return (
		<Flex as='nav' flex='1' flexDir='column' gap='4'>
			{routes.map((route) => (
				<Flex gap='4' justify='space-between' key={route.label}>
					<Link
						as={RouterLink}
						key={route.path}
						to={route.path}
					>
						{route.label}
					</Link>

				</Flex>
			))}
		</Flex>
	);
}

export default Navigation;
