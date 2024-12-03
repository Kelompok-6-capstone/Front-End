import React, { useState } from "react";
import PasswordInput from "../../components/auth/PasswordInput";
import { Link } from "react-router-dom";
import { loginUser } from "../../api";
import Swal from "sweetalert2";

const LoginPage = () => {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });
    const [errorMessage, setErrorMessage] = useState("");

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setErrorMessage(""); // Bersihkan error sebelumnya
        try {
            const response = await loginUser(formData); // Panggil service loginUser
            Swal.fire({
                icon: "success",
                title: "Login Berhasil",
                text: "Selamat datang kembali!",
            }).then(() => {
                // Redirect user setelah SweetAlert ditutup
                window.location.href = "/user/dashboard";
            });
        } catch (error) {
            console.error("Login error:", error);
            if (error.response?.status === 403) {
                setErrorMessage("Akun belum diverifikasi. Anda akan diarahkan ke halaman verifikasi OTP.");
                Swal.fire({
                    icon: "warning",
                    title: "Akun Belum Diverifikasi",
                    text: "Anda akan diarahkan ke halaman verifikasi OTP.",
                }).then(() => {
                    window.location.href = "/verify-otp"; // Redirect ke halaman verifikasi OTP
                });
            } else {
                const errorMessage =
                    error.response?.data?.message || "Terjadi kesalahan. Silakan coba lagi nanti.";
                setErrorMessage(errorMessage);
                Swal.fire({
                    icon: "error",
                    title: "Login Gagal",
                    text: errorMessage,
                });
            }
        }
    };

    return (
        <div className="flex min-h-full items-center justify-center bg-white">
            {/* Kolom Kiri */}
            <div className="w-1/2 hidden md:block">
                <img
                    src="/images/auth/screen-dekstop.png"
                    alt="gambar screen desktop"
                    className="w-full h-auto object-cover"
                />
            </div>
            {/* Kolom Kanan */}
            <div className="w-full md:w-1/2 flex items-center justify-center lg:-mt-[150px]">
                <form
                    className="w-full max-w-md bg-white p-8"
                    onSubmit={handleSubmit}
                >
                    <div className="text-center text-cyan-900 text-2xl font-semibold mb-2">Masuk</div>
                    <div className="text-center text-cyan-900 text-sm font-normal mb-12">
                        Selamat Datang Kembali Di Calmind
                    </div>
                    {errorMessage && (
                        <div className="text-red-500 text-sm text-center mb-4">
                            {errorMessage}
                        </div>
                    )}
                    <div className="mb-3">
                        <label className="text-cyan-900 text-sm font-semibold mb-2">Email</label>
                        <div className="max-w-sm space-y-3">
                            <div className="relative">
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ps-10"
                                    placeholder="Masukkan Email Kamu"
                                />
                                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                    <img src="/images/auth/email.svg" alt="logo email" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <PasswordInput
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                    />
                    <a href="">
                        <div className="text-cyan-900 text-sm mt-1 mb-16">Lupa kata sandi?</div>
                    </a>
                    <button
                        type="submit"
                        className="w-full h-[54px] px-4 py-2 bg-teal-900 rounded-md justify-center items-center gap-[17.06px] inline-flex"
                    >
                        <div className="text-center text-neutral-100 text-base font-bold">Masuk</div>
                    </button>
                    <p className="text-center mt-4">
                        Belum punya Akun?{" "}
                        <Link to="/register" className="text-blue-500 hover:underline">
                            Daftar Sekarang
                        </Link>
                    </p>
                </form>
            </div>
        </div>
    );
};

export default LoginPage;
