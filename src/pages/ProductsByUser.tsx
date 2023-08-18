import {
	Flex,
	Heading,
	TableContainer,
	Table,
	Thead,
	Tr,
	Th,
	Tbody,
	Td,
	IconButton,
} from '@chakra-ui/react';
import { useEffect, type FC } from 'react';
import List from '../components/Products/List';
import { useAppContext } from '../context/appContext';
import { useQuery } from 'react-query';
import { getProductsByUser } from '../services/useProduct';

export interface Product {
	sku: string;
	name: string;
	price: number;
	amount: number;
}
export interface ProductResponse {
	msg: string,
	products: Product[]
}
const ProductsByUser = () => {
	const { token } = useAppContext();
	const { isLoading, error, data: products } = useQuery(['product', token], () => getProductsByUser(token))


	if (isLoading) return 'Loading...'

	if (error) return 'An error has occurred: ' + error.message



	return (
		<>
			<Heading size='lg'>Productos</Heading>
			<List products={products} isReadOnly={false} />
		</>

	);
}

export default ProductsByUser;
