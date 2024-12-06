import { useState, useEffect } from "react";
import Cookies from "js-cookie";
import axiosInstance from "../../utils/axiosInstance";

export function useFetchPatients() {
  const [patientData, setPatientData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPatientData = async () => {
      try {
        const token = Cookies.get("token_admin");
        if (!token) {
          setError("No admin token found");
          return;
        }
        const response = await axiosInstance.get(`/admin/allusers`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        if (response.data.success) {
          setPatientData(response.data.data);
        }
      } catch (err) {
        setError(err.response?.data || err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchPatientData();
  }, []);

  return { patientData, error, loading };
}
