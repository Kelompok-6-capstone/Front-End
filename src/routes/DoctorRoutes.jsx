import React from "react";
import { Routes, Route } from "react-router-dom";
import RegisterDoctorPage from "../pages/dokter/RegisterDoctorPage";
import VerifyOtpDoctorPage from "../pages/dokter/VerifyOTPPage";
import LoginDoctorPage from "../pages/dokter/LoginDoctorPage";
import DashboardDokter from "../pages/dokter/Dashboard/DashboardDokter";
import DaftarPasien from "../pages/dokter/Dashboard/DaftarPasien";
import DetailPasien from "../pages/dokter/Dashboard/DetailPassien";
import ProfileDokter from "../pages/dokter/Dashboard/ProfileDokter";
import DoctorProtectedRoute from "./DoctorProtectedRoute";

const DoctorRoutes = () => (
    <Routes>
        <Route path="register" element={<RegisterDoctorPage />} />
        <Route path="verify-otp" element={<VerifyOtpDoctorPage />} />
        <Route path="login" element={<LoginDoctorPage />} />
        <Route
            path="dashboard"
            element={
                <DoctorProtectedRoute>
                    <DashboardDokter />
                </DoctorProtectedRoute>
            }
        />
        <Route
            path="daftar-passien"
            element={
                <DoctorProtectedRoute>
                    <DaftarPasien />
                </DoctorProtectedRoute>
            }
        />
        <Route
            path="detail-passien"
            element={
                <DoctorProtectedRoute>
                    <DetailPasien />
                </DoctorProtectedRoute>
            }
        />
        <Route
            path="profile-dokter"
            element={
                <DoctorProtectedRoute>
                    <ProfileDokter />
                </DoctorProtectedRoute>
            }
        />
    </Routes>
);

export default DoctorRoutes;
