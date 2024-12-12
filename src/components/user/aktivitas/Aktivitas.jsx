import React from 'react'
import { Link } from 'react-router-dom'

export default function Aktivitas() {
    return (
        <>

            <div className="w-full max-w-[854px] p-4 bg-white rounded-lg shadow border border-neutral-300">
                <Link to="/user/detail-aktivitas">
                    <div className="flex items-start">
                        <img
                            className="w-[114px] h-[126px] rounded-md"
                            src="/images/user/dokter-rina.png"
                            alt="Gambar profile dokter"
                        />
                        <div className="ml-6 flex flex-col justify-between">
                            <div>
                                <h2 className="text-cyan-900 text-xl font-medium font-['Poppins']">Dr. Rina Maharani</h2>
                                <p className="text-neutral-400 text-base font-normal font-['Poppins']">Psikiatri Umum</p>
                                <p className="text-neutral-400 text-base font-normal font-['Poppins']">Senin 19 November 2024</p>
                            </div>
                        </div>
                    </div>
                </Link>
                <div className="mt-6 flex justify-between items-center border-t border-neutral-300 pt-4">
                    <div className="flex items-center">
                        <div className="px-4 py-2 bg-gray-500 text-white text-xs font-medium font-['Poppins'] rounded-md">
                            Selesai
                        </div>
                    </div>
                    <a href="/user/dokter">
                        <button className="w-52 h-[41px] bg-teal-900 text-neutral-100 text-xs font-semibold font-['Poppins'] rounded-md flex justify-center items-center">
                            Buat Janji Lagi
                        </button>
                    </a>
                </div>
            </div>
        </>
    )
}
