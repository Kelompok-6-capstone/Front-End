import React from 'react';
import PasswordInput from '../../components/auth/PasswordInput';

const LoginPage = () => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <form className="w-full max-w-md bg-white p-8 rounded-lg shadow-md">
                <div className="text-center text-cyan-900 text-2xl font-semibold mb-2">Masuk</div>
                <div className="text-center text-cyan-900 text-sm font-normal mb-16">Selamat Datang Kembali Di Calmind</div>
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
                                <img src="/auth/email.svg" alt="logo email" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mb-4">
                    <PasswordInput />
                </div>
                <div className="text-cyan-900 text-sm mt-1 mb-16">Lupa kata sandi?</div>
                <button className="w-full h-[54px] px-4 py-2 bg-teal-900 rounded-md justify-center items-center gap-[17.06px] inline-flex">
                    <div className="text-center text-neutral-100 text-base font-bold">Masuk</div>
                </button>
                <div className="text-cyan-900 text-sm text-center mt-8 mb-5">Atau Daftar Dengan?</div>
                <a href="">
                    <div className="w-full h-[54px] px-4 py-2 bg-white rounded-md shadow border border-neutral-300 justify-center items-center gap-[17.06px] inline-flex mb-10">
                        <img src="/auth/google.svg" alt="logo google" />
                        <div className="text-center text-teal-900 text-base font-bold">Masuk Dengan Google</div>
                    </div>
                </a>
                <p className="text-center mt-4">
                    Belum punya Akun?{' '}
                    <a href="/register" className="text-blue-500 hover:underline">
                        Register
                    </a>
                </p>
            </form>
        </div>
    );
};

export default LoginPage;