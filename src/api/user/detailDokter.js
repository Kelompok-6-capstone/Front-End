import Cookies from "js-cookie";
import axios from "axios";

const BASE_URL = "https://api.calmind.site";

/**
 * Fetch doctor details by ID.
 * @param {number} id - Doctor's ID.
 * @returns {Promise<Object>} Doctor's details.
 */
export const fetchDoctorById = async (id) => {
    try {
        if (!id || typeof id !== "number") {
            throw new Error("Parameter ID tidak valid. Pastikan ID adalah angka.");
        }

        const token = Cookies.get("token_user");
        if (!token) {
            throw new Error("Token tidak tersedia. Pastikan Anda sudah login.");
        }

        const url = `${BASE_URL}/user/doctors/${id}`;
        const response = await axios.get(url, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });

        return response.data;
    } catch (error) {
        if (error.response) {
            throw new Error(error.response.data.message || "Gagal mengambil detail dokter.");
        } else if (error.request) {
            throw new Error("Tidak dapat terhubung ke server. Periksa koneksi internet Anda.");
        } else {
            throw new Error(error.message || "Terjadi kesalahan yang tidak diketahui.");
        }
    }
};
