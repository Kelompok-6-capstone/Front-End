import React, { useState } from "react";
import { loginAdmin } from "../../api/auth/loginAdmin";
import { useNavigate, Link } from "react-router-dom";
import Swal from "sweetalert2";
import PasswordInput from "../../components/auth/PasswordInput";

const AdminLogin = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setErrorMessage(""); // Reset error

    try {
      const response = await loginAdmin(formData);

      if (response.success) {
        Swal.fire({
          title: "Login Berhasil!",
          text: "Selamat datang di dashboard admin.",
          icon: "success",
          confirmButtonText: "OK",
        }).then(() => {
          navigate("/admin/dashboard");
        });
      } else {
        setErrorMessage("Login gagal. Periksa email dan password Anda.");
        Swal.fire({
          title: "Login Gagal!",
          text: "Periksa kembali email dan password Anda.",
          icon: "error",
          confirmButtonText: "OK",
        });
      }
    } catch (error) {
      const errorMsg = error instanceof Error ? error.message : "Terjadi kesalahan. Silakan coba lagi.";
      setErrorMessage(errorMsg);
      Swal.fire({
        title: "Terjadi Kesalahan!",
        text: errorMsg,
        icon: "error",
        confirmButtonText: "OK",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex min-h-full items-center justify-center bg-white">
      {/* Kolom Kanan */}
      <div className="w-full md:w-1/2 flex items-center justify-center lg:mt-[55px]">
        <form
          className="w-full max-w-md bg-white p-8"
          onSubmit={handleLogin}
        >
          <div className="text-center text-cyan-900 text-2xl font-semibold mb-2">Admin Login</div>
          <div className="text-center text-cyan-900 text-sm font-normal mb-12">
            Silahkan login untuk masuk ke Dashboard Admin
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
                  placeholder="Masukkan Email Admin"
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
          <button
            type="submit"
            className="w-full h-[54px] px-4 py-2 bg-teal-900 rounded-md justify-center items-center gap-[17.06px] inline-flex"
            disabled={isLoading}
          >
            <div className="text-center text-neutral-100 text-base font-bold">
              {isLoading ? "Logging in..." : "Masuk"}
            </div>
          </button>
          <p className="text-center mt-4">
            Bukan admin?{" "}
            <Link to="/login" className="text-blue-500 hover:underline">
              Login User
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;

