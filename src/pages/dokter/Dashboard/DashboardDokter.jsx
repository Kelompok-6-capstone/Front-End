import { useEffect, useState } from "react";
import Navbar from "../../../components/dokter/Navbar";
import Sidebar from "../../../components/dokter/Sidebar";
import { getConsultations } from "../../../api/doctor/doctor";
import { Link } from "react-router-dom";

const DashboardDokter = () => {
  const [pasienBaru, setPasienBaru] = useState([]);
  const [pasienDitangani, setPasienDitangani] = useState([]);
  const [notifications, setNotifications] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getConsultations();
        console.log("API Response:", response);

        if (response.data && Array.isArray(response.data)) {
          const data = response.data;

          console.log("Fetched Data:", data);

          // Filter pasien berdasarkan status
          const baru = data.filter((item) => item.status === "approved");
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
              avatar: item.user.avatar,
            }))
          );

          // Set data pasien yang sudah ditangani
          setPasienDitangani(
            ditangani.map((item) => ({
              id: item.id,
              nama: item.user.username,
              umur:
                new Date().getFullYear() -
                new Date(item.user.tgl_lahir).getFullYear(),
              profesi: item.user.pekerjaan || "Tidak diketahui",
              avatar: item.user.avatar || "/images/admin/admin-profil.png",
            }))
          );

          // Set notifikasi berdasarkan data dari API
          const notificationsFromApi = data.map((item) => {
            const baseNotification = {
              title: "",
              message: "",
              time: new Date(item.updated_at).toLocaleString("id-ID", {
                day: "numeric",
                month: "long",
                year: "numeric",
                hour: "2-digit",
                minute: "2-digit",
              }),
            };

            // Tentukan notifikasi berdasarkan status
            if (item.status === "approved") {
              return {
                ...baseNotification,
                title: `Pasien Baru Bernama ${item.user.username}`,
              };
            } else if (item.status === "expired") {
              return {
                ...baseNotification,
                title: `Keluhan Baru dari ${item.user.username}`,
                message: `Periksa dan tangani keluhan terbaru.`,
              };
            }
            return null;
          });

          setNotifications(notificationsFromApi.filter(Boolean));
        } else {
          console.error("Unexpected API response structure:", response);
        }
      } catch (error) {
        console.error("Error fetching consultations:", error);
      }
    };

    fetchData();
  }, []);

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
                pasienBaru.map((pasien, idx) => (
                  <div
                    key={idx}
                    className="flex flex-row w-[584px] h-[76px] max-w-2xl bg-white border border-cyan-950 rounded-xl"
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
                      <p className="text-sm text-gray-500 dark:text-neutral-500">
                        {pasien.umur} Tahun | {pasien.profesi}
                      </p>
                    </div>
                    <a
                      href={`detail-passien/${pasien.id}`}
                      className="flex items-center me-4"
                    >
                      <svg
                        className="shrink-0 size-5 text-gray-800 dark:text-neutral-200"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="m9 18 6-6-6-6" />
                      </svg>
                    </a>
                  </div>
                ))
              ) : (
                <p className="text-gray-500">Belum ada pasien baru.</p>
              )}
            </div>
            <div className="mt-4 flex justify-end w-[584px]">
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
                pasienDitangani.map((pasien, idx) => (
                  <div
                    key={idx}
                    className="flex flex-row w-[584px] h-[76px] max-w-2xl bg-white border border-cyan-950 rounded-xl"
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
                      <p className="text-sm text-gray-500 dark:text-neutral-500">
                        {pasien.umur} Tahun | {pasien.profesi}
                      </p>
                    </div>
                    <a
                      href={`detail-passien/${pasien.id}`}
                      className="flex items-center me-4"
                    >
                      <svg
                        className="shrink-0 size-5 text-gray-800 dark:text-neutral-200"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="m9 18 6-6-6-6" />
                      </svg>
                    </a>
                  </div>
                ))
              ) : (
                <p className="text-gray-500">
                  Belum ada pasien yang di tangani.
                </p>
              )}
            </div>
            <div className="mt-4 flex justify-end w-[584px]">
              <Link to="/dokter/daftar-pasien-tertangani">
                <button className="px-4 py-2 w-[194px] bg-cyan-50 text-cyan-900 border border-cyan-900 rounded">
                  Lihat Semua
                </button>
              </Link>
            </div>
          </div>

          {/* Notifikasi */}
          <div className="lg:col-span-1">
            <h2 className="text-xl font-semibold mb-4">Notifikasi</h2>
            {notifications.map((notification, idx) => (
              <div
                key={idx}
                className="w-[394px] h-[100px] bg-white border border-cyan-950 rounded-xl p-4 mb-4 flex items-center ml-[-70px]"
              >
                <img
                  src={notification.avatar || "/images/admin/admin-profil.png"}
                  className="w-14 h-14 rounded-full m-2 object-cover mx-2"
                  alt="Profil Notifikasi"
                />
                <div className="flex flex-col justify-center flex-grow p-4">
                  <h3 className="text-l font-semibold text-blue-500">
                    {notification.title}
                  </h3>
                  {notification.message && (
                    <p className="text-sm text-gray-600 mt-1">
                      {notification.message}
                    </p>
                  )}
                  <p className="text-xs text-gray-500 mt-2">
                    {notification.time}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardDokter;
