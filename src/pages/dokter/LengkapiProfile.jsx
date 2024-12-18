import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import {
  getProfileDoctor,
  updateProfileDoctor,
  getTags,
  getTitles,
} from "../../api/doctor/profileDoctor";
import { uploadAvatarDoctor } from "../../api/doctor/fotoDoctor";

const LengkapiProfile = () => {
  const [titles, setTitles] = useState([]);
  const [tags, setTags] = useState([]);
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
    tags: [],
    schedule: "",
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
          schedule: profileData.data.schedule,
          about: profileData.data.about,
          jenis_kelamin: profileData.data.jenis_kelamin,
          title: profileData.data.title?.id.toString() || "",
          avatar: profileData.data.avatar,
          tags: profileData.data.specialists?.map((spec) => spec.id) || [],
        });
      } catch (error) {
        throw new Error(
          error.response?.data?.message ||
            error.message ||
            "Gagal memuat profil."
        );
      }
    };

    const fetchTitlesAndTags = async () => {
      try {
        const fetchedTitles = await getTitles();
        setTitles(fetchedTitles);

        const fetchedTags = await getTags();
        setTags(fetchedTags);
      } catch (error) {
        throw new Error(
          error.response?.data?.message ||
            error.message ||
            "Gagal memuat title atau tags."
        );
      }
    };

    fetchTitlesAndTags();
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
        [name]: name === "experience" ? parseInt(value, 10) : value,
      }));
    } else if (name === "tags") {
      const updatedTags = [...formData.tags];
      const selectedTagsId = parseInt(value, 10);

      if (updatedTags.includes(selectedTagsId)) {
        const index = updatedTags.indexOf(selectedTagsId);
        updatedTags.splice(index, 1);
      } else {
        updatedTags.push(selectedTagsId);
      }

      setFormData((prevFormData) => ({
        ...prevFormData,
        tags: updatedTags,
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
        avatar: avatarUrl, 
      }));
    } catch (error) {
      throw new Error(
        error.response?.data?.message ||
          error.message ||
          "Gagal mengunggah avatar."
      );
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const updatedTags = formData.tags
        .map((tagId) => {
          const tag = tags.find((t) => t.id === tagId);
          return tag ? { id: tag.id, name: tag.name } : null;
        })
        .filter(Boolean);

      const updatedData = {
        ...formData,
        experience: parseInt(formData.experience, 10),
        title: selectedTitle?.name,
        tags: updatedTags,
      };

      await updateProfileDoctor(updatedData);

      Swal.fire({
        icon: "success",
        title: "Profil Sudah Terlengkapi",
        showConfirmButton: false,
        timer: 1500,
      });

      navigate("/dokter/dashboard");
    } catch (error) {
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
    <div className="max-w-4xl mx-auto mt-8 p-8 bg-gray-50 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-gray-800 mb-8 text-center">
        Lengkapi Profil
      </h2>
      <form onSubmit={handleSubmit} className="space-y-8">
        {/* Seksi Data Pribadi */}
        <div className="border-b pb-6">
          <h3 className="text-lg font-semibold text-gray-700 mb-4">
            Data Pribadi
          </h3>
          {/* Nama */}
          <div>
            <label className="block text-m font-medium text-gray-700">
              Nama
            </label>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              placeholder="Masukkan nama lengkap Anda"
              className="w-full mt-2 border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          {/* Email */}
          <div className="mt-5">
            <label className="block text-m font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              disabled
              className="w-full mt-2 border border-gray-300 rounded-lg px-4 py-2 text-sm bg-gray-200 cursor-not-allowed"
            />
          </div>

          {/* Jenis Kelamin */}
          <div className="mt-5">
            <label className="block text-m font-medium text-gray-700">
              Jenis Kelamin
            </label>
            <div className="flex gap-4 mt-2">
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
        </div>

        <div className="mt-5">
          <label className="block text-m font-medium text-gray-700">
            Tanggal Lahir
          </label>
          <input
            type="date"
            name="date_of_birth"
            value={formData.date_of_birth || ""}
            onChange={handleChange}
            className="mt-2 block w-full px-4 py-2 border border-teal-900 rounded-lg"
          />
        </div>

        <div className="mt-5">
          <label className="block text-m font-medium text-gray-700">
            No HP
          </label>
          <input
            type="text"
            name="no_hp"
            value={formData.no_hp || ""}
            onChange={handleChange}
            className="mt-2 block w-full px-4 py-2 border border-teal-900 rounded-lg"
          />
        </div>

        <div className="mt-5">
          <label className="block text-m font-medium text-gray-700">
            Alamat
          </label>
          <input
            type="text"
            name="address"
            value={formData.address || ""}
            onChange={handleChange}
            className="mt-2 block w-full px-4 py-2 border border-teal-900 rounded-lg"
          />
        </div>

        {/* Seksi Informasi Profesional */}
        <div className="border-b pb-6">
          <h3 className="text-lg font-semibold text-gray-700 mb-4">
            Informasi Profesional
          </h3>

          {/* Bidang */}
          <div>
            <label className="block text-m font-medium text-gray-700">
              Bidang
            </label>
            <select
              name="title"
              onChange={handleChange}
              value={formData.title || ""}
              className="w-full mt-2 border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="" disabled>
                Pilih Bidang
              </option>
              {titles.map((title) => (
                <option key={title.id} value={title.id}>
                  {title.name}
                </option>
              ))}
            </select>
          </div>

          {/* Spesialis */}
          <div className="mt-5">
            <label className="block text-m font-medium text-gray-700">
              Spesialis
            </label>
            <div className="flex flex-wrap gap-2 mt-2">
              {tags.map((tag) => (
                <label key={tag.id} className="inline-flex items-center">
                  <input
                    type="checkbox"
                    name="tags"
                    value={tag.id}
                    checked={formData.tags.includes(tag.id)}
                    onChange={handleChange}
                    className="focus:ring-blue-500 focus:ring-2 mt-2"
                  />

                  <span className="ml-2">{tag.name}</span>
                </label>
              ))}
            </div>
          </div>

          {/* pengalaman */}
          <div className="mt-5">
            <label className="block text-m font-medium text-gray-700">
              Pengalaman
            </label>
            <input
              type="number"
              name="experience"
              value={formData.experience}
              onChange={handleChange}
              className="w-full mt-2 border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          {/* No STR */}
          <div className="mt-5">
            <label className="block text-m font-medium text-gray-700">
              Nomor STR
            </label>
            <input
              type="text"
              name="str_number"
              value={formData.str_number}
              onChange={handleChange}
              className="w-full mt-2 border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          {/* jadwal */}
          <div className="mt-5">
            <label className="block text-m font-medium text-gray-700">
              Jadwal Praktik
            </label>
            <input
              type="text"
              name="schedule"
              value={formData.schedule}
              onChange={handleChange}
              className="w-full mt-2 border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          {/* biaya */}
          <div className="mt-5">
            <label className="block text-m font-medium text-gray-700">
              Biaya
            </label>
            <input
              type="number"
              name="price"
              value={formData.price}
              onChange={handleChange}
              disabled
              className="w-full mt-2 border border-gray-300 rounded-lg px-4 py-2 text-sm bg-gray-200 cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          {/* tentang dokter */}
          <div className="mt-5">
            <label className="block text-m font-medium text-gray-700">
              Tentang
            </label>
            <textarea
              name="about"
              value={formData.about}
              onChange={handleChange}
              className="w-full mt-4 border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
        </div>

        {/* Seksi Foto Profil */}
        <div className="border-b pb-6">
          <h3 className="text-lg font-semibold text-gray-700 mb-4">
            Foto Profil
          </h3>
          <div className="flex items-center space-x-4">
            <img
              src={formData.avatar}
              alt="Avatar"
              className="w-16 h-16 rounded-full border"
            />
            <input
              type="file"
              accept="image/*"
              onChange={handleAvatarChange}
              className="text-sm"
            />
          </div>
        </div>

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Simpan Profil
          </button>
        </div>
      </form>
    </div>
  );
};

export default LengkapiProfile;
