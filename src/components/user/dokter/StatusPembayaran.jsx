import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Stepper3 from './stepper/Stepper3';
import { fetchDoctorById } from '../../../api/user/detailDokter';

export default function StatusPembayaran() {
    const location = useLocation();
    const navigate = useNavigate();
    const [doctorId, setDoctorId] = useState(null);
    const [doctorDetail, setDoctorDetail] = useState(null); // State untuk detail dokter
    const [isVerifying, setIsVerifying] = useState(true);

    // Ambil query parameter dari URL
    useEffect(() => {
        const queryParams = new URLSearchParams(location.search);
        const paymentUrl = queryParams.get('paymentUrl');

        if (paymentUrl) {
            const url = new URL(paymentUrl);
            const doctorIdParam = url.searchParams.get('doctorId');
            console.log('Doctor ID:', doctorIdParam);
            if (doctorIdParam) {
                setDoctorId(Number(doctorIdParam)); // Simpan doctorId dari URL
            } else {
                console.error('doctorId tidak ditemukan dalam URL');
                navigate('/user/form-keluhan');
            }
        } else {
            console.error('paymentUrl tidak ditemukan');
            navigate('/user/form-keluhan');
        }

        // Timer untuk proses verifikasi
        const timer = setTimeout(() => {
            setIsVerifying(false);
        }, 10000); // Verifikasi selesai dalam 10 detik

        return () => clearTimeout(timer);
    }, [location.search, navigate]);

    // Ambil detail dokter berdasarkan ID
    useEffect(() => {
        if (doctorId) {
            fetchDoctorById(doctorId)
                .then((data) => {
                    console.log('Detail Dokter:', data); // Debug: log data dokter
                    setDoctorDetail(data); // Simpan data dokter ke state
                })
                .catch((error) => {
                    console.error('Gagal mengambil detail dokter:', error.message);
                });
        }
    }, [doctorId]);

    return (
        <>
            <Stepper3 />
            <div className="min-h-screen flex flex-col justify-center items-center bg-white px-4 -mt-28">
                {isVerifying ? (
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
                                src={
                                    doctorDetail && doctorDetail.data.avatar
                                        ? doctorDetail.data.avatar
                                        : "/images/user/dokter.png"
                                }
                                alt={doctorDetail && doctorDetail.data.username ? doctorDetail.data.username : "Dokter"}
                            />
                            <div className="flex-1">
                                <div className="text-cyan-950 text-sm md:text-2xl font-semibold">
                                    {doctorDetail ? doctorDetail.data.username : 'Nama tidak tersedia'}
                                </div>
                                <div className="text-neutral-400 text-base md:text-lg font-medium">
                                    {doctorDetail ? doctorDetail.data.title : 'Spesialis tidak tersedia'}
                                </div>
                            </div>
                            <a href="/user/chat-dokter">
                                <button className="bg-teal-900 text-white text-sm font-semibold py-2 px-4 rounded transition duration-300 hover:bg-teal-700 hover:shadow-lg">
                                    Mulai Chat
                                </button>
                            </a>
                        </div>
                    </>
                )}
            </div>
        </>
    );
}
