import React, { useState } from 'react';
import { Link } from 'react-router-dom';

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
                                    <svg
                                        className="size-4"
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
                                        <path d="M18 6 6 18" />
                                        <path d="m6 6 12 12" />
                                    </svg>
                                ) : (
                                    <svg
                                        className="size-4"
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
                                        <line x1={3} x2={21} y1={6} y2={6} />
                                        <line x1={3} x2={21} y1={12} y2={12} />
                                        <line x1={3} x2={21} y1={18} y2={18} />
                                    </svg>
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
                            <div className="hidden sm:inline-flex w-[120px] h-[33px] px-3 py-1.5 bg-teal-900 rounded justify-center items-center gap-[15.44px]">
                                <Link
                                    to="/login"
                                    className="text-center text-white text-sm font-semibold hover:cursor-pointer"
                                >
                                    Login
                                </Link>
                            </div>
                            {/* Tombol login untuk mobile */}
                            <div className="flex sm:hidden w-full justify-center mt-4">
                                <div className="w-[120px] h-[33px] px-3 py-1.5 bg-teal-900 rounded justify-center items-center gap-[15.44px] text-center">
                                    <Link
                                        to="/login"
                                        className="text-white text-sm font-semibold hover:cursor-pointer"
                                    >
                                        Login
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    );
}
