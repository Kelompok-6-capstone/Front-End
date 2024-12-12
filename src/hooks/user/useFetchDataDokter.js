import { useEffect, useState } from "react";
import { fetchDoctors } from "../../api/user/apiDokter";

export const useFetchDataDokter = () => {
    const [doctors, setDoctors] = useState([]); // State untuk daftar dokter
    const [loading, setLoading] = useState(true); // State untuk status loading
    const [error, setError] = useState(null); // State untuk error handling

    useEffect(() => {
        const getDoctors = async () => {
            setLoading(true); // Set loading ke true saat mulai fetch
            setError(null); // Reset error
            try {
                const data = await fetchDoctors();
                // Log data dokter ke konsol
                // console.log("Data Dokter dari API:", data);
                // Validasi apakah data.data adalah array
                if (data && Array.isArray(data.data)) {
                    setDoctors(data.data); // Set data dokter jika valid
                } else {
                    console.warn("Response data bukan array, pastikan API sesuai!");
                    setDoctors([]); // Fallback ke array kosong
                }
            } catch (err) {
                // Tangani error dengan lebih spesifik
                console.error("Error saat fetch data dokter:", err);
                if (err.message.includes("Token")) {
                    setError("Token tidak ditemukan. Silakan login kembali.");
                } else {
                    setError("Gagal memuat data dokter.");
                }
            } finally {
                setLoading(false); // Set loading ke false setelah selesai fetch
            }
        };
        getDoctors();
    }, []);
    return { doctors, loading, error }; // Return state yang bisa digunakan di komponen
};
