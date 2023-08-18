import api from './api';
interface User {
	email: string;
	password: string;
	role: string
}
export const register = async (userData: User) => {

	const response = await api.post('/users', userData);

	return response.data;
};
