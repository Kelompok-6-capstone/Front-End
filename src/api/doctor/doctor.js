import axiosInstanceDoctor from "../../utils/axiosInstanceDoctor";
import Cookies from "js-cookie";
import Swal from "sweetalert2";

// Fungsi untuk melakukan register dokter
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
      title: "Logout Berhasil",
    }).then(() => {
      window.location.href = "/";
    });
  } catch (error) {
    console.error("Error during logout:", error);
    Swal.fire({
      icon: "error",
      title: "Logout Gagal",
      text:
        error.response?.data?.message ||
        "Terjadi kesalahan saat logout. Silakan coba lagi.",
    });
  }
};

// Fungsi untuk mendapatkan data title (bidang ahli dokter)
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

// fungsi untuk foto profile dokter
export const uploadAvatarDoctor = async (file) => {
  try {
    const token = Cookies.get("token_doctor");
    if (!token) {
      throw new Error("Token dokter tidak ditemukan.");
    }

    // Membuat FormData untuk mengunggah file
    const formData = new FormData();
    formData.append("avatar", file);

    const response = await axiosInstanceDoctor.post(
      "/doctor/upload-image",
      formData,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      }
    );

    if (response.status === 200 && response.data) {
      console.log("Avatar berhasil diunggah:", response.data);
      return response.data.avatarUrl;
    } else {
      throw new Error("Gagal mengunggah avatar.");
    }
  } catch (error) {
    console.error(
      "Error uploading avatar:",
      error.response ? error.response.data : error.message
    );
    throw (
      error.response?.data?.message ||
      error.message ||
      "Terjadi kesalahan saat mengunggah avatar."
    );
  }
};

// Fungsi untuk hapus foto profile dokter
export const deleteAvatarDoctor = async () => {
  try {
    const token = Cookies.get("token_doctor");
    if (!token) {
      throw new Error("Token dokter tidak ditemukan.");
    }

    const response = await axiosInstanceDoctor.delete("/doctor/delete-image", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (response.status === 200) {
      console.log("Avatar berhasil dihapus");
      return true; // Tanda bahwa avatar berhasil dihapus
    } else {
      throw new Error("Gagal menghapus avatar.");
    }
  } catch (error) {
    console.error(
      "Error deleting avatar:",
      error.response ? error.response.data : error.message
    );
    throw (
      error.response?.data?.message ||
      error.message ||
      "Terjadi kesalahan saat menghapus avatar."
    );
  }
};

// Fungsi untuk mengatur status dokter
export const updateDoctorStatus = async (isActive) => {
  try {
    const response = await axiosInstanceDoctor.put("/doctor/status", { is_active: isActive });
    return response.data;
  } catch (error) {
    console.error("Gagal memperbarui status dokter:", error);
    throw error;
  }
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

// fungsi untuk detail pasien dan konsultasi
export const getConsultationsDetails = async (id) => {
  try {
    const response = await axiosInstanceDoctor.get(`/doctor/consultations/${id}`);
    return response.data; // Mengembalikan data dari response
  } catch (error) {
    console.error('Error fetching consultations:', error);
    throw error; // Melempar error agar bisa ditangani di halaman pemanggil
  }
};

// Fungsi untuk detail konsultasi
export const getDetailConsultations = async () => {
  try {
    const response = await axiosInstanceDoctor.get("/doctor/consultations/${id}");
    return response.data;
  } catch (error) {
    console.error("Error fetching consultations:", error);
    throw error;
  }
};

// Fungsi untuk kirim rekomendasi
export const SendRecommendation = async (id, recommendation) => {
  try {
    const response = await axiosInstanceDoctor.post(`/doctor/consultations/${id}/recommendation`, {
      recommendation
    });
    console.log("Rekomendasi berhasil dikirim:", response.data);
    return response.data;
  } catch (error) {
    console.error("Gagal mengirim rekomendasi:", error);
    throw error; // Bisa dilempar untuk memberikan informasi lebih lanjut
  }
};