import React, { useState } from 'react';
import DropdownLogin from './DropdownLogin';

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="fixed top-0 left-0 w-full z-50 bg-white text-sm py-3 shadow-md">
            <nav className="w-full mx-auto px-4 lg:px-24 sm:flex sm:items-center sm:justify-between">
                <div className="flex items-center justify-between">
                    <a
                        className="flex-none text-base font-semibold"
                        href="#"
                        aria-label="Brand"
                    >
                        <img
                            className="w-[100px] sm:w-[160px] h-auto"
                            src="/images/logo.png"
                            alt="Logo"
                        />
                    </a>
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
                <div
                    className={`${isMenuOpen ? 'block' : 'hidden'} transition-all sm:block`}
                >
                    <div className="flex flex-col gap-5 mt-5 sm:flex-row sm:items-center sm:justify-end sm:mt-0 text-center md:text-left">
                        <a href="#beranda" className="text-cyan-950 font-semibold text-center lg:text-left">Beranda</a>
                        <a href="#tentang" className="text-cyan-950 font-semibold text-center lg:text-left">Tentang</a>
                        <a href="#artikel" className="text-cyan-950 font-semibold text-center lg:text-left">Artikel</a>
                        <a href="#testimoni" className="text-cyan-950 font-semibold text-center lg:text-left">Testimoni</a>
                        <a href="#kontak" className="text-cyan-950 font-semibold text-center lg:text-left">Kontak</a>
                        <DropdownLogin />
                    </div>
                </div>
            </nav>
        </header>
    );
}
