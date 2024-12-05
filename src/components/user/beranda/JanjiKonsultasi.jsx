import React from 'react'
import JanjiKosultasiButton from './JanjiKonsultasiButton'

export default function JadwalSection() {
    return (
        <>
            <div className="mb-8 mt-12 p-5 md:p-0">
                <div className="relative max-w-full mx-auto">
                    <div className='flex justify-between items-center'>
                        <div className="text-cyan-900 text-lg font-semibold mb-5 text-center md:text-left">
                            Jelajahi Dokter Kesehatan Mental
                        </div>
                        <a href='/user/artikel'>
                            <div className="text-cyan-900 text-base font-semibold hover:underline">
                                Lihat Semua
                            </div>
                        </a>
                    </div>
                    <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
                        {/* Card 1 */}
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

                        {/* Card 2 */}
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
            </div>
        </>
    )
}
