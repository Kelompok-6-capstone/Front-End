import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getConsultationsDetails } from "../../../api/doctor/consultationsDoctor";
import Loading from "../../../components/user/Loading";
import Navbar from "../../../components/dokter/Navbar";

const DetailRiwayatKonsul = () => {
  const { id } = useParams();
  const [consultationData, setConsultationData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await getConsultationsDetails(id);
        setConsultationData(response.data);
      } catch (error) {
        throw new Error(
          error.response?.data?.message ||
            error.message ||
            "Terjadi kesalahan saat memuat detail konsultasi."
        );
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  if (loading) {
    return <Loading />;
  }

  const { user, description, rekomendasi, created_at } = consultationData;

  return (
    <div className="min-h-screen">
      <Navbar />
      {/* Konten Halaman */}
      <div className="flex justify-center items-start mt-10 px-12 mb-8">
        <div className="grid grid-cols-3 gap-x-8 gap-y-4 max-w-6xl">
          {/* Profil Pasien */}
          <div className="col-span-1 bg-cyan-50 p-6 border border-teal-900  rounded-lg h-[305px] w-[320px]">
            <div className="flex flex-col items-center justify-center">
              <img
                src={user.avatar}
                alt="Pasien"
                className="rounded-full border border-teal-500 w-[150px] h-[150px] mb-4 object-cover"
              />
              <h2 className="text-lg font-semibold">{user.username}</h2>

              {/* Umur dengan pengecekan */}
              <p className="text-sm text-gray-500">
                {user.tgl_lahir
                  ? new Date().getFullYear() -
                    new Date(user.tgl_lahir).getFullYear() +
                    " Tahun"
                  : "Umur tidak diketahui"}
              </p>

              {/* Pekerjaan dengan pengecekan */}
              <p className="text-l font-semibold">
                {user.pekerjaan || "Pekerjaan tidak diketahui"}
              </p>
            </div>
          </div>

          {/* Rekomendasi */}
          <div className="col-span-2 bg-white p-6 border w-[815px] h-[625px] border-teal-900 rounded-lg -ml-12">
            <h3 className="text-md font-semibold mb-4 text-teal-900">
              Rekomendasi
            </h3>

            {/* Tanggal created_at di bawah judul */}
            {created_at && (
              <p className="text-xs text-gray-400 mb-4">
                {new Date(created_at)
                  .toLocaleDateString("en-GB")
                  .replace(/\//g, "-")}
              </p>
            )}

            {rekomendasi && rekomendasi.length > 0 ? (
              <ul className="list-disc pl-6 text-gray-500 text-sm space-y-2">
                {rekomendasi.map((rec) => (
                  <li key={rec.id}>{rec.recommendation}</li>
                ))}
              </ul>
            ) : (
              <p className="text-sm text-gray-500">Belum ada rekomendasi.</p>
            )}
          </div>

          {/* Keluhan */}
          <div className="col-span-2 bg-white h-[305px] w-[320px] p-4 rounded-lg border border-teal-900 overflow-y-auto -mt-80 flex flex-col">
            <h3 className="text-md font-semibold mb-2">Keluhan</h3>
            <p className="text-sm text-gray-500">{description}</p>

            {/* Tanggal created_at di bagian paling bawah */}
            {created_at && (
              <p className="text-xs text-gray-400 mt-auto">
                {new Date(created_at)
                  .toLocaleDateString("en-GB")
                  .replace(/\//g, "-")}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailRiwayatKonsul;
