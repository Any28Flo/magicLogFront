import {
	Flex,
	Heading,
	FormControl,
	FormLabel,
	Input,
	FormHelperText,
	useToast,
	Button,
} from '@chakra-ui/react';
import { Form, useNavigate, useSubmit } from "react-router-dom";
import { useAppContext } from '../context/appContext';
import { useState } from 'react';
import { Product } from './ProductsByUser';


import { useMutation } from 'react-query';
import { registerProduct } from '../services/useProduct';

const initState: Product = {
	sku: '',
	name: '',
	price: 0,
	quantity: 0
}
const NewProduct = () => {
	const toast = useToast();
	const navigate = useNavigate();
	const { dispatch, user, token } = useAppContext();

	const [formData, setFormData] = useState<Product>(initState);

	const createProductMutation = useMutation({
		mutationFn: async (formData: Product) => {
			return await registerProduct(formData, token);
		},
		onSuccess: (data) => {
			toast({
				title: data.msg,
				status: 'success',
				duration: 4000,
				isClosable: true,
			});

		},
		onError: (error) => {
			toast({
				title: error?.response?.data?.errors[0]?.msg,
				status: 'error',
				duration: 4000,
				isClosable: true,
			});
		},
	});
	const onSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		try {
			await createProductMutation.mutateAsync(formData);
			setFormData(initState);
		} catch (error) {

		}

	};
	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setFormData(prevData => ({ ...prevData, [name]: value }));
	};


	return (
		<form onSubmit={onSubmit}>
			<Flex justify='space-around' flexDirection='column' padding='6'>
				<Heading size='lg'>Nuevo Producto</Heading>

				<FormControl>
					<FormLabel>Nombre</FormLabel>
					<Input
						type='text'
						id="name"
						name="name"
						value={formData.name}
						onChange={handleChange}
					/>
				</FormControl>
				<FormControl>
					<FormLabel>SKU</FormLabel>
					<Input
						type='text'
						id="sku"
						name="sku"
						value={formData.sku}
						onChange={handleChange}
					/>
				</FormControl>
				<FormControl>
					<FormLabel>Cantidad</FormLabel>
					<Input
						type='number'
						id="quantity"
						name="quantity"
						value={formData.quantity}
						onChange={handleChange}
					/>
				</FormControl>
				<FormControl>
					<FormLabel>Precio</FormLabel>
					<Input
						type='number'
						id="price"
						name="price"
						value={formData.price}
						onChange={handleChange}
					/>
				</FormControl>
				<Button type="submit" colorScheme="blue">
					Registrar
				</Button>
			</Flex>
		</form>

	);
}

export default NewProduct;
