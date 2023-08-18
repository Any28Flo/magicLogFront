import {
	Flex,
	Heading,
	FormControl,
	FormLabel,
	Input,
	FormHelperText
} from '@chakra-ui/react';
import { Form, useSubmit } from "react-router-dom";


const NewProduct = () => {
	return (
		<Flex justify='space-around' flexDirection='column' padding='6'>
			<Heading size='lg'>Nuevo Producto</Heading>

			<FormControl>
				<FormLabel>Nombre</FormLabel>
				<Input type='text' />
			</FormControl>
			<FormControl>
				<FormLabel>SKU</FormLabel>
				<Input type='text' />
			</FormControl>
			<FormControl>
				<FormLabel>Cantidad</FormLabel>
				<Input type='number' />
			</FormControl>
			<FormControl>
				<FormLabel>Precio</FormLabel>
				<Input type='number' />
			</FormControl>
			<button type="submit">Create</button>
		</Flex>

	);
}

export default NewProduct;
