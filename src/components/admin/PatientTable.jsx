import React, { useState, useEffect } from "react";
import useSortData from "../../hooks/admin/useSortData";
import { getSortIcon } from "../../utils/getSortIcon";
import { useDeletePatient } from "../../hooks/admin/useDeletePatients";
import axiosInstance from "../../utils/axiosInstance";
import Cookies from "js-cookie";

const PatientTable = ({ data }) => {
  const { sortedData, sortConfig, requestSort } = useSortData(data);
  const { deletePatient, deletedPatientId, loading, error } =
    useDeletePatient();
  const [patients, setPatients] = useState(data);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPatient, setSelectedPatient] = useState(null);
  const [doctorRecommendation, setDoctorRecommendation] = useState(null);

  const handleDelete = async (id) => {
    const success = await deletePatient(id);
    if (success) {
      const updatedPatients = patients.filter((patient) => patient.id !== id);
      setPatients(updatedPatients);
    }
  };

  const handleActionClick = async (patient) => {
    setSelectedPatient(patient);
    setIsModalOpen(true);

    // Fetch doctor's recommendation
    try {
      const token = Cookies.get("token_admin");
      if (!token) {
        throw new Error("No admin token found");
      }

      const response = await axiosInstance.get("/admin/alldocters", {
        headers: { Authorization: `Bearer ${token}` },
      });

      if (response.data && response.data.data) {
        const doctorsData = response.data.data;

        // Cari rekomendasi berdasarkan last_consultation ID
        const doctor = doctorsData.find(
          (doc) =>
            doc.last_consultation &&
            patient.last_consultation &&
            doc.last_consultation.id === patient.last_consultation.id
        );

        setDoctorRecommendation(
          doctor?.last_recommendation?.rekomendasi ||
            "Tidak ada rekomendasi dari dokter."
        );
      } else {
        setDoctorRecommendation("Data dokter tidak ditemukan.");
      }
    } catch (error) {
      console.error("Error fetching doctor recommendation:", error);
      setDoctorRecommendation("Gagal mengambil rekomendasi dokter.");
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedPatient(null);
    setDoctorRecommendation(null);
  };

  return (
    <>
      <div className="overflow-x-auto">
        <table className="w-full text-center">
          <thead className="bg-cyan-50">
            <tr>
              <th className="px-6 py-3 text-sm font-semibold text-black border-[1px] border-opacity-15 border-[#000]">
                Id
              </th>
              <th
                className="px-6 py-3 text-sm font-semibold text-black border-[1px] border-opacity-15 border-[#000] cursor-pointer"
                onClick={() => requestSort("username")}
              >
                Nama {getSortIcon(sortConfig, "username")}
              </th>
              <th className="px-6 py-3 text-sm font-semibold text-black border-[1px] border-opacity-15 border-[#000]">
                Email
              </th>
              <th className="px-6 py-3 text-sm font-semibold text-black border-[1px] border-opacity-15 border-[#000]">
                No Telp
              </th>
              <th className="px-6 py-3 text-sm font-semibold text-black border-[1px] border-opacity-15 border-[#000]">
                Alamat
              </th>
              <th className="px-6 py-3 text-sm font-semibold text-black border-[1px] border-opacity-15 border-[#000]">
                Tanggal Lahir
              </th>
              <th className="px-6 py-3 text-sm font-semibold text-black border-[1px] border-opacity-15 border-[#000]">
                Jenis Kelamin
              </th>
              <th className="px-6 py-3 text-sm font-semibold text-black border-[1px] border-opacity-15 border-[#000]">
                Pekerjaan
              </th>
              <th className="px-10 py-3 text-sm font-semibold text-black border-[1px] border-opacity-15 border-[#000]">
                Action
              </th>
            </tr>
          </thead>
          <tbody className="bg-cyan-50">
            {sortedData.map((patient) => (
              <tr key={patient.id}>
                <td className="px-6 py-4 border-r border-l border-opacity-15 border-[#000]">
                  {patient.id}
                </td>
                <td className="px-6 py-4 border-r border-opacity-15 border-[#000]">
                  {patient.username}
                </td>
                <td className="px-6 py-4 border-r border-opacity-15 border-[#000]">
                  {patient.email}
                </td>
                <td className="px-6 py-4 border-r border-opacity-15 border-[#000]">
                  {patient.no_hp}
                </td>
                <td className="px-6 py-4 border-r border-opacity-15 border-[#000]">
                  {patient.alamat}
                </td>
                <td className="px-6 py-4 border-r border-opacity-15 border-[#000]">
                  {patient.tgl_lahir}
                </td>
                <td className="px-6 py-4 border-r border-opacity-15 border-[#000]">
                  {patient.jenis_kelamin}
                </td>
                <td className="px-6 py-4 border-r border-opacity-15 border-[#000]">
                  {patient.pekerjaan}
                </td>
                <td className="py-4 border-r border-opacity-15 border-[#000]">
                  <div className="flex gap-1 items-center justify-center w-32">
                    <button onClick={() => handleActionClick(patient)}>
                      <img src="/images/admin/action.svg" alt="action" />
                    </button>
                    <button
                      onClick={() => handleDelete(patient.id)}
                      disabled={loading && deletedPatientId === patient.id}
                    >
                      {loading && deletedPatientId === patient.id ? (
                        "Menghapus..."
                      ) : (
                        <img src="/images/admin/trash-button.svg" alt="trash" />
                      )}
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {error && <p className="text-red-500 mt-4">{error}</p>}
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-20 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-lg max-w-md w-full mx-auto p-6">
            <div className="flex flex-col items-center text-center">
              {/* Info Icon */}
              <div className="mb20">
                <img src="/images/admin/info.svg" alt="info" />
              </div>

              {/* Title */}
              <h2 className="text-xl font-bold mb-6">
                Keluhan dan Rekomendasi untuk pasien {selectedPatient?.username}
              </h2>

              {selectedPatient && (
                <div className="w-full text-left">
                  {selectedPatient.last_consultation ? (
                    <>
                      <div className="mb-4">
                        <p className="font-semibold mb-2">
                          Keluhan:{" "}
                          <span className="font-normal">
                            {selectedPatient.last_consultation.title}
                          </span>
                        </p>
                      </div>
                      <div>
                        <p className="font-semibold mb-2">
                          Rekomendasi yang diberikan dokter:
                        </p>
                        {doctorRecommendation ? (
                          <p>{doctorRecommendation}</p>
                        ) : (
                          <p>Tidak ada rekomendasi dari dokter.</p>
                        )}
                      </div>
                    </>
                  ) : (
                    <p className="text-center">Tidak ada keluhan.</p>
                  )}
                </div>
              )}

              {/* Back Button */}
              <button
                onClick={closeModal}
                className="mt-8 px-6 py-2 bg-slate-600 text-white rounded-md hover:bg-slate-700 transition-colors"
              >
                Kembali
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PatientTable;
