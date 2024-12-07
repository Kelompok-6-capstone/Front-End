import React from 'react'

export default function SearhDokter() {
    return (
        <>
            <div className="w-full max-w-screen-lg h-auto px-4 py-6 bg-cyan-50 flex flex-col md:flex-row justify-start items-center">
                <div className="w-full flex flex-col justify-start items-start gap-3">
                    <div className="w-full text-cyan-900 text-xl md:text-2xl font-semibold font-['Poppins'] text-center md:text-left">
                        Jelajahi Artikel Pilihan untuk Hidup yang Lebih Tenang dan Bahagia.
                    </div>
                    <div className="w-full h-auto flex flex-col justify-start items-start">
                        <div className="w-full h-auto flex flex-col justify-start items-start gap-2.5">
                            <div className="w-full bg-white rounded-lg shadow border border-gray-200 flex items-center">
                                <div className="flex-grow h-auto flex items-center px-4 py-3.5">
                                    <input
                                        type="text"
                                        placeholder="Search"
                                        className="w-full bg-transparent text-gray-500 text-[15px] font-medium font-['Poppins'] tracking-tight outline-none"
                                    />
                                </div>
                                <div className="px-4 py-3.5 flex items-center gap-2.5">
                                    <button className="w-6 h-6 bg-gray-200 rounded-full flex items-center justify-center">
                                        <img src="/images/user/search.svg" alt="" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
