
import {
	Flex,
	Heading,

} from '@chakra-ui/react';
import FilterBySeller from '../components/Products/FilterBySeller';
import FilterByProductProps from '../components/FilterByProductProps';
import List from '../components/Products/List';

interface SearchProps {
	message: string;
	roleSearch: string
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
const Search = ({ message, roleSearch }: SearchProps): JSX.Element => {
	return (
		<Flex justify='space-around' flexDirection='column' padding='6'>
			<Heading size='lg'>{message}</Heading>
			{
				roleSearch === 'admin' ?
					<FilterBySeller />
					:
					<FilterByProductProps />

			}
			<List products={productos} isReadOnly={false} />

		</Flex>

	);
}

export default Search;
