import React from "react";
import { Navigate } from "react-router-dom";
import Cookies from "js-cookie"; // Import js-cookie untuk membaca cookies

const ProtectedRoute = ({ children }) => {
    // Ambil token dari cookies
    const token = Cookies.get("token_user");

    if (!token) {
        // Redirect ke halaman login jika tidak ada token
        return <Navigate to="/login/user" />;
    }

    return children; // Render komponen anak jika token valid
};

export default ProtectedRoute;
