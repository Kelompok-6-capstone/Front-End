import React from "react";
import { Navigate } from "react-router-dom";
import Cookies from "js-cookie";

const ProtectedRoute = ({ children }) => {
  // Cek apakah token admin ada di cookie
  const token = Cookies.get("token_admin");

  if (!token) {
    // Jika token tidak ada, redirect ke halaman login
    return <Navigate to="/admin/login" replace />;
  }

  // Jika token ada, izinkan akses ke komponen anak
  return children;
};

export default ProtectedRoute;
