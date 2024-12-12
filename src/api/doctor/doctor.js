import axiosInstanceDoctor from "../../utils/axiosInstanceDoctor";
import Cookies from "js-cookie";
import Swal from "sweetalert2";

export const loginDoctor = async (data) => {
  try {
    const response = await axiosInstanceDoctor.post("/doctor/login", data);

    // Ambil token dari response
    const token = response.data?.data?.token;

    if (token) {
      // Simpan token di localStorage
      localStorage.setItem("token_doctor", token);
      // console.log("Token berhasil disimpan di localStorage:", token);

      // Simpan token di cookie
      Cookies.set("token_doctor", token, {
        path: "/",
        expires: 3, // Token akan kedaluwarsa dalam 3 hari
      });
    } else {
      console.error("Token tidak ditemukan dalam respons login.");
    }

    return response.data; // Return data yang bisa dipakai di komponen
  } catch (error) {
    throw error.response?.data?.message || "Terjadi kesalahan saat login.";
  }
};

// Fungsi untuk mengambil profil dokter
export const getProfileDoctor = async () => {
  try {
    const token = Cookies.get("token_doctor");
    if (!token) {
      throw new Error("No admin token found");
    }

    const response = await axiosInstanceDoctor.get("/doctor/profile", {
      headers: { Authorization: `Bearer ${token}` },
    });

    if (response.status === 200 && response.data && response.data.data) {
      return response.data;
    } else {
      throw new Error("Data profile tidak ditemukan.");
    }
  } catch (error) {
    console.error("Error fetching profile:", error);
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
    const token = Cookies.get("token_doctor");
    if (!token) {
      throw new Error("Token dokter tidak ditemukan.");
    }

    const response = await axiosInstanceDoctor.put("/doctor/profile", data, {
      headers: { Authorization: `Bearer ${token}` },
    });

    if (response.status === 200 && response.data) {
      console.log("Profil berhasil diperbarui");
      return response.data;
    } else {
      throw new Error(
        "Data profil tidak ditemukan atau gagal memperbarui profil."
      );
    }
  } catch (error) {
    console.error(
      "Error updating profile:",
      error.response ? error.response.data : error.message
    );
    throw (
      error.response?.data?.message ||
      error.message ||
      "Terjadi kesalahan saat memperbarui profil."
    );
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
      title: "Berhasil",
      text: "Anda telah berhasil logout!",
      showConfirmButton: false,
      timer: 1500,
    });
  } catch (error) {
    // Tangani error dan tampilkan pesan error
    Swal.fire({
      icon: "error",
      title: "Gagal",
      text: error.response?.data?.message || "Terjadi kesalahan saat logout.",
      showConfirmButton: true,
    });
  }
};

// Fungsi untuk melakukan register dokter
export const registerDoctor = async (data) => {
  try {
    const response = await axiosInstanceDoctor.post("/doctor/register", data);
    return response.data;
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

// Fungsi untuk mendapatkan data title (gelar)
export const getTitles = async () => {
  try {
    const response = await axiosInstanceDoctor.get("/doctor/titles");
    return response.data.data || [];
  } catch (error) {
    console.error("Error fetching titles:", error);
    throw "Terjadi kesalahan saat mengambil data gelar.";
  }
};

// Fungsi untuk mendapatkan data tags (spesialis)
export const getTags = async () => {
  try {
    const response = await axiosInstanceDoctor.get("/doctor/tags");
    return response.data.data || [];
  } catch (error) {
    console.error("Error fetching tags:", error);
    throw "Terjadi kesalahan saat mengambil data spesialis.";
  }
};


export const getDoctorStatus = async () => {
  try {
    const response = await axiosInstanceDoctor.get("/doctor/profile");
    console.log("Respons API getDoctorStatus:", response.data); // Logging respons
    return response;
  } catch (error) {
    console.error("Error pada getDoctorStatus:", error.response?.data || error.message);
    throw error;
  }
};


export const updateDoctorStatus = async (isActive) => {
  console.log("Mengirim data ke API:", { is_active: isActive });
  return await axiosInstanceDoctor.put("/doctor/profile", { is_active: isActive });
};


// Fungsi untuk mengambil daftar konsultasi dokter
export const getConsultations = async () => {
  try {
    const response = await axiosInstanceDoctor.get("/doctor/consultations");
    return response.data;
  } catch (error) {
    console.error("Error fetching consultations:", error);
    throw error;
  }
};
