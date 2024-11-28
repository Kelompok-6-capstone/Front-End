import React from "react";
import Navbar2 from "./Navbar";
import MainDashboard from "./MainDashboard";

const Sidebar = () => {
  return (
    <>
      <div
        id="hs-application-sidebar"
        className="hs-overlay  [--auto-close:lg]
    hs-overlay-open:translate-x-0
    -translate-x-full transition-all duration-300 transform
    fixed inset-y-0 start-0 z-[60]
    bg-[#ECFEFF] border-gray-200
    lg:block lg:translate-x-0 lg:end-auto lg:bottom-0 flex w-[277px] h-full px-[24px)] flex-col items-center gap-[var(--Spacing-32, 32px)] flex-shrink-0"
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
              <img src="/images/admin/admin-profil.png" alt="admin-profile" />
              <h1 className="text-[#000] text-center text-[16px] not-italic font-semibold leading-[normal]">
                Dafa Azriel
              </h1>
              <p className="text-[#000] text-center text-[12px] not-italic font-normal leading-[normal]">
                Admin
              </p>
            </div>
          </div>

          {/* Content */}
          <div className="h-full overflow-y-auto text-[#000] text-center text-[14px] not-italic font-semibold leading-[normal] [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300">
            <nav
              className="hs-accordion-group p-3 w-full flex flex-col flex-wrap"
              data-hs-accordion-always-open=""
            >
              <ul className="flex flex-col space-y-1 gap-[15px] mx-[24px]">
                <li>
                  <a
                    className="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-800 rounded-lg hover:bg-[#22D3EE] focus:outline-none focus:bg-[#22D3EE]"
                    href="#"
                  >
                    <img src="/images/dashboard.svg" alt="" />
                    Dashboard
                  </a>
                </li>
                <li className="hs-accordion" id="transaksi-accordion">
                  <button
                    type="button"
                    className="hs-accordion-toggle w-full text-start flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-800 rounded-lg hover:bg-[#22D3EE] focus:outline-none focus:bg-[#22D3EE"
                    aria-expanded="true"
                    aria-controls="users-accordion-child"
                  >
                    <img src="/images/Money.svg" alt="money" />
                    Transaksi
                  </button>
                </li>
                <li className="hs-accordion" id="account-accordion">
                  <button
                    type="button"
                    className="hs-accordion-toggle w-full text-start flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-800 rounded-lg hover:bg-[#22D3EE] focus:outline-none focus:bg-[#22D3EE"
                    aria-expanded="true"
                    aria-controls="account-accordion-child"
                  >
                    <img src="/images/Chart.svg" alt="chart" />
                    Statistik Bulanan
                  </button>
                </li>
                <li className="hs-accordion" id="projects-accordion">
                  <button
                    type="button"
                    className="hs-accordion-toggle w-full text-start flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-800 rounded-lg hover:bg-[#22D3EE] focus:outline-none focus:bg-[#22D3EE"
                    aria-expanded="true"
                    aria-controls="projects-accordion-child"
                  >
                    <img src="/images/User.svg" alt="user" />
                    Pengguna
                  </button>
                </li>
                <li>
                  <a
                    className="w-full flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-800 rounded-lg hover:bg-[#22D3EE]"
                    href="#"
                  >
                    <img src="/images/News.svg" alt="news" />
                    Artikel
                  </a>
                </li>
                <li>
                  <a
                    className="w-full flex gap-x-3.5 py-2 px-2.5 text-sm text-gray-800 rounded-lg hover:bg-[#22D3EE]"
                    href="#"
                  >
                    <img
                      src="/images/annotation-information.svg"
                      alt="information"
                    />
                    Pengumuman
                  </a>
                </li>
                <li>
                  <a
                    className="w-full flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-800 rounded-lg hover:bg-[#22D3EE]"
                    href="#"
                  >
                    <img src="/images/Message.svg" alt="message" />
                    Laporan Pengguna
                  </a>
                </li>
                <li>
                  <a
                    className="w-full flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-800 rounded-lg hover:bg-[#22D3EE]"
                    href="#"
                  >
                    <img src="/images/gear.svg" alt="gear" />
                    Pengaturan
                  </a>
                </li>
                <li>
                  <a
                    className="w-full flex items-center gap-x-3.5 mt-[58px] py-2 px-2.5 text-sm text-gray-800 rounded-lg hover:bg-[#22D3EE]"
                    href="#"
                  >
                    <img src="/images/logout.svg" alt="logout" />
                    Log Out
                  </a>
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
