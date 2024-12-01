import axiosInstance from "../../utils/axiosInstance";

/**
 * Fungsi untuk memverifikasi OTP.
 * @param {Object} data - Data OTP (email, code).
 * @returns {Promise} - Response dari server.
 */
export const verifyOtp = async ({ email, code }) => {
    console.log("Mengirim data ke API:", { email, code });
    try {
        const response = await axiosInstance.post("/user/verify-otp", { email, code });
        console.log("Respons dari server:", response.data);
        return response.data;
    } catch (error) {
        console.error("Error dari API:", error.response || error.message);
        throw error.response?.data?.message || "Gagal memverifikasi OTP.";
    }
};
