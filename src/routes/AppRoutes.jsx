import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from '../pages/auth/LoginPage';
import RegisterPage from '../pages/auth/RegisterPage';
import ForgotPasswordPage from '../pages/auth/ForgotPasswordPage';
import VerifyOtpPage from "../pages/auth/VerifyOTPPage";
import LandingPage from '../pages/user/LandingPage';
import Dashboard from '../pages/admin/Dashboard';
import { UsersPage } from '../pages/admin/Users';
import TransactionPage from '../pages/admin/Transactions';
import DashboardUser from '../pages/user/DashboardUser';
import ArtikelPage from '../pages/user/dashboard/ArtikelPage';
import DetailArtikelPage from '../pages/user/dashboard/DetailArtikelPage';
import DaftarPasien from '../pages/dokter/DaftarPasien';
// import DetailPasien from '../pages/dokter/DetailPasien';
import ProfileDokter from '../pages/dokter/ProfileDokter';


const AppRoutes = () => (
    <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/forgot-password" element={<ForgotPasswordPage />} />
        <Route path="/verify-otp" element={<VerifyOtpPage />} />

        {/* admin */}
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/admin/dashboard" element={<Dashboard />} />
        <Route path="/admin/users" element={<UsersPage />} />
        <Route path="/admin/transaction" element={<TransactionPage />} />

        {/* user */}
        <Route path="/user/dashboard" element={<DashboardUser />} />
        <Route path="/user/artikel" element={<ArtikelPage />} />
        <Route path="/artikel/:id" element={<DetailArtikelPage />} />

        {/* dokter */}
        <Route path='/dokter/daftar-passien' element={<DaftarPasien />} />
        {/* <Route path='/dokter/detail-passien' element={<DetailPasien />} /> */}
        <Route path='/dokter/profile-dokter' element={<ProfileDokter />} />
    </Routes>
);

export default AppRoutes;
