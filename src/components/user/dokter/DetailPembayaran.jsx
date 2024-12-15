// Komponen DetailPembayaran
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axiosInstanceUser from '../../../utils/axiosInstanceUser';

export default function DetailPembayaran() {
    const location = useLocation();
    const navigate = useNavigate();
    const { doctorId, formData } = location.state || {};

    // Validasi awal
    if (!doctorId || !formData) {
        console.error('Doctor ID atau data form tidak tersedia');
        alert('Data tidak lengkap, silakan ulangi proses.');
        navigate('/user/form-keluhan'); // Arahkan kembali ke form jika data tidak valid
        return null;
    }

    // Fungsi untuk menangani tombol lanjutkan pembayaran
    const handleSubmit = async () => {
        const payload = {
            doctor_id: parseInt(doctorId, 10),
            title: formData.judulKeluhan,
            description: formData.deskripsiKeluhan,
        };
    
        try {
            const response = await axiosInstanceUser.post('/user/consultations', payload);
            if (response.data.success) {
                const paymentUrlWithDoctorId = `${response.data.data.payment_url}?doctorId=${doctorId}`;
                console.log('Navigasi ke:', `/user/status-pembayaran?paymentUrl=${encodeURIComponent(paymentUrlWithDoctorId)}`);
                // Buka URL pembayaran di tab baru
                window.open(paymentUrlWithDoctorId, '_blank');
                // Navigasi ke halaman status pembayaran dengan paymentUrl sebagai query parameter
                navigate(`/user/status-pembayaran?paymentUrl=${encodeURIComponent(paymentUrlWithDoctorId)}`);
            } else {
                alert(`Gagal mengirim data: ${response.data.message}`);
            }
        } catch (error) {
            console.error('Error:', error);
            alert('Terjadi kesalahan saat mengirim data.');
        }
    };

    return (
        <>
            {/* Ilustrasi Pembayaran */}
            <div className="flex items-center justify-center h-full">
                <img
                    src="/images/user/illustasi-pembayaran.png"
                    alt="ilustrasi-pembayaran"
                    className="max-w-full h-auto"
                />
            </div>

            {/* Rincian Biaya */}
            <div className="max-w-2xl mx-auto p-4">
                <div className="text-gray-800 text-xl font-semibold mb-4">Rincian Biaya</div>
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
                <button
                    className="w-full h-14 px-4 py-2 bg-teal-900 rounded-md flex justify-center items-center transition duration-300 transform hover:bg-teal-700 hover:scale-105 hover:shadow-lg"
                    onClick={handleSubmit}
                >
                    <span className="text-center text-neutral-100 text-base font-bold">Lanjutkan Pembayaran</span>
                </button>
            </div>
        </>
    );
}
