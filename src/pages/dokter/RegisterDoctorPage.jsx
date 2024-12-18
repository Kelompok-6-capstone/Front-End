import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PasswordInput from "../../components/auth/PasswordInput";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { registerDoctor } from "../../api/doctor/authDoctor";

const RegisterDoctorPage = () => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
    });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const navigate = useNavigate();

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
            await registerDoctor(formData);
            Swal.fire({
                icon: 'success',
                title: 'Registrasi Berhasil',
                text: 'Silakan verifikasi OTP untuk melanjutkan.',
            }).then(() => {
                navigate('/dokter/verify-otp');
            });
        } catch (err) {
            setError(err);
        } finally {
            setLoading(false);
        }
    };

  return (
    <div className="flex min-h-screen items-center justify-center bg-white">
      <div className="w-full max-w-md bg-white p-8 shadow-md rounded-md">
        <div className="text-center text-cyan-900 text-2xl font-semibold mb-2">
          Registrasi Dokter
        </div>
        <div className="text-center text-cyan-900 text-sm font-normal mb-12">
          Daftarkan diri Anda sekarang dan bantu pasien mencapai kesehatan
          optimal.
        </div>
        {error && <p className="text-red-500 text-center mb-4">{error}</p>}
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="text-gray-700 text-sm font-semibold mb-2">
              Nama Pengguna
            </label>
            <div className="relative">
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 ps-10"
                placeholder="Masukkan Nama"
              />
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <img
                  src="../../../public/images/auth/user.svg"
                  alt="logo email"
                />
              </div>
            </div>
          </div>

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
            {loading ? "Sedang Mendaftar..." : "Daftar"}
          </button>
          <p className="text-center mt-4">
            Sudah punya Akun?{" "}
            <Link to="/dokter/login" className="text-blue-500 hover:underline">
              Login Disini
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default RegisterDoctorPage;
