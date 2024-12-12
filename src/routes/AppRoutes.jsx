import React from "react";
import { Routes, Route } from "react-router-dom";
import LandingPage from "../pages/user/LandingPage";
import LoginPage from "../pages/auth/LoginPage";
import RegisterPage from "../pages/auth/RegisterPage";
import ForgotPasswordPage from "../pages/auth/ForgotPasswordPage";
import VerifyOtpPage from "../pages/auth/VerifyOTPPage";

// Import sub-routes
import AdminRoutes from "./AdminRoutes";
import UserRoutes from "./UserRoutes";
import DoctorRoutes from "./DoctorRoutes";

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<LandingPage />} />
    <Route path="/login/user" element={<LoginPage />} />
    <Route path="/register/user" element={<RegisterPage />} />
    <Route path="/forgot-password/user" element={<ForgotPasswordPage />} />
    <Route path="/verify-otp/user" element={<VerifyOtpPage />} />

    {/* Modular routes */}
    <Route path="/admin/*" element={<AdminRoutes />} />
    <Route path="/user/*" element={<UserRoutes />} />
    <Route path="/dokter/*" element={<DoctorRoutes />} />
  </Routes>
);

export default AppRoutes;
