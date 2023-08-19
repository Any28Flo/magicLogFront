
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
import { useState } from 'react';


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


	const { data: dataAdmin, isLoading: isLoadingDataAdmin, isError: isErrorLoadingDataAdmin, refetch } = useQuery(
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


	return (
		<Flex justify='space-around' flexDirection='column' padding='6'>
			<Heading size='lg'>{message}</Heading>

			<FilterByProductProps handleSubmit={handleSubmit} />
			<List products={productsList} updateChildState={updateChildState} isReadOnly={false} />

		</Flex >
	);
}

export default Search;
