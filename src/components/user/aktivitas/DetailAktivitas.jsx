import React from 'react'

export default function DetailAktivitas() {
    return (
        <div>
            <div className="max-w-[854px] p-4 bg-white rounded-lg shadow border border-neutral-300">
                <div className="flex items-start">
                    <img
                        className="w-[114px] h-[126px] rounded-md"
                        src="/images/user/dokter-rina.png"
                        alt="Gambar profile dokter"
                    />
                    <div className="ml-6">
                        <h2 className="text-cyan-900 text-xl font-medium font-['Poppins']">Dr. Rina Maharani</h2>
                        <p className="text-neutral-400 text-base font-normal font-['Poppins']">Psikiatri Umum</p>
                        <p className="text-neutral-400 text-base font-normal font-['Poppins']">Senin 19 November 2024</p>
                    </div>
                </div>
                <div className="mt-6 border-t border-neutral-300 pt-4 flex justify-between items-center">
                    <div className="px-4 py-2 bg-gray-500 text-white text-xs font-medium font-['Poppins'] rounded-md">
                        Selesai
                    </div>
                    <p className="text-black text-base font-semibold font-['Poppins']">Tanggal Transaksi</p>
                    <p className="text-cyan-950 text-sm font-normal font-['Poppins']">05/12/2024 14:32</p>
                </div>
                <div className="mt-6">
                    <h3 className="text-black text-base font-semibold font-['Poppins']">Data Pasien</h3>
                    <div className="mt-4 space-y-3">
                        <div className="flex justify-between">
                            <span className="text-cyan-950 text-sm font-normal font-['Poppins']">Nama:</span>
                            <span className="text-cyan-950 text-sm font-normal font-['Poppins']">Ahmad Santoso</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="text-cyan-950 text-sm font-normal font-['Poppins']">Umur:</span>
                            <span className="text-cyan-950 text-sm font-normal font-['Poppins']">30 Tahun</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="text-cyan-950 text-sm font-normal font-['Poppins']">Jenis Kelamin:</span>
                            <span className="text-cyan-950 text-sm font-normal font-['Poppins']">Laki-laki</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="text-cyan-950 text-sm font-normal font-['Poppins']">No. Telpon:</span>
                            <span className="text-cyan-950 text-sm font-normal font-['Poppins']">0896-xxxx-xxxx</span>
                        </div>
                    </div>
                </div>
                <div className="mt-6">
                    <h3 className="text-black text-base font-semibold font-['Poppins']">Detail Keluhan</h3>
                    <p className="mt-2 text-cyan-950 text-sm font-normal font-['Poppins'] leading-relaxed">
                        Lorem ipsum dolor sit amet consectetur. Varius massa morbi lectus in. Lectus in penatibus dictum risus tincidunt porttitor. Adipiscing sed in cras egestas dignissim a faucibus. Neque mattis integer felis non adipiscing risus massa ut. Neque magna vitae eget mattis vel. Blandit aenean at est maecenas amet sagittis auctor vel massa.
                    </p>
                </div>
            </div>
        </div>
    )
}
