import React from "react";
import { Routes, Route } from "react-router-dom";
import BerandaUserPage from "../pages/user/BerandaUserPage";
import ArtikelPage from "../pages/user/ArtikelPage";
import DetailArtikelPage from "../pages/user/DetailArtikelPage";
import DaftarDokterPage from "../pages/user/DaftarDokterPage";
import DetailDokterPage from "../pages/user/DetailDokterPage";
import JadwalPage from "../pages/user/JadwalPage";
import ProfilePenggunaPage from "../pages/user/profile/ProfilePenggunaPage";
import ProtectedRoute from "./ProtectedRoute";

const UserRoutes = () => (
    <Routes>
        <Route
            path="beranda"
            element={
                <ProtectedRoute>
                    <BerandaUserPage />
                </ProtectedRoute>
            }
        />
        <Route
            path="artikel"
            element={
                <ProtectedRoute>
                    <ArtikelPage />
                </ProtectedRoute>
            }
        />
        <Route
            path="/artikel/:id"
            element={
                <ProtectedRoute>
                    <DetailArtikelPage />
                </ProtectedRoute>
            }
        />
        <Route
            path="dokter"
            element={
                <ProtectedRoute>
                    <DaftarDokterPage />
                </ProtectedRoute>
            }
        />
        <Route
            path="dokter/detail-dokter"
            element={
                <ProtectedRoute>
                    <DetailDokterPage />
                </ProtectedRoute>
            }
        />
        <Route
            path="dokter/jadwal"
            element={
                <ProtectedRoute>
                    <JadwalPage />
                </ProtectedRoute>
            }
        />
        <Route
            path="profile"
            element={
                <ProtectedRoute>
                    <ProfilePenggunaPage />
                </ProtectedRoute>
            }
        />
    </Routes>
);

export default UserRoutes;
