import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axiosInstanceUser from '../../../utils/axiosInstanceUser';

export default function FormKeluhan() {
    const { doctorId } = useParams(); // Menangkap ID dokter dari URL
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        nama: '',
        gender: '',
        noTelp: '',
        judulKeluhan: '',
        deskripsiKeluhan: '',
    });

    useEffect(() => {
        // Fetch data profil pengguna saat komponen dirender
        const fetchProfile = async () => {
            try {
                const response = await axiosInstanceUser.get('/user/profile');

                if (response.data.success) {
                    setFormData((prevData) => ({
                        ...prevData,
                        nama: response.data.data.username || '',
                        gender: response.data.data.jenis_kelamin || '',
                        noTelp: response.data.data.no_hp || '',
                    }));
                    // console.log('Profil pengguna:', response.data.data);
                } else {
                    console.error('Gagal mengambil profil pengguna:', response.data.message);
                }
            } catch (error) {
                console.error('Error:', error);
            }
        };
        fetchProfile();
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const payload = {
            doctor_id: parseInt(doctorId, 10),
            title: formData.judulKeluhan,
            description: formData.deskripsiKeluhan
        };

        try {
            const response = await axiosInstanceUser.post('/user/consultations', payload);

            if (response.data.success) {
                const paymentUrlWithDoctorId = `${response.data.data.payment_url}?doctorId=${doctorId}`;
                window.location.href = paymentUrlWithDoctorId;
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
            <div className="max-w-4xl mx-auto bg-white rounded-lg border border-neutral-300 p-6 space-y-6">
                <div>
                    <h2 className="text-xl font-medium text-black mb-4">Informasi Pribadi</h2>
                    <form className="space-y-4" onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="nama" className="block text-gray-800 text-base font-semibold">
                                Nama
                            </label>
                            <input
                                type="text"
                                id="nama"
                                name="nama"
                                value={formData.nama}
                                onChange={handleChange}
                                placeholder="Masukkan Nama Lengkap"
                                className="w-full mt-1 p-3 border border-gray-200 rounded-lg shadow-sm text-gray-500"
                                readOnly
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
                                        checked={formData.gender === 'Perempuan'}
                                        onChange={handleChange}
                                        className="w-5 h-5 text-teal-900 border-gray-300 focus:ring-teal-900"
                                        disabled
                                    />
                                    <span className="text-gray-800">Perempuan</span>
                                </label>
                                <label className="flex items-center gap-2">
                                    <input
                                        type="radio"
                                        name="gender"
                                        value="laki-laki"
                                        checked={formData.gender === 'Laki-laki'}
                                        onChange={handleChange}
                                        className="w-5 h-5 text-teal-900 border-gray-300 focus:ring-teal-900"
                                        disabled
                                    />
                                    <span className="text-gray-800">Laki-Laki</span>
                                </label>
                            </div>
                        </div>
                        <div>
                            <label htmlFor="noTelp" className="block text-gray-800 text-base font-semibold">
                                No Telp
                            </label>
                            <input
                                type="number"
                                id="noTelp"
                                name="noTelp"
                                value={formData.noTelp}
                                onChange={handleChange}
                                placeholder="Masukkan No Telp"
                                className="w-full mt-1 p-3 border border-gray-200 rounded-lg shadow-sm text-gray-500"
                                readOnly
                            />
                        </div>
                        <div>
                            <h2 className="text-xl font-medium text-black mb-4">Detail Keluhan</h2>
                            <div>
                                <label htmlFor="judulKeluhan" className="block text-gray-800 text-base font-semibold">
                                    Judul Keluhan
                                </label>
                                <input
                                    type="text"
                                    id="judulKeluhan"
                                    name="judulKeluhan"
                                    value={formData.judulKeluhan}
                                    onChange={handleChange}
                                    placeholder="Masukkan Judul Keluhan"
                                    className="w-full mt-1 p-3 border border-gray-200 rounded-lg shadow-sm text-gray-500"
                                />
                            </div>
                            <div>
                                <label htmlFor="deskripsiKeluhan" className="block text-gray-800 text-base font-semibold mt-4">
                                    Deskripsi Keluhan
                                </label>
                                <textarea
                                    id="deskripsiKeluhan"
                                    name="deskripsiKeluhan"
                                    rows="4"
                                    value={formData.deskripsiKeluhan}
                                    onChange={handleChange}
                                    placeholder="Jelaskan keluhan Anda secara detail"
                                    className="w-full mt-1 p-3 border border-gray-200 rounded-lg shadow-sm text-gray-500"
                                />
                            </div>
                        </div>
                        <div>
                            <button
                                type="submit"
                                className="w-full bg-teal-900 text-neutral-100 px-6 py-3 rounded-lg font-bold shadow hover:bg-teal-700 transition duration-200"
                            >
                                Selanjutnya
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}
