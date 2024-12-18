import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function SidebarProfile() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            {/* Tombol Toggle untuk Mobile */}
            <button
                className="sm:hidden fixed top-4 left-4 z-50 bg-teal-600 text-white p-2 rounded-md shadow-lg mt-20"
                onClick={() => setIsOpen(true)}
            >
                Sidebar
            </button>
            {/* Sidebar */}
            <div
                className={`fixed top-0 left-0 h-full w-72 bg-white shadow-lg z-40 transform transition-transform duration-300 ${isOpen ? "translate-x-0" : "-translate-x-full"
                    } sm:static sm:translate-x-0 sm:w-[304px] sm:h-auto mt-20`}
            >
                {/* Tombol Tutup untuk Mobile */}
                <button
                    className="sm:hidden absolute top-4 right-4 text-gray-600"
                    onClick={() => setIsOpen(false)}
                >
                    ✕
                </button>
                {/* Isi Sidebar */}
                <div className="w-full h-full px-6 py-3 flex flex-col justify-start items-start gap-6 mt-20">
                    <div className="w-full p-2.5 border-b border-neutral-300 flex justify-start items-center gap-2.5">
                        <Link to="/user/profile" onClick={() => setIsOpen(false)}>
                            <div className="text-cyan-900 text-base font-medium">Profil Saya</div>
                        </Link>
                    </div>
                    <div className="w-full p-2.5 border-b border-neutral-200 flex justify-start items-center gap-2.5">
                        <Link to="" onClick={() => setIsOpen(false)}>
                            <div className="text-black text-base font-medium">Bantuan</div>
                        </Link>
                    </div>
                    <div className="w-full p-2.5 border-b border-neutral-200 flex justify-start items-center gap-2.5">
                        <div className="text-black text-base font-medium">Tentang Aplikasi</div>
                    </div>
                    <div className="w-full p-2.5 border-b border-neutral-200 flex justify-between items-center gap-2.5">
                        <div className="text-black text-base font-medium">Pengaturan</div>
                    </div>
                    <div className="w-full p-2.5 border-b border-neutral-200 flex justify-between items-center gap-2.5">
                        <div className="text-black text-base font-medium">Notifikasi</div>
                    </div>
                    <div className="w-full p-2.5 border-b border-neutral-200 flex justify-start items-center gap-2.5">
                        <div className="text-black text-base font-medium">Ubah Kata Sandi</div>
                    </div>
                </div>
            </div>

            {/* Overlay untuk Mobile */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 z-30 sm:hidden"
                    onClick={() => setIsOpen(false)}
                />
            )}
        </>
    );
}
