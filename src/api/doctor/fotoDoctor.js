import axiosInstanceDoctor from "../../utils/axiosInstanceDoctor";
import Cookies from "js-cookie";

// Fungsi untuk upload avatar dokter
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
      return response.data.avatarUrl;
    } else {
      throw new Error("Gagal mengunggah avatar.");
    }
  } catch (error) {
    throw new Error(
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
      return true;
    } else {
      throw new Error("Gagal menghapus avatar.");
    }
  } catch (error) {
    throw new Error(
      error.response?.data?.message ||
        error.message ||
        "Terjadi kesalahan saat menghapus avatar."
    );
  }
};
