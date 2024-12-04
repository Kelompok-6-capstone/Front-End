import axiosInstance from "../../utils/axiosInstance";
import Cookies from "js-cookie";

export const loginAdmin = async (data) => {
  try {
    const response = await axiosInstance.post("/admin/login", data);
    if (response.data.data.Token) {
      // Simpan token di cookie
      Cookies.set("token_admin", response.data.data.Token, { path: "/", expires: 7 }); // Berlaku 7 hari
    }
    return response.data; // Return data yang bisa dipakai di komponen
  } catch (error) {
    throw error.response?.data?.message || "Terjadi kesalahan saat login.";
  }
};
