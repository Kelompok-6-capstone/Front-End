import React from "react";
import { useState } from "react";
import useSortData from "../../hooks/admin/useSortData";
import { getSortIcon } from "../../utils/getSortIcon";
import { useDeletePatient } from "../../hooks/admin/useDeletePatients";

const PatientTable = ({ data }) => {
  const { sortedData, sortConfig, requestSort } = useSortData(data);
  const { deletePatient, deletedPatientId, loading, error } =
    useDeletePatient();
  const [patients, setPatients] = useState(data);

   const handleDelete = async (id) => {
    const success = await deletePatient(id);
    if (success) {
      // Filter pasien yang tersisa setelah penghapusan
      const updatedPatients = patients.filter((patient) => patient.id !== id);
      setPatients(updatedPatients); // Perbarui state pasien
    }
  };

  return (
    <div className="text-center">
      <h2 className="text-[24px] not-italic font-semibold text-center mb-4 mt-6">
        Daftar Pasien
      </h2>
      <div className="overflow-x-auto">
        <table className="w-full">
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
                  <div className="flex gap-3">
                    <button>
                      <img src="/images/admin/edit-button.svg" alt="edit" />
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
    </div>
  );
};

export default PatientTable;
