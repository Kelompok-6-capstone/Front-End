import React from "react";

export default function CariArtikel() {
    return (
        <div className="max-w-full px-4 py-5 bg-[#cfedf8] rounded-lg mt-4 mx-2 lg:mx-0">
            <div className="flex flex-col gap-4">
                {/* Judul */}
                <div className="text-center text-sky-900 text-xl sm:text-2xl font-semibold">
                    Baca Artikel Sesuai Kebutuhan kamu
                </div>
                {/* Fitur */}
                <div className="hidden lg:block">
                    <div className="flex flex-col sm:flex-row justify-start items-center gap-4 sm:gap-[13px]">
                        <div className="p-2 flex items-center gap-2">
                            <img src="/images/user/artikel/check-circle-2.svg" alt="gambar check-circle-2" />
                            <div className="text-cyan-800 text-sm sm:text-base font-semibold">
                                Fleksibilitas Waktu
                            </div>
                        </div>
                        <div className="p-2 flex items-center gap-2">
                            <img src="/images/user/artikel/check-circle-2.svg" alt="gambar check-circle-2" />
                            <div className="text-cyan-800 text-sm sm:text-base font-semibold">
                                Ribuan Terapis Berpengalaman
                            </div>
                        </div>
                        <div className="p-2 flex items-center gap-2">
                            <img src="/images/user/artikel/check-circle-2.svg" alt="gambar check-circle-2" />
                            <div className="text-cyan-800 text-sm sm:text-base font-semibold">
                                Temukan terapis yang tepat
                            </div>
                        </div>
                    </div>
                </div>
                {/* Input Pencarian */}
                <div className="w-full">
                    <div className="flex items-center bg-white rounded-lg shadow border border-gray-200">
                        <input
                            type="text"
                            placeholder="Cari artikel..."
                            className="flex-grow px-4 py-3.5 text-gray-500 text-sm sm:text-base font-medium tracking-tight focus:outline-none"
                        />
                        <button className="px-4 py-3.5 text-white">
                            <img src="/images/user/artikel/search.svg" alt="gambar search" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
