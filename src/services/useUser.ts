import api from "./api";

export const getUsersByRol = async (role: string, token?: string | null) => {

	const response = await api.get(`/users/users-by-rol?role=${role}`, {
		headers: {
			'magic-log-token': token ?? ''
		}
	});
	return response.data.users;
};
