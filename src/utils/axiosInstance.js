import axios from "axios";

const axiosInstance = axios.create({
    baseURL: "https://api.calmind.site",
    headers: {
        "Content-Type": "application/json",
    },
});

export default axiosInstance;
