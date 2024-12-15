import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchDoctorById } from '../../../api/user/detailDokter';
import CatatanSebelumKonsultasi from './CatatanSebelumKonsultasi'
import Loading from './Loading';

export default function DetailDokter() {
    const { id } = useParams();
    const [doctor, setDoctor] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getDoctor = async () => {
            try {
                const data = await fetchDoctorById(Number(id)); // Pastikan `id` adalah angka
                setDoctor(data.data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };
        getDoctor();
    }, [id]);

    if (loading) return <Loading />;
    if (error) return <p className="text-red-600">Error: {error}</p>;

    return (
        <>
            <div className="flex flex-col md:flex-row items-start md:items-center md:gap-8">
                <div className="flex-shrink-0 mt-4">
                    <img
                        src={doctor?.avatar || '/images/user/dokter.png'}
                        alt={doctor?.username || 'Dokter'}
                        className="lg:w-[286px] lg:h-[316.92px] rounded-[13.53px] md:mx-0 mb-6 lg:mb-0"
                    />
                </div>
                <div className="flex-1 lg:ms-20 md:mt-10">
                    <div className="mb-4 md:mb-2 flex">
                        <h2 className="text-cyan-900 text-lg lg:text-2xl font-semibold lg:pe-80 pe-10">
                            {doctor?.username || 'Nama tidak tersedia'}
                        </h2>
                        <div className="text-cyan-900 text-xl lg:text-2xl font-medium">
                            Rp {doctor?.price?.toLocaleString() || '0'}
                        </div>
                    </div>
                    <div className="text-neutral-400 text-sm sm:text-base font-normal mb-3">
                        {doctor.title}
                    </div>
                    {/* <div className="mb-6">
                        <h3 className="text-black text-lg lg:text-xl font-medium">Bidang Keahlian</h3>
                        <div className="flex flex-wrap gap-2 mt-2">
                            {(doctor?.specialties || []).map((specialty) => (
                                <span
                                    key={specialty.id}
                                    className="p-2 bg-teal-50 rounded-md text-teal-600 text-xs font-medium"
                                >
                                    {specialty.name}
                                </span>
                            ))}
                        </div>
                    </div> */}
                    <div className="mb-6">
                        <h3 className="text-black text-lg lg:text-xl font-medium">Jam Kerja</h3>
                        <p className="text-black text-base font-normal">{doctor?.schedule || 'Tidak tersedia'}</p>
                    </div>
                    <div className="mb-6">
                        <h3 className="text-black text-lg lg:text-xl font-medium">Nomor STR</h3>
                        <p className="text-black text-base font-normal">{doctor?.str_number || 'Tidak tersedia'}</p>
                    </div>
                    <div>
                        <h3 className="text-black text-lg lg:text-xl font-medium">Tentang Dokter</h3>
                        <p className="text-black text-sm lg:text-base font-normal text-justify">
                            {doctor?.about || 'Informasi tidak tersedia'}
                        </p>
                    </div>
                </div>
            </div>
            <CatatanSebelumKonsultasi />
            <button className="w-full max-w-sm lg:w-72 py-2 bg-teal-900 rounded-md text-center text-white text-sm font-semibold hover:bg-teal-700 mt-4">
                <a href={`/user/form-keluhan/${id}`} className="text-white">
                    Buat Janji
                </a>
            </button>
        </>
    );
}
