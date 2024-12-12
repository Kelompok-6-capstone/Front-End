import axios from "axios";
import Cookies from "js-cookie";

// Konfigurasi axios instance
const axiosInstanceDoctor = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
});

// Interceptor untuk menyisipkan token di header Authorization
axiosInstanceDoctor.interceptors.request.use(
  (config) => {
    const token = Cookies.get("token_doctor");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosInstanceDoctor;
