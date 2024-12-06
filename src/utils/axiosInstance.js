import axios from "axios";

const axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_BASE_URL,
    headers: {
        "Content-Type": "application/json",
        // Tambahkan Authorization jika diperlukan
        Authorization: `Bearer ${localStorage.getItem("token_user") || ""}`,
    },
    withCredentials: true,
});


export default axiosInstance;
