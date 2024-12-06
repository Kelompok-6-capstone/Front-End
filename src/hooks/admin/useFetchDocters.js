import { useState, useEffect } from "react";
import axiosInstance from "../../utils/axiosInstance";
import Cookies from "js-cookie";

export function useFetchDoctors() {
  const [doctorData, setDoctorData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDoctorData = async () => {
      try {
        const token = Cookies.get("token_admin");
        if (!token) {
          setError("No admin token found");
          return;
        }
        const response = await axiosInstance.get(
          `/admin/alldocters`,
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        if (response.data.success) {
          setDoctorData(response.data.data);
        }
      } catch (err) {
        setError(err.response?.data || err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchDoctorData();
  }, []);

  return { doctorData, error, loading };
}
