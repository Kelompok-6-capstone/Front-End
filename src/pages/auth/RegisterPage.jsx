import React from 'react';
import PasswordInput from '../../components/auth/PasswordInput';
import { Link } from 'react-router-dom';

const RegisterPage = () => {
    return (
        <div className="flex min-h-full items-center justify-center bg-white">
            {/* Kolom Kiri */}
            <div className="w-1/2 hidden md:block -mt-12">
                <img
                    src="/images/auth/screen-dekstop.png"
                    alt="gambar screen dekstop"
                    className="w-auto h-full object-cover"
                />
            </div>
            {/* Kolom Kanan */}
            <div className="w-full md:w-1/2 flex items-center justify-center lg:-mt-28">
                <form className="w-full max-w-md bg-white p-8">
                    <div className="text-center text-cyan-900 text-2xl font-semibold mb-2">Selamat Datang Di Calmind</div>
                    <div className="text-center text-cyan-900 text-sm font-normal mb-6">Daftar sekarang dan mulai perjalanan Anda menuju ketenangan dan kesejahteraan</div>
                    <div className="mb-3">
                        <div className="text-cyan-900 text-sm font-semibold mb-2">Nama Pengguna</div>
                        <div className="max-w-sm space-y-3">
                            <div className="relative">
                                <input
                                    type="text"
                                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ps-10"
                                    placeholder="Masukkan Nama Kamu"
                                />
                                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                    <img src="/images/auth/user.svg" alt="logo user" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mb-3">
                        <label className="text-cyan-900 text-sm font-semibold mb-2">Email</label>
                        <div className="max-w-sm space-y-3">
                            <div className="relative">
                                <input
                                    type="email"
                                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ps-10"
                                    placeholder="Masukkan Email Kamu"
                                />
                                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                    <img src="/images/auth/email.svg" alt="logo email" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mb-3">
                        <label className="text-cyan-900 text-sm font-semibold mb-2">No telp</label>
                        <div className="max-w-sm space-y-3">
                            <div className="relative">
                                <input
                                    type="email"
                                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ps-10"
                                    placeholder="Isikan Nomor Telpon Kamu"
                                />
                                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                    <img src="/images/auth/phone.svg" alt="logo phone" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <PasswordInput />
                    <button className="w-full h-[54px] px-4 py-1 bg-teal-900 rounded-md justify-center items-center gap-[17.06px] inline-flex mt-[30px]">
                        <div className="text-center text-neutral-100 text-base font-bold">Daftar</div>
                    </button>
                    <div className="text-cyan-900 text-sm text-center my-3">Atau Daftar Dengan?</div>
                    <a href="">
                        <div className="w-full h-[54px] px-4 py-1 bg-white rounded-md shadow border border-neutral-300 justify-center items-center gap-[17.06px] inline-flex">
                            <img src="/images/auth/google.svg" alt="logo google" />
                            <div className="text-center text-teal-900 text-base font-bold">Daftar Dengan Google</div>
                        </div>
                    </a>
                    <p className="text-center mt-8">
                        Sudah punya Akun?{' '}
                        <Link to="/login" className="text-blue-500 hover:underline">
                            Login
                        </Link>
                    </p>
                </form>
            </div>
        </div>
    );
};

export default RegisterPage;