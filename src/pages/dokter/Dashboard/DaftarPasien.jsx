import { useEffect, useState } from "react";
import Navbar from "../../../components/dokter/Navbar";
import Sidebar from "../../../components/dokter/Sidebar";
import { getConsultations } from "../../../api/doctor/consultationsDoctor";
import Loading from "../../../components/user/Loading";

const DaftarPasien = () => {
  const [patients, setPatients] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchConsultations = async () => {
      try {
        const data = await getConsultations();
        setPatients(groupByEmail(data.data));
      } catch (error) {
        throw new Error(
          error.response?.data?.message ||
          error.message ||
          "Terjadi kesalahan saat memuat konsultasi."
        );
      } finally {
        setLoading(false);
      }
    };
  
    const intervalId = setInterval(fetchConsultations, 1000);
  
    return () => clearInterval(intervalId);
  }, []);  

  const groupByEmail = (patients) => {
    if (!Array.isArray(patients)) {
      return {};
    }

    const grouped = {};
    patients.forEach((patient) => {
      if (!grouped[patient.user.email]) {
        grouped[patient.user.email] = [];
      }
      grouped[patient.user.email].push(patient);
    });
    return grouped;
  };

  // ngambil id terakhir konsultasi
  // kalo email nya duplikat jadi pas di klik card pasien nya bakal masuk
  // ke id konsultasi terakhir
  const getLatestConsultationId = (consultations) => {
    return consultations.length > 0
      ? consultations[consultations.length - 1].id
      : null;
  };

  // buat usia
  const calculateAge = (birthDate) => {
    const today = new Date();
    let birth;

    if (birthDate.includes("/")) {
      const birthDateParts = birthDate.split("/");
      birth = new Date(
        birthDateParts[2],
        birthDateParts[1] - 1,
        birthDateParts[0]
      );
    } else if (birthDate.includes("-")) {
      const birthDateParts = birthDate.split("-");
      birth = new Date(
        birthDateParts[0],
        birthDateParts[1] - 1,
        birthDateParts[2]
      );
    } else {
      return 0;
    }

    let age = today.getFullYear() - birth.getFullYear();
    const monthDiff = today.getMonth() - birth.getMonth();
    if (
      monthDiff < 0 ||
      (monthDiff === 0 && today.getDate() < birth.getDate())
    ) {
      age--;
    }
    return age;
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <Navbar />
      <Sidebar />
      <div className="w-full lg:ps-72">
        <div className="p-4 sm:p-6 space-y-6">
          <div className="flex flex-col items-center">
            <h2 className="text-xl font-semibold mb-4 w-full max-w-2xl">
              Daftar Pasien
            </h2>
            <div className="flex flex-col items-center justify-center gap-4 w-full">
              {Object.keys(patients).length === 0 ? (
                <p className="text-gray-500">Belum ada pasien terdaftar.</p>
              ) : (
                Object.keys(patients).map((email, index) => {
                  const latestConsultationId = getLatestConsultationId(
                    patients[email]
                  );
                  const latestConsultation = patients[email].find(
                    (c) => c.id === latestConsultationId
                  );

                  return (
                    <a
                      key={index}
                      href={`detail-passien/${latestConsultation.id}`}
                      className="flex flex-row w-full h-[76px] max-w-2xl bg-white border border-cyan-950 rounded-xl cursor-pointer"
                    >
                      <img
                        src={
                          latestConsultation.user.avatar
                        }
                        className="w-14 h-14 rounded-full m-2 object-cover mx-2"
                        alt="Profil Pasien"
                      />
                      <div className="flex flex-col justify-center flex-grow p-4">
                        <h3 className="font-semibold text-gray-800">
                          {latestConsultation.user.username}
                        </h3>
                        <p className="text-sm text-gray-500">
                          {calculateAge(latestConsultation.user.tgl_lahir || "Usia tidak diketahui")}{" "}
                          Tahun | {latestConsultation.user.pekerjaan || "Pekerjaan tidak diketahui"}
                        </p>
                      </div>
                      <div className="flex items-center me-4">
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
                      </div>
                    </a>
                  );
                })
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DaftarPasien;
