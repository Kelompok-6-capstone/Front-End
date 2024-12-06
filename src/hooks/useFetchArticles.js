import { useState, useEffect } from "react";
import axios from "axios";

const useFetchArticles = (articleId = null) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchArticles = async () => {
            try {
                setLoading(true);
                setError(null);

                const token = document.cookie
                    .split("; ")
                    .find((row) => row.startsWith("token_user="))
                    ?.split("=")[1];

                if (!token) {
                    throw new Error("User token not found. Please login first.");
                }

                const headers = {
                    Authorization: `Bearer ${token}`,
                };

                const url = articleId
                    ? `https://api.calmind.site/user/artikel/${articleId}`
                    : `https://api.calmind.site/user/artikel`;

                const response = await axios.get(url, { headers });
                setData(response.data);
            } catch (err) {
                setError(err.message || "Something went wrong");
            } finally {
                setLoading(false);
            }
        };

        fetchArticles();
    }, [articleId]);

    return { data, loading, error };
};

export default useFetchArticles;
