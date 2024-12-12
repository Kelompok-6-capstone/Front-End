import { useState } from "react";
import { useLocation } from "react-router-dom";

const Navbar = () => {
  const [mobileSearchOpen, setMobileSearchOpen] = useState(false);
  const location = useLocation();

  // Tentukan halaman mana saja yang tidak memerlukan ikon bell
  const hideBellPaths = ["/dokter/dashboard"]; // Path halaman yang tidak ingin menampilkan ikon bell
  const shouldShowBell = !hideBellPaths.includes(location.pathname);

  return (
    <>
      <header className="sticky top-0 inset-x-0 flex flex-wrap md:justify-start md:flex-nowrap z-[48] w-full bg-cyan-50 text-sm py-2.5 lg:ps-[260px]">
        <nav className="px-4 sm:px-6 flex basis-full items-center w-full mx-auto">
          <div className="me-5 lg:me-0 lg:hidden">
            {/* Logo */}
            <a
              className="flex-none rounded-md text-xl inline-block font-semibold focus:outline-none focus:opacity-80"
              href="#"
              aria-label="Calmind"
            >
              <img src="/images/Calmind.svg" alt="calmind" />
            </a>
            {/* End Logo */}
          </div>
          <div className="w-full flex items-center justify-end ms-auto gap-x-1 md:gap-x-3">
            <div className="hidden md:block flex-grow max-w-md mx-4">
              {/* Search Input */}
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
              {/* End Search Input */}
            </div>
            <div className="flex flex-row items-center gap-x-4 justify-end">
              {/* Mobile Search Button */}
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
              {shouldShowBell && (
                <button
                  type="button"
                  className="size-[24px] relative inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none"
                >
                  <img src="/images/Bell.svg" alt="" />
                  <span className="sr-only">Notifications</span>
                </button>
              )}
            </div>
          </div>
        </nav>
      </header>

      {/* Mobile Search Overlay */}
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
