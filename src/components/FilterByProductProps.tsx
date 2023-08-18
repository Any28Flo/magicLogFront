import type { FC } from 'react';

import {
	Flex,
	Heading,
	FormControl,
	FormLabel,
	Input,
	Select,
	NumberInput,
	NumberInputField,
	NumberInputStepper,
	NumberIncrementStepper,
	NumberDecrementStepper
} from '@chakra-ui/react';
interface FilterByProductPropsProps { }

const FilterByProductProps = (): JSX.Element => {
	return (
		<>
			<FormControl>
				<FormLabel>Nombre</FormLabel>
				<Input type='text' />
			</FormControl>
			<FormControl>
				<FormLabel>SKU</FormLabel>
				<Select placeholder='Select option'>
					<option value='option1'>Option 1</option>
					<option value='option2'>Option 2</option>
					<option value='option3'>Option 3</option>
				</Select>
			</FormControl>
			<FormControl>
				<FormLabel>Min</FormLabel>
				<NumberInput>
					<NumberInputField />
					<NumberInputStepper>
						<NumberIncrementStepper />
						<NumberDecrementStepper />
					</NumberInputStepper>
				</NumberInput>
			</FormControl>
			<FormControl>
				<FormLabel>Max</FormLabel>
				<NumberInput>
					<NumberInputField />
					<NumberInputStepper>
						<NumberIncrementStepper />
						<NumberDecrementStepper />
					</NumberInputStepper>
				</NumberInput>
			</FormControl>
			<button type="submit">Buscar</button>
		</>
	);
}

export default FilterByProductProps;
