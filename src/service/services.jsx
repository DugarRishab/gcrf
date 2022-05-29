import axios from 'axios';

const api = axios.create({
			// baseURL: "https://doubt-overflow-api.herokuapp.com/api/v1",
			baseURL: "https://jsonplaceholder.typicode.com",
			// baseURL: "https://track-it-v2.herokuapp.com/api/v2",
		});

export const getReport = () => api.get('/users');
export const getTodo = () => api.get("/posts");