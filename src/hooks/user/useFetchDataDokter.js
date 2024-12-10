import { useEffect, useState } from "react";
import { fetchDoctors } from "../../api/user/apiDokter";

export const useFetchDataDokter = () => {
    const [doctors, setDoctors] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getDoctors = async () => {
            try {
                const data = await fetchDoctors();
                setDoctors(data.data || []);
            } catch (err) {
                if (err.message.includes("Token")) {
                    setError("Token tidak ditemukan. Silakan login kembali.");
                } else {
                    setError("Gagal memuat data dokter.");
                }
            } finally {
                setLoading(false);
            }
        };

        getDoctors();
    }, []);

    return { doctors, loading, error };
};
