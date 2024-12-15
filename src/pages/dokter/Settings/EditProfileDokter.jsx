import { useState, useEffect } from "react";
import {
  getProfileDoctor,
  updateProfileDoctor,
  getTitles,
  uploadAvatarDoctor,
  deleteAvatarDoctor,
} from "../../../api/doctor/doctor";
import { useNavigate } from "react-router-dom";
import Navbar from "../../../components/dokter/Navbar";
import Sidebar from "../../../components/dokter/Sidebar";
import Swal from "sweetalert2";

const EditProfileDokter = () => {
  const [titles, setTitles] = useState([]);
  const [formData, setFormData] = useState({
    username: "",
    no_hp: "",
    email: "",
    date_of_birth: "",
    address: "",
    price: "",
    experience: "",
    str_number: "",
    about: "",
    jenis_kelamin: "",
    title: "",
    avatar: "",
  });
  const [selectedTitle, setSelectedTitle] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const profileData = await getProfileDoctor();
        setFormData({
          username: profileData.data.username,
          no_hp: profileData.data.no_hp,
          email: profileData.data.email,
          date_of_birth: profileData.data.date_of_birth,
          address: profileData.data.address,
          price: profileData.data.price,
          experience: profileData.data.experience,
          str_number: profileData.data.str_number,
          about: profileData.data.about,
          jenis_kelamin: profileData.data.jenis_kelamin,
          title: profileData.data.title?.id.toString() || "",
          avatar: profileData.data.avatar,
        });
      } catch (error) {
        console.error("Failed to fetch profile:", error);
      }
    };

    const fetchTitles = async () => {
      try {
        const fetchedTitles = await getTitles();
        setTitles(fetchedTitles);
      } catch (error) {
        console.error("Failed to fetch titles or tags:", error);
      }
    };

    fetchTitles();
    fetchProfile();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "title") {
      const selectedId = parseInt(value, 10);
      const foundTitle = titles.find((title) => title.id === selectedId);
      setSelectedTitle(foundTitle);

      setFormData((prevFormData) => ({
        ...prevFormData,
        title: value,
      }));
    } else {
      setFormData((prevFormData) => ({
        ...prevFormData,
        [name]: value,
      }));
    }
  };

  const handleAvatarChange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    try {
      const avatarUrl = await uploadAvatarDoctor(file);
      setFormData((prevFormData) => ({
        ...prevFormData,
        avatar: avatarUrl, // Update URL avatar setelah berhasil diunggah
      }));
    } catch (error) {
      console.error("Gagal mengunggah avatar:", error);
    }
  };

  const handleDeleteAvatar = async () => {
    try {
      await deleteAvatarDoctor();
      setFormData((prevFormData) => ({
        ...prevFormData,
        avatar: null, // Kosongkan URL avatar setelah berhasil dihapus
      }));
    } catch (error) {
      console.error("Gagal menghapus avatar:", error);
      Swal.fire({
        icon: "error",
        title: "Gagal",
        text:
          error.response?.data?.message ||
          "Terjadi kesalahan saat menghapus foto.",
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const updatedData = {
        ...formData,
        experience: parseInt(formData.experience, 10),
        title: selectedTitle?.name,
      };

      await updateProfileDoctor(updatedData);

      Swal.fire({
        icon: "success",
        title: "Perubahan Berhasil Disimpan",
        showConfirmButton: false,
        timer: 1500,
      });

      navigate("/dokter/profile-dokter");
    } catch (error) {
      console.error("Failed to update profile:", error);
      Swal.fire({
        icon: "error",
        title: "Gagal",
        text:
          error.response?.data?.message ||
          "Terjadi kesalahan saat memperbarui profil.",
      });
    }
  };

  return (
    <>
      <Navbar />
      <Sidebar />
      <div className="flex min-h-screen bg-white">
        <div className="hidden lg:block lg:w-72"></div>
        <div className="flex-grow flex flex-col items-center px-4 py-8">
          <h1 className="text-2xl font-semibold text-gray-800 mb-8">
            Edit Profil Saya
          </h1>
          <form onSubmit={handleSubmit} className="w-full max-w-xl space-y-4">
            {/* Foto Profil */}
            <div className="flex flex-col items-center">
              <div className="relative w-32 h-32 mb-4">
                <img
                  src={formData.avatar || "https://via.placeholder.com/150"}
                  alt="Avatar"
                  className="w-full h-full rounded-full border object-cover"
                />
              </div>
              <div className="flex gap-4">
                <label className="cursor-pointer bg-teal-900 text-white px-4 py-2 rounded-lg hover:bg-teal-800">
                  Unggah
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleAvatarChange}
                    className="hidden"
                  />
                </label>
                <button
                  type="button"
                  onClick={handleDeleteAvatar}
                  className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-500"
                >
                  Hapus
                </button>
              </div>
            </div>

            <div>
              <label>Nama Lengkap</label>
              <input
                type="text"
                name="username"
                value={formData.username || ""}
                onChange={handleChange}
                className="mt-1 block w-full px-4 py-2 border border-teal-900 rounded-lg"
              />
            </div>

            <div>
              <label>Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                disabled
                className="mt-1 block w-full px-4 py-2 border border-teal-900 rounded-lg cursor-not-allowed"
              />
            </div>

            <div>
              <label>Jenis Kelamin</label>
              <div className="flex gap-6">
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    name="jenis_kelamin"
                    value="Laki-laki"
                    checked={formData.jenis_kelamin === "Laki-laki"}
                    onChange={handleChange}
                    className="focus:ring-blue-500 focus:ring-2"
                  />
                  <span className="ml-2">Laki-laki</span>
                </label>
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    name="jenis_kelamin"
                    value="Perempuan"
                    checked={formData.jenis_kelamin === "Perempuan"}
                    onChange={handleChange}
                    className="focus:ring-blue-500 focus:ring-2"
                  />
                  <span className="ml-2">Perempuan</span>
                </label>
              </div>
            </div>

            <div>
              <label>Tanggal Lahir</label>
              <input
                type="date"
                name="date_of_birth"
                value={formData.date_of_birth || ""}
                onChange={handleChange}
                className="mt-1 block w-full px-4 py-2 border border-teal-900 rounded-lg"
              />
            </div>

            <div>
              <label>No HP</label>
              <input
                type="text"
                name="no_hp"
                value={formData.no_hp || ""}
                onChange={handleChange}
                className="mt-1 block w-full px-4 py-2 border border-teal-900 rounded-lg"
              />
            </div>

            <div>
              <label>Alamat</label>
              <input
                type="text"
                name="address"
                value={formData.address || ""}
                onChange={handleChange}
                className="mt-1 block w-full px-4 py-2 border border-teal-900 rounded-lg"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Bidang
              </label>
              <select
                name="title"
                onChange={handleChange}
                value={formData.title || ""}
                className="mt-1 block w-full px-4 py-2 border border-teal-900 rounded-lg"
              >
                <option value="" disabled>
                  Pilih Title
                </option>
                {titles.map((title) => (
                  <option key={title.id} value={title.id}>
                    {title.name}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label>Pengalaman</label>
              <input
                type="number"
                name="experience"
                value={formData.experience}
                onChange={handleChange}
                className="mt-1 block w-full px-4 py-2 border border-teal-900 rounded-lg"
              />
            </div>

            <div>
              <label>Nomor STR</label>
              <input
                type="text"
                name="str_number"
                value={formData.str_number || ""}
                onChange={handleChange}
                className="mt-1 block w-full px-4 py-2 border border-teal-900 rounded-lg"
              />
            </div>

            <div>
              <label>Biaya</label>
              <input
                type="number"
                name="price"
                value={formData.price}
                onChange={handleChange}
                disabled
                className="mt-1 block w-full px-4 py-2 border border-teal-900 rounded-lg cursor-not-allowed"
              />
            </div>

            <div>
              <label>Tentang</label>
              <textarea
                name="about"
                value={formData.about || ""}
                onChange={handleChange}
                className="mt-1 block w-full px-4 py-2 border border-teal-900 rounded-lg"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full px-4 py-2 bg-teal-900 text-white rounded-lg hover:bg-teal-800"
            >
              Simpan Perubahan
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default EditProfileDokter;
