import React from 'react'

export default function JadwalSection() {
    return (
        <>
            <div className="mb-8 mt-8 p-5 md:p-0">
                <div className="relative max-w-full mx-auto">
                    {/* Jadwal Mendatang Header */}
                    <div className="flex items-center gap-2 mb-4">
                        <div className="text-cyan-900 text-lg font-semibold">Jadwal Mendatang</div>
                        <div className="flex items-center px-2 py-1 bg-white rounded-full shadow border">
                            <span className="text-gray-800 text-xs font-medium">5</span>
                        </div>
                    </div>

                    {/* Jadwal Cards Container */}
                    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                        <div className="bg-cyan-700 rounded-md p-4 shadow-md flex items-start gap-4">
                            <img
                                src="/images/user/avatar.png"
                                alt="Dr. Sarah Wijaya"
                                className="w-16 h-16 rounded-full object-cover"
                            />
                            <div className="flex-1">
                                <div className="text-white text-base font-semibold">Dr. Sarah Wijaya, S.Psi</div>
                                <div className="text-white text-sm mt-1">Terapi Kecemasan</div>
                                <div className="flex items-center gap-4 mt-2">
                                    <div className="bg-white text-cyan-700 px-2 py-2 rounded-md text-sm font-medium flex items-center gap-1">
                                        <img src="/images/user/calendar.svg" alt="calender" className="w-4 h-4" />
                                        <span>Rabu, 29 November</span>
                                    </div>
                                    <div className="bg-white text-cyan-700 px-2 py-2 rounded-md text-sm font-medium flex items-center gap-1">
                                        <img src="/images/user/clock.svg" alt="" className="w-4 h-4" />
                                        <span>14:00</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Card 2 */}
                        <div className="bg-white rounded-md p-4 shadow-md flex items-start gap-4">
                            <img
                                src="/images/user/dokter.png"
                                alt="Placeholder"
                                className="w-24 h-24 rounded-md object-cover"
                            />
                            <div className="flex-1">
                                <div className="text-cyan-900 text-base font-semibold">Dr. Sarah Wijaya, S.Psi</div>
                                <div className="text-neutral-400 text-sm">Terapi Kecemasan</div>
                                <div className="flex flex-wrap gap-2 mt-2">
                                    <div className="bg-white text-cyan-700 px-2 py-1 rounded-md text-xs font-medium flex items-center gap-2">
                                        <img src="/images/user/briefcase.svg" alt="" className="w-4 h-4" />
                                        <span>5 tahun</span>
                                    </div>
                                    <div className="bg-white text-cyan-700 px-2 py-1 rounded-md text-xs font-medium flex items-center gap-2">
                                        <img src="/images/user/heart.svg" alt="" className="w-4 h-4" />
                                        <span>98%</span>
                                    </div>
                                    <div className="bg-teal-600 text-white px-2 py-1 rounded-md text-[10px] font-medium flex items-center gap-2">
                                        <img src="/images/user/clock-10.svg" alt="" className="w-4 h-4" />
                                        <span>Tersedia hari ini</span>
                                    </div>
                                </div>
                                <div className="text-cyan-900 text-xs font-semibold mt-2">Rp 100.000</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
