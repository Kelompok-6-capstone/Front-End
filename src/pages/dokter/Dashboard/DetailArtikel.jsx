import { Link } from "react-router-dom";

const DetailArtikel = () => {
  const articles = [
    {
      title: "Kapan Harus Konsultasi?",
      date: "20-11-2024",
      description: "Tips dan informasi untuk mengenal tanda stres.",
      link: "#",
      image: "https://via.placeholder.com/150",
    },
    {
      title: "Mengatasi Stres Sehari-hari",
      date: "20-11-2024",
      description: "Panduan sederhana untuk mengelola tekanan harian.",
      link: "#",
      image: "https://via.placeholder.com/150",
    },
    {
      title: "Meditasi Efektif",
      date: "20-11-2024",
      description: "Cara efektif memulai meditasi untuk relaksasi.",
      link: "#",
      image: "https://via.placeholder.com/150",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navbar */}
      <div className="bg-cyan-50 px-6 py-4 flex items-center justify-between sticky top-0 z-10">
        {/* Tombol Back */}
        <button className="font-semibold text-sm">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5L8.25 12l7.5-7.5"
            />
          </svg>
        </button>

        {/* Input Search */}
        <div className="flex-grow mx-4 relative">
          {/* Input Search */}
          <input
            type="text"
            placeholder="Search..."
            className="w-full border rounded-md px-4 py-2 pr-10 outline-none focus:ring-2 focus:ring-cyan-500"
          />

          {/* Ikon Search */}
          <button className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700">
            <img src="/images/search.svg" alt="" />
          </button>
        </div>

        {/* Ikon Lonceng dan Pengaturan */}
        <div className="flex items-center space-x-4">
          {/* Ikon Lonceng */}
          <button className="p-2 text-gray-600 hover:bg-gray-100 rounded-md focus:outline-none focus:ring">
            <span className="sr-only">Notifications</span>
            <img src="/images/Bell.svg" alt="" />
          </button>

          {/* Ikon Pengaturan */}
          <button className="p-2 text-gray-600 hover:bg-gray-100 rounded-md focus:outline-none focus:ring">
            <span className="sr-only">Settings</span>
            <img src="/images/gear.svg" alt="" />
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl bg-white mx-auto p-6 flex space-x-6">
        {/* Article Content */}
        <div className="w-2/3 p-6">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">
            Meditasi Untuk Kesehatan Mental
          </h1>
          <img
            src="https://via.placeholder.com/608x294"
            alt="Meditasi"
            className="rounded-md w-full h-[294px] object-cover mb-6"
          />
          <p className="text-gray-700 leading-relaxed mb-4">
            Meditasi adalah praktik yang sederhana namun efektif untuk
            meningkatkan kesehatan mental. Dengan meditasi, Anda dapat
            mengurangi stres, kecemasan, dan meningkatkan kesejahteraan
            emosional...
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Studi menunjukkan bahwa meditasi dapat menurunkan kadar hormon
            stres, seperti kortisol, meningkatkan produktivitas, dan membantu
            tidur nyenyak. Mulailah meditasi untuk kesejahteraan Anda!
          </p>
          <div className="text-sm text-gray-500 mt-4">
            #Meditasi #KesehatanMental #KetenganganDiri #Relaksasi
          </div>
        </div>

        {/* Sidebar */}
        <aside className="w-1/3 p-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">
            Jelajahi Informasi Lainnya
          </h2>
          <div className="grid grid-cols-1 gap-4">
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
        </aside>
      </div>
    </div>
  );
};

export default DetailArtikel;
