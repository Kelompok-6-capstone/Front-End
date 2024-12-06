import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
    const token = localStorage.getItem("authToken");

    if (!token) {
        // Redirect ke halaman login jika tidak ada token
        return <Navigate to="/login/user" />;
    }

    return children;
};

export default ProtectedRoute;
