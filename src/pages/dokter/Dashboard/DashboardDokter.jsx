import { useEffect, useState } from "react";
import Navbar from "../../../components/dokter/Navbar";
import Sidebar from "../../../components/dokter/Sidebar";
import { getConsultations } from "../../../api/doctor/consultationsDoctor";
import { Link, useNavigate } from "react-router-dom";
import Loading from "../../../components/user/Loading";

const DashboardDokter = () => {
  const [pasienBaru, setPasienBaru] = useState([]);
  const [pasienDitangani, setPasienDitangani] = useState([]);
  const [notifications, setNotifications] = useState([]);
  const [selectedNotification, setSelectedNotification] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  // Fungsi grupByEmail untuk mengelompokkan pasien berdasarkan email
  const groupByEmail = (patients) => {
    const grouped = {};
    patients.forEach((item) => {
      const email = item.user.email;
      if (!grouped[email]) {
        grouped[email] = [];
      }
      grouped[email].push(item);
    });
    return grouped;
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getConsultations();

        if (response.data && Array.isArray(response.data)) {
          const data = response.data;

          const baru = data
            .filter((item) => item.status === "approved")
            .sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at)); //mengurtukan data pasein dari yang terbaru

          const ditangani = data.filter((item) => item.status === "expired");

          // Set data pasien baru
          setPasienBaru(
            baru.map((item) => ({
              id: item.id,
              nama: item.user.username,
              umur:
                new Date().getFullYear() -
                new Date(item.user.tgl_lahir).getFullYear(),
              profesi: item.user.pekerjaan || "Tidak diketahui",
              avatar: item.user.avatar || "/images/admin/admin-profil.png",
            }))
          );

          // Grupkan pasien yang sudah ditangani berdasarkan email
          const groupedPasien = groupByEmail(ditangani);
          const pasienDitanganiArray = Object.values(groupedPasien)
            .map((group) => group[group.length - 1])
            .sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at)); // Urutkan berdasarkan tanggal

          // Set data pasien sudah ditangani
          setPasienDitangani(
            pasienDitanganiArray.map((item) => ({
              id: item.id,
              nama: item.user.username,
              umur:
                new Date().getFullYear() -
                new Date(item.user.tgl_lahir).getFullYear(),
              profesi: item.user.pekerjaan || "Tidak diketahui",
              avatar: item.user.avatar || "/images/admin/admin-profil.png",
            }))
          );

          // Notifikasi
          const sortedNotifications = data
            .map((item) => ({
              avatar: item.user.avatar,
              title:
                item.status === "approved"
                  ? `Pasien Baru ${item.user.username}`
                  : `Keluhan Baru dari ${item.user.username}`,
              message: item.status === "expired" ? "Periksa keluhan ini." : "",
              time: new Date(item.updated_at),
              id: item.id,
            }))
            .filter(
              (notification) => notification.message !== "Periksa keluhan ini."
            )
            .sort((a, b) => b.time - a.time);

          // Format tanggal dan waktu menjadi string yang diinginkan
          const formattedNotifications = sortedNotifications.map(
            (notification) => ({
              ...notification,
              formattedTime: notification.time.toLocaleString("id-ID", {
                day: "2-digit",
                month: "long",
                year: "numeric",
                hour: "2-digit",
                minute: "2-digit",
              }),
            })
          );

          setNotifications(formattedNotifications);
        }
        setLoading(false);
      } catch (error) {
        console.error("Error fetching consultations:", error);
        setLoading(false);
      }
    };

    // data akan berubah di halaman setiap 1 detik
    // jadi jika ada notif dan pasien baru itu langsung muncul gak perlu refresh manual
    const intervalId = setInterval(fetchData, 1000);
    return () => clearInterval(intervalId);
  }, []);

  const handlePatientClick = (patientId) => {
    navigate(`/dokter/detail-passien/${patientId}`);
  };

  const handleNotificationClick = (notification) => {
    setSelectedNotification(notification);
    navigate(`/dokter/detail-passien/${notification.id}`);
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <Navbar />
      <Sidebar />
      <div className="p-12 bg-white min-h-screen ml-[277px]">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Pasien Baru */}
          <div className="lg:col-span-2">
            <h2 className="text-xl font-semibold mb-4">Pasien Baru</h2>
            <div className="grid grid-cols-1 gap-4">
              {pasienBaru.length > 0 ? (
                pasienBaru.slice(0, 2).map((pasien, idx) => (
                  <div
                    key={idx}
                    onClick={() => handlePatientClick(pasien.id)}
                    className="flex flex-row w-[500px] h-[76px] max-w-2xl bg-white border border-cyan-950 rounded-xl"
                  >
                    <img
                      src={pasien.avatar || "/images/admin/admin-profil.png"}
                      className="w-14 h-14 rounded-full m-2 object-cover mx-2"
                      alt="Profil Pasien"
                    />
                    <div className="flex flex-col justify-center flex-grow p-4">
                      <h3 className="font-semibold text-gray-800">
                        {pasien.nama}
                      </h3>
                      <p className="text-sm text-gray-500">
                        {pasien.umur} Tahun | {pasien.profesi}
                      </p>
                    </div>
                    <button className="flex items-center me-4">
                      <svg
                        className="shrink-0 size-5 text-gray-800"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        onClick={() => handlePatientClick(pasien.id)}
                      >
                        <path d="m9 18 6-6-6-6" />
                      </svg>
                    </button>
                  </div>
                ))
              ) : (
                <p className="text-gray-500">Belum ada pasien baru.</p>
              )}
            </div>
            <div className="mt-4 flex justify-end w-[500px]">
              <Link to="/dokter/daftar-pasien-baru">
                <button className="px-4 py-2 w-[194px] bg-cyan-50 text-cyan-900 border border-cyan-900 rounded">
                  Lihat Semua
                </button>
              </Link>
            </div>

            {/* Pasien Sudah Ditangani */}
            <h2 className="text-xl font-semibold mt-8 mb-4">
              Pasien Sudah Ditangani
            </h2>
            <div className="grid grid-cols-1 gap-4">
              {pasienDitangani.length > 0 ? (
                pasienDitangani.slice(0, 2).map((pasien, idx) => (
                  <div
                    key={idx}
                    onClick={() => handlePatientClick(pasien.id)}
                    className="flex flex-row w-[500px] h-[76px] max-w-2xl bg-white border border-cyan-950 rounded-xl"
                  >
                    <img
                      src={pasien.avatar || "/images/admin/admin-profil.png"}
                      className="w-14 h-14 rounded-full m-2 object-cover mx-2"
                      alt="Profil Pasien"
                    />
                    <div className="flex flex-col justify-center flex-grow p-4">
                      <h3 className="font-semibold text-gray-800">
                        {pasien.nama}
                      </h3>
                      <p className="text-sm text-gray-500">
                        {pasien.umur} Tahun | {pasien.profesi}
                      </p>
                    </div>
                    <button className="flex items-center me-4">
                      <svg
                        className="shrink-0 size-5 text-gray-800"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        onClick={() => handlePatientClick(pasien.id)}
                      >
                        <path d="m9 18 6-6-6-6" />
                      </svg>
                    </button>
                  </div>
                ))
              ) : (
                <p className="text-gray-500">
                  Belum ada pasien yang ditangani.
                </p>
              )}
            </div>
            <div className="mt-4 flex justify-end w-[500px]">
              <Link to="/dokter/daftar-pasien-tertangani">
                <button className="px-4 py-2 w-[194px] bg-cyan-50 text-cyan-900 border border-cyan-900 rounded">
                  Lihat Semua
                </button>
              </Link>
            </div>
          </div>

          {/* Notifikasi */}
          <div className="lg:col-span-1 -ml-24">
            <h2 className="text-xl font-semibold mb-2">Notifikasi</h2>
            <div
              className="max-h-[470px] overflow-y-auto w-[385px] h-auto p-2"
              style={{
                scrollbarWidth: "none",
                msOverflowStyle: "none",
              }}
            >
              <style>
                {` /* Untuk browser berbasis Webkit seperti Chrome, Safari, dan Edge */
      .no-scrollbar::-webkit-scrollbar {
      display: none; }`}
              </style>
              {notifications.length === 0 ? (
                <p className="text-center text-gray-500">
                  Tidak ada notifikasi
                </p>
              ) : (
                notifications.map((notification, idx) => (
                  <div
                    key={idx}
                    className={`w-[100%] h-[100px] bg-white border border-cyan-950 rounded-xl p-4 mb-4 flex items-center ${
                      selectedNotification &&
                      selectedNotification.id === notification.id
                        ? "bg-blue-100"
                        : ""
                    }`}
                    onClick={() => handleNotificationClick(notification)}
                  >
                    <img
                      src={
                        notification.avatar || "/images/admin/admin-profil.png"
                      }
                      className="w-16 h-16 rounded-full object-cover mx-2 mr-6"
                      alt="Profil Notifikasi"
                    />
                    <div className="flex flex-col justify-center flex-grow">
                      <h3 className="text-l font-semibold text-blue-500">
                        {notification.title}
                      </h3>
                      {notification.message && (
                        <p className="text-sm text-gray-600 mt-1">
                          {notification.message}
                        </p>
                      )}
                      <p className="text-xs text-gray-500 mt-2">
                        {notification.formattedTime}
                      </p>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardDokter;
