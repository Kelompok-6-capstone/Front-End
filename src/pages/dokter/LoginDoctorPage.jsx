import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { loginDoctor, getProfileDoctor } from "../../api/doctor/doctor";
import { Link } from "react-router-dom";

const LoginDoctorPage = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [errorMessage, setErrorMessage] = useState("");
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
    try {
      // Perform login
      await loginDoctor(formData);

      // Get doctor's profile
      const profileResponse = await getProfileDoctor();
      console.log("Profile Response:", profileResponse.data); // Debug log

      // Check profile completeness
      if (
        // !profileResponse.data.avatar ||
        !profileResponse.data.no_hp ||
        !profileResponse.data.address ||
        !profileResponse.data.date_of_birth ||
        !profileResponse.data.address ||
        !profileResponse.data.schedule
      ) {
        console.log("Profil belum lengkap. Redirect ke lengkapi-profile.");
        navigate("/dokter/lengkapi-profile");
      } else {
        console.log("Profil lengkap. Redirect ke dashboard.");
        Swal.fire({
          icon: "success",
          title: "Login Berhasil",
          text: "Selamat datang kembali!",
          showConfirmButton: false,
          timer: 1500,
        }).then(() => {
          navigate("/dokter/dashboard");
        });
      }
    } catch (error) {
      setErrorMessage(error);
      Swal.fire({
        icon: "error",
        title: "Login Gagal",
        text: error,
      });
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50">
      <form
        className="w-full max-w-md bg-white p-8 shadow-md rounded-lg"
        onSubmit={handleSubmit}
      >
        <h2 className="text-center text-2xl font-bold text-teal-600 mb-4">
          Login Dokter
        </h2>
        {errorMessage && (
          <p className="text-red-500 text-center text-sm mb-4">
            {errorMessage}
          </p>
        )}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-semibold mb-2">
            Email
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-500"
            placeholder="Masukkan email"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-semibold mb-2">
            Password
          </label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-500"
            placeholder="Masukkan password"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full py-2 bg-teal-600 text-white rounded-md hover:bg-teal-700"
        >
          Login
        </button>
        <p className="text-center mt-4">
          Belum punya Akun?{" "}
          <Link to="/dokter/register" className="text-blue-500 hover:underline">
            Daftar Sekarang
          </Link>
        </p>
      </form>
    </div>
  );
};

export default LoginDoctorPage;
