import axiosInstance from "../../utils/axiosInstance";

/**
 * Fungsi untuk melakukan register pengguna.
 * @param {Object} data - Data pengguna (username, email, no_hp, password).
 * @returns {Promise} - Response dari server.
 */
export const registerUser = async (data) => {
    try {
        const response = await axiosInstance.post("/user/register", data);
        return response.data; // Kembalikan data yang diterima
    } catch (error) {
        throw error.response?.data?.message || "Terjadi kesalahan saat mendaftar.";
    }
};
