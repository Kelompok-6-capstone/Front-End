import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axiosInstanceUser from '../../../utils/axiosInstanceUser';

export default function Aktivitas() {
    const [aktivitasData, setAktivitasData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchAktivitas = async () => {
            try {
                const response = await axiosInstanceUser.get('/user/consultations');
                // console.log('Response data:', response.data); 
                if (response.data.success) {
                    setAktivitasData(response.data.data);
                    // console.log('Aktivitas data:', response.data.data); 
                } else {
                    setError(response.data.message || 'Gagal memuat aktivitas.');
                }
            } catch (err) {
                console.error('Error fetching aktivitas data:', err);
                setError('Terjadi kesalahan saat memuat aktivitas.');
            } finally {
                setIsLoading(false);
            }
        };
        fetchAktivitas();
    }, []);
    if (isLoading) {
        return <div className="text-center mt-6">Memuat data aktivitas...</div>;
    }
    if (error) {
        return <div className="text-center text-red-600 mt-6">{error}</div>;
    }

    return (
        <div className="space-y-6">
            {aktivitasData.length === 0 ? (
                <div className="text-center text-gray-600">Tidak ada aktivitas konsultasi.</div>
            ) : (
                aktivitasData.map((aktivitas, index) => (
                    <div key={index} className="w-full max-w-[854px] p-4 bg-white rounded-lg shadow border border-neutral-300">
                        <Link to={`/user/detail-aktivitas/${aktivitas.id}`}>
                            <div className="flex items-start">
                                <img
                                    className="w-[114px] h-[126px] rounded-md"
                                    src={aktivitas.doctor?.image || '/images/user/default-doctor.png'}
                                    alt={`Gambar profile ${aktivitas.doctor?.avatar || 'dokter'}`}
                                />
                                <div className="ml-6 flex flex-col justify-between">
                                    <div>
                                        <h2 className="text-cyan-900 text-xl font-medium">{aktivitas.doctor?.username || 'Nama Dokter Tidak Tersedia'}</h2>
                                        <p className="text-neutral-400 text-base font-normal">{aktivitas.doctor?.title || 'Spesialisasi Tidak Tersedia'}</p>
                                        <p className="text-neutral-400 text-base font-normal">
                                            {new Date(aktivitas.created_at).toLocaleDateString('id-ID', {
                                                weekday: 'long',
                                                day: 'numeric',
                                                month: 'long',
                                                year: 'numeric',
                                            })}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </Link>
                        <div className="mt-6 flex justify-between items-center border-t border-neutral-300 pt-4">
                            <div className="flex items-center">
                                <div className="flex items-center">
                                    <div
                                        className={`px-4 py-2 text-white text-xs font-medium rounded-md ${aktivitas.payment_status === 'paid' ? 'bg-green-500' : 'bg-neutral-300'}`}
                                    >
                                        {aktivitas.payment_status === 'paid' ? 'Selesai' : 'Pending'}
                                    </div>
                                </div>
                            </div>
                            <a href="/user/dokter">
                                <button className="w-52 h-[41px] bg-teal-900 text-neutral-100 text-xs font-semibold rounded-md flex justify-center items-center">
                                    Buat Janji Lagi
                                </button>
                            </a>
                        </div>
                    </div>
                ))
            )}
        </div>
    );
}
