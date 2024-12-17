import React, { useState } from "react";
import useSortData from "../../hooks/admin/useSortData";
import { getSortIcon } from "../../utils/getSortIcon";
import { useDeleteDoctor } from "../../hooks/admin/useDeleteDoctor";

const DoctorTable = ({ data }) => {
  const { sortedData, sortConfig, requestSort } = useSortData(data);
  const { deleteDoctor, deletedDoctorId, loading, error } = useDeleteDoctor();
  const [doctors, setDoctors] = useState(data);

  const handleDelete = async (id) => {
    const success = await deleteDoctor(id);
    if (success) {
      // Filter dokter yang tersisa setelah penghapusan
      const updatedDoctors = doctors.filter((doctor) => doctor.id !== id);
      setDoctors(updatedDoctors); // Perbarui state dokter
    }
  };

  return (
    <>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-cyan-50">
            <tr>
              <th className="px-6 py-3 text-sm font-semibold text-black border-[1px] border-opacity-15 border-[#000]">
                Id
              </th>
              <th
                className="px-20 py-3 text-sm font-semibold text-black border-[1px] border-opacity-15 border-[#000] cursor-pointer"
                onClick={() => requestSort("nama")}
              >
                Nama {getSortIcon(sortConfig, "nama")}
              </th>
              <th className="px-6 py-3 text-sm font-semibold text-black border-[1px] border-opacity-15 border-[#000]">
                Status
              </th>
              <th className="px-6 py-3 text-sm font-semibold text-black border-[1px] border-opacity-15 border-[#000]">
                Email
              </th>
              <th className="px-6 py-3 text-sm font-semibold text-black border-[1px] border-opacity-15 border-[#000]">
                No Telp
              </th>
              <th className="px-10 py-3 text-sm font-semibold text-black border-[1px] border-opacity-15 border-[#000]">
                Tanggal Lahir
              </th>
              <th
                className="px-10 py-3 text-sm font-semibold text-black border-[1px] border-opacity-15 border-[#000] cursor-pointer"
                onClick={() => requestSort("domisili")}
              >
                Domisili {getSortIcon(sortConfig, "domisili")}
              </th>
              <th
                className="px-6 py-3 text-sm font-semibold text-black border-[1px] border-opacity-15 border-[#000] cursor-pointer"
                onClick={() => requestSort("spesialisasi")}
              >
                Spesialisasi {getSortIcon(sortConfig, "spesialisasi")}
              </th>
              <th
                className="px-6 py-3 text-sm font-semibold text-black border-[1px] border-opacity-15 border-[#000] cursor-pointer"
                onClick={() => requestSort("harga")}
              >
                Harga {getSortIcon(sortConfig, "harga")}
              </th>
              <th className="px-10 py-3 text-sm font-semibold text-black border-[1px] border-opacity-15 border-[#000]">
                Action
              </th>
            </tr>
          </thead>
          <tbody className="bg-cyan-50 text-center">
            {sortedData.map((doctor) => (
              <tr key={doctor.id}>
                <td className="px-6 py-4 border-r border-l border-opacity-15 border-[#000]">
                  {doctor.id}
                </td>
                <td className="px-10 py-4 border-r border-opacity-15 border-[#000]">
                  {doctor.username}
                </td>
                <td className="px-6 py-4 border-r border-opacity-15 border-[#000]">
                  <span className="px-[15px] py-[10px] rounded-full">
                    {doctor.is_active ? "Online" : "Offline"}
                  </span>
                </td>
                <td className="px-6 py-4 border-r border-opacity-15 border-[#000]">
                  {doctor.email}
                </td>
                <td className="px-6 py-4 border-r border-opacity-15 border-[#000]">
                  {doctor.no_hp}
                </td>
                <td className="px-6 py-4 border-r border-opacity-15 border-[#000]">
                  {doctor.date_of_birth}
                </td>
                <td className="px-6 py-4 border-r border-opacity-15 border-[#000]">
                  {doctor.address}
                </td>
                <td className="px-6 py-4 border-r border-opacity-15 border-[#000]">
                  {doctor.title.name}
                </td>
                <td className="px-6 py-4 border-r border-opacity-15 border-[#000]">
                  {doctor.price}
                </td>
                <td className="py-4 border-r border-opacity-15 border-[#000]">
                  <div className="flex gap-1 items-center justify-center w-32">
                    <button>
                      <img src="/images/admin/action.svg" alt="action" />
                    </button>
                    <button
                      onClick={() => handleDelete(doctor.id)}
                      disabled={loading && deletedDoctorId === doctor.id}
                    >
                      {loading && deletedDoctorId === doctor.id ? (
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
    </>
  );
};

export default DoctorTable;
