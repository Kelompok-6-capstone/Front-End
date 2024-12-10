import React from 'react'
import { Link } from 'react-router-dom'

export default function FormKeluhan() {
    return (
        <>
            <div className="max-w-4xl mx-auto bg-white rounded-lg border border-neutral-300 p-6 space-y-6">
                {/* Informasi Pribadi */}
                <div>
                    <h2 className="text-xl font-medium text-black mb-4">Informasi Pribadi</h2>
                    <form className="space-y-4">
                        <div>
                            <label htmlFor="nama" className="block text-gray-800 text-base font-semibold">
                                Nama
                            </label>
                            <input
                                type="text"
                                id="nama"
                                placeholder="Masukkan Nama Lengkap"
                                className="w-full mt-1 p-3 border border-gray-200 rounded-lg shadow-sm text-gray-500"
                            />
                        </div>
                        <div>
                            <label htmlFor="usia" className="block text-gray-800 text-base font-semibold">
                                Usia
                            </label>
                            <input
                                type="number"
                                id="usia"
                                placeholder="Tulis Usia Kamu"
                                className="w-full mt-1 p-3 border border-gray-200 rounded-lg shadow-sm text-gray-500"
                            />
                        </div>
                        <div>
                            <label className="block text-gray-800 text-base font-semibold mb-1">Jenis Kelamin</label>
                            <div className="flex items-center gap-4">
                                <label className="flex items-center gap-2">
                                    <input
                                        type="radio"
                                        name="gender"
                                        value="perempuan"
                                        className="w-5 h-5 text-teal-900 border-gray-300 focus:ring-teal-900"
                                    />
                                    <span className="text-gray-800">Perempuan</span>
                                </label>
                                <label className="flex items-center gap-2">
                                    <input
                                        type="radio"
                                        name="gender"
                                        value="laki-laki"
                                        className="w-5 h-5 text-teal-900 border-gray-300 focus:ring-teal-900"
                                    />
                                    <span className="text-gray-800">Laki-Laki</span>
                                </label>
                            </div>
                        </div>
                        <div>
                            <label htmlFor="no-telp" className="block text-gray-800 text-base font-semibold">
                                No Telp
                            </label>
                            <input
                                type="number"
                                id="no-telp"
                                placeholder="Masukkan No Telp"
                                className="w-full mt-1 p-3 border border-gray-200 rounded-lg shadow-sm text-gray-500"
                            />
                        </div>
                    </form>
                </div>

                {/* Detail Keluhan */}
                <div>
                    <h2 className="text-xl font-medium text-black mb-4">Detail Keluhan</h2>
                    <form className="space-y-4">
                        <div>
                            <label htmlFor="judul-keluhan" className="block text-gray-800 text-base font-semibold">
                                Judul Keluhan
                            </label>
                            <input
                                type="text"
                                id="judul-keluhan"
                                placeholder="Masukkan Judul Keluhan"
                                className="w-full mt-1 p-3 border border-gray-200 rounded-lg shadow-sm text-gray-500"
                            />
                        </div>
                        <div>
                            <label htmlFor="deskripsi-keluhan" className="block text-gray-800 text-base font-semibold">
                                Deskripsi Keluhan
                            </label>
                            <textarea
                                id="deskripsi-keluhan"
                                rows="4"
                                placeholder="Jelaskan keluhan Anda secara detail"
                                className="w-full mt-1 p-3 border border-gray-200 rounded-lg shadow-sm text-gray-500"
                            />
                        </div>
                        <div className="flex flex-wrap gap-4">
                            <div className="flex-1 min-w-[150px]">
                                <label htmlFor="durasi-keluhan" className="block text-gray-800 text-base font-semibold">
                                    Durasi Keluhan
                                </label>
                                <input
                                    type="text"
                                    id="durasi-keluhan"
                                    placeholder="Durasi"
                                    className="w-full mt-1 p-3 border border-gray-200 rounded-lg shadow-sm text-gray-500"
                                />
                            </div>
                            <div className="flex-1 min-w-[150px]">
                                <label htmlFor="hari" className="block text-gray-800 text-base font-semibold">
                                    Hari
                                </label>
                                <input
                                    type="text"
                                    id="hari"
                                    placeholder="Hari"
                                    className="w-full mt-1 p-3 border border-gray-200 rounded-lg shadow-sm text-gray-500"
                                />
                            </div>
                        </div>
                        <div>
                            <Link to="/user/detail-pembayaran">
                                <button
                                    type="submit"
                                    className="w-full bg-teal-900 text-neutral-100 px-6 py-3 rounded-lg font-bold shadow hover:bg-teal-700 transition duration-200"
                                >
                                    Selanjutnya
                                </button>
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}
