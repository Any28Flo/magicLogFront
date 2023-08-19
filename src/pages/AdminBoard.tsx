import { Flex, Heading, } from '@chakra-ui/react';
import { useState } from 'react';

import { useAppContext } from '../context/appContext';
import { getProductsAdmin } from '../services/useProduct';
import FilterBySeller from '../components/Products/FilterBySeller';
import List from '../components/Products/List';
import { useQuery } from 'react-query';
import { getUsersByRol } from '../services/useUser';

interface AdminBoardProps { }

const initState = {
	userId: '',
}

const AdminBoard = () => {
	const { token } = useAppContext();
	const [filter, setFilter] = useState('');
	const [role, setRole] = useState('vendedor');
	const [productsList, setProducts] = useState([]);
	const [users, setUsers] = useState([]);

	const { data: dataAdmin, isLoading: isLoadingDataAdmin, isError: isErrorLoadingDataAdmin, refetch } = useQuery(
		['products', filter, token],
		async () => await getProductsAdmin(filter, token), {
		onSuccess: (products) => {
			updateProductsState(products)
		},
	}
	);
	const { data: usersList, isLoading: isLoadingUsersList, isError: isErrorLoadingUsersList } = useQuery(
		['sellers', role, token],
		async () => await getUsersByRol(role, token), {
		onSuccess: (products) => {
			updateChildState(products)
		},
	}
	);
	const updateChildState = (newState) => {
		setUsers(newState);
	};
	const updateProductsState = (newState) => {

		setProducts(newState);
	};

	const handleSubmit = (dataFilter) => {
		setFilter(dataFilter)
		refetch();
	}

	return (
		<Flex justify='space-around' flexDirection='column' padding='6' gap='6'>
			<Heading size='lg'>Productos por usuario</Heading>
			<FilterBySeller users={users} handleSubmit={handleSubmit} />
			<List products={productsList} updateChildState={updateChildState} isReadOnly={false} />
		</Flex>
	);
}

export default AdminBoard;
