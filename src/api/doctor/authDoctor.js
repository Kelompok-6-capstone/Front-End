import axiosInstanceDoctor from "../../utils/axiosInstanceDoctor";
import Cookies from "js-cookie";
import Swal from "sweetalert2";

export const registerDoctor = async (data) => {
  try {
    const response = await axiosInstanceDoctor.post("/doctor/register", data);
    return response.data;
  } catch (error) {
    throw error.response?.data?.message || "Terjadi kesalahan saat mendaftar.";
  }
};

// Fungsi untuk memverifikasi OTP
export const verifyDoctorOtp = async ({ email, code }) => {
  try {
    const response = await axiosInstanceDoctor.post("/doctor/verify-otp", {
      email,
      code,
    });
    return response.data;
  } catch (error) {
    throw error.response?.data?.message || "Gagal memverifikasi OTP.";
  }
};

// Fungsi untuk mengirim ulang OTP
export const resendDoctorOtp = async ({ email }) => {
  try {
    const response = await axiosInstanceDoctor.post("/doctor/resend-otp", {
      email,
    });
    return response.data;
  } catch (error) {
    throw error.response?.data?.message || "Gagal mengirim ulang kode OTP.";
  }
};

// Fungsi untuk login dokter
export const loginDoctor = async (data) => {
  try {
    const response = await axiosInstanceDoctor.post("/doctor/login", data);
    if (response.data.data.token) {
      Cookies.set("token_doctor", response.data.data.token, {
        path: "/",
        expires: 3,
      });
    }
    return response.data;
  } catch (error) {
    throw error.response?.data?.message || "Terjadi kesalahan saat login.";
  }
};

// Fungsi untuk logout dokter
export const logoutDoctor = async () => {
  try {
    const token = Cookies.get("token_doctor");
    await axiosInstanceDoctor.get("/doctor/logout", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    Cookies.remove("token_doctor");
    // SweetAlert untuk menampilkan notifikasi logout berhasil
    Swal.fire({
      icon: "success",
      title: "Logout Berhasil",
    }).then(() => {
      window.location.href = "/";
    });
  } catch (error) {
    Swal.fire({
      icon: "error",
      title: "Logout Gagal",
      text:
        error.response?.data?.message ||
        "Terjadi kesalahan saat logout. Silakan coba lagi.",
    });
  }
};
