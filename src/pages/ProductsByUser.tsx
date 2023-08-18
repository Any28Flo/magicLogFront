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

export interface Product {
	sku: string;
	name: string;
	price: number;
	quantity: number;
}
interface ProductosProps {

}

const productos = [
	{
		sku: 'MEX-01',
		name: 'BOLSA',
		price: 10002,
		quantity: 2
	},
	{
		sku: 'MEX-02',
		name: 'BOLSA-02',
		price: 10002,
		quantity: 2
	},
	{
		sku: 'MEX-03',
		name: 'BOLSA-03',
		price: 10002,
		quantity: 2
	}
]
const ProductsByUser = () => {
	const { token, products } = useAppContext();
	const { isLoading, error, data } = useQuery('repoData', () =>
		fetch('https://api.github.com/repos/tannerlinsley/react-query').then(res =>
			res.json()
		)
	)
	console.log(products)

	if (isLoading) return 'Loading...'

	if (error) return 'An error has occurred: ' + error.message

	if (!products) {

	}

	return (
		<Flex justify='space-around' flexDirection='column' padding='6'>
			<Heading size='lg'>Productos</Heading>
			<List products={productos} isReadOnly={false} />
		</Flex>

	);
}

export default ProductsByUser;
