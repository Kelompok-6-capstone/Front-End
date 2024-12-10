import { useState, useEffect } from "react";
import Navbar from "../../../components/dokter/Navbar";
import Sidebar from "../../../components/dokter/Sidebar";
import { getConsultations } from "../../../api/doctor/doctor"; // Import fungsi untuk mengambil konsultasi

const DaftarPassien = () => {
  const [patients, setPatients] = useState([]); // Menyimpan data pasien
  const [loading, setLoading] = useState(true); // Menangani status loading
  const [error, setError] = useState(null); // Menangani error jika ada

  // Fungsi untuk mendapatkan data pasien
  useEffect(() => {
    const fetchPatients = async () => {
      try {
        const response = await getConsultations(); // Memanggil API untuk mendapatkan daftar pasien
        if (response.status === "success") {
          setPatients(response.data); // Menyimpan data pasien ke state
        }
      } catch (err) {
        setError(`Gagal memuat data pasien: ${err.message}`); // Menampilkan detail error
      } finally {
        setLoading(false);
      }
    };

    fetchPatients();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p>Loading...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-red-500">{error}</p>
      </div>
    );
  }

  return (
    <>
      <Navbar />
      <Sidebar />
      <div className="w-full lg:ps-72">
        <div className="p-4 sm:p-6 space-y-6">
          {/* Container untuk Judul dan Kartu */}
          <div className="flex flex-col items-center">
            {/* Judul */}
            <h2 className="text-xl font-semibold mb-4 dark:text-neutral-300 w-full max-w-2xl">
              Daftar Pasien
            </h2>
            {/* Container Kartu */}
            <div className="flex flex-col items-center justify-center gap-4 w-full">
              {patients.map((patient, index) => (
                <a
                  key={index}
                  className="group flex flex-row w-full h-[76px] max-w-2xl bg-white border shadow-sm rounded-xl hover:shadow-md focus:outline-none focus:shadow-md transition dark:bg-neutral-900 dark:border-neutral-800"
                  href="#"
                >
                  {/* Gambar Pasien */}
                  <img
                    // Menggunakan foto profil default untuk pasien
                    src="/images/admin/admin-profil.png"
                    alt={`${patient.user.name}'s photo`}
                    className="w-12 h-12 rounded-full m-4 object-cover"
                  />
                  {/* Informasi Pasien */}
                  <div className="flex flex-col justify-center flex-grow p-4">
                    <h3 className="group-hover:text-blue-600 font-semibold text-gray-800 dark:group-hover:text-neutral-400 dark:text-neutral-200">
                      {patient.user.name}
                    </h3>
                    <p className="text-sm text-gray-500 dark:text-neutral-500">
                      {patient.user.age} Tahun | {patient.user.job}
                    </p>
                  </div>
                  {/* Ikon Panah */}
                  <div className="flex items-center me-4">
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
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DaftarPassien;
