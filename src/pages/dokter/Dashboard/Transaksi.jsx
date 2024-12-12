import React from "react";
import Navbar from "../../../components/dokter/Navbar";
import Sidebar from "../../../components/dokter/Sidebar";

const Transkasi = () => {
  const data = [
    {
      month: "November 2024",
      records: [
        {
          date: "03-11-2024",
          name: "Ahmad Santoso",
          amount: "Rp200.000,00",
          status: "Selesai",
        },
        {
          date: "05-11-2024",
          name: "Rina Dewi",
          amount: "Rp150.000,00",
          status: "Selesai",
        },
        {
          date: "10-11-2024",
          name: "Nina Maharani",
          amount: "Rp150.000,00",
          status: "Proses",
        },
      ],
    },
    {
      month: "Oktober 2024",
      records: [
        {
          date: "03-10-2024",
          name: "Ahmad Santoso",
          amount: "Rp200.000,00",
          status: "Selesai",
        },
        {
          date: "05-10-2024",
          name: "Rina Dewi",
          amount: "Rp150.000,00",
          status: "Selesai",
        },
        {
          date: "10-10-2024",
          name: "Nina Maharani",
          amount: "Rp150.000,00",
          status: "Proses",
        },
      ],
    },
    {
      month: "September 2024",
      records: [
        {
          date: "03-09-2024",
          name: "Ahmad Santoso",
          amount: "Rp200.000,00",
          status: "Selesai",
        },
        {
          date: "05-09-2024",
          name: "Rina Dewi",
          amount: "Rp150.000,00",
          status: "Selesai",
        },
        {
          date: "10-09-2024",
          name: "Nina Maharani",
          amount: "Rp150.000,00",
          status: "Proses",
        },
      ],
    },
  ];

  return (
    <>
      <Navbar />
      <div className="flex">
        <Sidebar />
        <div className="p-6 bg-white min-h-screen flex-1 ml-64">
          {" "}
          {/* Flexbox setup to position the main content */}
          <div className="max-w-4xl mx-auto p-6">
            <h2 className="text-lg font-semibold mb-4">Pilih berdasarkan</h2>
            <div className="flex space-x-4 mb-6">
              <select className="preline-select px-3 py-2 border rounded-md">
                <option>Tahun</option>
              </select>
              <select className="preline-select px-3 py-2 border rounded-md">
                <option>Bulan</option>
              </select>
            </div>
            {data.map((section, idx) => (
              <div key={idx} className="mb-6">
                <h3 className="text-lg font-bold mb-3">{section.month}</h3>
                <table className="w-full border-separate border-spacing-0 text-sm rounded-lg border border-gray-500">
                  <thead>
                    <tr style={{ backgroundColor: "#D3E8EA" }}>
                      <th className="px-4 py-2 rounded-tl-lg border border-gray-500">
                        Tanggal
                      </th>
                      <th className="px-4 py-2 border border-gray-500">Nama</th>
                      <th className="px-4 py-2 border border-gray-500">
                        Total Bayar
                      </th>
                      <th className="px-4 py-2 rounded-tr-lg border border-gray-500">
                        Status
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {section.records.map((record, idx) => (
                      <tr
                        key={idx}
                        className="text-center"
                        style={{ backgroundColor: "#D3E8EA" }}
                      >
                        <td
                          className={`px-4 py-2 border border-gray-500 ${
                            idx === section.records.length - 1
                              ? "rounded-bl-lg"
                              : ""
                          }`}
                        >
                          {record.date}
                        </td>
                        <td className="px-4 py-2 border border-gray-500">
                          {record.name}
                        </td>
                        <td className="px-4 py-2 border border-gray-500">
                          {record.amount}
                        </td>
                        <td
                          className={`px-4 py-2 border border-gray-500 ${
                            idx === section.records.length - 1
                              ? "rounded-br-lg"
                              : ""
                          } ${
                            record.status === "Selesai"
                              ? "text-green-600"
                              : "text-yellow-600"
                          }`}
                        >
                          {record.status}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Transkasi;
