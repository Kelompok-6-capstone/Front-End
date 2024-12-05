import React, { useState, useRef } from "react";
import Swal from "sweetalert2";
import { verifyOtp } from "../../api";
import { useNavigate } from "react-router-dom";

const VerifyOtpPage = () => {
    const [formData, setFormData] = useState({
        email: "",
        code: "",
    });
    const [errorMessage, setErrorMessage] = useState("");
    const [resendMessage, setResendMessage] = useState("");
    const [isResending, setIsResending] = useState(false);
    const otpRefs = useRef([]);
    const navigate = useNavigate();

    const handleEmailChange = (e) => {
        setFormData({
            ...formData,
            email: e.target.value,
        });
    };

    const handleCodeChange = (e, index) => {
        const { value } = e.target;
        const regex = /^[a-zA-Z0-9]?$/; // Validasi hanya huruf dan angka
        if (regex.test(value)) {
            let newCode = formData.code.split("");
            newCode[index] = value.toUpperCase(); // Pastikan huruf kapital
            newCode = newCode.join("");
            setFormData({ ...formData, code: newCode });

            // Pindah fokus ke input berikutnya jika ada
            if (value && index < 3) {
                otpRefs.current[index + 1]?.focus();
            }
        }
    };

    const handleCodeKeyDown = (e, index) => {
        if (e.key === "Backspace" && !formData.code[index] && index > 0) {
            otpRefs.current[index - 1]?.focus(); // Fokus ke input sebelumnya
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setErrorMessage("");
        try {
            await verifyOtp({ email: formData.email, code: formData.code });
            Swal.fire({
                icon: "success",
                title: "Berhasil!",
                text: "Verifikasi berhasil! Anda dapat masuk sekarang.",
                confirmButtonText: "OK",
            }).then(() => {
                navigate("/login/user");
            });
        } catch (error) {
            Swal.fire({
                icon: "error",
                title: "Gagal",
                text: error?.response?.data?.message || "Terjadi kesalahan. Silakan coba lagi.",
            });
        }
    };

    const handleResendOtp = async () => {
        setErrorMessage("");
        setIsResending(true);
        try {
            await resendOtp({ email: formData.email });
            Swal.fire({
                icon: "success",
                title: "Berhasil!",
                text: "Kode OTP telah dikirim ulang ke email Anda.",
            });
        } catch (error) {
            Swal.fire({
                icon: "error",
                title: "Gagal",
                text: error?.response?.data?.message || "Gagal mengirim ulang kode OTP.",
            });
        } finally {
            setIsResending(false);
        }
    };

    return (
        <>
            <div className="flex flex-col md:flex-row min-h-screen  items-center justify-center bg-white">
                {/* Kolom Kiri */}
                <div className="hidden md:block md:w-1/2">
                    <img
                        src="/images/auth/screen-dekstop.png"
                        alt="gambar screen desktop"
                        className="w-auto h-screen object-cover"
                    />
                </div>

                {/* Kolom Kanan */}
                <div className="w-full md:w-1/2 px-6 sm:px-12 flex items-center justify-center">
                    <div className="w-full max-w-md bg-white p-8 shadow-md rounded-md">
                        <h1 className="text-2xl font-semibold text-center text-cyan-900">Verifikasi OTP</h1>
                        <p className="text-center text-gray-500 mt-2 mb-6">
                            Masukan 4 Digit Kode yang kami kirimkan Ke email Anda
                        </p>
                        <form onSubmit={handleSubmit}>
                            {/* Input Email */}
                            <div className="mb-4">
                                <label className="block text-sm font-medium text-cyan-900">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleEmailChange}
                                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    placeholder="Masukkan email Anda"
                                    required
                                />
                            </div>

                            {/* Input OTP */}
                            <div className="mb-4 flex justify-between gap-2">
                                {[...Array(4)].map((_, index) => (
                                    <input
                                        key={index}
                                        ref={(el) => (otpRefs.current[index] = el)}
                                        type="text"
                                        maxLength="1"
                                        value={formData.code[index] || ""}
                                        onChange={(e) => handleCodeChange(e, index)}
                                        onKeyDown={(e) => handleCodeKeyDown(e, index)}
                                        className="w-full h-16 text-center text-xl border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        placeholder="0"
                                        required
                                    />
                                ))}
                            </div>

                            <p className=" text-sm text-gray-500 mt-4">
                                {" "}
                                <span
                                    onClick={handleResendOtp}
                                    className={` text-cyan-900 text-sm font-bold cursor-pointer hover:underline ${isResending ? "opacity-50 cursor-not-allowed" : ""}`}
                                >
                                    {isResending ? "Mengirim..." : "Kirim ulang kode?"}
                                </span>
                            </p>
                            {/* Tombol Verifikasi */}
                            <button
                                type="submit"
                                className="w-full mt-20 py-2 bg-teal-900 text-white font-semibold rounded-md hover:bg-teal-700 focus:outline-none"
                            >
                                Kirim
                            </button>
                        </form>

                        {/* Kirim Ulang OTP */}

                    </div>
                </div>
            </div>

        </>
    );
};

export default VerifyOtpPage;
