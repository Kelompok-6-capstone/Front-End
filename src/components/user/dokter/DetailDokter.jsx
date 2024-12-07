import React from 'react'

export default function DetailDokter() {
    return (
        <>
            <div className="flex flex-col md:flex-row items-start md:items-center md:gap-8">
                {/* Gambar */}
                <div className="flex-shrink-0 mt-4">
                    <img
                        src="/images/user/dokter.png"
                        alt="gambar dokter"
                        className="lg:w-[286px] lg:h-[316.92px] rounded-[13.53px] md:mx-0 mb-6 lg:mb-0"
                    />
                </div>
                {/* Konten Teks */}
                <div className="flex-1 lg:ms-20 md:mt-10">
                    <div className="mb-4 md:mb-2 flex">
                        <h2 className="text-cyan-900 text-lg lg:text-2xl font-semibold lg:pe-80 pe-10">Dr. Rina Maharani</h2>
                        <div className="text-cyan-900 text-xl lg:text-2xl font-medium">Rp 100.000</div>
                    </div>
                    <div className="mb-6">
                        <h3 className="text-black text-lg lg:text-xl font-medium">Bidang Keahlian</h3>
                        <div className="flex flex-wrap gap-2 mt-2">
                            <span className="p-2 bg-teal-50 rounded-md text-teal-600 text-xs font-medium">Depresi</span>
                            <span className="p-2 bg-teal-50 rounded-md text-teal-600 text-xs font-medium">Gangguan Kecemasan</span>
                            <span className="p-2 bg-teal-50 rounded-md text-teal-600 text-xs font-medium">Trauma</span>
                        </div>
                    </div>
                    <div className="mb-6">
                        <h3 className="text-black text-lg lg:text-xl font-medium">Jam Kerja</h3>
                        <p className="text-black text-base font-normal">Selasa & Kamis 10.00 - 13.00</p>
                    </div>
                    <div className="mb-6">
                        <h3 className="text-black text-lg lg:text-xl font-medium">Nomor STR</h3>
                        <p className="text-black text-base font-normal">987654321</p>
                    </div>
                    <div>
                        <h3 className="text-black text-lg lg:text-xl font-medium">Tentang Dokter</h3>
                        <p className="text-black text-sm lg:text-base font-normal text-justify">
                            Dr. Rina Maharani memiliki pengalaman luas dalam menangani berbagai gangguan mental pada orang dewasa.
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}
