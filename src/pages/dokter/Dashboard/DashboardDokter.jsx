import Navbar from "../../../components/dokter/Navbar";
import Sidebar from "../../../components/dokter/Sidebar";
import { Link } from "react-router-dom";

const DashboardDokter = () => {
  const articles = [
    {
      title: "Meditasi Untuk Kesehatan Mental",
      date: "20-11-2024",
      description: "Cara-cara sederhana namun efektif untuk mengurangi stres.",
      link: "#",
      image: "https://via.placeholder.com/150", // Ganti dengan URL gambar sebenarnya
    },
    {
      title: "Mengatasi Stres Sehari-hari",
      date: "20-11-2024",
      description: "Cara-cara sederhana namun efektif untuk mengurangi stres.",
      link: "#",
      image: "https://via.placeholder.com/150", // Ganti dengan URL gambar sebenarnya
    },
    {
      title: "Kapan Harus Konsultasi?",
      date: "20-11-2024",
      description: "Cara-cara sederhana namun efektif untuk mengurangi stres.",
      link: "#",
      image: "https://via.placeholder.com/150", // Ganti dengan URL gambar sebenarnya
    },
  ];

  const notifications = [
    {
      title: "Pasien Baru Ditambahkan!",
      message: "Berikan latihan relaksasi tidur",
      time: "10 November 2024, 18.00",
      link: "#",
      image: "https://via.placeholder.com/50", // Gambar thumbnail untuk notifikasi
    },
    {
      title: "Rina Dewi mengirimkan pesan baru!",
      message: "10 November 2024, 18.00",
      link: "#",
      image: "https://via.placeholder.com/50", // Gambar thumbnail untuk notifikasi
    },
    {
      title: "Ahmad Santoso menambahkan keluhan baru!",
      message: "10 November 2024, 18.00",
      link: "#",
      image: "https://via.placeholder.com/50", // Gambar thumbnail untuk notifikasi
    },
  ];

  return (
    <>
      <Navbar />
      <Sidebar />
      <div className="p-6 bg-white min-h-screen ml-[277px]">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Jelajahi Informasi Terkini */}
          <div className="lg:col-span-2">
            <h2 className="text-xl font-semibold mb-4 px-2 mx-2">
              Jelajahi Informasi Terkini
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-2 px-2 mx-2">
              {articles.map((article, idx) => (
                <div
                  key={idx}
                  className="bg-white border border-cyan-900 rounded-lg overflow-hidden w-[270px] h-[255.79px] mb-4"
                >
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-[125.05px] object-cover"
                  />
                  <div className="p-4">
                    <h3 className="text-[11.37px] font-semibold">
                      {article.title}
                    </h3>
                    <p className="text-[8.53px] text-gray-500">
                      {article.date}
                    </p>
                    <p className="text-[9.95px] text-gray-700 mt-2">
                      {article.description}
                    </p>
                    <Link
                      to="/dokter/detail-artikel"
                      className="text-blue-500 text-[9.95px] font-medium mt-2 inline-block"
                    >
                      Lihat Detail →
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Notifikasi */}
          <div className="lg:col-span-1">
            <h2 className="text-xl font-semibold mb-4 -ml-[25px]">Notifikasi</h2>
            {notifications.map((notification, idx) => (
              <div
                key={idx}
                className="flex flex-col bg-white border border-cyan-900 shadow-sm rounded-xl p-4 md:p-5 mb-4 w-[320px] h-[100px] -ml-[25px]" // Menggunakan ml-2 untuk efek geser
              >
                <div className="flex items-center justify-between h-full">
                  <img
                    src={notification.image}
                    alt="Foto Profil"
                    className="w-12 h-12 rounded-full"
                  />
                  <div className="flex flex-col justify-between flex-grow ml-4 items-start">
                    <a
                      href={notification.link}
                      className="text-[14px] text-blue-500 font-medium"
                    >
                      {notification.title}
                    </a>
                    <p className="text-[14px] text-gray-700 mt-2">
                      {notification.message}
                    </p>
                    <p className="text-[12px] text-gray-500 mt-1">
                      {notification.time}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardDokter;
