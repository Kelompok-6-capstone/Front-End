import Cookies from 'js-cookie';
import axios from 'axios';

const BASE_URL = 'https://api.calmind.site';

/**
 * Fetch all doctors.
 * @returns {Promise<Object>} Response data from the API.
 */
export const fetchDoctors = async () => {
    try {
        const token = Cookies.get('token_user'); // Ambil token dari cookies
        if (!token) {
            throw new Error("Token tidak tersedia. Pastikan Anda sudah login.");
        }
        const response = await fetch(`${BASE_URL}/user/doctors`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`, // Sisipkan token di header
            },
        });
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return await response.json();
    } catch (error) {
        console.error("Failed to fetch doctors:", error);
        throw error;
    }
};


/**
 * Search doctors based on query.
 * @param {string} query - The search term to find doctors.
 * @returns {Promise<Object>} Response data from the API.
 */
export const searchDoctors = async (query) => {
    try {
        const token = Cookies.get('token_user'); // Ambil token dari cookies
        if (!token) {
            throw new Error("Token tidak tersedia. Pastikan Anda sudah login.");
        }

        const response = await axios.get(`${BASE_URL}/user/doctors/search`, {
            params: { query },
            headers: {
                Authorization: `Bearer ${token}`,
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