import React, { useState } from 'react';
import DropdownLogin from './DropdownLogin';

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <>
            <header className="fixed top-0 left-0 w-full z-50 bg-white text-sm py-3 shadow-md">
                <nav className="w-full mx-auto px-4 lg:px-24 sm:flex sm:items-center sm:justify-between">
                    <div className="flex items-center justify-between">
                        <a
                            className="flex-none text-base font-semibold focus:outline-none focus:opacity-80"
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
                                className="relative size-7 flex justify-center items-center gap-x-2 rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50"
                                onClick={toggleMenu}
                                aria-expanded={isMenuOpen}
                                aria-controls="navbar-menu"
                            >
                                {isMenuOpen ? (
                                    <img src="/images/user/cross_icon.svg" alt="" srcset="" />
                                ) : (
                                    <img src="/images/user/menu_icon.svg" alt="" srcset="" />
                                )}
                                <span className="sr-only">Toggle navigation</span>
                            </button>
                        </div>
                    </div>
                    <div
                        id="navbar-menu"
                        className={`${isMenuOpen ? 'block' : 'hidden'
                            } overflow-hidden transition-all duration-300 basis-full grow sm:block`}
                    >
                        <div className="flex flex-col gap-5 mt-5 sm:flex-row sm:items-center sm:justify-end sm:mt-0 sm:ps-5">
                            <a href="#beranda" className="text-center text-cyan-950 text-base font-semibold">Beranda</a>
                            <a href="#tentang" className="text-center text-cyan-950 text-base font-semibold">Tentang</a>
                            <a href="#artikel" className="text-center text-cyan-950 text-base font-semibold">Artikel</a>
                            <a href="#testimoni" className="text-center text-cyan-950 text-base font-semibold">Testimoni</a>
                            <a href="#kontak" className="text-center text-cyan-950 text-base font-semibold">Kontak</a>
                            {/* Tombol login untuk desktop */}
                            <DropdownLogin />
                        </div>
                    </div>
                </nav>
            </header>
        </>
    );
}
