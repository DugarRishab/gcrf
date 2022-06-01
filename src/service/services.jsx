import axios from 'axios';

const api = axios.create({
			// baseURL: "https://doubt-overflow-api.herokuapp.com/api/v1",
			baseURL: "http://localhost:8000/api/v1",
			// baseURL: "https://track-it-v2.herokuapp.com/api/v2",
		});

export const getReport = (email) => api.get(`/${email}`);
export const getLeaderboard = () => api.get("/");