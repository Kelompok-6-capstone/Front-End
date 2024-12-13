import React from "react";
import useSortData from "../../hooks/admin/useSortData";
import { getSortIcon } from "../../utils/getSortIcon";
import HeaderDoctorTable from "./HeaderDoctorTable";

const DoctorTable = ({ data }) => {
  const { sortedData, sortConfig, requestSort } = useSortData(data);
  return (
    <>
      <HeaderDoctorTable />
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
    </>
  );
};

export default DoctorTable;
