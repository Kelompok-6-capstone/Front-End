import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from '../pages/auth/LoginPage';
import RegisterPage from '../pages/auth/RegisterPage';
import ForgotPasswordPage from '../pages/auth/ForgotPasswordPage';
import VerifyOtpPage from "../pages/auth/VerifyOTPPage";
import LandingPage from '../pages/user/LandingPage';
import Dashboard from '../pages/admin/Dashboard';
import { UsersPage } from '../pages/admin/Users';
import DashboardUser from '../pages/user/DashboardUser';
import Artikel from '../pages/user/dashboard/Artikel';

const AppRoutes = () => (
    <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/forgot-password" element={<ForgotPasswordPage />} />
        <Route path="/verify-otp" element={<VerifyOtpPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/admin/dashboard" element={<Dashboard />} />
        <Route path="/admin/users" element={<UsersPage />} />

        {/* user */}
        <Route path="/user/dashboard" element={<DashboardUser />} />
        <Route path="/user/artikel" element={<Artikel />} />
    </Routes>
);

export default AppRoutes;
