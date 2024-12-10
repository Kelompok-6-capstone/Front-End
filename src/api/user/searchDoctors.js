import Cookies from 'js-cookie';
import axios from 'axios';

const BASE_URL = 'https://api.calmind.site';

/**
 * Search doctors based on query (searching by username).
 * @param {string} query - The search term to find doctors.
 * @returns {Promise<Object>} Response data from the API.
 */
export const searchDoctors = async (query) => {
    try {
        const token = Cookies.get('token_user'); // Ambil token dari cookies
        if (!token) {
            throw new Error("Token tidak tersedia. Pastikan Anda sudah login.");
        }

        // Encode query to handle spaces and special characters
        const encodedQuery = encodeURIComponent(query);

        // Build the complete URL
        const url = `${BASE_URL}/user/doctors/search?query=${encodedQuery}`;

        // Make the request
        const response = await axios.get(url, {
            headers: {
                Authorization: `Bearer ${token}`, // Sertakan token di header
            },
        });

        return response.data;
    } catch (error) {
        if (error.response) {
            throw new Error(error.response.data.message || "Gagal mengambil data dokter.");
        } else if (error.request) {
            throw new Error("Tidak dapat terhubung ke server. Periksa koneksi internet Anda.");
        } else {
            throw new Error(error.message || "Terjadi kesalahan.");
        }
    }
};
