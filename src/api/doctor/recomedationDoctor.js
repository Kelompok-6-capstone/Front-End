import axiosInstanceDoctor from "../../utils/axiosInstanceDoctor";

export const SendRecommendation = async (id, recommendation) => {
  try {
    const response = await axiosInstanceDoctor.post(
      `/doctor/consultations/${id}/recommendation`,
      {
        recommendation,
      }
    );
    return response.data;
  } catch (error) {
    throw new Error(
      error.response?.data?.message ||
        error.message ||
        "Terjadi kesalahan saat mengirim rekomendasi."
    );
  }
};
