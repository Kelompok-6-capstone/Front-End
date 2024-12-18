import Swal from "sweetalert2";
import axiosInstanceDoctor from "../../utils/axiosInstanceDoctor";

export const getsSearchConsultations = async (searchQuery) => {
  try {
    const response = await axiosInstanceDoctor.get(
      "/doctor/consultations/search",
      {
        params: { nama: searchQuery.trim() },
      }
    );

    if (response.data?.data && response.data.data.length > 0) {
      return response.data.data;
    } else {
      Swal.fire({
        icon: "info",
        title: "Pasien Tidak Ditemukan",
        text: `Tidak ada pasien dengan nama "${searchQuery.trim()}" dalam data kami.`,
      });
      return null;
    }
  } catch (error) {
    console.error("Error searching consultations:", error);
    Swal.fire({
      icon: "error",
      title: "Terjadi Kesalahan",
      text:
        error.response?.data?.message || "Gagal melakukan pencarian pasien.",
    });
    throw error;
  }
};
