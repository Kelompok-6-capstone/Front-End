import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import Loading from "../Loading";

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
            const token = localStorage.getItem("token_user");
            if (!token) {
                navigate("/login");
                return;
            }
            try {
                setLoading(true);
                const response = await axios.get("https://api.calmind.site/user/profile", {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                if (response.data.success) {
                    setFormData(response.data.data);
                } else {
                    setError("Gagal memuat data profil.");
                }
            } catch (err) {
                setError(err.response?.data?.message || "Terjadi kesalahan saat memuat data.");
            } finally {
                setLoading(false);
            }
        };
        fetchUserProfile();
    }, [navigate]);

    // Handle input change
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    // Handle form submission with SweetAlert confirmation
    const handleSubmit = async (e) => {
        e.preventDefault();

        const result = await Swal.fire({
            title: "Simpan Perubahan?",
            text: "Apakah Anda yakin ingin menyimpan perubahan ini?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Ya, Simpan!",
            cancelButtonText: "Batal",
        });

        if (result.isConfirmed) {
            const token = localStorage.getItem("token_user");
            if (!token) {
                navigate("/login");
                return;
            }

            try {
                setLoading(true);
                const response = await axios.put("https://api.calmind.site/user/profile", formData, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                if (response.data.success) {
                    Swal.fire({
                        icon: "success",
                        title: "Berhasil!",
                        text: "Perubahan telah disimpan.",
                    });
                } else {
                    Swal.fire({
                        icon: "error",
                        title: "Gagal",
                        text: "Gagal memperbarui profil.",
                    });
                }
            } catch (err) {
                Swal.fire({
                    icon: "error",
                    title: "Terjadi Kesalahan",
                    text: err.response?.data?.message || "Terjadi kesalahan saat memperbarui data.",
                });
            } finally {
                setLoading(false);
            }
        }
    };

    return (
        <div className="w-full max-w-4xl h-auto bg-neutral-50 rounded-lg mx-auto p-6">
            {loading && <Loading />}
            {error && <div className="text-red-500 text-sm mt-2">{error}</div>}
            <div className="flex flex-col lg:flex-row gap-6">
                {/* Gambar Profil */}
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
                            onChange={async (e) => {
                                const file = e.target.files[0];
                                if (file) {
                                    const formData = new FormData();
                                    formData.append("avatar", file);
                                    try {
                                        const response = await axios.post(
                                            "https://api.calmind.site/user/upload-avatar",
                                            formData,
                                            {
                                                headers: {
                                                    "Content-Type": "multipart/form-data",
                                                    Authorization: `Bearer ${localStorage.getItem("token_user")}`,
                                                },
                                            }
                                        );
                                        setFormData((prev) => ({
                                            ...prev,
                                            avatar: response.data.data.avatarUrl,
                                        }));
                                        Swal.fire({
                                            icon: "success",
                                            title: "Berhasil!",
                                            text: "Avatar berhasil diunggah!",
                                        });
                                    } catch (error) {
                                        Swal.fire({
                                            icon: "error",
                                            title: "Gagal",
                                            text: "Gagal mengunggah avatar. Silakan coba lagi.",
                                        });
                                    }
                                }
                            }}
                        />
                        <button
                            type="button"
                            onClick={async () => {
                                try {
                                    await axios.delete("https://api.calmind.site/user/delete-avatar", {
                                        headers: {
                                            Authorization: `Bearer ${localStorage.getItem("token_user")}`,
                                        },
                                    });
                                    setFormData((prev) => ({ ...prev, avatar: "" }));
                                    Swal.fire({
                                        icon: "success",
                                        title: "Berhasil!",
                                        text: "Avatar berhasil dihapus!",
                                    });
                                } catch (error) {
                                    Swal.fire({
                                        icon: "error",
                                        title: "Gagal",
                                        text: "Gagal menghapus avatar. Silakan coba lagi.",
                                    });
                                }
                            }}
                            className="px-4 py-2 bg-white text-red-500 text-sm font-semibold rounded-md border border-gray-200 shadow"
                        >
                            Hapus
                        </button>
                    </div>
                </div>
                {/* Informasi Pengguna */}
                <form className="flex-1 flex flex-col gap-4" onSubmit={handleSubmit}>
                    {[
                        { label: "Nama Lengkap", name: "username" },
                        { label: "Email", name: "email", readOnly: true },
                        { label: "Nomor Telpon", name: "no_hp" },
                        { label: "Alamat", name: "alamat" },
                        { label: "Tanggal Lahir", name: "tgl_lahir", type: "date" },
                        { label: "Jenis Kelamin", name: "jenis_kelamin" },
                    ].map((field, index) => (
                        <div key={index} className="flex flex-col">
                            <label
                                htmlFor={field.name}
                                className="text-black text-lg font-medium mb-2"
                            >
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
