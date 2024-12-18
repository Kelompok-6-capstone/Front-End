import axiosInstanceDoctor from "../../utils/axiosInstanceDoctor";
import Cookies from "js-cookie";

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
      return response.data;
    } else {
      throw new Error(
        "Data profil tidak ditemukan atau gagal memperbarui profil."
      );
    }
  } catch (error) {
    throw (
      error.response?.data?.message ||
      error.message ||
      "Terjadi kesalahan saat memperbarui profil."
    );
  }
};

// Fungsi untuk mendapatkan data title (bidang ahli dokter)
export const getTitles = async () => {
  try {
    const response = await axiosInstanceDoctor.get("/doctor/titles");
    return response.data.data || [];
  } catch {
    throw "Terjadi kesalahan saat mengambil data gelar.";
  }
};

// Fungsi untuk mendapatkan data tags (spesialis)
export const getTags = async () => {
  try {
    const response = await axiosInstanceDoctor.get("/doctor/tags");
    return response.data.data || [];
  } catch {
    throw "Terjadi kesalahan saat mengambil data spesialis.";
  }
};
