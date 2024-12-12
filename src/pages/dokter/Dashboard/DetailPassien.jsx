import { useState, useEffect } from "react";
import axiosInstanceDoctor from "../../../utils/axiosInstanceDoctor";
import { SendRecommendation } from "../../../api/doctor/doctor";

const DetailPasien = () => {
  const [patientData, setPatientData] = useState({
    nama: "",
    pekerjaan: "",
    usia: "",
  });
  const [recommendation, setRecommendation] = useState("");

  const calculateAge = (birthDate) => {
    const today = new Date();
    const birth = new Date(birthDate);
    let age = today.getFullYear() - birth.getFullYear();
    const monthDiff = today.getMonth() - birth.getMonth();
    if (
      monthDiff < 0 ||
      (monthDiff === 0 && today.getDate() < birth.getDate())
    ) {
      age--;
    }
    return age;
  };

  useEffect(() => {
    const fetchPatientData = async () => {
      try {
        const response = await axiosInstanceDoctor.get(
          "/doctor/consultations/{id}"
        );
        const { user, description } = response.data.data;
        setPatientData({
          nama: user.nama,
          pekerjaan: user.pekerjaan,
          usia: calculateAge(user.usia),
          keluhan: description
        });
      } catch (error) {
        console.error("Error fetching patient data:", error);
      }
    };

    fetchPatientData();
  }, []);

  const HandleSendRecommendation = async () => {
    try {
      await SendRecommendation(patientData.id, recommendation); // Panggil langsung helper function
      console.log("Rekomendasi berhasil dikirim");
      setRecommendation(""); // Reset input setelah pengiriman
    } catch (error) {
      console.error("Gagal mengirim rekomendasi:", error);
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Navbar */}
      <div className="bg-cyan-50 text-white px-6 py-4 flex items-center justify-between fixed top-0 w-full z-10">
        <button className="text-white font-semibold text-sm bg-white px-2 py-2 rounded-lg">
          <img
            src="/public/images/kembali.svg"
            alt="Pasien"
            className="w-4 h-4"
          />
        </button>
        <h1 className="text-2xl font-bold text-teal-900">Detail Pasien</h1>
        <div></div>
      </div>

      {/* Konten Halaman */}
      <div className="p-6 flex justify-center items-center mt-20">
        <div className="bg-white w-full max-w-6xl p-6 grid grid-cols-3 gap-6">
          {/* Kolom 1: Profil Pasien */}
          <div className="col-span-1 bg-cyan-50 p-4 h-[302px] border border-teal-900 rounded-lg">
            <div className="flex flex-col items-center justify-center h-full gap-2">
              <img
                src="https://via.placeholder.com/150"
                alt="Pasien"
                className="rounded-full mx-auto w-30 h-30 mb-4"
              />
              <h2 className="text-lg font-semibold">{patientData.nama}</h2>
              <p className="text-sm text-gray-500">{patientData.usia} Tahun</p>
              <p className="text-sm text-gray-500">{patientData.pekerjaan}</p>
            </div>
          </div>

          {/* Kolom 2: Riwayat Konsultasi */}
          <div className="col-span-1 bg-white p-4 h-[302px] rounded-lg border border-teal-900">
            <h3 className="text-md font-semibold mb-2">Riwayat Konsultasi</h3>
            <p className="text-sm text-gray-500">Belum ada riwayat terbaru</p>
          </div>

          {/* Kolom 3: Chat Pasien */}
          <div className="col-span-1 row-span-2 bg-white h-[634px] p-4 rounded-lg border border-teal-900 flex flex-col">
            <h3 className="text-md font-semibold mb-4">Chat Pasien</h3>
            {/* Chat Bubble Container */}
            <div className="flex-1 overflow-y-auto space-y-4">
              {/* Chat Bubble 1 */}
              <div className="flex items-start">
                <div className="bg-cyan-50 text-sm text-gray-700 p-2 rounded-lg shadow-lg">
                  Halo Dokter!
                </div>
              </div>
              {/* Chat Bubble 2 */}
              <div className="flex items-end justify-end">
                <div className="bg-cyan-600 text-sm text-white p-2 rounded-lg shadow-lg">
                  Selamat Siang, Ada yang bisa dibantu?
                </div>
              </div>
            </div>

            {/* Input Chat Rekomendasi*/}
            <div className="mt-4 relative flex items-center">
              <input
                type="text"
                placeholder="Ketik Pesan..."
                value={recommendation}
                onChange={(e) => setRecommendation(e.target.value)}
                className="flex-1 border border-teal-900 rounded-lg p-2 text-sm pl-10"
              />
              <button
                onClick={HandleSendRecommendation}
                className="absolute right-2 p-2"
              >
                <img
                  src="/public/images/send.svg"
                  alt="Pasien"
                  className="w-5 h-5"
                />
              </button>
            </div>
          </div>

          {/* Baris 2: Keluhan dan Rekomendasi */}
          <div className="col-span-1 bg-white h-[302px] p-4 rounded-lg border border-teal-900 h-56 overflow-y-auto">
            <h3 className="text-md font-semibold mb-2">Keluhan</h3>
            <p className="text-sm text-gray-500">
              {patientData.keluhan}
            </p>
          </div>

          <div className="col-span-1 bg-white h-[302px] p-4 rounded-lg border border-teal-900">
            <h3 className="text-md font-semibold mb-2">Beri Rekomendasi</h3>
            <textarea
              className="w-full border border-teal-900 h-[175px] rounded-lg p-2 text-sm"
              rows="4"
              placeholder="Masukkan Teks..."
            ></textarea>
            <button className="mt-2 px-4 py-2 w-full bg-teal-900 text-white rounded-lg">
              Kirim Rekomendasi
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailPasien;
