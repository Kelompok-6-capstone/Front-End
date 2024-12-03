import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {
  const location = useLocation();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const sidebarRef = useRef(null);
  const isActive = (path) => location.pathname === path;

  // untuk mendapatkan nama halaman berdasarkan pathname
  const getPageName = (pathname) => {
    const pathMap = {
      "/dokter/dashboard": "Dashboard",
      "/dokter/profile-dokter": "Profile Dokter",
      "/dokter/daftar-passien": "Daftar Pasien",
      "/dokter/transaksi": "Transaksi",
      "/dokter/settings": "Pengaturan",
    };
    return pathMap[pathname] || "Halaman Tidak Dikenal";
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setIsSidebarOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <div className="sticky top-0 inset-x-0 z-20 bg-white border-y px-4 sm:px-6 lg:px-8 lg:hidden">
        <div className="flex items-center py-2">
          {/* Navigation Toggle */}
          <button
            type="button"
            className="size-8 flex justify-center items-center gap-x-2 border border-gray-200 text-gray-800 hover:text-gray-500 rounded-lg focus:outline-none focus:text-gray-500 disabled:opacity-50 disabled:pointer-events-none"
            aria-haspopup="dialog"
            aria-expanded={isSidebarOpen}
            aria-controls="hs-application-sidebar"
            aria-label="Toggle navigation"
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          >
            <span className="sr-only">Toggle Navigation</span>
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
              <rect width={18} height={18} x={3} y={3} rx={2} />
              <path d="M15 3v18" />
              <path d="m8 9 3 3-3 3" />
            </svg>
          </button>
          {/* End Navigation Toggle */}
          {/* Breadcrumb */}
          <ol className="ms-3 flex items-center whitespace-nowrap">
            <li className="flex items-center text-sm text-gray-800">
              Application Layout
              <svg
                className="shrink-0 mx-3 overflow-visible size-2.5 text-gray-400"
                width={16}
                height={16}
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5 1L10.6869 7.16086C10.8637 7.35239 10.8637 7.64761 10.6869 7.83914L5 14"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                />
              </svg>
            </li>
            <li
              className="text-sm font-semibold text-gray-800 truncate"
              aria-current="page"
            >
              {getPageName(location.pathname)}
            </li>
          </ol>
          {/* End Breadcrumb */}
        </div>
      </div>

      {/* sidebar */}
      <div
        id="hs-application-sidebar"
        ref={sidebarRef}
        className={`hs-overlay  [--auto-close:lg]
          hs-overlay-open:translate-x-0
          -translate-x-full transition-all duration-300 transform
          fixed inset-y-0 start-0 z-[60]
          bg-[#ECFEFF] border-gray-200
          lg:block lg:translate-x-0 lg:end-auto lg:bottom-0 flex w-[277px] h-full px-[24px)] flex-col items-center gap-[var(--Spacing-32, 32px)] flex-shrink-0
          ${
            isSidebarOpen ? "translate-x-0" : "-translate-x-full"
          } lg:translate-x-0`}
        role="dialog"
        tabIndex={-1}
        aria-label="Sidebar"
      >
        <div className="relative flex flex-col h-full max-h-full">
          <div className="px-5 pt-4 justify-center flex flex-col items-center gap-y-8">
            {/* Logo */}
            <a
              className="flex-none rounded-xl text-xl inline-block font-semibold focus:outline-none focus:opacity-80"
              href="#"
              aria-label="Calmind"
            >
              <img src="/images/Calmind.svg" alt="logo" />
            </a>
            <div className="flex flex-col justify-center items-center mb-[36px]">
              <img
                src="/images/dokter/foto-dokter.png"
                alt="dokter-profile"
                className="w-[100px] h-[100px]"
              />
              <h1 className="text-[#000] text-center text-[16px] not-italic font-semibold leading-[normal]">
                Dr. Lisa Amelia
              </h1>
              <p className="text-[#000] text-center text-[12px] not-italic font-normal leading-[normal]">
                Dokter
              </p>
            </div>
          </div>

          {/* Content */}
          <div className="h-full overflow-y-auto text-[#000] text-center text-[14px] not-italic font-semibold leading-[normal] [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300">
            <nav
              className="hs-accordion-group p-3 w-full flex flex-col flex-wrap"
              data-hs-accordion-always-open=""
            >
              <ul className="flex flex-col space-y-1 gap-[15px] mx-[-14px] lg:mx-[24px]">
                <li>
                  <Link
                    className={`flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-800 rounded-lg hover:bg-[#22D3EE] focus:outline-none ${
                      isActive("/admin/dashboard") ? "bg-[#22D3EE]" : ""
                    }`}
                    to="/dokter/dashboard"
                  >
                    <img src="/images/dashboard.svg" alt="" />
                    Dashboard
                  </Link>
                </li>
                <li className="hs-accordion" id="account-accordion">
                  <Link
                    className={`flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-800 rounded-lg hover:bg-[#22D3EE] focus:outline-none ${
                      isActive("/admin/statistics") ? "bg-[#22D3EE]" : ""
                    }`}
                    to="/dokter/profile-dokter"
                  >
                    <img src="/images/Profil.svg" alt="profile" />
                    Profile
                  </Link>
                </li>
                <li className="hs-accordion" id="account-accordion">
                  <Link
                    className={`flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-800 rounded-lg hover:bg-[#22D3EE] focus:outline-none ${
                      isActive("/admin/statistics") ? "bg-[#22D3EE]" : ""
                    }`}
                    to="/dokter/daftar-passien"
                  >
                    <img src="/images/User.svg" alt="passien" />
                    Pasien
                  </Link>
                </li>
                <li className="hs-accordion" id="transaksi-accordion">
                  <Link
                    className={`flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-800 rounded-lg hover:bg-[#22D3EE] focus:outline-none ${
                      isActive("/admin/transaction") ? "bg-[#22D3EE]" : ""
                    }`}
                    to="/dokter/transaksi"
                  >
                    <img src="/images/Money.svg" alt="money" />
                    Transaksi
                  </Link>
                </li>
                <li>
                  <Link
                    className={`w-full flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-800 rounded-lg hover:bg-[#22D3EE] ${
                      isActive("/admin/settings") ? "bg-[#22D3EE]" : ""
                    }`}
                    to="/dokter/settings"
                  >
                    <img src="/images/gear.svg" alt="gear" />
                    Pengaturan
                  </Link>
                </li>
                <li>
                  <Link
                    className="w-full flex items-center gap-x-3.5 mt-[58px] py-2 px-2.5 text-sm text-gray-800 rounded-lg hover:bg-[#22D3EE]"
                    to="#"
                  >
                    <img src="/images/logout.svg" alt="logout" />
                    Log Out
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
          {/* End Content */}
        </div>
      </div>
    </>
  );
};

export default Sidebar;
