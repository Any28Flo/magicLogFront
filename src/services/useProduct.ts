import { filter } from 'lodash';
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
interface Filters {
	name: string,
	sku: string,
	min: string,
	max: string
}
interface FiltersAdmin {
	userId: string,
}
export const getProductsFilter = async (filters: Filters, token?: string | null,) => {
	const { sku, name, min, max } = filters;

	let query = '';

	if (name) {
		query += `keyword=${name}&`
	}
	if (sku) {
		query += `sku=${sku}&`;
	}

	if (min) {
		query += `min=${min}&`;
	}
	if (max) {
		query += `max=${max}&`;
	}


	const response = await api.get(`/products/lista-custom-products?${query}&sort=desc`, {
		headers: {
			'magic-log-token': token ?? ''
		}
	});
	return response.data.products;
};
export const getProductsAdmin = async (filter: string, token?: string | null,) => {

	let query = '';

	if (filter !== '') {
		query += `?userId=${filter}`
	}
	const response = await api.get(`/products/lista-productos-admin${query}`, {
		headers: {
			'magic-log-token': token ?? ''
		}
	});

	return response.data.products;
};

