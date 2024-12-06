import Navbar from "../../../components/dokter/Navbar";
import Sidebar from "../../../components/dokter/Sidebar";

const InformasiAPK = () => (
  <>
    {/* Navbar */}
    <Navbar />

    {/* Container dengan Sidebar dan Konten */}
    <div className="flex">
      {/* Sidebar */}
      <Sidebar />

      {/* Konten Utama */}
      <div className="flex-grow bg-gray-50 p-8 min-h-screen lg:ml-[277px]">
        <div>
          <h2 className="text-xl font-semibold mb-4">Informasi Aplikasi</h2>
          <p className="text-gray-600">
            Aplikasi ini adalah solusi inovatif untuk mendukung kesehatan mental
            Anda melalui teknologi modern. Dirancang untuk membantu individu
            mengelola stres, kecemasan, dan tantangan emosional lainnya,
            aplikasi ini menawarkan berbagai fitur yang praktis dan mudah
            diakses kapan saja dan di mana saja.
          </p>
        </div>

        <div className="mt-8">
          <h3 className="text-lg font-semibold mb-2">Layanan Pengguna</h3>
          <p className="text-gray-600">Email: support@calmind.com</p>
          <p className="text-gray-600">
            Nomor Telepon: +62 123 4567 890 (Senin–Jumat, 09:00–17:00 WIB)
          </p>
        </div>

        <div className="mt-8">
          <h3 className="text-lg font-semibold mb-2">Versi Aplikasi</h3>
          <p className="text-gray-600">v.0.01</p>
        </div>
      </div>
    </div>
  </>
);

export default InformasiAPK;
