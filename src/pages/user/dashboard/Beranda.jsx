import React from 'react'
import { Link } from 'react-router-dom'

export default function Beranda() {
    return (
        <>
            <div className="w-full lg:mx-2 lg:ps-[270px]">
                <div className="lg:p-5 lg:me-5 ">
                    <div className='relative'>
                        <img
                            src="/images/user/beranda/banner.png"
                            alt="banner image"
                            className="w-full lg:h-auto h-60 object-cover "
                        />
                        <div className="absolute inset-0 flex flex-col justify-center items-start p-5 text-white lg:ps-12">
                            <div className="text-cyan-700 text-base lg:text-2xl font-semibold lg:w-full w-1/3 -mt-8">
                                Hallo, Aisha Anggini
                            </div>
                            <div className="text-cyan-700 text-sm lg:text-base font-normal mt-2 lg:w-full w-1/3">
                                Temukan Dokter Kesehatan Mental Anda
                            </div>
                            <Link
                                to=""
                                className="lg:w-[157px] lg:h-[29.03px] px-[9.58px] py-[4.79px] bg-[#263238] rounded-[3.14px] justify-center items-center gap-[10.21px] inline-flex mt-6 hover:bg-cyan-700 hover:shadow-lg hover:scale-105 transition duration-300 ease-in-out"
                            >
                                <div className="text-center text-white text-sm font-semibold">
                                    Buat Jadwal
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div className="text-cyan-900 text-base font-semibold mt-8 text-center lg:text-left">Masalah Yang Sering Dihadapi</div>
                    <div className="flex flex-wrap gap-4 justify-center md:justify-start p-4">
                        <img
                            src="/images/user/beranda/tags/stress.svg"
                            alt="gambar tags"
                            className="w-[80px] h-[80px] md:w-[116px] md:h-[116px] object-contain"
                        />
                        <img
                            src="/images/user/beranda/tags/depresi.svg"
                            alt="gambar tags"
                            className="w-[80px] h-[80px] md:w-[116px] md:h-[116px] object-contain"
                        />
                        <img
                            src="/images/user/beranda/tags/trauma.svg"
                            alt="gambar tags"
                            className="w-[80px] h-[80px] md:w-[116px] md:h-[116px] object-contain"
                        />
                        <img
                            src="/images/user/beranda/tags/adiksi.svg"
                            alt="gambar tags"
                            className="w-[80px] h-[80px] md:w-[116px] md:h-[116px] object-contain"
                        />
                        <img
                            src="/images/user/beranda/tags/gangguan-kecemasan.svg"
                            alt="gambar tags"
                            className="w-[80px] h-[80px] md:w-[116px] md:h-[116px] object-contain"
                        />
                        <img
                            src="/images/user/beranda/tags/pengembangan-diri.svg"
                            alt="gambar tags"
                            className="w-[80px] h-[80px] md:w-[116px] md:h-[116px] object-contain"
                        />
                        <img
                            src="/images/user/beranda/tags/gangguan-mood.svg"
                            alt="gambar tags"
                            className="w-[80px] h-[80px] md:w-[116px] md:h-[116px] object-contain"
                        />
                        <img
                            src="/images/user/beranda/tags/pengasuhan.svg"
                            alt="gambar tags"
                            className="w-[80px] h-[80px] md:w-[116px] md:h-[116px] object-contain"
                        />
                        <img
                            src="/images/user/beranda/tags/lihat-lainnya.svg"
                            alt="gambar tags"
                            className="w-[80px] h-[80px] md:w-[116px] md:h-[116px] object-contain"
                        />
                    </div>


                </div>
            </div>
        </>
    )
}
