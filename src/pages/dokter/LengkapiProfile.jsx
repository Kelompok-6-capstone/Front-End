import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { updateProfileDoctor, getProfileDoctor } from "../../api/doctor/doctor";

const LengkapiProfile = () => {
  const [formData, setFormData] = useState({
    username: "",
    no_hp: "",
    address: "",
    date_of_birth: "",
    email: "",
    schedule: "",
    avatar: null,
    title: "",
    experience: "",
    str_number: "",
    about: "",
    specialties: [], // Array for selected specialties
  });

  const navigate = useNavigate();

  const fetchProfile = async () => {
    try {
      const response = await getProfileDoctor();
      if (response?.success && response?.data) {
        const profile = response.data;
        setFormData({
          username: profile.username || "",
          no_hp: profile.no_hp || "",
          address: profile.address || "",
          date_of_birth: profile.date_of_birth || "",
          email: profile.email || "",
          schedule: profile.schedule || "",
          avatar: profile.avatar || null,
          title: profile.title || "",
          experience: profile.experience || "",
          str_number: profile.str_number || "",
          about: profile.about || "",
          specialties: profile.specialties?.map((spec) => spec.id) || [],
        });
      } else {
        console.error("Data profil tidak ditemukan atau respons tidak valid.");
      }
    } catch (error) {
      console.error("Error fetching profile:", error);
    }
  };

  useEffect(() => {
    fetchProfile();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      avatar: e.target.files[0],
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = new FormData();
      data.append("username", formData.username);
      data.append("no_hp", formData.no_hp);
      data.append("address", formData.address);
      data.append("date_of_birth", formData.date_of_birth);
      data.append("schedule", formData.schedule);
      data.append("title", formData.title);
      data.append("experience", formData.experience);
      data.append("str_number", formData.str_number);
      data.append("about", formData.about);

      if (formData.avatar instanceof File) {
        data.append("avatar", formData.avatar);
      }

      formData.specialties.forEach((id) => {
        data.append("specialties[]", id);
      });

      await updateProfileDoctor(data);

      Swal.fire({
        icon: "success",
        title: "Profil Berhasil Diperbarui",
        text: "Data profil Anda telah lengkap.",
      }).then(() => {
        navigate("/dokter/dashboard");
      });
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Gagal Memperbarui Profil",
        text: error.message || "Terjadi kesalahan saat memperbarui profil.",
      });
    }
  };

  return (
    <div className="max-w-md mx-auto mt-8">
      <h1 className="text-xl font-bold text-center">Lengkapi Profil</h1>
      <form
        onSubmit={handleSubmit}
        className="mt-4 bg-white p-6 shadow rounded"
      >
        {/* Nama */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm mb-2">Nama</label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded"
            required
          />
        </div>
        {/* No HP */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm mb-2">No HP</label>
          <input
            type="text"
            name="no_hp"
            value={formData.no_hp}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded"
            required
          />
        </div>
        {/* Alamat */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm mb-2">Alamat</label>
          <textarea
            name="address"
            value={formData.address}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded"
            required
          ></textarea>
        </div>
        {/* Tanggal Lahir */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm mb-2">
            Tanggal Lahir
          </label>
          <input
            type="date"
            name="date_of_birth"
            value={formData.date_of_birth}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded"
          />
        </div>
        {/* Email */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm mb-2">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded"
            disabled
          />
        </div>
        {/* Jadwal */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm mb-2">Jadwal</label>
          <input
            type="text"
            name="schedule"
            value={formData.schedule}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded"
          />
        </div>
        {/* Gelar */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm mb-2">Gelar</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded"
          />
        </div>
        {/* Pengalaman */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm mb-2">
            Pengalaman (tahun)
          </label>
          <input
            type="number"
            name="experience"
            value={formData.experience}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded"
          />
        </div>
        {/* Nomor STR */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm mb-2">Nomor STR</label>
          <input
            type="text"
            name="str_number"
            value={formData.str_number}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded"
          />
        </div>
        {/* Tentang */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm mb-2">Tentang</label>
          <textarea
            name="about"
            value={formData.about}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded"
          ></textarea>
        </div>

        {/* Avatar */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm mb-2">
            Foto Profil (Avatar)
          </label>
          <input
            type="file"
            name="avatar"
            accept="image/*"
            onChange={handleFileChange}
            className="w-full px-4 py-2 border rounded"
          />
        </div>
        {/* Submit */}
        <button
          type="submit"
          className="w-full py-2 bg-teal-600 text-white rounded hover:bg-teal-700"
        >
          Simpan
        </button>
      </form>
    </div>
  );
};

export default LengkapiProfile;
