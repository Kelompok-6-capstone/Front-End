import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import {
  SendRecommendation,
  getConsultations,
  getConsultationsDetails,
} from "../../../api/doctor/doctor";
import Loading from "../../../components/user/Loading";
import Swal from "sweetalert2";
import Navbar from "../../../components/dokter/Navbar";

const DetailPassien = () => {
  const { id } = useParams();
  console.log("ID dari URL:", id);
  const [patientData, setPatientData] = useState({
    avatar: "",
    nama: "",
    pekerjaan: "",
    usia: "",
    keluhan: "",
  });
  const [loading, setLoading] = useState(true);
  const [recommendation, setRecommendation] = useState("");
  const [consultationHistory, setConsultationHistory] = useState([]);
  const [duration, setDuration] = useState(0);

  // Fungsi buat usia diambil dari tanggal lahir user
  const calculateAge = (birthDate) => {
    const today = new Date();
    let birth;

    // Deteksi format tanggal (DD/MM/YYYY atau YYYY-MM-DD)
    if (birthDate.includes("/")) {
      const birthDateParts = birthDate.split("/");
      birth = new Date(
        birthDateParts[2],
        birthDateParts[1] - 1,
        birthDateParts[0]
      );
    } else if (birthDate.includes("-")) {
      const birthDateParts = birthDate.split("-");
      birth = new Date(
        birthDateParts[0],
        birthDateParts[1] - 1,
        birthDateParts[2]
      );
    } else {
      console.error("Format tanggal tidak diketahui:", birthDate);
      return 0; // Default usia jika format salah
    }

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

  // Fungsi untuk timer di chat pasien
  const formatTime = (seconds) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${hours.toString().padStart(2, "0")}:${minutes
      .toString()
      .padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  useEffect(() => {
    const fetchPatientData = async () => {
      setLoading(true);
      try {
        // fungsi buat ngambil data pasien sesuai id konsultasi
        const consultationDetailResponse = await getConsultationsDetails(id);
        const { user, description, duration } = consultationDetailResponse.data;
        const durationInSeconds = duration * 60;

        setPatientData({
          foto: user.avatar,
          nama: user.username,
          pekerjaan: user.pekerjaan,
          usia: calculateAge(user.tgl_lahir),
          keluhan: description,
        });

        setDuration(durationInSeconds);

        // fungsi untuk mengambil riwayat konsultasi
        // filter nya dari email biar kalo ada user yang banyak
        // konsul tetep masuk ke satu riwayat aja
        const consultationsResponse = await getConsultations();
        const consultations = consultationsResponse.data;

        // Filter konsultasi berdasarkan email user
        const filteredConsultations = consultations.filter(
          (consultation) => consultation.user.email === user.email
        );

        setConsultationHistory(filteredConsultations);
      } catch (error) {
        console.error("Error fetching patient data or consultations:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPatientData();
  }, [id]);

  useEffect(() => {
    let timer;
    if (duration > 0) {
      timer = setInterval(() => {
        setDuration((prevDuration) => prevDuration - 1);
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [duration]);

  // Fungsi buat ngirim rekomendasi
  const HandleSendRecommendation = async () => {
    console.log("Rekomendasi dikirim:", recommendation);
    if (!recommendation.trim()) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Rekomendasi tidak boleh kosong!",
      });
      return;
    }
  
    try {
      await SendRecommendation(id, recommendation);
      Swal.fire({
        icon: "success",
        title: "Berhasil!",
        text: "Rekomendasi berhasil dikirim.",
        confirmButtonText: "OK",
      });
  
      setRecommendation("");
    } catch (error) {
      console.error("Gagal mengirim rekomendasi:", error);
      Swal.fire({
        icon: "error",
        title: "Gagal!",
        text: "Gagal mengirim rekomendasi. Silakan coba lagi.",
        confirmButtonText: "OK",
      });
    }
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="min-h-screen">
    <Navbar/>
      {/* Konten Halaman */}
      <div className="flex justify-center items-center mt-4">
        <div className="bg-white w-full p-12 grid grid-cols-6 gap-6">
          {/*card 1 --> data pasien */}
          <div className="col-span-2 bg-cyan-50 p-4 h-[305px] w-[320px] border border-teal-900 rounded-lg">
            <div className="flex flex-col items-center justify-center h-full">
              <img
                src={patientData.foto || "/images/admin/admin-profil.png"}
                alt="Pasien"
                className="rounded-full border border-teal-500 w-[150px] h-[150px] mb-4"
              />
              <h2 className="text-lg font-semibold">{patientData.nama}</h2>
              <p className="text-sm text-gray-500">{patientData.usia} Tahun</p>
              <p className="text-lg font-semibold">{patientData.pekerjaan}</p>
            </div>
          </div>

          {/* card 2 --> riwayat konsultasi */}
          <div
            className="col-span-2 bg-white p-4 -ml-24 h-[305px] w-[354px] rounded-lg border border-teal-900 overflow-y-auto"
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
          >
            <style>
              {`
      /* Untuk browser berbasis Webkit seperti Chrome, Safari, dan Edge */
      .no-scrollbar::-webkit-scrollbar {
        display: none;
      }
    `}
            </style>
            <h3 className="text-md font-semibold mb-2">Riwayat Konsultasi</h3>
            {consultationHistory.length > 0 ? (
              consultationHistory.map((consultation, index) => (
                <Link
                  to={`/dokter/detail-konsul/${consultation.id}`}
                  key={consultation.id}
                  className="block mt-4 p-2 rounded-lg border border-cyan-950 hover:bg-cyan-50 transition-colors"
                >
                  <h4 className="text-md font-bold text-teal-900">
                    Konsultasi ke-{index + 1}
                  </h4>
                </Link>
              ))
            ) : (
              <p className="text-sm text-gray-500">Belum ada riwayat terbaru</p>
            )}
          </div>

          {/* card 3 --> chat passien */}
          <div className="col-span-2 row-span-2 bg-white h-[634px] w-[570px] p-4 -ml-40 rounded-lg border border-teal-900 flex flex-col">
            <h3 className="text-lg font-semibold mb-4 text-center">
              Chat Pasien
            </h3>

            {/* waktu buat chattingan pasien dan dokter */}
            {duration > 0 && (
              <div className="text-center text-gray-600 mb-4 font-semibold text-lg">
                {formatTime(duration)}
              </div>
            )}

            {/* Chat Bubble Container */}
            <div className="flex-1 overflow-y-auto space-y-4">
              {/* Chat Bubble pasien */}
              <div className="flex items-start">
                <div className="bg-cyan-50 text-sm text-gray-700 p-2 rounded-lg shadow-lg">
                  Halo Dokter!
                </div>
              </div>
              {/* Chat Bubble dokter */}
              <div className="flex items-end justify-end">
                <div className="bg-cyan-600 text-sm text-white p-2 rounded-lg shadow-lg">
                  Selamat Siang, Ada yang bisa dibantu?
                </div>
              </div>
            </div>
            <div className="mt-auto relative flex items-center">
              <input
                type="text"
                placeholder="Ketik Pesan..."
                className="flex-1 border border-teal-900 rounded-lg p-2 text-sm pl-2"
              />
              <button className="absolute right-2 p-2">
                <img
                  src="/public/images/send.svg"
                  alt="Kirim"
                  className="w-5 h-5"
                />
              </button>
            </div>
          </div>

          {/* card 4 baris 2 --> keluhan */}
          <div className="col-span-2 row-span-5 bg-white h-[305px] w-[320px] p-4 rounded-lg border border-teal-900 overflow-y-auto">
            <h3 className="text-md font-semibold mb-2">Keluhan</h3>
            <p className="text-sm text-gray-500">{patientData.keluhan}</p>
          </div>

          {/* card 5 baris 2 --> rekomendasi */}
          <div className="col-span-1 bg-white p-4 -ml-24 h-[305px] w-[354px] p-4 rounded-lg border border-teal-900">
            <h3 className="text-md font-semibold mb-2">Beri Rekomendasi</h3>
            <textarea
              placeholder="Ketik Rekomendasi"
              value={recommendation}
              onChange={(e) => setRecommendation(e.target.value)}
              className="w-full border border-teal-900 h-[175px] rounded-lg p-2 text-sm"
            ></textarea>

            <button
              className="mt-2 px-4 py-2 w-full bg-teal-900 text-white rounded-lg"
              onClick={HandleSendRecommendation}
            >
              Kirim Rekomendasi
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailPassien;
