import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axiosInstanceUser from '../../../utils/axiosInstanceUser';

export default function DetailAktivitas() {
    const { id } = useParams(); // Mengambil parameter ID dari URL
    const [detailData, setDetailData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchDetailAktivitas = async () => {
            try {
                const response = await axiosInstanceUser.get(`/user/consultations/${id}`);
                // console.log('Detail data:', response.data);
                if (response.data.success) {
                    setDetailData(response.data.data);
                } else {
                    setError(response.data.message || 'Gagal memuat detail aktivitas.');
                }
            } catch (err) {
                console.error('Error fetching detail aktivitas data:', err);
                setError('Terjadi kesalahan saat memuat detail aktivitas.');
            } finally {
                setIsLoading(false);
            }
        };
        fetchDetailAktivitas();
    }, [id]);

    if (isLoading) {
        return <div className="text-center mt-6">Memuat detail aktivitas...</div>;
    }
    if (error) {
        return <div className="text-center text-red-600 mt-6">{error}</div>;
    }
    if (!detailData) {
        return <div className="text-center mt-6 text-gray-600">Detail tidak ditemukan.</div>;
    }

    return (
        <div className="max-w-full h-auto bg-white rounded-lg shadow border border-neutral-300 p-4 sm:p-6 md:w-[854px] relative">
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4">
                <img
                    className="w-[114px] h-[126px] rounded-md"
                    src={detailData.doctor?.avata || 'https://res.cloudinary.com/dnvxutvky/image/upload/v1734490946/aemxywyt4lovxwditlzm.png'}
                    alt={`Gambar profile ${detailData.doctor?.avatar || 'dokter'}`}
                />
                <div className="flex flex-col gap-1 text-center sm:text-left">
                    <div className="text-cyan-900 text-lg sm:text-xl font-medium">
                        {detailData.doctor?.username || 'Nama Dokter Tidak Tersedia'}
                    </div>
                    <div className="text-neutral-400 text-sm sm:text-base">
                        {detailData.doctor?.title || 'Spesialisasi Tidak Tersedia'}
                    </div>
                    <div className="text-neutral-400 text-sm sm:text-base">
                        {new Date(detailData.created_at).toLocaleDateString('id-ID', {
                            weekday: 'long',
                            day: 'numeric',
                            month: 'long',
                            year: 'numeric',
                        })}
                    </div>
                </div>
            </div>
            <div className="mt-6 border-t border-neutral-300 pt-3 flex justify-center sm:justify-start">
                <div
                    className={`text-white text-xs font-medium py-2 px-4 rounded-md ${detailData.payment_status === 'paid' ? 'bg-green-500' : 'bg-red-500'
                        }`}
                >
                    {detailData.payment_status === 'paid' ? 'Selesai' : 'Pending'}
                </div>
            </div>
            <div className="mt-6">
                <div className="text-black text-base font-semibold">Tanggal Transaksi</div>
                <div className="text-cyan-950 text-sm font-normal mt-2">
                    {new Date(detailData.created_at).toLocaleDateString('id-ID', {
                        weekday: 'long',
                        day: 'numeric',
                        month: 'long',
                        year: 'numeric',
                    })}
                </div>
            </div>
            <div className="mt-6">
                <div className="text-black text-base font-semibold">Data Pasien</div>
                <div className="mt-3 space-y-3">
                    <div className="flex justify-between text-sm sm:text-base">
                        <span className="text-cyan-950">Nama</span>
                        <span className="text-cyan-950">{detailData.user?.username || 'Tidak Tersedia'}</span>
                    </div>
                    <div className="flex justify-between text-sm sm:text-base">
                        <span className="text-cyan-950">Jenis Kelamin</span>
                        <span className="text-cyan-950">{detailData.user?.jenis_kelamin || 'Tidak Tersedia'}</span>
                    </div>
                    <div className="flex justify-between text-sm sm:text-base">
                        <span className="text-cyan-950">No Telpon</span>
                        <span className="text-cyan-950">{detailData.user?.no_hp || 'Tidak Tersedia'}</span>
                    </div>
                </div>
            </div>
            <div className="mt-6">
                <div className="text-black text-base font-semibold">Detail Keluhan</div>
                <div className="text-cyan-950 text-sm font-normal mt-2">
                    {detailData.description || 'Tidak ada keluhan yang tersedia.'}
                </div>
            </div>
            <div className="mt-6">
                <div className="text-black text-base font-semibold">Rekomendasi Dokter</div>
                <div className="text-cyan-950 text-sm font-normal mt-2">
                    {detailData.rekomendasi && detailData.rekomendasi.length > 0 ? (
                        detailData.rekomendasi.map((item, index) => (
                            <div key={item.id || index} className="mb-2">
                                {item.recommendation}
                            </div>
                        ))
                    ) : (
                        'Belum ada rekomendasi dari dokter.'
                    )}
                </div>
            </div>
        </div>
    );
}
