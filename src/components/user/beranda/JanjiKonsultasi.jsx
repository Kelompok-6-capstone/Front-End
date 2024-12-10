import React from 'react';
import JanjiKonsultasiButton from './JanjiKonsultasiButton';
import { useFetchDataDokter } from '../../../hooks/user/useFetchDataDokter';
import Loading from '../Loading';

export default function JanjiKonsultasi() {
    const { doctors, loading, error } = useFetchDataDokter();
    // Ambil dua data dokter pertama
    const displayedDoctors = doctors.slice(0, 2);

    if (loading) {
        return <Loading />;
    }

    if (error) {
        return <div className="text-red-500 text-center">{error}</div>;
    }

    return (
        <div className="mb-8 mt-12 p-5 md:p-0">
            <div className="relative max-w-full mx-auto">
                <div className="flex justify-between items-center">
                    <div className="text-cyan-900 text-lg font-semibold mb-5">
                        Jelajahi Dokter Kesehatan Mental
                    </div>
                    <a href="/user/dokter">
                        <div className="text-cyan-900 text-base font-semibold hover:underline">
                            Lihat Semua
                        </div>
                    </a>
                </div>
                <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
                    {displayedDoctors.map((doctor) => (
                        <div
                            key={doctor.id}
                            className="bg-white rounded-md p-6 shadow-md flex flex-col md:flex-row items-start gap-4"
                        >
                            <img
                                src={doctor.avatar || '/images/user/dokter.png'}
                                alt={doctor.username}
                                className="w-full h-48 rounded-md object-cover md:w-48"
                            />
                            <div className="flex-grow">
                                <div className="flex justify-between">
                                    <div className="text-cyan-900 text-base font-semibold">
                                        {doctor.username}
                                    </div>
                                    <div className="text-cyan-900 text-lg font-normal">
                                        Rp {doctor.price.toLocaleString()}
                                    </div>
                                </div>
                                <div className="text-neutral-400 text-base font-normal mb-1">
                                    {doctor.title}
                                </div>
                                <div className="text-neutral-400 text-sm">{doctor.specialization}</div>
                                <div className="flex flex-wrap gap-2 mt-2 mb-2">
                                    <div className="bg-teal-600 text-white px-2 py-1 rounded-md text-[10px] font-medium flex items-center gap-2">
                                        <img
                                            src="/images/user/clock-10.svg"
                                            alt=""
                                            className="w-4 h-4"
                                        />
                                        <span className="text-teal-50 text-sm font-medium tracking-tight">
                                            {doctor.availability || 'Tersedia hari ini'}
                                        </span>
                                    </div>
                                </div>
                                <div className="mt-4 md:mt-0 md:float-right">
                                    <JanjiKonsultasiButton />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
