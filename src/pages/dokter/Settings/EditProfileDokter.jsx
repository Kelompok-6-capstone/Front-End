import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../../components/dokter/Navbar";
import Sidebar from "../../../components/dokter/Sidebar";
import {
  getProfileDoctor,
  updateProfileDoctor,
} from "../../../api/doctor/doctor";

const EditProfileDokter = () => {
  const [formData, setFormData] = useState(null);
  const [avatar, setAvatar] = useState(null); // Untuk menyimpan file avatar
  const [preview, setPreview] = useState(""); // Untuk pratinjau avatar
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await getProfileDoctor();
        setFormData(response.data);
        setPreview(response.data.avatar); // Set avatar yang sudah ada sebagai preview
      } catch {
        setError("Gagal memuat data profil");
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setAvatar(file);
      setPreview(URL.createObjectURL(file)); // Set preview untuk avatar baru
    }
  };

  const handleAvatarDelete = () => {
    setAvatar(null);
    setPreview("");
    setFormData((prevData) => ({
      ...prevData,
      avatar: "", // Kosongkan avatar di data profil
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const data = new FormData();
    if (avatar) data.append("avatar", avatar); // Tambahkan file avatar jika ada
    Object.keys(formData).forEach((key) => {
      data.append(key, formData[key]);
    });

    try {
      const response = await updateProfileDoctor(data);
      if (response.status === 200) {
        setSuccessMessage("Profil berhasil diperbarui!");
        setTimeout(() => navigate("/dokter/settings-profile"), 2000);
      }
    } catch (err) {
      setError(
        err.response?.data?.message ||
          "Terjadi kesalahan saat memperbarui profil."
      );
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p>Loading...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-red-500">Error: {error}</p>
      </div>
    );
  }

  return (
    <>
      <Navbar />
      <Sidebar />
      <div className="flex min-h-screen bg-gray-50 dark:bg-neutral-900">
        <div className="hidden lg:block lg:w-72"></div>
        <div className="flex-grow flex flex-col items-center px-4 py-8">
          <h1 className="text-2xl font-semibold text-gray-800 dark:text-neutral-200 mb-6">
            Edit Profil Saya
          </h1>

          {successMessage && (
            <p className="text-green-600 mb-4">{successMessage}</p>
          )}
          {error && <p className="text-red-600 mb-4">{error}</p>}

          <form onSubmit={handleSubmit} className="w-full max-w-xl space-y-4">
            {/* Avatar Upload Section */}
            <div>
              {preview ? (
                <div className="w-32 h-32 relative mx-auto mb-4">
                  <div className="absolute inset-0 flex items-center justify-center bg-teal-900 dark:bg-neutral-800 rounded-full">
                    <img
                      src={preview}
                      alt="Avatar Preview"
                      className="w-full h-full object-cover rounded-full border border-teal-900 dark:border-neutral-200"
                    />
                  </div>
                </div>
              ) : (
                <div className="w-32 h-32 border-2 border-dashed border-gray-300 rounded-full mx-auto mb-4 flex items-center justify-center text-gray-500">
                  Unggah Foto
                </div>
              )}
              <div className="flex justify-center space-x-4">
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleAvatarChange}
                  className="hidden"
                  id="avatarInput"
                />
                <label
                  htmlFor="avatarInput"
                  className="px-4 py-2 bg-teal-900 text-white rounded-lg cursor-pointer"
                >
                  Unggah Foto
                </label>
                <button
                  type="button"
                  onClick={handleAvatarDelete}
                  className="px-4 py-2 bg-red-600 text-white rounded-lg"
                >
                  Hapus Foto
                </button>
              </div>
            </div>

            {/* Form Input */}
            <div>
              <label>Nama Lengkap</label>
              <input
                type="text"
                name="username"
                value={formData.username || ""}
                onChange={handleChange}
                className="mt-1 block w-full px-4 py-2 border rounded-lg"
              />
            </div>

            <div>
              <label>Email</label>
              <input
                type="email"
                name="email"
                value={formData.email || ""}
                onChange={handleChange}
                className="mt-1 block w-full px-4 py-2 border rounded-lg"
              />
            </div>

            <div>
              <label>Jenis Kelamin</label>
              <select
                name="gender"
                value={formData.gender || ""}
                onChange={handleChange}
                className="mt-1 block w-full px-4 py-2 border rounded-lg"
              >
                <option value="Perempuan">Perempuan</option>
                <option value="Laki-Laki">Laki-Laki</option>
              </select>
            </div>

            <div>
              <label>Tanggal Lahir</label>
              <input
                type="date"
                name="date_of_birth"
                value={formData.date_of_birth || ""}
                onChange={handleChange}
                className="mt-1 block w-full px-4 py-2 border rounded-lg"
              />
            </div>

            <div>
              <label>No HP</label>
              <input
                type="text"
                name="no_hp"
                value={formData.no_hp || ""}
                onChange={handleChange}
                className="mt-1 block w-full px-4 py-2 border rounded-lg"
              />
            </div>

            <div>
              <label>Alamat</label>
              <input
                type="text"
                name="address"
                value={formData.address || ""}
                onChange={handleChange}
                className="mt-1 block w-full px-4 py-2 border rounded-lg"
              />
            </div>

            {/* <div>
              <label>Gelar</label>
              <input
                type="text"
                name="title"
                value={formData.title || ""}
                onChange={handleChange}
                className="mt-1 block w-full px-4 py-2 border rounded-lg"
              />
            </div> */}
            {/* 
            <div>
              <label>Pengalaman (tahun)</label>
              <input
                type="number"
                name="experience"
                value={formData.experience || ""}
                onChange={handleChange}
                className="mt-1 block w-full px-4 py-2 border rounded-lg"
              />
            </div> */}

            <div>
              <label>Nomor STR</label>
              <input
                type="text"
                name="str_number"
                value={formData.str_number || ""}
                onChange={handleChange}
                className="mt-1 block w-full px-4 py-2 border rounded-lg"
              />
            </div>
            <div>
              <label>Jadwal Praktik</label>
              <input
                type="text"
                name="schedule"
                value={formData.schedule || ""}
                onChange={handleChange}
                className="mt-1 block w-full px-4 py-2 border rounded-lg"
              />
            </div>
            <div>
              <label>Tentang</label>
              <textarea
                name="about"
                value={formData.about || ""}
                onChange={handleChange}
                className="mt-1 block w-full px-4 py-2 border rounded-lg"
              ></textarea>
            </div>

            {/* <div>
              <label>Spesialisasi</label>
              <select
                name="specialties"
                multiple
                value={formData.specialties || []}
                onChange={handleSpecialtiesChange}
                className="mt-1 block w-full px-4 py-2 border rounded-lg"
              >
                <option value="1">Kardiologi</option>
                <option value="2">Psikologi Klinis</option>
                <option value="3">Pediatri</option>
              </select>
            </div> */}

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
