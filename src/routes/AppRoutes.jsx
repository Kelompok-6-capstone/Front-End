import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "../pages/auth/LoginPage";
import RegisterPage from "../pages/auth/RegisterPage";
import ForgotPasswordPage from "../pages/auth/ForgotPasswordPage";
import VerifyOtpPage from "../pages/auth/VerifyOTPPage";
import LandingPage from "../pages/user/LandingPage";
import Dashboard from "../pages/admin/Dashboard";
import { UsersPage } from "../pages/admin/Users";
import TransactionPage from "../pages/admin/Transactions";
import BerandaUserPage from "../pages/user/BerandaUserPage";
import ArtikelPage from "../pages/user/ArtikelPage";
import DetailArtikelPage from "../pages/user/DetailArtikelPage";
import DaftarPasien from "../pages/dokter/DaftarPasien";
// import DetailPasien from '../pages/dokter/DetailPasien';
import ProfileDokter from "../pages/dokter/ProfileDokter";
import AdminLoginPage from "../pages/admin/AdminLogin";
import AdminProtectedRoute from "./AdminProtectedRoute";
import DaftarDokterPage from "../pages/user/DaftarDokterPage";
import DetailDokterPage from "../pages/user/DetailDokterPage";

const AppRoutes = () => (

    <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login/user" element={<LoginPage />} />
        <Route path="/register/user" element={<RegisterPage />} />
        <Route path="/forgot-password/user" element={<ForgotPasswordPage />} />
        <Route path="/verify-otp/user" element={<VerifyOtpPage />} />
        <Route path="/dashboard" element={<Dashboard />} />

        {/* admin */}
        <Route path="/admin/login" element={<AdminLoginPage />} />
        <Route
            path="/admin/dashboard"
            element={
                <AdminProtectedRoute>
                    <Dashboard />
                </AdminProtectedRoute>
            }
        />
        <Route
            path="/admin/users"
            element={
                <AdminProtectedRoute>
                    <UsersPage />
                </AdminProtectedRoute>
            }
        />
        <Route
            path="/admin/transaction"
            element={
                <AdminProtectedRoute>
                    <TransactionPage />
                </AdminProtectedRoute>
            }
        />

        {/* user */}
        <Route path="/user/beranda" element={<BerandaUserPage />} />
        <Route path="/user/artikel" element={<ArtikelPage />} />
        <Route path="/artikel/:id" element={<DetailArtikelPage />} />
        <Route path="/user/dokter" element={<DaftarDokterPage />} />
        <Route path="/user/dokter/detail-dokter" element={<DetailDokterPage />} />

        {/* dokter */}
        <Route path="/dokter/daftar-passien" element={<DaftarPasien />} />
        {/* <Route path='/dokter/detail-passien' element={<DetailPasien />} /> */}
        <Route path="/dokter/profile-dokter" element={<ProfileDokter />} />
    </Routes>
);

export default AppRoutes;
