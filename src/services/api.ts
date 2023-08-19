import axios from 'axios';

const API_BASE_URL = 'https://magiclogback-production.up.railway.app/api'; // Replace with your API base URL

const api = axios.create({
	baseURL: API_BASE_URL,
});

export default api;
