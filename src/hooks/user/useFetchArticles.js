import { useState, useEffect } from "react";
import axiosInstanceUser from "../../utils/axiosInstanceUser"; 

// Custom hook for fetching all articles
export const useFetchArticles = () => {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getArticles = async () => {
            try {
                setLoading(true);
                const response = await axiosInstanceUser.get("/user/artikel"); // Axios request using custom instance
                setArticles(response.data.data || []); // Assuming the response has a "data" field with articles
            } catch (err) {
                setError(err.message); // Catch and display error
            } finally {
                setLoading(false);
            }
        };

        getArticles();
    }, []);

    return { articles, loading, error };
};

// Custom hook for fetching an article by ID
export const useFetchArticleById = (id) => {
    const [article, setArticle] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getArticle = async () => {
            try {
                setLoading(true);
                if (!id) {
                    throw new Error("Article ID is required.");
                }
                const response = await axiosInstanceUser.get(`/user/artikel/${id}`);
                setArticle(response.data.data || null); // Assuming the response has a "data" field with a single article
            } catch (err) {
                setError(err.message); // Catch and display error
            } finally {
                setLoading(false);
            }
        };

        getArticle();
    }, [id]);

    return { article, loading, error };
};

export default useFetchArticles;
