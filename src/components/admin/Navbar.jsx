import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import useSidebarStore from "../../stores/useSidebarStore";

const Navbar = () => {
  const [mobileSearchOpen, setMobileSearchOpen] = useState(false);
  const navigate = useNavigate();
  const { toggleSidebar, isOpen } = useSidebarStore();

  const handleClickProfile = () => {
    navigate("/admin/profile");
  };

  return (
    <header className="sticky top-0 flex justify-center md:justify-start md:flex-nowrap z-[48] w-full bg-cyan-50 text-sm py-2.5 lg:ps-[260px]">
      <nav className="px-4 sm:px-6 flex items-center w-full mx-auto">
        <div className="me-5 lg:me-2 lg:hidden">
          <button
            className="p-1 w-11 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-600 transition-all"
            onClick={toggleSidebar}
          >
            {!isOpen && (
              <img src="/images/admin/sidebar-right.svg" alt="Open Sidebar" />
            )}
          </button>
        </div>
        <div className="flex lg:me-2 lg:hidden">
          <a
            className="flex-none rounded-md text-xl inline-block font-semibold focus:outline-none focus:opacity-80"
            href="#"
            aria-label="Calmind"
          >
            <img src="/images/Calmind.svg" alt="logo" />
          </a>
        </div>
        <div className="w-full flex items-center justify-end">
          <div className="hidden md:block flex-grow max-w-md mx-4">
            <div className="relative">
              <input
                type="text"
                className="py-2 ps-4 pe-10 block w-full bg-white border-gray-200 rounded-lg text-[15px] not-italic font-medium leading-[normal] tracking-[0.075px] focus:outline-gray-400 focus:border-black focus:ring-black disabled:opacity-50 disabled:pointer-events-none"
                placeholder="Search"
              />
              <div className="absolute inset-y-0 -end-3 flex items-center pointer-events-none z-20 pe-2">
                <img src="/images/search.svg" alt="search" />
              </div>
            </div>
          </div>
          <div className="flex flex-row items-center gap-x-4 justify-end">
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

            <div className="lg:flex items-center gap-x-4">
              <button
                type="button"
                className="size-[24px] relative inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none"
                onClick={handleClickProfile}
              >
                <img src="/images/admin/profile.svg" alt="" />
                <span className="sr-only">Profile</span>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {mobileSearchOpen && (
        <div className="fixed inset-0 z-50 bg-white p-4 md:hidden">
          <div className="relative">
            <input
              type="text"
              className="py-2 ps-4 pe-10 block w-full bg-white border-gray-200 rounded-lg text-[15px] not-italic font-medium leading-[normal] tracking-[0.075px] focus:outline-gray-400 focus:border-black focus:ring-black disabled:opacity-50 disabled:pointer-events-none"
              placeholder="Search"
              autoFocus
            />
            <div className="absolute inset-y-0 end-0 flex items-center z-20 pe-3">
              <button onClick={() => setMobileSearchOpen(false)}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
