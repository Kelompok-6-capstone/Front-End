import axios from "axios";

const axiosInstanceDoctor = axios.create({
  baseURL:  import.meta.env.VITE_BASE_URL, // Ganti dengan URL API yang sesuai
  headers: {
    "Authorization": `Bearer ${localStorage.getItem("token_doctor")}`, // Menggunakan token yang tersimpan
  },
});


// Tambahkan interceptor untuk menyisipkan token di setiap request
axiosInstanceDoctor.interceptors.request.use(
    (config) => {
      const token = localStorage.getItem("token_doctor"); // Ambil token dari localStorage
      console.log("Token dikirim:", token); // Debug log token
      if (token) {
        config.headers.Authorization = `Bearer ${token}`; // Tambahkan token ke header
      }
      return config;
    },
    (error) => Promise.reject(error)
  );
  
  

export default axiosInstanceDoctor;
