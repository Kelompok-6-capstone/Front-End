import { useState } from "react";
import PatientTable from "../../components/admin/PatientTable";
import DoctorTable from "../../components/admin/DoctorTable";
import Navbar from "../../components/admin/Navbar";
import Sidebar from "../../components/admin/Sidebar";
import { useFetchPatients } from "../../hooks/admin/useFetchPatients";
import { useFetchDoctors } from "../../hooks/admin/useFetchDocters";

export default function UsersPage() {
  const [activeTab, setActiveTab] = useState("all");
  const {
    patientData,
    loading: loadingPatients,
    error: errorPatients,
  } = useFetchPatients();
  const {
    doctorData,
    loading: loadingDoctors,
    error: errorDoctors,
  } = useFetchDoctors();

  return (
    <>
      <Navbar />
      <Sidebar />
      <div className="w-full lg:mx-2 lg:ps-[270px]">
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h1 className="font-[Poppins] text-[32px] not-italic font-medium leading-[normal]">
              Pengguna
            </h1>
          </div>

          <div className="border-b mb-6">
            <nav className="flex gap-8 border-b-[1px]">
              {[
                { id: "all", label: "Seluruh Pengguna" },
                { id: "patient", label: "Pasien" },
                { id: "doctor", label: "Dokter" },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`pb-4 px-1 ${
                    activeTab === tab.id
                      ? "border-b-2 border-cyan-400 text-black"
                      : "text-gray-500"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </nav>
          </div>

          {/* Konten Loading atau Data */}
          {loadingPatients || loadingDoctors ? (
            <div className="flex justify-center items-center h-[60vh]">
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 border-4 border-cyan-400 border-t-transparent rounded-full animate-spin"></div>
                <p className="mt-4 text-gray-600 font-medium">
                  Memuat data pengguna...
                </p>
              </div>
            </div>
          ) : errorPatients || errorDoctors ? (
            <p className="text-red-500 font-medium">
              Error: {errorPatients || errorDoctors}
            </p>
          ) : (
            <div className="space-y-8">
              {(activeTab === "all" || activeTab === "patient") && (
                <PatientTable data={patientData} />
              )}
              {(activeTab === "all" || activeTab === "doctor") && (
                <DoctorTable data={doctorData} />
              )}
            </div>
          )}
        </div>
      </div>
    </>
  );
}
