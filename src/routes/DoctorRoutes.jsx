import { Routes, Route } from "react-router-dom";
import RegisterDoctorPage from "../pages/dokter/RegisterDoctorPage";
import VerifyOtpDoctorPage from "../pages/dokter/VerifyOTPPage";
import LoginDoctorPage from "../pages/dokter/LoginDoctorPage";
import DashboardDokter from "../pages/dokter/Dashboard/DashboardDokter";
import DaftarPasien from "../pages/dokter/Dashboard/DaftarPasien";
import DetailPasien from "../pages/dokter/Dashboard/DetailPassien";
import ProfileDokter from "../pages/dokter/Dashboard/ProfileDokter";
import DoctorProtectedRoute from "./DoctorProtectedRoute";
import LengkapiProfile from "../pages/dokter/LengkapiProfile";
import Transaksi from "../pages/dokter/Dashboard/Transaksi";
import SettingsProfile from "../pages/dokter/Settings/SettingsProfileDokter";
import EditProfile from "../pages/dokter/Settings/EditProfileDokter";
import FAQ from "../pages/dokter/Dashboard/FAQ";
import InformasiAPK from "../pages/dokter/Dashboard/InformasiAPK";
import DetailRiwayatKonsul from "../pages/dokter/Dashboard/DetailRiwayatKonsul";
import PasienDitangani from "../pages/dokter/Dashboard/PasiendiTangani";

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
      path="pasien-tertangani"
      element={
        <DoctorProtectedRoute>
          <PasienDitangani />
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
      path="detail-passien/:id"
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
    <Route
      path="transaksi"
      element={
        <DoctorProtectedRoute>
          <Transaksi />
        </DoctorProtectedRoute>
      }
    />
    <Route
      path="settings/profile-dokter"
      element={
        <DoctorProtectedRoute>
          <SettingsProfile />
        </DoctorProtectedRoute>
      }
    />
    <Route
      path="edit-profile"
      element={
        <DoctorProtectedRoute>
          <EditProfile />
        </DoctorProtectedRoute>
      }
    />

    <Route
      path="settings/FAQ"
      element={
        <DoctorProtectedRoute>
          <FAQ />
        </DoctorProtectedRoute>
      }
    />

    <Route
      path="settings/tentang-APK"
      element={
        <DoctorProtectedRoute>
          <InformasiAPK />
        </DoctorProtectedRoute>
      }
    />

    <Route
      path="lengkapi-profile"
      element={
        <DoctorProtectedRoute>
          <LengkapiProfile />
        </DoctorProtectedRoute>
      }
    />

    <Route
      path="detail-konsul/:id"
      element={
        <DoctorProtectedRoute>
          <DetailRiwayatKonsul />
        </DoctorProtectedRoute>
      }
    />
  </Routes>
);

export default DoctorRoutes;
