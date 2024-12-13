import React from 'react'

export default function CatatanSebelumKonsultasi() {
    return (
        < >
            <div className="w-full max-w-sm lg:w-72 flex flex-col items-start gap-3">
                <div className="w-full p-3 bg-white rounded-md border border-neutral-300 flex flex-col gap-3">
                    <div className="flex items-center gap-2">
                        <div className="p-2 bg-teal-50 rounded-md flex items-center">
                            <div className="w-3 h-3 bg-teal-600 rounded-full"></div>
                        </div>
                        <div className="text-teal-600 text-sm font-medium leading-tight">
                            Catatan Penting Sebelum Konsultasi
                        </div>
                    </div>
                    <ol className="list-decimal pl-5 text-black text-xs font-normal leading-relaxed">
                        <li>Tepat Waktu <br />Masuk ke chatroom tepat waktu. Dokter hanya menunggu hingga 10 menit.</li>
                        <li>
                            Pembatalan Janji <br />Kamu bisa membatalkan janji konsultasi 30 menit sebelum jadwal.
                        </li>
                        <li>
                            Persiapkan Pertanyaan <br />Siapkan daftar pertanyaan atau masalah yang ingin Anda bahas
                            dengan dokter.
                        </li>
                        <li>
                            Pengembalian Dana <br />Danamu akan dikembalikan jika dokter membatalkan atau tidak hadir
                            konsultasi.
                        </li>
                        <li>
                            Bantuan & Pertanyaan <br />Jika Anda memiliki kendala atau pertanyaan lebih lanjut,
                            hubungi Customer Service kami melalui menu Bantuan di aplikasi Calmind.
                        </li>
                    </ol>
                </div>
                
            </div>
        </>
    )
}
