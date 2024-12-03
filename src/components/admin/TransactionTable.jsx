import React, { useState } from "react";
import useSortData from "../../hooks/useSortData";
import { getSortIcon } from "../../utils/getSortIcon";

const TransactionTable = ({ data }) => {
  const { sortedData, sortConfig, requestSort } = useSortData(data);
  const [activeTab, setActiveTab] = useState("seluruh");

  const filteredData = sortedData.filter((transaction) => {
    if (activeTab === "seluruh") return true;
    if (activeTab === "proses")
      return transaction.statusKonsultasi === "Proses";
    if (activeTab === "selesai")
      return transaction.statusKonsultasi === "Selesai";
    return true;
  });

  return (
    <div className="p-6">
      <h1 className="font-[Poppins] text-[32px] not-italic font-medium leading-[normal] mb-5">
        Transaksi
      </h1>

      <div className="mb-4">
        <button
          className={`px-4 py-2 mr-2 rounded-t-lg ${
            activeTab === "seluruh"
              ? "border-b-2 border-cyan-400 text-black"
              : "text-gray-500"
          }`}
          onClick={() => setActiveTab("seluruh")}
        >
          Seluruh Transaksi
        </button>
        <button
          className={`px-4 py-2 mr-2 rounded-t-lg ${
            activeTab === "proses"
              ? "border-b-2 border-cyan-400 text-black"
              : "text-gray-500"
          }`}
          onClick={() => setActiveTab("proses")}
        >
          Proses Transaksi
        </button>
        <button
          className={`px-4 py-2 rounded-t-lg ${
            activeTab === "selesai"
              ? "border-b-2 border-cyan-400 text-black"
              : "text-gray-500"
          }`}
          onClick={() => setActiveTab("selesai")}
        >
          Transaksi Selesai
        </button>
      </div>

      <h2 className="text-[24px] not-italic font-semibold text-center mb-4 mt-6">
        Daftar Pasien
      </h2>
      <div className="rounded-lg border overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-cyan-50">
              <tr>
                <th className="px-6 py-3 text-sm font-semibold text-black border-[1px] border-opacity-15 border-[#000]">
                  Id
                </th>
                <th className="px-6 py-3 text-sm font-semibold text-black border-[1px] border-opacity-15 border-[#000]">
                  Id Pasien
                </th>
                <th
                  className="px-6 py-3 text-sm font-semibold text-black border-[1px] border-opacity-15 border-[#000] cursor-pointer"
                  onClick={() => requestSort("namaPasien")}
                >
                  Nama Pasien {getSortIcon(sortConfig, "namaPasien")}
                </th>
                <th className="px-6 py-3 text-sm font-semibold text-black border-[1px] border-opacity-15 border-[#000]">
                  Id Konsultasi
                </th>
                <th className="px-6 py-3 text-sm font-semibold text-black border-[1px] border-opacity-15 border-[#000]">
                  Keluhan
                </th>
                <th
                  className="px-6 py-3 text-sm font-semibold text-black border-[1px] border-opacity-15 border-[#000] cursor-pointer"
                  onClick={() => requestSort("statusKonsultasi")}
                >
                  Status Konsultasi{" "}
                  {getSortIcon(sortConfig, "statusKonsultasi")}
                </th>
              </tr>
            </thead>
            <tbody className="bg-cyan-50">
              {filteredData.map((transaction) => (
                <tr key={transaction.id}>
                  <td className="px-6 py-4 border-r border-l border-opacity-15 border-[#000]">
                    {transaction.id}
                  </td>
                  <td className="px-6 py-4 border-r border-opacity-15 border-[#000]">
                    {transaction.idPasien}
                  </td>
                  <td className="px-6 py-4 border-r border-opacity-15 border-[#000]">
                    {transaction.namaPasien}
                  </td>
                  <td className="px-6 py-4 border-r border-opacity-15 border-[#000]">
                    {transaction.idKonsultasi}
                  </td>
                  <td className="px-6 py-4 border-r border-opacity-15 border-[#000]">
                    {transaction.keluhan}
                  </td>
                  <td className="px-6 py-4 border-r border-opacity-15 border-[#000]">
                    <span
                      className={`px-3 py-1 rounded-full text-sm ${
                        transaction.statusKonsultasi === "Selesai"
                          ? "bg-green-100 text-green-800"
                          : "bg-yellow-100 text-yellow-800"
                      }`}
                    >
                      {transaction.statusKonsultasi}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default TransactionTable;
