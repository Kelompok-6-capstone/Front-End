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
import DashboardUser from "../pages/user/DashboardUser";
import ArtikelPage from "../pages/user/dashboard/ArtikelPage";
import DetailArtikelPage from "../pages/user/dashboard/DetailArtikelPage";
import DaftarPasien from "../pages/dokter/Dashboard/DaftarPasien";
import AdminLoginPage from "../pages/admin/AdminLogin";
import AdminProtectedRoute from "./AdminProtectedRoute";
import ProfileDokter from "../pages/dokter/Dashboard/ProfileDokter";
import LoginDoctorPage from "../pages/dokter/LoginDoctorPage";
import VerifyOtpDoctorPage from "../pages/dokter/VerifyOTPPage";
import RegisterDoctorPage from "../pages/dokter/RegisterDoctorPage";
import Transkasi from "../pages/dokter/Dashboard/Transaksi";
import DashboardDokter from "../pages/dokter/Dashboard/DashboardDokter";
import DetailArtikel from "../pages/dokter/Dashboard/DetailArtikel";
import DetailPasien from "../pages/dokter/Dashboard/DetailPassien";
import EditProfileDokter from "../pages/dokter/Settings/EditProfileDokter";
import FAQ from "../pages/dokter/Dashboard/FAQ";
import InformasiAPK from "../pages/dokter/Dashboard/InformasiAPK";
import LengkapiProfile from "../pages/dokter/LengkapiProfile";
import SettingsProfileDokter from "../pages/dokter/Settings/SettingsProfileDokter";
import DoctorProtectedRoute from "./DoctorProtectedRoute";

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
    <Route path="/user/dashboard" element={<DashboardUser />} />
    <Route path="/user/artikel" element={<ArtikelPage />} />
    <Route path="/artikel/:id" element={<DetailArtikelPage />} />

    {/* dokter */}
    {/* register */}
    <Route path="/dokter/register" element={<RegisterDoctorPage />} />
    {/* otp */}
    <Route path="dokter/verify-otp" element={<VerifyOtpDoctorPage />} />
    {/* login */}
    <Route path="/dokter/login" element={<LoginDoctorPage />} />

    <Route
      path="/dokter/dashboard"
      element={
        <DoctorProtectedRoute>
          <DashboardDokter />
        </DoctorProtectedRoute>
      }
    />
    <Route
      path="/dokter/detail-artikel"
      element={
        <DoctorProtectedRoute>
          <DetailArtikel />
        </DoctorProtectedRoute>
      }
    />
    <Route
      path="/dokter/daftar-passien"
      element={
        <DoctorProtectedRoute>
          <DaftarPasien />
        </DoctorProtectedRoute>
      }
    />
    <Route
      path="/dokter/detail-passien"
      element={
        <DoctorProtectedRoute>
          <DetailPasien />
        </DoctorProtectedRoute>
      }
    />
    <Route
      path="/dokter/profile-dokter"
      element={
        <DoctorProtectedRoute>
          <ProfileDokter />
        </DoctorProtectedRoute>
      }
    />
    <Route
      path="/dokter/settings/profile-dokter"
      element={
        <DoctorProtectedRoute>
          <SettingsProfileDokter />
        </DoctorProtectedRoute>
      }
    />
    <Route
      path="/dokter/edit-profile"
      element={
        <DoctorProtectedRoute>
          <EditProfileDokter />
        </DoctorProtectedRoute>
      }
    />
    <Route
      path="/dokter/lengkapi-profile"
      element={
        <DoctorProtectedRoute>
          <LengkapiProfile />
        </DoctorProtectedRoute>
      }
    />
    <Route
      path="/dokter/transaksi"
      element={
        <DoctorProtectedRoute>
          <Transkasi />
        </DoctorProtectedRoute>
      }
    />
    <Route
      path="/dokter/settings/FAQ"
      element={
        <DoctorProtectedRoute>
          <FAQ />
        </DoctorProtectedRoute>
      }
    />
    <Route
      path="/dokter/settings/tentang-apk"
      element={
        <DoctorProtectedRoute>
          <InformasiAPK />
        </DoctorProtectedRoute>
      }
    />
  </Routes>
);

export default AppRoutes;
