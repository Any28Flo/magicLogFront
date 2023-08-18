import api from './api';
export interface User {
	email?: string;
	password?: string;
	role?: string
}

export const register = async (userData: User) => {

	const response = await api.post('/users', userData);
	return response.data;
};
export const login = async (userData: User) => {

	const response = await api.post('/auth/login', userData);
	return response.data;
};
