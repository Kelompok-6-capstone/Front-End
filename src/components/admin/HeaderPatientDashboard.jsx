import React from "react";
import { useNavigate } from "react-router-dom";

const HeaderPatientDashboard = () => {
  const navigate = useNavigate();

  const handleClickAllUser = () => {
    navigate("/admin/users");
  };

  return (
    <div className="flex justify-between items-center text-black bg-cyan-50 py-4 px-6 border-[1px] border-opacity-15 border-[#000]">
      <div className="flex flex-col">
        <h1 className="text-2xl font-semibold text-black mb-2">
          Pengguna Pasien
        </h1>
        <h1 className="text-base text-[#737373]">
          Menambahkan Pengguna, Mengedit, Menghapus, Dan Lain-Lain
        </h1>
      </div>
      <button
        className="bg-white text-gray-800 font-medium py-2 px-4 rounded hover:bg-gray-200"
        onClick={handleClickAllUser}
      >
        Lihat Semua
      </button>
    </div>
  );
};

export default HeaderPatientDashboard;
