import axiosInstanceDoctor from "../../utils/axiosInstanceDoctor";

// Fungsi untuk mengambil daftar konsultasi dokter
export const getConsultations = async () => {
  try {
    const response = await axiosInstanceDoctor.get("/doctor/consultations");
    return response.data;
  } catch {
    throw new Error("Error fetching consultations.");
  }
};

// Fungsi untuk detail pasien dan konsultasi
export const getConsultationsDetails = async (id) => {
  try {
    const response = await axiosInstanceDoctor.get(
      `/doctor/consultations/${id}`
    );
    return response.data; // Mengembalikan data dari response
  } catch {
    throw new Error("Error fetching consultation details.");
  }
};

// Fungsi untuk detail konsultasi
export const getDetailConsultations = async () => {
  try {
    const response = await axiosInstanceDoctor.get(
      "/doctor/consultations/${id}"
    );
    return response.data;
  } catch {
    throw new Error("Error fetching consultation details.");
  }
};
