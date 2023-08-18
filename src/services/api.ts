import axios from 'axios';

const API_BASE_URL = 'http://localhost:8080/api'; // Replace with your API base URL

const api = axios.create({
	baseURL: API_BASE_URL,
});

export default api;
