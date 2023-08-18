import { Product } from '../pages/ProductsByUser';
import api from './api';


export const registerProduct = async (product: Product, token: string | null) => {

	const response = await api.post('/products', product, {
		headers: {
			'magic-log-token': token ?? ''
		}
	});
	return response.data;
};

export const getProductsByUser = async (token: string | null) => {

	const response = await api.get('/products', {
		headers: {
			'magic-log-token': token ?? ''
		}
	});
	return response.data.products;
};
