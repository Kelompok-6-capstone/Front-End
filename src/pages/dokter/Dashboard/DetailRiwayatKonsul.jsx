import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { getConsultationsDetails } from "../../../api/doctor/doctor";
import Loading from "../../../components/user/Loading";

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
        console.error("Error fetching consultation details:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  if (!consultationData) {
    return <div className="text-center mt-4">Data tidak ditemukan</div>;
  }

  if (loading) {
    return <Loading />;
  }

  const { user, description, rekomendasi } = consultationData;

  return (
    <div className="min-h-screen">
      {/* Navbar */}
      <div className="bg-cyan-50 text-white px-6 py-4 flex items-center justify-between fixed top-0 w-full z-10">
        <Link
          to={`/dokter/detail-passien/${consultationData.id}`}
          className="text-white font-semibold text-sm bg-white px-2 py-2 rounded-lg"
        >
          <img
            src="/public/images/kembali.svg"
            alt="Kembali"
            className="w-4 h-4"
          />
        </Link>
        <h1 className="text-2xl font-bold text-teal-900">
          Detail Riwayat Konsultasi
        </h1>
        <div></div>
      </div>

      {/* Konten Halaman */}
      <div className="flex justify-center items-start mt-28 px-6 mb-10">
        <div className="grid grid-cols-3 gap-x-8 gap-y-4 max-w-6xl">
          {/* Profil Pasien */}
          <div className="col-span-1 bg-cyan-50 p-6 border border-teal-900 -ml-10 rounded-lg h-[305px] w-[320px]">
            <div className="flex flex-col items-center justify-center">
              <img
                src={user.avatar || "/images/admin/admin-profil.png"}
                alt="Pasien"
                className="rounded-full border border-teal-500 w-[150px] h-[150px] mb-4"
              />
              <h2 className="text-lg font-semibold">{user.username}</h2>
              <p className="text-sm text-gray-500">
                {new Date().getFullYear() -
                  new Date(user.tgl_lahir).getFullYear()}{" "}
                Tahun
              </p>
              <p className="text-lg font-semibold">{user.pekerjaan}</p>
            </div>
          </div>

          {/* Rekomendasi */}
          <div className="col-span-2 bg-white p-6 border w-[904px] h-[625px] border-teal-900 rounded-lg -ml-24">
            <h3 className="text-md font-semibold mb-4 text-teal-900">
              Rekomendasi
            </h3>
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
          <div className="col-span-2 bg-white h-[305px] w-[320px] p-4 rounded-lg border border-teal-900 overflow-y-auto -ml-10 -mt-80">
            <h3 className="text-md font-semibold mb-2">Keluhan</h3>
            <p className="text-sm text-gray-500">{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailRiwayatKonsul;
