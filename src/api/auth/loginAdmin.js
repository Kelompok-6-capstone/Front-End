import axiosInstance from "../../utils/axiosInstance";
import Cookies from "js-cookie";

export const loginAdmin = async (data) => {
  try {
    const response = await axiosInstance.post("/admin/login", data);
    if (response.data.data.token) {
      // Simpan token di cookie
      Cookies.set("token_admin", response.data.data.token, { path: "/", expires: 3 });
    }
    return response.data; // Return data yang bisa dipakai di komponen
  } catch (error) {
    throw error.response?.data?.message || "Terjadi kesalahan saat login.";
  }
};
