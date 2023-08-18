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
import type { FC } from 'react';
import List from '../components/Products/List';

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
const Products: FC<ProductosProps> = () => {
	return (

		<Flex justify='space-around' flexDirection='column' padding='6'>
			<Heading size='lg'>Productos</Heading>
			<List products={productos} />
		</Flex>


	);
}

export default Products;
