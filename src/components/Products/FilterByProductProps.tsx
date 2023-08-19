import { useState } from 'react';

import {
	Flex,
	Heading,
	Button,
	SimpleGrid,
	FormControl,
	FormLabel,
	Input,
	Select,
	NumberInput,
	NumberInputField,
	NumberInputStepper,
	NumberIncrementStepper,
	NumberDecrementStepper,
} from '@chakra-ui/react';
import { parse, format } from '../../utils';
import { getProductsFilter } from '../../services/useProduct';
import { useAppContext } from '../../context/appContext';
import { Product } from '../../pages/ProductsByUser';
import { useQuery } from 'react-query';

interface FilterByProductProps {
	handleSubmit: (filter: any) => void
}

const initState = {
	sku: '',
	name: '',
}

const FilterByProductProps = ({ handleSubmit }: FilterByProductProps): JSX.Element => {

	const [min, setMin] = useState('0')
	const [max, setMax] = useState('2000')

	const [filterData, setFilterData] = useState(initState);


	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		if (name === 'min') setFilterData(prevData => ({ ...prevData, [name]: parse(value) }));

		setFilterData(prevData => ({ ...prevData, [name]: value }));
	};



	const onSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		handleSubmit({ min, max, ...filterData })
		setFilterData(initState)
	};


	return (
		<SimpleGrid columns={2} spacing={10}>
			<form onSubmit={onSubmit}>
				<FormControl>
					<FormLabel>Nombre</FormLabel>
					<Input
						id="name"
						type='text'
						name="name"
						value={filterData.name}
						onChange={handleChange}
					/>
				</FormControl>
				<FormControl>
					<FormLabel>SKU</FormLabel>
					<Input
						id="sku"
						type='text'
						name="sku"
						value={filterData.sku}
						onChange={handleChange} />
				</FormControl>
				<FormControl>
					<FormLabel>Min</FormLabel>
					<NumberInput
						id="min"

						min={0}
						name="min"
						onChange={(minString) => setMin(parse(minString))}
						max={1000}
						value={format(min)}
					>
						<NumberInputField />
						<NumberInputStepper>
							<NumberIncrementStepper />
							<NumberDecrementStepper />
						</NumberInputStepper>
					</NumberInput>
				</FormControl>
				<FormControl>
					<FormLabel>Max</FormLabel>
					<NumberInput
						id="max"

						min={10}
						name="max"
						onChange={(maxString) => setMax(parse(maxString))}
						max={3000}
						value={format(max)}>
						<NumberInputField />
						<NumberInputStepper>
							<NumberIncrementStepper />
							<NumberDecrementStepper />
						</NumberInputStepper>
					</NumberInput>
				</FormControl>
				<Button type="submit" colorScheme="blue">
					Buscar
				</Button>
			</form>
		</SimpleGrid >
	);
}

export default FilterByProductProps;
