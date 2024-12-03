import axiosInstance from "../../utils/axiosInstance";

/**
 * Fungsi untuk mengirim ulang OTP.
 * @param {Object} data - Data pengguna (email).
 * @returns {Promise} - Response dari server.
 */
export const resendOtp = async ({ email }) => {
    try {
        const response = await axiosInstance.post("/user/resend-otp", { email });
        return response.data;
    } catch (error) {
        console.error("Resend OTP error:", error.response || error.message);
        throw error.response?.data?.message || "Gagal mengirim ulang kode OTP.";
    }
};
