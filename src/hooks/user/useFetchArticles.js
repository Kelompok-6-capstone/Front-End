import { useState, useEffect } from 'react';

// Utility function to handle API requests with Authorization token
const fetchAPI = async (url) => {
    // Retrieve the token from localStorage
    const token = localStorage.getItem('token_user');

    // Set the Authorization header if the token exists
    const headers = {
        'Content-Type': 'application/json',
        ...(token && { 'Authorization': `Bearer ${token}` }), // Include token if available
    };

    const response = await fetch(url, { headers });
    if (!response.ok) {
        throw new Error('Failed to fetch data');
    }
    return response.json();
};

// Custom hook for fetching all articles
export const useFetchArticles = () => {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getArticles = async () => {
            try {
                const data = await fetchAPI('https://api.calmind.site/user/artikel');
                setArticles(data.data); // Assuming the response has a "data" field with articles
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

// Custom hook for fetching article by ID
export const useFetchArticleById = (id) => {
    const [article, setArticle] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getArticle = async () => {
            try {
                const data = await fetchAPI(`https://api.calmind.site/user/artikel/${id}`);
                setArticle(data.data); // Assuming the response has a "data" field with a single article
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        if (id) {
            getArticle();
        }
    }, [id]);

    return { article, loading, error };
};

export default useFetchArticles;