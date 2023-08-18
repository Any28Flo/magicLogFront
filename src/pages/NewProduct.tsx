import {
	Flex,
	Heading,
	FormControl,
	FormLabel,
	Input,
	FormHelperText,
	Button
} from '@chakra-ui/react';


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
			<Button variant='outline' colorScheme='teal' type="submit">
				Agregar
			</Button>
		</Flex >

	);
}

export default NewProduct;
