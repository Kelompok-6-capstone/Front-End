import React from 'react';

export default function DetailAktivitas() {
    return (
        <div className="max-w-full h-auto bg-white rounded-lg shadow border border-neutral-300 p-4 sm:p-6 md:w-[854px] relative">
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4">
                <img
                    className="w-[114px] h-[126px] rounded-md"
                    src="https://via.placeholder.com/114x126"
                    alt="Dokter"
                />
                <div className="flex flex-col gap-1 text-center sm:text-left">
                    <div className="text-cyan-900 text-lg sm:text-xl font-medium">
                        Dr. Rina Maharani
                    </div>
                    <div className="text-neutral-400 text-sm sm:text-base">
                        Psikiatri Umum
                    </div>
                    <div className="text-neutral-400 text-sm sm:text-base">
                        Senin 19 November 2024
                    </div>
                </div>
            </div>
            <div className="mt-6 border-t border-neutral-300 pt-3 flex justify-center sm:justify-start">
                <div className="bg-gray-500 text-white text-xs font-medium py-2 px-4 rounded-md">
                    Selesai
                </div>
            </div>
            <div className="mt-6">
                <div className="text-black text-base font-semibold">
                    Tanggal Transaksi
                </div>
                <div className="text-cyan-950 text-sm font-normal mt-2">
                    05/12/2024 14:32
                </div>
            </div>
            <div className="mt-6">
                <div className="text-black text-base font-semibold">
                    Data Pasien
                </div>
                <div className="mt-3 space-y-3">
                    <div className="flex justify-between text-sm sm:text-base">
                        <span className="text-cyan-950">Nama</span>
                        <span className="text-cyan-950">Ahmad Santoso</span>
                    </div>
                    <div className="flex justify-between text-sm sm:text-base">
                        <span className="text-cyan-950">Jenis Kelamin</span>
                        <span className="text-cyan-950">Laki-Laki</span>
                    </div>
                    <div className="flex justify-between text-sm sm:text-base">
                        <span className="text-cyan-950">No Telpon</span>
                        <span className="text-cyan-950">08123456789</span>
                    </div>
                </div>
            </div>
            <div className="mt-6">
                <div className="text-black text-base font-semibold">
                    Detail Keluhan
                </div>
                <div className="text-cyan-950 text-sm font-normal mt-2">
                    Dokter, saya merasa sangat cemas dan terbebani oleh tekanan akademis akhir-akhir ini.
                    Setiap malam, saat saya mencoba untuk tidur, pikiran saya tidak bisa berhenti memikirkan segala tugas, ujian, dan proyek yang harus diselesaikan.
                    Ini membuat saya merasa sangat gelisah dan sulit untuk memulai tidur, meskipun saya merasa sangat lelah.
                </div>
            </div>
            <div className="mt-6">
                <div className="text-black text-base font-semibold">
                    Rekomendasi Dokter
                </div>
                <div className="text-cyan-950 text-sm font-normal mt-2">
                    Lorem ipsum dolor sit amet consectetur. Eget morbi hendrerit molestie risus amet feugiat vel.
                    Euismod metus fermentum elit ipsum nisl accumsan donec.
                </div>
            </div>
        </div>
    );
}
