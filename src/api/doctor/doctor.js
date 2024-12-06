import axiosInstanceDoctor from "../../utils/axiosInstanceDoctor";

// Fungsi untuk login dokter
export const loginDoctor = async (data) => {
  try {
    const response = await axiosInstanceDoctor.post("/doctor/login", data);
    console.log("Login response:", response); // Log respons server

    // Periksa apakah token ada di response.data.data.token
    const token = response.data?.data?.token;
    if (token) {
      // Simpan token di localStorage
      localStorage.setItem("token_doctor", token);
      console.log("Token berhasil disimpan di localStorage:", token);
    } else {
      console.error("Token tidak ditemukan dalam respons login.");
    }

    return response.data;
  } catch (error) {
    const errorMessage =
      error.response?.data?.message ||
      error.message ||
      "Terjadi kesalahan saat login.";
    throw errorMessage;
  }
};

// Fungsi untuk mengambil profil dokter
export const getProfileDoctor = async () => {
  try {
    const response = await axiosInstanceDoctor.get("/doctor/profile");
    console.log("Profile response:", response); // Log the entire response for better inspection

    if (response.status === 200 && response.data && response.data.data) {
      return response.data; // Valid structure, return the response
    } else {
      throw new Error("Data profile tidak ditemukan.");
    }
  } catch (error) {
    console.error("Error fetching profile:", error); // Log error details
    throw (
      error.response?.data?.message ||
      error.message ||
      "Terjadi kesalahan saat mengambil profil."
    );
  }
};

// Fungsi untuk memperbarui profil dokter
export const updateProfileDoctor = async (data) => {
  try {
    const response = await axiosInstanceDoctor.put("/doctor/profile", data);
    return response.data; // Mengembalikan data respons jika berhasil
  } catch (error) {
    throw (
      error.response?.data?.message ||
      "Terjadi kesalahan saat memperbarui profil."
    );
  }
};

// Fungsi untuk logout dokter
export const logoutDoctor = async () => {
  try {
    const response = await axiosInstanceDoctor.get("/doctor/logout");
    // Menghapus token setelah logout
    localStorage.removeItem("token_doctor");
    return response.data; // Kembalikan data respons
  } catch (error) {
    throw error.response?.data?.message || "Terjadi kesalahan saat logout.";
  }
};

// Fungsi untuk melakukan register dokter
export const registerDoctor = async (data) => {
  try {
    const response = await axiosInstanceDoctor.post("/doctor/register", data);
    return response.data; // Kembalikan data respons
  } catch (error) {
    throw error.response?.data?.message || "Terjadi kesalahan saat mendaftar.";
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

export const getConsultations = async () => {
  try {
    const response = await axiosInstanceDoctor.get("/doctor/consultations");
    return response.data; // Mengembalikan data dari response API
  } catch (error) {
    console.error('Error fetching consultations:', error);
    throw error; // Melempar error jika gagal mengambil data
  }
};