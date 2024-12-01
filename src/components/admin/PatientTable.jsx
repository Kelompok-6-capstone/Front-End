import { useState } from "react";
import { ArrowUp, ArrowDown } from 'lucide-react';

const PatientTable = ({ data }) => {
  const [sortConfig, setSortConfig] = useState({
    key: null,
    direction: null,
  });

  const sortedData = [...data].sort((a, b) => {
    if (!sortConfig.key) return 0;

    const aValue = a[sortConfig.key];
    const bValue = b[sortConfig.key];

    if (sortConfig.key === "usia") {
      return sortConfig.direction === "ascending"
        ? Number(aValue) - Number(bValue)
        : Number(bValue) - Number(aValue);
    }

    return sortConfig.direction === "ascending"
      ? aValue.localeCompare(bValue)
      : bValue.localeCompare(aValue);
  });

  const requestSort = (key) => {
    let direction = "ascending";
    if (sortConfig.key === key && sortConfig.direction === "ascending") {
      direction = "descending";
    }
    setSortConfig({ key, direction });
  };

  const getSortIcon = (columnName) => {
    if (sortConfig.key !== columnName) {
      return <div className="w-4 h-4 inline-block" />;
    }
    return sortConfig.direction === "ascending" ? (
      <ArrowUp className="w-4 h-4 inline-block" />
    ) : (
      <ArrowDown className="w-4 h-4 inline-block" />
    );
  };

  return (
    <div className="text-center">
      <h2 className="text-[24px] not-italic font-semibold text-center mb-4 mt-6">
        Daftar Pasien
      </h2>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-cyan-50 border-[1px] border-opacity-15 border-[#000]">
            <tr>
              <th className="px-6 py-3 text-sm font-semibold text-black border-[1px] border-opacity-15 border-[#000]">
                Id
              </th>
              <th
                className="px-6 py-3 text-sm font-semibold text-black border-[1px] border-opacity-15 border-[#000] cursor-pointer"
                onClick={() => requestSort("nama")}
              >
                Nama {getSortIcon("nama")}
              </th>
              <th className="px-6 py-3 text-sm font-semibold text-black border-[1px] border-opacity-15 border-[#000]">
                Email
              </th>
              <th
                className="px-6 py-3 text-sm font-semibold text-black border-[1px] border-opacity-15 border-[#000] cursor-pointer"
                onClick={() => requestSort("usia")}
              >
                Usia {getSortIcon("usia")}
              </th>
              <th className="px-6 py-3 text-sm font-semibold text-black border-[1px] border-opacity-15 border-[#000]">
                No Telp
              </th>
              <th
                className="px-6 py-3 text-sm font-semibold text-black border-[1px] border-opacity-15 border-[#000] cursor-pointer"
                onClick={() => requestSort("pekerjaan")}
              >
                Pekerjaan {getSortIcon("pekerjaan")}
              </th>
              <th className="px-6 py-3 text-sm font-semibold text-black border-[1px] border-opacity-15 border-[#000]">
                Tanggal Lahir
              </th>
              <th className="px-6 py-3 text-sm font-semibold text-black border-[1px] border-opacity-15 border-[#000]">
                Domisili
              </th>
              <th className="px-10 py-3 text-sm font-semibold text-black border-[1px] border-opacity-15 border-[#000]">
                Action
              </th>
            </tr>
          </thead>
          <tbody className="bg-cyan-50 divide-y divide-gray-200">
            {sortedData.map((patient) => (
              <tr key={patient.id}>
                <td className="px-6 py-4 border-[1px] border-opacity-15 border-[#000]">
                  {patient.id}
                </td>
                <td className="px-6 py-4 border-[1px] border-opacity-15 border-[#000]">
                  {patient.nama}
                </td>
                <td className="px-6 py-4 border-[1px] border-opacity-15 border-[#000]">
                  {patient.email}
                </td>
                <td className="px-6 py-4 border-[1px] border-opacity-15 border-[#000]">
                  {patient.usia}
                </td>
                <td className="px-6 py-4 border-[1px] border-opacity-15 border-[#000]">
                  {patient.noTelp}
                </td>
                <td className="px-6 py-4 border-[1px] border-opacity-15 border-[#000]">
                  {patient.pekerjaan}
                </td>
                <td className="px-6 py-4 border-[1px] border-opacity-15 border-[#000]">
                  {patient.tanggalLahir}
                </td>
                <td className="px-6 py-4 border-[1px] border-opacity-15 border-[#000]">
                  {patient.domisili}
                </td>
                <td className="px-6 py-4 border-[1px] border-opacity-15 border-[#000]">
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

export default PatientTable;

