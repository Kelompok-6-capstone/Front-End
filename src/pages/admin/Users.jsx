import { useState } from "react";
import PatientTable from "../../components/admin/PatientTable";
import DoctorTable from "../../components/admin/DoctorTable";
import { patientData } from "../../data/admin/patientdata";
import { doctorData } from "../../data/admin/DoctorData";
import Navbar from "../../components/admin/Navbar";
import Sidebar from "../../components/admin/Sidebar";

export function UsersPage() {
  const [activeTab, setActiveTab] = useState("all");

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
            <div className="space-y-8">
              {(activeTab === "all" || activeTab === "patient") && (
                <PatientTable data={patientData} />
              )}
              {(activeTab === "all" || activeTab === "doctor") && (
                <DoctorTable data={doctorData} />
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
