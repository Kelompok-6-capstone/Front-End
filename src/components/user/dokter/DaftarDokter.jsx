import React from 'react';
import JanjiKosultasiButton from '../beranda/JanjiKonsultasiButton';

export default function DaftarDokter() {
    const specializations = [
        'Semua',
        'Psikiatri Anak dan Remaja',
        'Psikiatri Umum',
        'Psikiatri Geriatri',
        'Psikoterapi',
        'Konsultasi Keluarga',
        'Neuropsikiatri',
        'Psikiatri Komunitas',
        'Psikologi Klinis',
        'Rehabilitasi Psikiatri',
        'Psikologi Pendidikan',
    ];

    return (
        <div className="flex flex-col lg:flex-row gap-6 mt-10">
            {/* Pilih Spesialisasi */}
            <div className="w-full lg:w-1/3 max-w-md p-4 bg-white rounded-lg border border-neutral-200">
                <div className="py-2 border-b border-neutral-200">
                    <h2 className="text-gray-800 text-lg font-medium">Pilih Spesialisasi</h2>
                </div>
                <div className="mt-4 space-y-3">
                    {specializations.map((specialization, index) => (
                        <label
                            key={index}
                            className="flex items-center gap-3 p-2 cursor-pointer hover:bg-gray-100 rounded-lg"
                        >
                            <input
                                type="radio"
                                name="specialization"
                                value={specialization}
                                className="w-4 h-4 text-cyan-600 bg-gray-100 border-gray-300 focus:ring-cyan-500"
                            />
                            <span className="text-gray-800 text-base font-medium leading-normal">
                                {specialization}
                            </span>
                        </label>
                    ))}
                </div>
            </div>

            {/* Hasil Pencarian */}
            <div className="flex-grow">
                <div className="text-cyan-700 text-xl font-medium mb-4">
                    Hasil Pencarian Untuk spesialis Psikiatri Anak dan Remaja
                </div>
                <div className="bg-white rounded-md p-6 shadow-md flex flex-col md:flex-row items-start gap-4">
                    <img
                        src="/images/user/dokter.png"
                        alt="Placeholder"
                        className="w-full h-48 rounded-md object-cover md:w-48"
                    />
                    <div className="flex-grow">
                        <div className="flex justify-between">
                            <div className="text-cyan-900 text-base font-semibold">
                                Dr. Sarah Wijaya, S.Psi
                            </div>
                            <div className="text-cyan-900 text-lg font-normal">
                                Rp 100.000
                            </div>
                        </div>
                        <div className="text-neutral-400 text-base font-normal mb-1">
                            Psikolog
                        </div>
                        <div className="text-neutral-400 text-sm">Terapi Kecemasan</div>
                        <div className="flex flex-wrap gap-2 mt-2 mb-2">
                            <div className="bg-teal-600 text-white px-2 py-1 rounded-md text-[10px] font-medium flex items-center gap-2">
                                <img
                                    src="/images/user/clock-10.svg"
                                    alt=""
                                    className="w-4 h-4"
                                />
                                <span className="text-teal-50 text-sm font-medium tracking-tight">
                                    Tersedia hari ini
                                </span>
                            </div>
                        </div>
                        <div className="mt-4 md:mt-0 md:float-right">
                            <JanjiKosultasiButton />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
