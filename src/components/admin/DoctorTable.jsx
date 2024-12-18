import React, { useState } from "react";
import useSortData from "../../hooks/admin/useSortData";
import { getSortIcon } from "../../utils/getSortIcon";
import { useDeleteDoctor } from "../../hooks/admin/useDeleteDoctor";
import axiosInstance from "../../utils/axiosInstance";
import Cookies from "js-cookie";

const DoctorTable = ({ data }) => {
  const { sortedData, sortConfig, requestSort } = useSortData(data);
  const { deleteDoctor, deletedDoctorId, loading, error } = useDeleteDoctor();
  const [doctors, setDoctors] = useState(data);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [doctorAbout, setDoctorAbout] = useState("");

  const handleDelete = async (id) => {
    const success = await deleteDoctor(id);
    if (success) {
      // Filter dokter yang tersisa setelah penghapusan
      window.location.reload();
    }
  };

  const handleActionClick = async (doctor) => {
    setSelectedDoctor(doctor);
    setIsModalOpen(true);

    try {
      const token = Cookies.get("token_admin");
      if (!token) {
        throw new Error("No admin token found");
      }

      const response = await axiosInstance.get("/admin/alldocters", {
        headers: { Authorization: `Bearer ${token}` },
      });
      const doctorData = response.data.data.find((doc) => doc.id === doctor.id);

      if (doctorData) {
        setDoctorAbout(doctorData.about || "Tidak ada informasi tambahan.");
      } else {
        setDoctorAbout("Data dokter tidak ditemukan.");
      }
    } catch (error) {
      console.error("Error fetching doctor data:", error);
      setDoctorAbout("Gagal mengambil data dokter.");
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedDoctor(null);
    setDoctorAbout("");
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
                    <button onClick={() => handleActionClick(doctor)}>
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

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-20 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-lg max-w-md w-full mx-auto p-6">
            <div className="flex flex-col items-center text-center">
              <h2 className="text-xl font-bold mb-6">
                Tentang Dokter {selectedDoctor?.username}
              </h2>
              <p>{doctorAbout}</p>
              <button
                onClick={closeModal}
                className="mt-8 px-6 py-2 bg-slate-500 text-white rounded-md hover:bg-slate-700 transition-colors"
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

export default DoctorTable;
