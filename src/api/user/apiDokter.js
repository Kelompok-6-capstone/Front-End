import Cookies from 'js-cookie';

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
