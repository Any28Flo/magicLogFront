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
	updateChildState: () => void
}

const List: FC<ListProps> = ({ products = [], isReadOnly, updateChildState }) => {

	return (
		<>
			{(products?.length === 0) ? <h1>Aun no tienes productos</h1> :
				<TableContainer overflowY='scroll'>
					<Table variant='simple'>
						<Thead>
							<Tr>
								<Th color='teal.400'>Nombre</Th>
								<Th color='teal.400'>SKU</Th>
								<Th color='teal.400'>Cantidad</Th>
								<Th color='teal.400'>Precio</Th>
							</Tr>
						</Thead>
						<Tbody>
							{
								products.map((product: Product) => (
									<Tr key={product.sku}>
										<Td>{product.name}</Td>
										<Td>{product.sku}</Td>
										<Td>{product.amount}</Td>
										<Td>${product.price}</Td>
									</Tr>
								))}
						</Tbody>
					</Table>
				</TableContainer>}
		</>


	);
}

export default List;
