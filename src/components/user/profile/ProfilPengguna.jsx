import React, { useEffect, useState } from "react";
import axiosInstanceUser from "../../../utils/axiosInstanceUser";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import Cookies from "js-cookie";
import Loading from "../Loading";

// Helper untuk mendapatkan header dengan token
const getAuthHeaders = () => {
    const token = Cookies.get("token_user");
    if (!token) {
        throw new Error("Token tidak ditemukan. Silakan login kembali.");
    }
    return {
        Authorization: `Bearer ${token}`,
    };
};

const ProfilPengguna = () => {
    const [formData, setFormData] = useState({
        avatar: "",
        username: "",
        email: "",
        no_hp: "",
        alamat: "",
        tgl_lahir: "",
        jenis_kelamin: "",
    });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchUserProfile = async () => {
            try {
                setLoading(true);
                const response = await axiosInstanceUser.get("/user/profile", {
                    headers: getAuthHeaders(),
                });
                setFormData(response.data.data);
            } catch (err) {
                if (err.message === "Token tidak ditemukan. Silakan login kembali.") {
                    navigate("/login");
                } else {
                    setError(err.response?.data?.message || "Gagal memuat data profil.");
                }
            } finally {
                setLoading(false);
            }
        };

        fetchUserProfile();
    }, [navigate]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({ ...prevState, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const result = await Swal.fire({
            title: "Simpan Perubahan?",
            text: "Apakah Anda yakin ingin menyimpan perubahan ini?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "Ya, Simpan!",
            cancelButtonText: "Batal",
        });

        if (result.isConfirmed) {
            try {
                setLoading(true);
                await axiosInstanceUser.put("/user/profile", formData, {
                    headers: getAuthHeaders(),
                });
                Swal.fire({
                    icon: "success",
                    title: "Berhasil!",
                    text: "Perubahan telah disimpan.",
                });
            } catch (err) {
                Swal.fire({
                    icon: "error",
                    title: "Gagal",
                    text: err.response?.data?.message || "Gagal memperbarui profil.",
                });
            } finally {
                setLoading(false);
            }
        }
    };

    const handleAvatarUpload = async (e) => {
        const file = e.target.files[0];
        if (file) {
            const avatarData = new FormData();
            avatarData.append("avatar", file);
            try {
                setLoading(true);
                const response = await axiosInstanceUser.post("/user/upload-avatar", avatarData, {
                    headers: {
                        "Content-Type": "multipart/form-data",
                        ...getAuthHeaders(),
                    },
                });
                setFormData((prevState) => ({
                    ...prevState,
                    avatar: response.data.data.avatarUrl,
                }));
                Swal.fire({
                    icon: "success",
                    title: "Berhasil!",
                    text: "Avatar berhasil diunggah!",
                }).then(() => {
                    // Refresh halaman setelah notifikasi
                    window.location.reload();
                });
            } catch (err) {
                Swal.fire({
                    icon: "error",
                    title: "Gagal",
                    text: "Gagal mengunggah avatar. Silakan coba lagi.",
                });
            } finally {
                setLoading(false);
            }
        }
    };

    const handleAvatarDelete = async () => {
        try {
            setLoading(true);
            await axiosInstanceUser.delete("/user/delete-avatar", {
                headers: getAuthHeaders(),
            });
            setFormData((prevState) => ({ ...prevState, avatar: "" }));
            Swal.fire({
                icon: "success",
                title: "Berhasil!",
                text: "Avatar berhasil dihapus!",
            });
        } catch (err) {
            Swal.fire({
                icon: "error",
                title: "Gagal",
                text: "Gagal menghapus avatar. Silakan coba lagi.",
            });
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="w-full max-w-4xl h-auto bg-neutral-50 rounded-lg mx-auto p-6">
            {loading && <Loading />}
            {error && <div className="text-red-500 text-sm mt-2">{error}</div>}
            <div className="flex flex-col lg:flex-row gap-6">
                {/* Avatar Section */}
                <div className="flex flex-col items-center gap-4">
                    <div className="w-32 h-32 bg-gray-500 rounded-2xl flex justify-center items-center">
                        <img
                            className="w-32 h-32 rounded-2xl object-cover"
                            src={formData.avatar || "https://via.placeholder.com/133x133"}
                            alt="Profile"
                        />
                    </div>
                    <div className="flex gap-4">
                        <button
                            type="button"
                            onClick={() => document.getElementById("avatarInput").click()}
                            className="px-4 py-2 bg-teal-100 text-teal-800 text-sm font-semibold rounded-md"
                        >
                            Unggah Foto Baru
                        </button>
                        <input
                            type="file"
                            id="avatarInput"
                            accept="image/*"
                            style={{ display: "none" }}
                            onChange={handleAvatarUpload}
                        />
                        <button
                            type="button"
                            onClick={handleAvatarDelete}
                            className="px-4 py-2 bg-white text-red-500 text-sm font-semibold rounded-md border border-gray-200 shadow"
                        >
                            Hapus
                        </button>
                    </div>
                </div>
                {/* Form Section */}
                <form className="flex-1 flex flex-col gap-4" onSubmit={handleSubmit}>
                    {[
                        { label: "Nama Lengkap", name: "username" },
                        { label: "Email", name: "email", readOnly: true },
                        { label: "Nomor Telpon", name: "no_hp", type: "number" },
                        { label: "Alamat", name: "alamat" },
                        { label: "Tanggal Lahir", name: "tgl_lahir", type: "date" },
                        { label: "Jenis Kelamin", name: "jenis_kelamin" },
                    ].map((field, index) => (
                        <div key={index} className="flex flex-col">
                            <label htmlFor={field.name} className="text-black text-lg font-medium mb-2">
                                {field.label}
                            </label>
                            {field.name === "jenis_kelamin" ? (
                                <div className="flex items-center gap-6">
                                    <label className="flex items-center gap-2">
                                        <input
                                            type="radio"
                                            name="jenis_kelamin"
                                            value="Laki-laki"
                                            checked={formData.jenis_kelamin === "Laki-laki"}
                                            onChange={handleChange}
                                            className="accent-teal-500"
                                        />
                                        Laki-laki
                                    </label>
                                    <label className="flex items-center gap-2">
                                        <input
                                            type="radio"
                                            name="jenis_kelamin"
                                            value="Perempuan"
                                            checked={formData.jenis_kelamin === "Perempuan"}
                                            onChange={handleChange}
                                            className="accent-teal-500"
                                        />
                                        Perempuan
                                    </label>
                                </div>
                            ) : (
                                <input
                                    type={field.type || "text"}
                                    id={field.name}
                                    name={field.name}
                                    value={formData[field.name] || ""}
                                    onChange={handleChange}
                                    readOnly={field.readOnly || false}
                                    className={`w-full px-3 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 ${field.readOnly ? "bg-gray-100 cursor-not-allowed" : ""
                                        }`}
                                />
                            )}
                        </div>
                    ))}
                    <button
                        type="submit"
                        className="self-end px-6 py-2 bg-teal-600 text-white font-semibold rounded-md hover:bg-teal-700 transition"
                        disabled={loading}
                    >
                        {loading ? "Menyimpan..." : "Simpan Perubahan"}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ProfilPengguna;
