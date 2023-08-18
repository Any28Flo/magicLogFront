import type { FC } from 'react';
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
import { Product } from '../../pages/ProductsByUser';

interface ListProps {
	products: Product[]
	isReadOnly: boolean
}

const List: FC<ListProps> = ({ products, isReadOnly }) => {

	return (
		<TableContainer overflowY='scroll'>
			<Table variant='simple'>
				<Thead>
					<Tr>
						<Th color='white'>Nombre</Th>
						<Th color='white'>SKU</Th>
						<Th color='white'>Cantidad</Th>
						<Th color='white'>Precio</Th>
					</Tr>
				</Thead>
				<Tbody>
					{products.map((product: Product) => (
						<Tr key={product.sku}>
							<Td>{product.name}</Td>
							<Td>{product.sku}</Td>
							<Td>{product.quantity}</Td>
							<Td>{product.price}</Td>
						</Tr>
					))}
				</Tbody>
			</Table>
		</TableContainer>
	);
}

export default List;
