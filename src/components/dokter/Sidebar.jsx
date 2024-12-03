import React from "react";

const Sidebar = ({ isSidebarOpen, setIsSidebarOpen }) => {
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div>
      {/* Navbar */}
      <header
        className={`fixed top-0 left-0 z-50 w-full bg-cyan-50 py-3 border-b border-gray-200 transition-all duration-300 ${
          isSidebarOpen ? "pl-64" : "pl-0"
        }`}
      >
        <nav className="flex items-center justify-between px-4 lg:px-14 gap-4">
          {/* button buat tutup buka sidebar */}
          <button
            type="button"
            onClick={toggleSidebar}
            className="p-2 rounded-md hover:bg-cyan-100 focus:ring-2 focus:ring-teal-500"
          >
            <img
              src={
                isSidebarOpen
                  ? "/public/images/tutup.svg"
                  : "/public/images/buka.svg"
              }
              alt={isSidebarOpen ? "Close Sidebar" : "Open Sidebar"}
              className="h-6 w-6"
            />
          </button>

          {/* Search Bar */}
          <div className="flex-grow">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3">
                <img
                  src="/public/images/search.svg"
                  alt="Search Icon"
                  className="h-16 -ml-3"
                />
              </div>
              <input
                type="text"
                placeholder="Cari"
                className="block w-full pl-10 pr-4 py-2 border border-cyan-200 rounded-md bg-cyan-50 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
            </div>
          </div>
        </nav>
      </header>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-[300px] bg-cyan-50 transition-transform duration-300 ease-in-out z-50 ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } w-64`}
      >
        <div className="flex flex-col h-full">
          {/* profile dokter */}
          <div className="flex flex-col items-center py-6">
            <img
              src="https://via.placeholder.com/100"
              alt="profile dokter"
              className="h-20 w-20 rounded-full object-cover"
            />
            <div className="mt-3 text-center">
              <p className="text-lg font-semibold text-gray-800">
                dr. Lisa Amelia
              </p>
              <p className="text-sm text-gray-600">Dokter</p>
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex-1 ml-5 mt-4 space-y-3 font-semibold">
            <a
              href="/beranda"
              className="flex items-center px-4 py-2 hover:bg-cyan-400 rounded-md w-[229px]"
            >
              <img
                src="/public/images/dashboard.svg"
                alt="Beranda"
                className="w-5 h-5 mr-3"
              />
              Beranda
            </a>

            <a
              href="/profile"
              className="flex items-center px-4 py-2 hover:bg-cyan-400 rounded-md w-[229px]"
            >
              <img
                src="/public/images/Profil.svg"
                alt="profile"
                className="w-5 h-5 mr-3"
              />
              Profil
            </a>
            <a
              href="/daftar-passien"
              className="flex items-center px-4 py-2 hover:bg-cyan-400 rounded-md w-[229px]"
            >
              <img
                src="/public/images/User.svg"
                alt="passien"
                className="w-5 h-5 mr-3"
              />
              Pasien
            </a>
            <a
              href="/transaksi"
              className="flex items-center px-4 py-2 hover:bg-cyan-400 rounded-md w-[229px]"
            >
              <img
                src="/public/images/Money.svg"
                alt="transaksi"
                className="w-5 h-5 mr-3"
              />
              Transaksi
            </a>
            <a
              href="/pengaturan"
              className="flex items-center px-4 py-2 hover:bg-cyan-400 rounded-md w-[229px]"
            >
              <img
                src="/public/images/gear.svg"
                alt="Setting"
                className="w-5 h-5 mr-3"
              />
              Pengaturan
            </a>
          </nav>

          {/* Logout */}
          <div className="flex-1 mt-14 ml-5 space-y-2 font-semibold">
            <a href="#" className="flex items-center px-4 py-2 rounded-md hover:text-red-500">
              <img
                src="/public/images/logout.svg"
                alt="Logout"
                className="w-5 h-5 mr-3"
              />
              Keluar
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
