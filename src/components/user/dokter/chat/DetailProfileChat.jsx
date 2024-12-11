import React from 'react'

export default function DetailProfileChat() {
    return (
        <>
            <div className="w-full max-w-sm h-[585px] bg-white rounded-2xl p-4 mx-auto lg:mx-0">
                <div className="flex flex-col items-center gap-6">
                    <img
                        className="w-24 h-24 rounded-full"
                        src="/images/user/dokter.png"
                        alt="Doctor Profile"
                    />
                    <div className="text-center">
                        <h3 className="text-cyan-900 text-lg font-semibold">Dr. Sarah Wijaya, S.Psi</h3>
                        <p className="text-neutral-400">Psikiatri Umum</p>
                        <div className="flex justify-center items-center gap-2 mt-2">
                            <span className="text-black text-sm font-semibold">Nomor STR:</span>
                            <span className="text-black text-sm font-semibold">12345678910111231444</span>
                        </div>
                    </div>
                </div>

                <div className="mt-6">
                    <h4 className="text-center text-black text-base font-semibold">Bidang Keahlian</h4>
                    <div className="flex flex-wrap justify-center gap-2 mt-3">
                        <span className="px-3 py-1 bg-teal-50 rounded-md text-teal-600 text-xs font-medium">Depresi</span>
                        <span className="px-3 py-1 bg-teal-50 rounded-md text-teal-600 text-xs font-medium">Gangguan Kecemasan</span>
                        <span className="px-3 py-1 bg-teal-50 rounded-md text-teal-600 text-xs font-medium">Trauma</span>
                    </div>
                </div>

                <div className="mt-8">
                    <h4 className="text-neutral-950 text-base font-semibold">Catatan Keluhan Pasien</h4>
                    <div className="mt-3 p-4 bg-white rounded-lg border border-neutral-300 max-h-52 overflow-y-auto">
                        <p className="text-black text-sm">
                            Dokter, saya merasa sangat cemas dan terbebani oleh tekanan akademis
                            akhir-akhir ini. Setiap malam, saat saya mencoba untuk tidur, pikiran
                            saya tidak bisa berhenti memikirkan segala tugas, ujian, dan proyek yang
                            harus diselesaikan. Ini membuat saya merasa sangat gelisah dan sulit
                            untuk memulai tidur, meskipun saya merasa sangat lelah.
                            untuk memulai tidur, meskipun saya merasa sangat lelah.
                            untuk memulai tidur, meskipun saya merasa sangat lelah.
                        </p>
                    </div>
                </div>

                {/* <div className="mt-8 flex justify-center">
                    <button className="px-4 py-2 bg-teal-500 text-white text-sm font-semibold rounded-lg hover:bg-teal-600">
                        Mau ubah keluhan?
                    </button>
                </div> */}
            </div>
        </>
    )
}
