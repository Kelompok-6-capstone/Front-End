import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import { loginDoctor } from "../../api/doctor/authDoctor";
import { getProfileDoctor } from "../../api/doctor/profileDoctor";

const LoginDoctorPage = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [errorMessage, setErrorMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  // Handle perubahan input form
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Fungsi login
  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage("");
    setIsLoading(true);

    try {
      await loginDoctor(formData);
      // ngambil data dari get untuk cek apakh adat dokter nya udah lengkap apa belum
      const profileResponse = await getProfileDoctor();
      const profile = profileResponse?.data;

      // Daftar field yang wajib ada
      const requiredFields = [
        "no_hp",
        "address",
        "date_of_birth",
        "price",
        "experience",
        "str_number",
        "about",
        "jenis_kelamin",
        "title",
        "tags",
        "avatar",
      ];

      // Cek kelengkapan profil
      const isProfileComplete = requiredFields.every(
        (field) => profile?.[field]
      );
      // kalo belum lengkap akan di arahkan ke halaman lengkapi profile
      if (!isProfileComplete) {
        navigate("/dokter/lengkapi-profile");
      } else {
        Swal.fire({
          icon: "success",
          title: "Login Berhasil",
          text: "Selamat datang kembali!",
          showConfirmButton: false,
          timer: 1500,
        }).then(() => {
          // kalo udah lengkap akan masuk ke halaman dashboard dokter
          navigate("/dokter/dashboard");
        });
      }
    } catch (error) {
      setErrorMessage(error.message);
      Swal.fire({
        icon: "error",
        title: "Login Gagal",
        text: error.message,
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex min-h-full items-center justify-center bg-white">
      <div className="w-full md:w-1/2 flex items-center justify-center lg:mt-[55px]">
        <form className="w-full max-w-md bg-white p-8" onSubmit={handleSubmit}>
          <div className="text-center text-cyan-900 text-2xl font-semibold mb-2">
            Login Dokter
          </div>
          <div className="text-center text-cyan-900 text-sm font-normal mb-12">
            Silakan login untuk masuk ke Dashboard Dokter
          </div>

          {errorMessage && (
            <div className="text-red-500 text-sm text-center mb-4">
              {errorMessage}
            </div>
          )}

          {/* Input Email */}
          <div className="mb-3">
            <label className="text-gray-700 text-sm font-semibold mb-2">
              Email
            </label>
            <div className="relative">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 ps-10"
                placeholder="Masukkan email"
                required
              />
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <img
                  src="../../../public/images/auth/email.svg"
                  alt="logo email"
                />
              </div>
            </div>
          </div>

          {/* Input Password */}
          <div className="mb-3">
            <label className="text-gray-700 text-sm font-semibold mb-2">
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"} 
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 ps-10"
                placeholder="Masukkan password"
                required
              />
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <img src="/images/auth/passwd.svg" alt="logo password" />
              </div>
              <button
                type="button"
                className="absolute inset-y-0 right-3 flex items-center text-gray-500 hover:text-gray-700"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <img
                    src="/images/auth/hide.svg"
                    alt="Sembunyikan kata sandi"
                    className="filter grayscale opacity-50"
                  />
                ) : (
                  <img
                    src="/images/auth/unhide.svg"
                    alt="Tampilkan kata sandi"
                    className="filter grayscale opacity-50"
                  />
                )}
              </button>
            </div>
          </div>

          {/* Tombol Submit */}
          <button
            type="submit"
            className="w-full h-[54px] px-4 py-2 bg-teal-600 rounded-md justify-center items-center gap-[17.06px] inline-flex hover:bg-teal-700"
            disabled={isLoading}
          >
            <div className="text-center text-white text-base font-bold">
              {isLoading ? "Logging in..." : "Login"}
            </div>
          </button>

          <p className="text-center mt-4">
            Belum punya Akun?{" "}
            <Link
              to="/dokter/register"
              className="text-blue-500 hover:underline"
            >
              Daftar Sekarang
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default LoginDoctorPage;
