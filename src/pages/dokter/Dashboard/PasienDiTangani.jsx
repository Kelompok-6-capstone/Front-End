import { useEffect, useState } from "react";
import Navbar from "../../../components/dokter/Navbar";
import { getConsultations } from "../../../api/doctor/consultationsDoctor";

const PasienDitangani = () => {
  const [patients, setPatients] = useState([]);

  useEffect(() => {
    const fetchConsultations = async () => {
      try {
        const response = await getConsultations();
  
        const expiredPatients = response.data
          .filter((consultation) => consultation.status === "expired")
          .map((consultation) => ({
            id: consultation.id,
            nama: consultation.user.username,
            umur:
              new Date().getFullYear() -
              new Date(consultation.user.tgl_lahir).getFullYear(),
            profesi: consultation.user.pekerjaan || "Tidak diketahui",
            avatar:
              consultation.user.avatar,
            updatedAt: new Date(consultation.updated_at), 
          }))
          .sort((a, b) => b.updatedAt - a.updatedAt);
  
        setPatients(expiredPatients);
      } catch (error) {
        throw new Error(
          error.response?.data?.message ||
          error.message ||
          "Terjadi kesalahan saat memuat data konsultasi."
        );
      }
    };
    
    const intervalId = setInterval(fetchConsultations, 1000);
  
    // Cleanup polling saat komponen unmount
    return () => clearInterval(intervalId);
  }, []);  

  return (
    <>
      <Navbar />
      <div className="p-12 bg-white min-h-screen flex justify-center">
        <div>
          <h2 className="text-xl font-semibold mb-4">
            Pasien Sudah Di Tangani
          </h2>
          <div className="grid grid-cols-1 gap-4">
            {patients.length > 0 ? (
              patients.map((pasien, idx) => (
                <div
                  key={idx}
                  className="flex flex-row w-[584px] h-[76px] max-w-2xl bg-white border border-cyan-950 rounded-xl mx-auto"
                >
                  <img
                    src={pasien.avatar}
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
                  <a
                    href={`detail-passien/${pasien.id}`}
                    className="flex items-center me-4"
                  >
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
                    >
                      <path d="m9 18 6-6-6-6" />
                    </svg>
                  </a>
                </div>
              ))
            ) : (
              <p className="text-center text-gray-500">
                Belum ada pasien yang ditangani
              </p>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default PasienDitangani;
