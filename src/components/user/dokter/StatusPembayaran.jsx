import React, { useEffect, useState } from 'react';

export default function StatusPembayaran() {
    // State untuk mengontrol tampilan
    const [isVerifying, setIsVerifying] = useState(true);

    useEffect(() => {
        // Timer untuk mengubah state setelah 10 detik
        const timer = setTimeout(() => {
            setIsVerifying(false);
        }, 10000); // 10 detik

        // Membersihkan timer jika komponen di-unmount
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="min-h-screen flex flex-col justify-center items-center bg-white px-4">
            {isVerifying ? (
                // Tampilan saat sedang verifikasi
                <>
                    <div className="flex justify-center items-center mb-10">
                        <div className="relative w-40 h-40 md:w-52 md:h-52 flex justify-center items-center">
                            <div className="absolute w-full h-full rounded-full border-8 border-gray-200 border-t-teal-900 animate-spin"></div>
                        </div>
                    </div>
                    <div className="text-center mb-6">
                        <h1 className="text-black text-2xl md:text-3xl font-semibold">
                            Menunggu Verifikasi Pembayaran
                        </h1>
                        <p className="text-black text-lg md:text-xl font-medium mt-4">
                            Mohon tunggu sebentar, kami sedang memverifikasi pembayaran Anda.
                        </p>
                        <p className="text-black text-lg md:text-xl font-medium mt-2">
                            Proses ini biasanya membutuhkan waktu 1-3 menit.
                        </p>
                    </div>
                    <div className="mt-6 text-center">
                        <p className="text-teal-900 text-xl md:text-2xl font-medium">
                            Sedang Memproses...
                        </p>
                    </div>
                </>
            ) : (
                <>
                    <div className="flex flex-col items-center justify-center min-h-screen px-4 bg-white">
                        <div className="text-center">
                            <h1 className="text-black text-3xl md:text-4xl font-semibold">
                                Pembayaran Terverifikasi! 🎉
                            </h1>
                        </div>
                        <div className="mt-4 max-w-2xl text-center">
                            <p className="text-black text-lg md:text-xl font-medium leading-relaxed">
                                Terima kasih, pembayaran Anda berhasil diverifikasi. Anda kini dapat langsung memulai konsultasi dengan profesional kami di ruang chat.
                            </p>
                        </div>
                        <div className="mt-8 w-full max-w-xl p-6 bg-white shadow rounded-lg flex items-center gap-4">
                            <img
                                className="w-24 h-24 rounded-full"
                                src="https://via.placeholder.com/97x107"
                                alt="Dokter"
                            />
                            <div className="flex-1">
                                <div className="text-cyan-950 text-sm md:text-2xl font-semibold">
                                    Dr. Sarah Wijaya, S.Psi
                                </div>
                                <div className="text-neutral-400 text-base md:text-lg font-medium">
                                    Psikolog
                                </div>
                            </div>
                            <button className="bg-teal-900 text-white text-sm font-semibold py-2 px-4 rounded">
                                Mulai Chat
                            </button>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
}
