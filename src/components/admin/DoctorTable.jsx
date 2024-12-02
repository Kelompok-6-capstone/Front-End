import React from "react";
import useSortData from "../../hooks/useSortData";
import { getSortIcon } from "../../utils/getSortIcon";

const DoctorTable = ({ data }) => {
  const { sortedData, sortConfig, requestSort } = useSortData(data);
  return (
    <div className="text-center">
      <h2 className="text-[24px] not-italic font-semibold text-center mb-4 mt-6">
        Daftar Dokter
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
                onClick={() => requestSort("nama")}
              >
                Nama {getSortIcon(sortConfig, "nama")}
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
                className="px-6 py-3 text-sm font-semibold text-black border-[1px] border-opacity-15 border-[#000] cursor-pointer"
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
                className="px-20 py-3 text-sm font-semibold text-black border-[1px] border-opacity-15 border-[#000] cursor-pointer"
                onClick={() => requestSort("harga")}
              >
                Harga {getSortIcon(sortConfig, "harga")}
              </th>
              <th
                className="px-6 py-3 text-sm font-semibold text-black border-[1px] border-opacity-15 border-[#000] cursor-pointer"
                onClick={() => requestSort("rating")}
              >
                Rating {getSortIcon(sortConfig, "rating")}
              </th>
              <th className="px-28 py-3 text-sm font-semibold text-black border-[1px] border-opacity-15 border-[#000]">
                Jadwal Praktik
              </th>
              <th className="px-10 py-3 text-sm font-semibold text-black border-[1px] border-opacity-15 border-[#000]">
                Action
              </th>
            </tr>
          </thead>
          <tbody className="bg-cyan-50">
            {sortedData.map((doctor) => (
              <tr key={doctor.id}>
                <td className="px-6 py-4 border-r border-l border-opacity-15 border-[#000]">
                  {doctor.id}
                </td>
                <td className="px-10 py-4 border-r border-opacity-15 border-[#000]">
                  {doctor.nama}
                </td>
                <td className="px-6 py-4 border-r border-opacity-15 border-[#000]">
                  {doctor.email}
                </td>
                <td className="px-6 py-4 border-r border-opacity-15 border-[#000]">
                  {doctor.noTelp}
                </td>
                <td className="px-6 py-4 border-r border-opacity-15 border-[#000]">
                  {doctor.tanggalLahir}
                </td>
                <td className="px-6 py-4 border-r border-opacity-15 border-[#000]">
                  {doctor.domisili}
                </td>
                <td className="px-6 py-4 border-r border-opacity-15 border-[#000]">
                  {doctor.spesialisasi}
                </td>
                <td className="px-6 py-4 border-r border-opacity-15 border-[#000]">
                  {doctor.harga}
                </td>
                <td className="px-6 py-4 border-r border-opacity-15 border-[#000]">
                  {doctor.rating}
                </td>
                <td className="px-6 py-4 border-r border-opacity-15 border-[#000]">
                  {doctor.jadwalPraktik}
                </td>
                <td className="px-6 py-4 border-r border-opacity-15 border-[#000]">
                  <div className="flex gap-3">
                    <button>
                      <img src="/images/admin/edit-button.svg" alt="edit" />
                    </button>
                    <button>
                      <img src="/images/admin/trash-button.svg" alt="trash" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DoctorTable;
