import React, { useState, useEffect } from "react";
import useSortData from "../../hooks/admin/useSortData";
import { getSortIcon } from "../../utils/getSortIcon";
import axiosInstance from "../../utils/axiosInstance";
import Cookies from "js-cookie";
import Swal from "sweetalert2";

const LoadingSpinner = () => {
  return (
    <div className="flex justify-center items-center h-[40vh]">
      <div className="flex flex-col items-center">
        <div className="w-12 h-12 border-4 border-cyan-400 border-t-transparent rounded-full animate-spin"></div>
        <p className="mt-4 text-gray-600 font-medium">
          Memuat data transaksi...
        </p>
      </div>
    </div>
  );
};

const TransactionTable = () => {
  const [data, setData] = useState([]);
  const { sortedData, sortConfig, requestSort } = useSortData(data);
  const [activeTab, setActiveTab] = useState("seluruh");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchData();
  }, [activeTab]);

  const fetchData = async () => {
    try {
      setLoading(true);
      const token = Cookies.get("token_admin");
      if (!token) {
        setError("No admin token found");
        return;
      }

      let endpoint = "/admin/consultations";
      if (activeTab === "Proses") {
        endpoint = "/admin/consultations/pending";
      } else if (activeTab === "Selesai") {
        endpoint = "/admin/consultations/approve";
      }

      const response = await axiosInstance.get(endpoint, {
        headers: { Authorization: `Bearer ${token}` },
      });

      if (response.data.success) {
        setData(response.data.data);
      } else {
        setError("Failed to fetch data");
      }
    } catch (err) {
      setError(err.response?.data || err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleStatusChange = async (id) => {
    try {
      const result = await Swal.fire({
        title: "Apakah Anda yakin menyetujui transaksi ini?",
        text: "Anda tidak akan dapat mengubah status transaksi setelah disetujui!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Ya, setujui!",
        cancelButtonText: "Batal",
      });

      if (result.isConfirmed) {
        const token = Cookies.get("token_admin");
        if (!token) {
          setError("Token admin tidak ditemukan");
          return;
        }

        const response = await axiosInstance.put(
          `/admin/consultations/${id}/approve`,
          { status: "paid" },
          {
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
            },
          }
        );

        if (response.data.success) {
          setData((prevData) =>
            prevData.map((item) =>
              item.id === id ? { ...item, status: "approved" } : item
            )
          );
          Swal.fire("Disetujui!", "Transaksi telah disetujui.", "success");
        } else {
          setError("Gagal memperbarui status");
          Swal.fire("Kesalahan!", "Gagal menyetujui transaksi.", "error");
        }
      }
    } catch (err) {
      setError(err.response?.data || err.message);
      Swal.fire(
        "Kesalahan!",
        "Terjadi kesalahan saat menyetujui transaksi.",
        "error"
      );
    }
  };

  return (
    <div className="p-6">
      <h1 className="font-[Poppins] text-[32px] not-italic font-medium leading-[normal] mb-5">
        Transaksi
      </h1>

      <div className="mb-4 border-b-[1px]">
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
            activeTab === "Proses"
              ? "border-b-2 border-cyan-400 text-black"
              : "text-gray-500"
          }`}
          onClick={() => setActiveTab("Proses")}
        >
          Proses Transaksi
        </button>
        <button
          className={`px-4 py-2 rounded-t-lg ${
            activeTab === "Selesai"
              ? "border-b-2 border-cyan-400 text-black"
              : "text-gray-500"
          }`}
          onClick={() => setActiveTab("Selesai")}
        >
          Transaksi Selesai
        </button>
      </div>

      {loading ? (
        <LoadingSpinner />
      ) : error ? (
        <p className="text-red-500 font-medium">Error: {error}</p>
      ) : (
        <>
          <div className="flex justify-between items-center px-6 py-4 bg-white">
            <div className="flex-1">
              <h2 className="text-[24px] not-italic font-semibold text-center">
                Daftar Transaksi
              </h2>
            </div>
            <a
              href="https://dashboard.sandbox.midtrans.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-600 hover:bg-gray-700 text-white text-sm font-medium py-2 px-4 rounded-lg"
            >
              Lihat ke Midtrans
            </a>
          </div>
          <div className="rounded-lg border overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-cyan-50">
                  <tr>
                    <th className="px-6 py-3 text-sm font-semibold text-black border-[1px] border-opacity-15 border-[#000]">
                      Id
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
                      onClick={() => requestSort("status")}
                    >
                      Status Konsultasi {getSortIcon(sortConfig, "status")}
                    </th>
                    <th className="px-6 py-3 text-sm font-semibold text-black border-[1px] border-opacity-15 border-[#000]">
                      Nama Dokter
                    </th>
                    <th className="px-6 py-3 text-sm font-semibold text-black border-[1px] border-opacity-15 border-[#000]">
                      Harga
                    </th>
                    <th className="px-6 py-3 text-sm font-semibold text-black border-[1px] border-opacity-15 border-[#000]">
                      Status Pembayaran
                    </th>
                    <th className="px-6 py-3 text-sm font-semibold text-black border-[1px] border-opacity-15 border-[#000]">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-cyan-50">
                  {sortedData.map((transaction) => (
                    <tr className="text-center" key={transaction.id}>
                      <td className="px-6 py-4 border-r border-l border-opacity-15 border-[#000]">
                        {transaction.id}
                      </td>
                      <td className="px-6 py-4 border-r border-opacity-15 border-[#000]">
                        {transaction.user.username}
                      </td>
                      <td className="px-6 py-4 border-r border-opacity-15 border-[#000]">
                        {transaction.order_id}
                      </td>
                      <td className="px-6 py-4 border-r border-opacity-15 border-[#000]">
                        {transaction.description}
                      </td>
                      <td className="px-6 py-4 border-r border-opacity-15 border-[#000]">
                        <span
                          className={`px-[15px] py-[10px] rounded-full text-sm font-medium ${
                            transaction.status === "approved"
                              ? "bg-[#CCFBF1] text-[#115E59]"
                              : transaction.status === "pending"
                              ? "bg-[#FEF9C3] text-[#854D0E]"
                              : "bg-[#E0E7FF] text-[#3730A3]"
                          }`}
                        >
                          {transaction.status === "approved"
                            ? "Selesai"
                            : transaction.status === "pending"
                            ? "Proses"
                            : transaction.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 border-r border-opacity-15 border-[#000]">
                        {transaction.doctor.username}
                      </td>
                      <td className="px-6 py-4 border-r border-opacity-15 border-[#000]">
                        {transaction.doctor.price}
                      </td>
                      <td className="px-6 py-4 border-r border-opacity-15 border-[#000]">
                        <span
                          className={`px-[15px] py-[10px] rounded-full text-sm font-medium ${
                            transaction.payment_status === "paid"
                              ? "bg-[#CCFBF1] text-[#115E59]"
                              : transaction.payment_status === ""
                              ? "bg-[#FEF9C3] text-[#854D0E]"
                              : "bg-red-400 text-white"
                          }`}
                        >
                          {transaction.payment_status === "paid"
                            ? "Selesai"
                            : transaction.payment_status === ""
                            ? "Proses"
                            : transaction.payment_status === "failed"
                            ? "gagal"
                            : transaction.payment_status}
                        </span>
                      </td>
                      <td className="px-6 py-4 border-r border-opacity-15 border-[#000]">
                        {transaction.status === "pending" ? (
                          <button
                            onClick={() => handleStatusChange(transaction.id)}
                            className="bg-[#14B8A6] hover:bg-[#1e635b] text-white text-sm font-medium py-2 px-3 rounded-lg"
                          >
                            Approve
                          </button>
                        ) : (
                          <button
                            disabled
                            className="bg-gray-300 text-gray-500 text-sm font-medium py-2 px-3 rounded-lg cursor-not-allowed"
                          >
                            Approved
                          </button>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default TransactionTable;
