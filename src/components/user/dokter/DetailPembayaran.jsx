import React from 'react'

export default function DetailPembayaran() {
    return (
        <>
            <div className="flex items-center justify-center h-full">
                <img
                    src="/images/user/illustasi-pembayaran.png"
                    alt="ilustrasi-pembayaran"
                    className="max-w-full h-auto"
                />
            </div>
            <div className="max-w-2xl mx-auto p-4">
                <div className=" text-gray-800 text-xl font-semibold mb-4">Rincian Biaya</div>
                <div className="bg-white rounded-lg border border-gray-200 shadow-md">
                    <div className="flex justify-between items-center px-6 py-4">
                        <div className="text-gray-800 text-base font-normal">Biaya Konsultasi</div>
                        <div className="text-gray-800 text-base font-normal">Rp 100.00</div>
                    </div>
                    <div className="border-t border-gray-200"></div>
                    <div className="flex justify-between items-center px-6 py-4">
                        <div className="text-gray-800 text-base font-normal">Biaya Admin</div>
                        <div className="text-gray-800 text-base font-normal">0</div>
                    </div>
                    <div className="border-t border-gray-200"></div>
                    <div className="flex justify-between items-center px-6 py-4 bg-slate-50">
                        <div className="text-gray-800 text-base font-bold">Total</div>
                        <div className="text-gray-800 text-base font-bold">Rp 100.00</div>
                    </div>
                </div>
            </div>
            <div className="w-full max-w-2xl mx-auto px-4">
                <button className="w-full h-14 px-4 py-2 bg-teal-900 rounded-md flex justify-center items-center transition duration-300 transform hover:bg-teal-700 hover:scale-105 hover:shadow-lg">
                    <span className="text-center text-neutral-100 text-base font-bold font-['Poppins']">Lanjutkan Pembayaran</span>
                </button>
            </div>

        </>
    )
}
