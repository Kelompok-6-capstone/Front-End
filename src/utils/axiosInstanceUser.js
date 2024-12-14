import axios from 'axios';
import Cookies from 'js-cookie';

const axiosInstanceUser = axios.create({
    baseURL: import.meta.env.VITE_BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

// Tambahkan interceptor untuk menyisipkan token secara otomatis
axiosInstanceUser.interceptors.request.use(
    (config) => {
        const token = Cookies.get('token_user'); // Ambil token dari cookies
        if (token) {
            config.headers.Authorization = `Bearer ${token}`; // Sisipkan token di header
        }
        return config;
    },
    (error) => {
        // Tangani error pada saat konfigurasi request
        return Promise.reject(error);
    }
);

// Interceptor untuk menangani error response
axiosInstanceUser.interceptors.response.use(
    (response) => response, // Biarkan response yang berhasil
    (error) => {
        // Tangani error response
        if (error.response) {
            console.error(`Error ${error.response.status}:`, error.response.data);
        } else if (error.request) {
            console.error('No response received from server:', error.request);
        } else {
            console.error('Error setting up request:', error.message);
        }
        return Promise.reject(error);
    }
);

export default axiosInstanceUser;
