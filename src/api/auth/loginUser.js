import axiosInstance from "../../utils/axiosInstance";

/**
 * Fungsi untuk melakukan login pengguna.
 * @param {Object} data - Data pengguna (email, password).
 * @returns {Promise} - Response dari server.
 */
export const loginUser = async (data) => {
    try {
        const response = await axiosInstance.post("/user/login", data);
        return response.data; // Kembalikan data yang diterima
    } catch (error) {
        throw error.response?.data?.message || "Terjadi kesalahan saat login.";
    }
};
