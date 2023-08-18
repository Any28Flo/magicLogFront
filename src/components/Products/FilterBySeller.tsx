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

const FilterBySeller = (): JSX.Element => {
	return (
		<>

			<FormControl>
				<FormLabel>Selecciona Vendedor</FormLabel>
				<Select placeholder=''>
					<option value='option1'>Option 1</option>
					<option value='option2'>Option 2</option>
					<option value='option3'>Option 3</option>
				</Select>
			</FormControl>
			<button type="submit">Buscar</button>

		</>
	);
}

export default FilterBySeller;
