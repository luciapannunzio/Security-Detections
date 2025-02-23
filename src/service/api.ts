import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL;
const AUTH_TOKEN = import.meta.env.VITE_AUTH_TOKEN;

if (import.meta.env.MODE === 'development') {
    console.log('API URL:', API_URL ? 'Loaded' : 'Missing');
}
export const fetchDetections = async (page = 0, limit = 100, query = '') => {
    try {
        const response = await axios.get(`${API_URL}?page=${page}&limit=${limit}&query=${query}`, {
            headers: {
                Authorization: AUTH_TOKEN,
                'Content-Type': 'application/json',
            },
        });
        return response.data;
    } catch (error: any) {
        console.log('error fetching detections', error);
        throw new Error(
            error.response?.status === 401 ? 'Authentication failed' :
                error.response?.status === 500 ? 'Server error' : 'Unexpected error'
        );
    }
}