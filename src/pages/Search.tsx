
import {
	Flex,
	Heading,

} from '@chakra-ui/react';
import FilterBySeller from '../components/Products/FilterBySeller';
import FilterByProductProps from '../components/FilterByProductProps';
import List from '../components/Products/List';
import { useQuery } from 'react-query';
import { getProductsFilter } from '../services/useProduct';
import { useAppContext } from '../context/appContext';
import { useEffect, useState } from 'react';
import { filter } from 'lodash';

interface SearchProps {
	message: string;
	roleSearch: string
}

const initState = {
	sku: '',
	name: '',
	min: '',
	max: ''
}

const Search = ({ message, roleSearch }: SearchProps): JSX.Element => {
	const { token } = useAppContext();
	const [filter, setFilter] = useState(initState);

	const [productsList, setProducts] = useState([])

	const { data, isLoading, isError, refetch } = useQuery(
		['products', filter, token],
		async () => getProductsFilter(filter, token), {
		onSuccess: (newData) => {
			updateChildState(newData)
		},
	}
	);
	const updateChildState = (newState) => {
		setProducts(newState);
	};

	const handleSubmit = (dataFilter) => {
		refetch();
		setFilter(dataFilter)
	}

	if (isLoading) {
		return <div>Loading...</div>;
	}

	if (isError) {
		return <div>Error occurred while fetching products</div>;
	}
	return (
		<Flex justify='space-around' flexDirection='column' padding='6'>
			<Heading size='lg'>{message}</Heading>
			{
				roleSearch === 'admin' ?
					<FilterBySeller />
					:
					<FilterByProductProps handleSubmit={handleSubmit} />

			}
			<List products={productsList} updateChildState={updateChildState} isReadOnly={false} />
		</Flex>

	);
}

export default Search;
