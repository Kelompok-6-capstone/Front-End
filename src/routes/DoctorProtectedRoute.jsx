import { Navigate } from "react-router-dom";

const DoctorProtectedRoute = ({ children }) => {
    const token = localStorage.getItem("token_doctor"); // Periksa token dari localStorage atau metode autentikasi lain

    if (!token) {
        // Jika tidak ada token, arahkan ke halaman login
        return <Navigate to="/dokter/login" replace />;
    }

    // Jika token valid, tampilkan komponen anak
    return children;
};

export default DoctorProtectedRoute;
