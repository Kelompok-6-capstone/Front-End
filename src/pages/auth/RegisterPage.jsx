import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import PasswordInput from '../../components/auth/PasswordInput';
import { Link } from 'react-router-dom';
import { registerUser } from "../../api";
import Swal from 'sweetalert2';

const RegisterPage = () => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
    });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const navigate = useNavigate(); // Initialize useNavigate

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');
        try {
            await registerUser(formData);
            Swal.fire({
                icon: 'success',
                title: 'Registrasi Berhasil',
                text: 'Silakan verifikasi OTP untuk melanjutkan.',
            }).then(() => {
                navigate('/verify-otp'); // Redirect to /verify-otp
            });
        } catch (err) {
            setError(err);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex min-h-full items-center justify-center bg-white">
            <div className="w-1/2 hidden md:block">
                <img
                    src="/images/auth/screen-dekstop.png"
                    alt="gambar screen dekstop"
                    className="w-auto h-full object-cover"
                />
            </div>
            <div className="w-full md:w-1/2 flex items-center justify-center lg:-mt-[150px]">
                <form className="w-full max-w-md bg-white p-8" onSubmit={handleSubmit}>
                    <div className="text-center text-cyan-900 text-2xl font-semibold mb-2">Selamat Datang Di Calmind</div>
                    <div className="text-center text-cyan-900 text-sm font-normal mb-6">
                        Daftar sekarang dan mulai perjalanan Anda menuju ketenangan dan kesejahteraan
                    </div>
                    {error && <p className="text-red-500 text-center mb-4">{error}</p>}
                    <div className="mb-3">
                        <label className="text-cyan-900 text-sm font-semibold mb-2">Nama Pengguna</label>
                        <input
                            type="text"
                            name="username"
                            value={formData.username}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Masukkan Nama Kamu"
                        />
                    </div>
                    <div className="mb-3">
                        <label className="text-cyan-900 text-sm font-semibold mb-2">Email</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Masukkan Email Kamu"
                        />
                    </div>
                    <PasswordInput
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                    />
                    <button
                        type="submit"
                        className="w-full h-[54px] bg-teal-900 rounded-md text-white font-bold mt-4"
                        disabled={loading}
                    >
                        {loading ? 'Sedang Mendaftar...' : 'Daftar'}
                    </button>
                    <p className="text-center mt-4">
                        Sudah punya Akun?{" "}
                        <Link to="/login" className="text-blue-500 hover:underline">
                            Login Disini
                        </Link>
                    </p>
                </form>
            </div>
        </div>
    );
};

export default RegisterPage;
