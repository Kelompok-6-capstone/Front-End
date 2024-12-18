import React from "react";
import { Routes, Route } from "react-router-dom";
import BerandaUserPage from "../pages/user/BerandaUserPage";
import ArtikelPage from "../pages/user/ArtikelPage";
import DetailArtikelPage from "../pages/user/DetailArtikelPage";
import DaftarDokterPage from "../pages/user/DaftarDokterPage";
import DetailDokterPage from "../pages/user/DetailDokterPage";
import ProfilePenggunaPage from "../pages/user/profile/ProfilePenggunaPage";
import ProtectedRoute from "./ProtectedRoute";
import FormKeluhanPage from "../pages/user/FormKeluhanPage";
import DetailPembayaranPage from "../pages/user/DetailPembayaranPage";
import ChatDokterPage from "../pages/user/ChatDokterPage";
import AktivitasPage from "../pages/user/AktivitasPage";
import DetailAktivitasPage from "../pages/user/DetailAktivitasPage";
import StatusPembayaranPage from "../pages/user/StatusPembayaranPage";
import SemuaChatPage from "../pages/user/SemuaChatPage";

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
            path="/dokter/:id"
            element={
                <ProtectedRoute>
                    <DetailDokterPage />
                </ProtectedRoute>
            }
        />
        <Route
            path="/form-keluhan/:doctorId"
            element={
                <ProtectedRoute>
                    <FormKeluhanPage />
                </ProtectedRoute>
            }
        />
        <Route
            path="/detail-pembayaran"
            element={
                <ProtectedRoute>
                    <DetailPembayaranPage />
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
        <Route
            path="/chat-dokter"
            element={
                <ProtectedRoute>
                    <ChatDokterPage />
                </ProtectedRoute>
            }
        />
        <Route
            path="/aktivitas"
            element={
                <ProtectedRoute>
                    <AktivitasPage />
                </ProtectedRoute>
            }
        />
        <Route
            path="/detail-aktivitas/:id"
            element={
                <ProtectedRoute>
                    <DetailAktivitasPage />
                </ProtectedRoute>
            }
        />
        <Route
            path="/status-pembayaran"
            element={
                <ProtectedRoute>
                    <StatusPembayaranPage />
                </ProtectedRoute>
            }
        />
        <Route
            path="/semua-chat"
            element={
                <ProtectedRoute>
                    <SemuaChatPage />
                </ProtectedRoute>
            }
        />
    </Routes>
);

export default UserRoutes;
