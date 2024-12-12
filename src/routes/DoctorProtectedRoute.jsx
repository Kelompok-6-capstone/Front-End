import React from "react";
import { Navigate } from "react-router-dom";
import Cookies from "js-cookie";

const DoctorProtectedRoute = ({ children }) => {
  // Cek apakah token admin ada di cookie
  const token = Cookies.get("token_doctor");

  if (!token) {
    // Jika token tidak ada, redirect ke halaman login
    return <Navigate to="/dokter/login" replace />;
  }

  // Jika token ada, izinkan akses ke komponen anak
  return children;
};

export default DoctorProtectedRoute;
