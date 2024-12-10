import React from "react";
import JanjiKonsultasiButton from "../beranda/JanjiKonsultasiButton";

export default function DoctorCard({ doctor }) {
    return (
        <div className="bg-white rounded-md p-6 shadow-md flex flex-col md:flex-row items-start gap-4">
            <img
                src={doctor.avatar || "/images/user/dokter.png"}
                alt={doctor.username}
                className="w-40 h-40 rounded-md mx-auto md:mx-0"
            />
            <div className="flex-grow flex flex-col gap-2 mx-auto">
                <div>
                    <div className='flex justify-between'>
                        <div className="text-cyan-900 text-sm sm:text-base font-semibold">
                            {doctor.username}
                        </div>
                        <div className="text-cyan-900 text-base sm:text-lg font-normal hidden lg:block">
                            Rp {doctor.price.toLocaleString()}
                        </div>
                    </div>
                    <div className="text-neutral-400 text-sm sm:text-base font-normal">
                        {doctor.title}
                    </div>
                    <div className="text-neutral-400 text-xs sm:text-sm">
                        {doctor.experience} tahun pengalaman
                    </div>
                </div>
                <div className="flex flex-wrap items-center gap-2 mt-2">
                    <div className="bg-teal-600 text-white px-2 py-1 rounded-md text-[10px] sm:text-xs font-medium flex items-center gap-2">
                        <img
                            src="/images/user/clock-10.svg"
                            alt="Clock"
                            className="w-4 h-4"
                        />
                        <span className="text-teal-50 font-medium tracking-tight">
                            Tersedia hari ini
                        </span>
                    </div>
                    <div className="ml-auto hidden lg:block">
                        <JanjiKonsultasiButton dokter={doctor} />
                    </div>
                </div>
                <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-2">
                    <div className="text-cyan-900 text-base sm:text-lg font-normal lg:hidden">
                        Rp {doctor.price.toLocaleString()}
                    </div>
                    <div className='lg:hidden'>
                        <JanjiKonsultasiButton dokter={doctor} />
                    </div>
                </div>
            </div>
        </div>
    );
}
