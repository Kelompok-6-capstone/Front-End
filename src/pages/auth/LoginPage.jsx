import React, { useState } from "react";
import PasswordInput from "../../components/auth/PasswordInput";
import { Link, useNavigate } from "react-router-dom";
import { loginUser } from "../../api";
import Swal from "sweetalert2";

const LoginPage = () => {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });
    const [errorMessage, setErrorMessage] = useState("");
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setErrorMessage("");
        try {
            const response = await loginUser(formData);
            // Simpan token ke localStorage
            localStorage.setItem("token_user", response.data.token);
            console.log("Login response:", response);
            Swal.fire({
                icon: "success",
                title: "Login Berhasil",
                text: "Selamat datang kembali!",
                showConfirmButton: false,
                timer: 1500,
            }).then(() => {
                navigate("/user/beranda");
            });
        } catch (error) {
            console.error("Login error:", error);
            if (error.response?.status === 403) {
                Swal.fire({
                    icon: "warning",
                    title: "Akun Belum Diverifikasi",
                    text: "Anda akan diarahkan ke halaman verifikasi OTP.",
                }).then(() => {
                    navigate("/verify-otp/user");
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
        <div className="flex min-h-screen items-center justify-center bg-gray-50">
            {/* Kolom Kiri */}
            <div className="hidden md:block w-1/2">
                <img
                    src="/images/auth/screen-dekstop.png"
                    alt="Login illustration"
                    className="w-full h-auto object-cover"
                />
            </div>
            {/* Kolom Kanan */}
            <div className="w-full md:w-1/2 flex items-center justify-center">
                <form
                    className="w-full max-w-md bg-white p-8 shadow-md rounded-lg"
                    onSubmit={handleSubmit}
                >
                    <div className="text-center text-cyan-900 text-2xl font-bold mb-4">
                        Masuk
                    </div>
                    <div className="text-center text-gray-600 text-sm mb-8">
                        Selamat datang kembali di Calmind!
                    </div>
                    {errorMessage && (
                        <div className="text-red-500 text-sm text-center mb-4">
                            {errorMessage}
                        </div>
                    )}
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-semibold mb-2">
                            Email
                        </label>
                        <div className="relative">
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 pl-10"
                                placeholder="Masukkan email kamu"
                            />
                            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                <img src="/images/auth/email.svg" alt="Email icon" />
                            </div>
                        </div>
                    </div>
                    <PasswordInput
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                    />
                    <div className="text-right text-sm text-blue-500 hover:underline mb-6">
                        <Link to="/forgot-password">Lupa kata sandi?</Link>
                    </div>
                    <button
                        type="submit"
                        className="w-full py-3 bg-teal-600 text-white rounded-md hover:bg-teal-700 transition duration-300 font-bold"
                    >
                        Masuk
                    </button>
                    <p className="text-center mt-6 text-gray-700 text-sm">
                        Belum punya akun?{" "}
                        <Link to="/register/user" className="text-blue-500 hover:underline">
                            Daftar Sekarang
                        </Link>
                    </p>
                </form>
            </div>
        </div>
    );
};

export default LoginPage;
