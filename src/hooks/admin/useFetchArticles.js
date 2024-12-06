import { useState, useEffect } from "react";
import axiosInstance from "../../utils/axiosInstance";
import Cookies from "js-cookie";

export function useFetchArticles() {
  const [articleData, setArticleData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchArticleData = async () => {
      try {
        const token = Cookies.get("token_admin");
        if (!token) {
          setError("No admin token found");
          return;
        }
        const response = await axiosInstance.get(
          `/admin/artikel`,
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        if (response.data.success) {
          setArticleData(response.data.data);
        }
      } catch (err) {
        setError(err.response?.data || err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchArticleData();
  }, []);

  return { articleData, error, loading };
}
