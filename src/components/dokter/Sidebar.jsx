import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { getProfileDoctor } from "../../api/doctor/profileDoctor";
import { updateDoctorStatus } from "../../api/doctor/statusDoctor";
import { logoutDoctor } from "../../api/doctor/authDoctor";

const Sidebar = () => {
  const location = useLocation();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [profile, setProfile] = useState(null);
  const sidebarRef = useRef(null);
  const [status, setStatus] = useState(false);
  const isActivePage = (path) => location.pathname === path;
  const [isLoading, setIsLoading] = useState(true);

  // untuk mendapatkan nama halaman berdasarkan pathname
  const getPageName = (pathname) => {
    const pathMap = {
      "/dokter/dashboard": "Dashboard",
      "/dokter/daftar-pasien-tertangani": "Daftar Pasien Tertangani",
      "/dokter/daftar-pasien-baru": "Daftar Pasien Baru",
      "/dokter/daftar-passien": "Daftar Semua Pasien",
      "/dokter/detail-passien/:id": "Detail Pasien",
      "/dokter/profile-dokter": "Profile Dokter",
      "/dokter/transaksi": "Transaksi",
      "/dokter/settings/profile-dokter": "Settings / Profile Dokter",
      "/dokter/edit-profile": "Edit Profile",
      "/dokter/settings/FAQ": "Settings / Bantuan",
      "/dokter/settings/tentang-APK": "Pengaturan / Tentang Aplikasi",
      "/dokter/detail-konsul/:id": "Detail Riwayat Konsultasi",
    };
    return pathMap[pathname] || "Halaman Tidak Dikenal";
  };

  const handleLogout = async () => {
    try {
      await logoutDoctor();
    } catch {
      alert("Logout gagal. Silakan coba lagi.");
    }
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

  useEffect(() => {
    const fetchDoctorProfile = async () => {
      try {
        const response = await getProfileDoctor();
        setProfile(response.data);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        throw new Error(
          error.response?.data?.message ||
            error.message ||
            "Terjadi kesalahan saat memuat profil dokter."
        );
      }
    };

    fetchDoctorProfile();
  }, []);

  useEffect(() => {
    const fetchDoctorStatus = async () => {
      try {
        const response = await getProfileDoctor();
        setStatus(response.data.is_active);
      } catch (error) {
        throw new Error(
          error.response?.data?.message ||
            error.message ||
            "Terjadi kesalahan saat memuat status dokter."
        );
      }
    };

    fetchDoctorStatus();
  }, []);

  const handleStatusToggle = async () => {
    try {
      const newStatus = !status;
      await updateDoctorStatus(newStatus);
      setStatus(newStatus);
    } catch {
      alert("Gagal memperbarui status. Silakan coba lagi.");
    }
  };

  return (
    <>
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-40 ${
          isSidebarOpen ? "block" : "hidden"
        } lg:hidden`}
        style={{ backdropFilter: "blur(5px)" }}
      />
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
        </div>
      </div>

      {/* Sidebar */}
      <div
        id="hs-application-sidebar"
        ref={sidebarRef}
        className={`hs-overlay [--auto-close:lg] hs-overlay-open:translate-x-0 -translate-x-full transition-all duration-300 transform fixed inset-y-0 start-0 z-[60] bg-[#ECFEFF] border-gray-200 lg:block lg:translate-x-0 lg:end-auto lg:bottom-0 flex w-[277px] h-full -px-[4px] flex-col items-center gap-[var(--Spacing-32, 32px)] flex-shrink-0 ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0`}
        role="dialog"
        tabIndex={-1}
        aria-label="Sidebar"
        style={{
          minHeight: "100vh",
        }}
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

            {/* Foto Dokter */}
            <div className="relative flex flex-col justify-center items-center mt-2 -mb-[30px] min-h-[200px]">
              {isLoading ? (
                <div
                  className="animate-spin inline-block w-6 h-6 border-[3px] border-current border-t-transparent text-blue-600 rounded-full dark:text-blue-500"
                  role="status"
                  aria-label="loading"
                >
                  <span className="sr-only">Loading...</span>
                </div>
              ) : (
                <>
                  <img
                    src={profile?.avatar}
                    alt="Profile"
                    className="w-24 h-24 rounded-full border border-cyan-900 object-cover"
                  />
                  <h1 className="text-xl mt-4 font-semibold">
                    {profile?.username}
                  </h1>
                  <div className="flex items-center gap-2">
                    <p className="text-center text-sm">Dokter</p>
                    <span
                      className={`w-3 h-3 rounded-full ${
                        status ? "bg-green-500" : "bg-gray-400"
                      }`}
                    ></span>
                  </div>
                </>
              )}
            </div>
          </div>

          {/* Content */}
          <div
            className="h-full overflow-y-auto text-center text-[14px] font-semibold mt-8"
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
          >
            {" "}
            <style>
              {` /* Untuk browser berbasis Webkit seperti Chrome, Safari, dan Edge */
                .no-scrollbar::-webkit-scrollbar {
                display: none; }`}
            </style>
            <nav
              className="hs-accordion-group p-3 w-full flex flex-col flex-wrap"
              data-hs-accordion-always-open=""
            >
              <ul className="flex flex-col space-y-1 gap-[15px] mx-[-14px] lg:mx-[24px]">
                <li>
                  <Link
                    className={`flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-800 rounded-lg hover:bg-[#22D3EE] focus:outline-none ${
                      isActivePage("/dokter/dashboard") ? "bg-[#22D3EE]" : ""
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
                      isActivePage("/dokter/profile-dokter")
                        ? "bg-[#22D3EE]"
                        : ""
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
                      isActivePage("/dokter/daftar-passien")
                        ? "bg-[#22D3EE]"
                        : ""
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
                      isActivePage("/dokter/transaksi") ? "bg-[#22D3EE]" : ""
                    }`}
                    to="/dokter/transaksi"
                  >
                    <img src="/images/Money.svg" alt="money" />
                    Transaksi
                  </Link>
                </li>

                {/* Dropdown Pengaturan */}
                <li className="relative">
                  <button
                    className={`flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-800 rounded-lg w-full hover:bg-[#22D3EE] focus:outline-none ${
                      isSettingsOpen ? "bg-[#22D3EE]" : ""
                    }`}
                    onClick={() => setIsSettingsOpen(!isSettingsOpen)}
                  >
                    <img src="/images/gear.svg" alt="settings" />
                    Pengaturan
                    <img
                      src="/images/chevron-down.svg"
                      alt="settings"
                      className={`ml-auto transform transition-all duration-200 ${
                        isSettingsOpen ? "rotate-180" : "rotate-0"
                      }`}
                    />
                  </button>
                  <div
                    className={`overflow-hidden transition-max-height duration-500 ease-in-out ${
                      isSettingsOpen ? "max-h-[500px]" : "max-h-0"
                    }`}
                  >
                    <ul className="space-y-5 mt-4 ml-10">
                      <li>
                        <Link
                          className={`flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-800 rounded-lg hover:bg-[#22D3EE] w-full focus:outline-none ${
                            isActivePage("/dokter/settings/profile-dokter")
                              ? "bg-[#22D3EE]"
                              : ""
                          }`}
                          to="/dokter/settings/profile-dokter"
                        >
                          <img src="/images/Profil.svg" alt="Profile" />
                          Profil
                        </Link>
                      </li>

                      <li className="flex items-center justify-between gap-x-3.5 py-2 px-2.5 text-sm text-gray-800 rounded-lg hover:bg-[#22D3EE]">
                        <button className="flex items-center gap-x-3.5">
                          <img src="/images/eye.svg" alt="Profile" />
                          Status
                        </button>
                        <label className="inline-flex items-center cursor-pointer ml-8">
                          <input
                            type="checkbox"
                            className="sr-only peer"
                            checked={status}
                            onChange={handleStatusToggle}
                          />
                          <div className="w-8 h-4 bg-gray-300 rounded-full peer-focus:ring-2 peer-focus:ring-blue-500 peer-checked:bg-blue-500 transition-all relative">
                            <div className="w-3 h-3 bg-white rounded-full absolute top-0.5 left-0.5 transform transition-all peer-checked:translate-x-4"></div>
                          </div>
                        </label>
                      </li>

                      <li className="flex items-center justify-between gap-x-3.5 py-2 px-2.5 text-sm text-gray-800 rounded-lg hover:bg-[#22D3EE]">
                        <button className="flex items-center gap-x-3.5">
                          <img src="/images/Bell.svg" alt="Notifikasi" />
                          Notifikasi
                        </button>
                        <label className="inline-flex items-center cursor-pointer ml-8">
                          <input
                            type="checkbox"
                            className="sr-only peer"
                            onChange={(e) => e.target.checked}
                          />
                          <div className="w-8 h-4 bg-gray-300 rounded-full peer-focus:ring-2 peer-focus:ring-blue-500 peer-checked:bg-blue-500 transition-all relative">
                            <div className="w-3 h-3 bg-white rounded-full absolute top-0.5 left-0.5 transform transition-all peer-checked:translate-x-4"></div>
                          </div>
                        </label>
                      </li>

                      <li>
                        <Link
                          className={`flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-800 rounded-lg hover:bg-[#22D3EE] w-full focus:outline-none ${
                            isActivePage("/dokter/settings/FAQ")
                              ? "bg-[#22D3EE]"
                              : ""
                          }`}
                          to="/dokter/settings/FAQ"
                        >
                          <img src="/images/Question.svg" alt="Bantuan" />
                          Bantuan
                        </Link>
                      </li>
                      <li>
                        <Link
                          className={`flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-800 rounded-lg hover:bg-[#22D3EE] w-full focus:outline-none ${
                            isActivePage("/dokter/settings/tentang-APK")
                              ? "bg-[#22D3EE]"
                              : ""
                          }`}
                          to="/dokter/settings/tentang-APK"
                        >
                          <img src="/images/Info.svg" alt="Tentang" />
                          Tentang
                        </Link>
                      </li>
                    </ul>
                  </div>
                </li>

                <li>
                  <Link
                    className="w-full flex items-center gap-x-3.5 mt-[58px] py-2 px-2.5 text-sm text-gray-800 rounded-lg hover:bg-[#22D3EE]"
                    to="/"
                    onClick={handleLogout}
                  >
                    <img src="/images/logout.svg" alt="logout" />
                    Log Out
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
