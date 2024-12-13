import { useState } from "react";
import { useLocation, useNavigate, matchPath } from "react-router-dom";

const Navbar = () => {
  const [mobileSearchOpen, setMobileSearchOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // Konfigurasi untuk menentukan elemen yang muncul di setiap halaman
  const navbarConfig = {
    "/dokter/pasien-tertangani": {
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

  // Mencocokkan path dengan config
  const matchedPath =
    Object.keys(navbarConfig).find((key) =>
      matchPath({ path: key, end: true }, location.pathname)
    ) || "default";

  const currentConfig = navbarConfig[matchedPath];

  console.log("Current Path:", location.pathname);
  console.log("Matched Config:", currentConfig);

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
                src="/public/images/kembali.svg"
                alt="Kembali ke Daftar Pasien"
                className="w-4 h-4"
              />
              <span className="sr-only">Kembali</span>
            </button>
          )}

          {/* Judul */}
          <h1 className="absolute inset-x-0 text-center text-xl font-semibold text-gray-800 whitespace-nowrap">
            {currentConfig.title}
          </h1>

         {/* Elemen di sisi kanan */}
         <div className="w-full flex items-center justify-end ms-auto gap-x-1 md:gap-x-3">
            {/* Search Input */}
            {currentConfig.showSearch && (
              <div className="hidden md:block flex-grow max-w-md mx-4">
                <div className="relative">
                  <input
                    type="text"
                    className="py-2 ps-4 pe-10 block w-full bg-white border-gray-200 rounded-lg text-[15px] not-italic font-medium leading-[normal] tracking-[0.075px] focus:outline-gray-400 focus:border-black focus:ring-black disabled:opacity-50 disabled:pointer-events-none"
                    placeholder="Search"
                  />
                  <div className="absolute inset-y-0 end-0 flex items-center pointer-events-none z-20 pe-3">
                    <img src="/images/search.svg" alt="search" />
                  </div>
                </div>
              </div>
            )}
            {/* seacrh di ukuran mobile */}
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

            {/* Icon Bell */}
            {currentConfig.showBell && (
              <button
                type="button"
                className="size-[24px] relative inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100"
              >
                <img src="/images/Bell.svg" alt="" />
                <span className="sr-only">Notifications</span>
              </button>
            )}
          </div>
        </nav>
      </header>

      {/* Mobile Search Overlay */}
      {mobileSearchOpen && currentConfig.showSearch && (
        <div className="fixed inset-0 z-50 bg-white p-4 md:hidden">
          <div className="relative">
            <input
              type="text"
              className="py-2 ps-4 pe-10 block w-full bg-white border-gray-200 rounded-lg text-[15px] not-italic font-medium leading-[normal] tracking-[0.075px] focus:outline-gray-400 focus:border-black focus:ring-black disabled:opacity-50 disabled:pointer-events-none"
              placeholder="Search"
              autoFocus
            />
            <div className="absolute inset-y-0 end-0 flex items-center z-20 pe-3">
              <button
                type="button"
                className="size-[24px] relative inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none"
              >
                <img src="/images/Bell.svg" alt="" />
                <span className="sr-only">Notifications</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
