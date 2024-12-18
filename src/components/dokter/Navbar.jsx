import { useState } from "react";
import { useLocation, useNavigate, matchPath } from "react-router-dom";
import Swal from "sweetalert2";
import { getsSearchConsultations } from "../../api/doctor/searchConsultation";

const Navbar = () => {
  const [mobileSearchOpen, setMobileSearchOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState(""); 

  // Konfigurasi untuk menentukan elemen yang muncul di setiap halaman
  const navbarConfig = {
    "/dokter/daftar-pasien-tertangani": {
      showSearch: true,
      showBell: true,
      showBack: true,
    },
    "/dokter/daftar-pasien-baru": {
      showSearch: true,
      showBell: true,
      showBack: true,
    },
    "/dokter/detail-passien/:id": {
      title: "Detail Pasien",
      showSearch: false,
      showBell: false,
      showBack: true,
    },
    "/dokter/detail-konsul/:id": {
      title: "Detail Riwayat Konsultasi",
      showSearch: false,
      showBell: false,
      showBack: true,
    },
    "/dokter/dashboard": {
      showSearch: true,
      showBell: false,
      showBack: false,
    },
    default: {
      showSearch: true,
      showBell: true,
      showBack: false,
    },
  };

  const handleSearch = async (e) => {
    e.preventDefault();

    if (!searchQuery.trim()) {
      Swal.fire({
        icon: "warning",
        title: "Pencarian Kosong",
        text: "Harap masukkan nama pasien untuk pencarian!",
      });
      return;
    }

    try {
      const results = await getsSearchConsultations(searchQuery);

      if (results && results.length > 0) {
        const firstResult = results[0];
        navigate(`/dokter/detail-passien/${firstResult.id}`);
      }
    } catch (error) {
      console.error("Error during search:", error);
    }
  };

  // Mencocokkan path dengan config
  const matchedPath =
    Object.keys(navbarConfig).find((key) =>
      matchPath({ path: key, end: true }, location.pathname)
    ) || "default";

  const currentConfig = navbarConfig[matchedPath];

  return (
    <>
      <header className="sticky top-0 inset-x-0 flex items-center z-[48] w-full h-[70px] bg-cyan-50 text-sm py-2.5">
        <nav className="relative w-full flex items-center justify-between px-4 sm:px-6">
          {/* Tombol Kembali */}
          {currentConfig.showBack && (
            <button
              type="button"
              className="absolute left-12 top-1/2 transform -translate-y-1/2 inline-flex items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent text-gray-800 z-50"
              onClick={() => navigate(-1)}
            >
              <img
                src="/images/kembali.svg"
                alt="Kembali ke Daftar Pasien"
                className="w-4 h-4"
              />
              <span className="sr-only">Kembali</span>
            </button>
          )}
          <div className="block md:hidden">
            <img
              src="/public/images/logo.png"
              alt="Logo"
              className="h-8 w-auto"
            />
          </div>

          {/* Judul halaman*/}
          <h1 className="absolute inset-x-0 text-center text-xl font-semibold text-gray-800 whitespace-nowrap">
            {currentConfig.title}
          </h1>

          {/* Elemen di sisi kanan */}
          <div className="w-full flex items-center justify-end ms-auto gap-x-1 md:gap-x-3">
            {/* Search Input */}
            {currentConfig.showSearch && (
              <div className="hidden md:block flex-grow max-w-md mx-4">
                <form className="relative" onSubmit={handleSearch}>
                  <input
                    type="text"
                    className="py-2 ps-4 pe-10 block w-full bg-white border-gray-200 rounded-lg text-[15px] not-italic font-medium leading-[normal] tracking-[0.075px] focus:outline-gray-400 focus:border-black focus:ring-black disabled:opacity-50 disabled:pointer-events-none"
                    placeholder="Cari nama pasien..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                  <button
                    type="submit"
                    className="absolute inset-y-0 end-0 flex items-center z-20 pe-3"
                  >
                    <img src="/images/search.svg" alt="search" />
                  </button>
                </form>
              </div>
            )}
            {/* seacrh di ukuran mobile */}
            {currentConfig.showSearch && (
              <button
                type="button"
                className="md:hidden size-[38px] relative inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none"
                onClick={() => setMobileSearchOpen(true)}
              >
                <svg
                  className="shrink-0 size-4"
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx={11} cy={11} r={8} />
                  <path d="m21 21-4.3-4.3" />
                </svg>
                <span className="sr-only">Search</span>
              </button>
            )}

            {/* Icon Bell */}
            {currentConfig.showBell && (
              <button
                type="button"
                onClick={() => navigate("/dokter/dashboard")}
                className="size-[24px] relative inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100"
              >
                <img src="/images/Bell.svg" alt="Bell Icon" />
                <span className="sr-only">Notifications</span>
              </button>
            )}
          </div>
        </nav>
      </header>

      {/* Mobile Search Overlay */}
      {mobileSearchOpen && currentConfig.showSearch && (
        <div className="fixed inset-0 z-50 bg-white p-4 md:hidden">
          <form className="relative" onSubmit={handleSearch}>
            <input
              type="text"
              className="py-2 ps-4 pe-10 block w-full bg-white border-gray-200 rounded-lg text-[15px] not-italic font-medium leading-[normal] tracking-[0.075px] focus:outline-gray-400 focus:border-black focus:ring-black disabled:opacity-50 disabled:pointer-events-none"
              placeholder="Cari nama pasien..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              autoFocus
            />
            <button
              type="submit"
              className="absolute inset-y-0 end-0 flex items-center z-20 pe-3"
            >
              <img src="/images/search.svg" alt="search" />
            </button>
          </form>
          <button
            type="button"
            className="absolute top-4 right-4 text-gray-800"
            onClick={() => setMobileSearchOpen(false)}
          >
            Close
          </button>
        </div>
      )}
    </>
  );
};

export default Navbar;
