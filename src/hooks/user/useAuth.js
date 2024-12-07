import { useState } from "react";
import { loginUser } from "../../api";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

const useAuth = () => {
    const [errorMessage, setErrorMessage] = useState("");
    const navigate = useNavigate();

    const handleLogin = async (formData) => {
        setErrorMessage("");
        try {
            const response = await loginUser(formData);
            Cookies.set("token_user", response.data.token);
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

    return { handleLogin, errorMessage };
};

export default useAuth;
