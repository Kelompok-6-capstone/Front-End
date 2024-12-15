// Komponen FormKeluhan
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axiosInstanceUser from '../../../utils/axiosInstanceUser';
// import Stepper from './Stepper';

export default function FormKeluhan() {
    const { doctorId } = useParams(); // Mendapatkan doctorId dari parameter URL
    const navigate = useNavigate();

    // State untuk menyimpan data form
    const [formData, setFormData] = useState({
        nama: '',
        gender: '',
        noTelp: '',
        judulKeluhan: '',
        deskripsiKeluhan: '',
    });

    // Mengambil data profil pengguna ketika komponen dirender
    useEffect(() => {
        const fetchProfile = async () => {
            try {
                const response = await axiosInstanceUser.get('/user/profile');
                if (response.data.success) {
                    const { username, jenis_kelamin, no_hp } = response.data.data;
                    setFormData((prevData) => ({
                        ...prevData,
                        nama: username || '',
                        gender: jenis_kelamin || '',
                        noTelp: no_hp || '',
                    }));
                } else {
                    console.error('Gagal mengambil profil pengguna:', response.data.message);
                }
            } catch (error) {
                console.error('Terjadi kesalahan saat mengambil profil pengguna:', error);
            }
        };
        fetchProfile();
    }, []);

    // Fungsi untuk menangani perubahan pada form input
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };
    // Fungsi untuk navigasi ke halaman DetailPembayaran
    const handleButtonClick = () => {
        navigate('/user/detail-pembayaran', { state: { doctorId, formData } });
    };

    return (
        <>
            {/* <Stepper /> */}
            <div className="max-w-4xl mx-auto bg-white rounded-lg border border-neutral-300 p-6 space-y-6">
                <h2 className="text-xl font-medium text-black mb-4">Informasi Pribadi</h2>
                <form className="space-y-4">
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
                    <div>
                        <button
                            type="button"
                            className="w-full bg-teal-900 text-neutral-100 px-6 py-3 rounded-lg font-bold shadow hover:bg-teal-700 transition duration-200"
                            onClick={handleButtonClick}
                        >
                            Selanjutnya
                        </button>
                    </div>
                </form>
            </div>
        </>
    );
}