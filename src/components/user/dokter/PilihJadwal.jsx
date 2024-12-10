import React from 'react';
import DateInput from './DateInput';

export default function PilihJadwal() {
    return (
        <>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div>
                    <div className="max-w-5xl mx-auto p-6 bg-white rounded-lg border border-neutral-200">
                        <div className="lg:col-span-2">
                            <h2 className="text-center text-black text-[22px] sm:text-[26.8px] font-medium mb-6">
                                Pilih Jadwal Konsultasi
                            </h2>
                            <DateInput />
                            <div className="mb-6 mt-6">
                                <h3 className="text-black text-lg font-medium mb-2">Pagi</h3>
                                <div className="flex flex-wrap gap-3">
                                    {["08.00", "09.00", "10.00", "11.00"].map((time, i) => (
                                        <div
                                            key={i}
                                            className="w-[45%] sm:w-auto px-4 py-2 bg-teal-50 rounded-md text-center text-teal-600 text-sm font-semibold"
                                        >
                                            {time}
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="mb-6">
                                <h3 className="text-black text-lg font-medium mb-2">Siang</h3>
                                <div className="flex flex-wrap gap-3">
                                    {["12.00", "13.00", "14.00", "15.00"].map((time, i) => (
                                        <div
                                            key={i}
                                            className="w-[45%] sm:w-auto px-4 py-2 bg-teal-50 rounded-md text-center text-teal-600 text-sm font-semibold"
                                        >
                                            {time}
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="mb-6">
                                <h3 className="text-black text-lg font-medium mb-2">Sore</h3>
                                <div className="flex flex-wrap gap-3">
                                    {["16.00", "17.00", "18.00", "19.00"].map((time, i) => (
                                        <div
                                            key={i}
                                            className="w-[45%] sm:w-auto px-4 py-2 bg-teal-50 rounded-md text-center text-teal-600 text-sm font-semibold"
                                        >
                                            {time}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full h-12 px-6 py-2 bg-teal-900 rounded-md flex justify-center items-center gap-4 mt-3">
                        <div className="text-center text-neutral-100 text-base font-semibold font-['Poppins']">
                            Selanjutnya
                        </div>
                    </div>
                </div>
                <div className="hidden lg:block lg:ms-36">
                    <img
                        src="https://via.placeholder.com/400x400.png?text=Ilustrasi"
                        alt="Ilustrasi"
                        className="w-full h-auto rounded-lg shadow-md"
                    />
                </div>
            </div>
        </>
    );
}
