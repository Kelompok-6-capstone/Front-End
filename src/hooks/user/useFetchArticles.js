import { useState, useEffect } from "react";
import Cookies from "js-cookie";

// Utility function to handle API requests with Authorization token
const fetchAPI = async (url) => {
    try {
        // Retrieve the token from Cookies
        const token = Cookies.get("token_user");

        // Set the Authorization header if the token exists
        const headers = {
            "Content-Type": "application/json",
            ...(token && { Authorization: `Bearer ${token}` }), // Include token if available
        };

        const response = await fetch(url, { headers });

        if (!response.ok) {
            throw new Error(`Failed to fetch data: ${response.statusText}`);
        }

        return await response.json();
    } catch (error) {
        console.error("Error in fetchAPI:", error);
        throw error;
    }
};

// Custom hook for fetching all articles
export const useFetchArticles = () => {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getArticles = async () => {
            try {
                setLoading(true);
                const data = await fetchAPI("https://api.calmind.site/user/artikel");
                setArticles(data.data || []); // Assuming the response has a "data" field with articles
            } catch (err) {
                setError(err.message);
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
                const data = await fetchAPI(`https://api.calmind.site/user/artikel/${id}`);
                setArticle(data.data || null); // Assuming the response has a "data" field with a single article
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        getArticle();
    }, [id]);

    return { article, loading, error };
};

export default useFetchArticles;
