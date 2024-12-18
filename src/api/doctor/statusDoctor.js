import axiosInstanceDoctor from "../../utils/axiosInstanceDoctor";

// Fungsi untuk mengatur status dokter
export const updateDoctorStatus = async (isActive) => {
  try {
    const response = await axiosInstanceDoctor.put("/doctor/status", {
      is_active: isActive,
    });
    return response.data;
  } catch (error) {
    throw new Error(
      error.response?.data?.message ||
        error.message ||
        "Terjadi kesalahan saat memperbarui status dokter."
    );
  }
};
