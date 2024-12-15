import React, { useState } from 'react';
import UserProfileDropdown from './UserProfileDropdown';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white text-sm py-3 shadow-md">
      <nav className="w-full mx-auto px-4 lg:px-24 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <a
            className="flex-none text-base font-semibold"
            href="/user/beranda"
            aria-label="Brand"
          >
            <img
              className="w-[100px] sm:w-[160px] h-auto"
              src="/images/logo.png"
              alt="Logo"
            />
          </a>
          <div className="hidden sm:flex gap-10 lg:ms-56">
            <a
              href="/user/beranda"
              className="text-cyan-950 font-semibold hover:text-cyan-700 transition duration-200"
            >
              Beranda
            </a>
            <a
              href="/user/dokter"
              className="text-cyan-950 font-semibold hover:text-cyan-700 transition duration-200"
            >
              Daftar Dokter
            </a>
            <a
              href="/user/artikel"
              className="text-cyan-950 font-semibold hover:text-cyan-700 transition duration-200"
            >
              Artikel
            </a>
            <a
              href="/user/aktivitas"
              className="text-cyan-950 font-semibold hover:text-cyan-700 transition duration-200"
            >
              Aktivitas Saya
            </a>
          </div>
        </div>

        <div className="flex items-center gap-5">
          <UserProfileDropdown />
          <button className="relative">
            <img
              className="w-6 h-6"
              src="/images/user/chat.svg"
              alt="Chat Icon"
            />
            <span className="absolute top-0 right-0 bg-red-500 text-white text-xs font-semibold rounded-full w-4 h-4 flex items-center justify-center">
              3
            </span>
          </button>
          <button className="relative">
            <img
              className="w-6 h-6"
              src="/images/user/notif.svg"
              alt="Notification Icon"
            />
            <span className="absolute top-0 right-0 bg-red-500 text-white text-xs font-semibold rounded-full w-4 h-4 flex items-center justify-center">
              5
            </span>
          </button>
          <div className="sm:hidden">
            <button
              type="button"
              className="flex items-center gap-x-2 rounded-lg border bg-white text-gray-800 shadow-sm hover:bg-gray-50"
              onClick={toggleMenu}
            >
              {isMenuOpen ? (
                <img src="/images/user/cross_icon.svg" alt="Close" />
              ) : (
                <img src="/images/user/menu_icon.svg" alt="Menu" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`${isMenuOpen ? 'block' : 'hidden'} sm:hidden absolute top-full left-0 w-full bg-white shadow-lg z-10`}
        >
          <div className="flex flex-col gap-5 p-5">
            <a
              href="/user/beranda"
              className="text-cyan-950 font-semibold hover:text-cyan-700 transition duration-200"
            >
              Beranda
            </a>
            <a
              href="/user/dokter"
              className="text-cyan-950 font-semibold hover:text-cyan-700 transition duration-200"
            >
              Cari Dokter
            </a>
            <a
              href="/user/artikel"
              className="text-cyan-950 font-semibold hover:text-cyan-700 transition duration-200"
            >
              Artikel
            </a>
            <a
              href="#"
              className="text-cyan-950 font-semibold hover:text-cyan-700 transition duration-200"
            >
              Aktivitas Saya
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}
