import React, { useEffect, useState } from "react";
import axios from "axios";

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

    // Fetch user profile data
    useEffect(() => {
        const fetchUserProfile = async () => {
            try {
                setLoading(true);
                const response = await axios.get("https://api.calmind.site/user/profile");
                if (response.data.success) {
                    setFormData(response.data.data);
                }
            } catch (error) {
                console.error("Error fetching profile data:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchUserProfile();
    }, []);

    // Handle input change
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            setLoading(true);
            const response = await axios.put("https://api.calmind.site/user/profile", formData);
            if (response.data.success) {
                alert("Profile updated successfully!");
            } else {
                alert("Failed to update profile.");
            }
        } catch (error) {
            console.error("Error updating profile:", error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="w-full max-w-4xl h-auto bg-neutral-50 rounded-lg mt-8 mx-auto p-6">
            {loading && <p>Loading...</p>}
            <div className="flex flex-col lg:flex-row gap-6">
                {/* Gambar Profil */}
                <div className="flex flex-col items-center gap-4">
                    <div className="w-32 h-32 bg-gray-500 rounded-2xl flex justify-center items-center">
                        <img
                            className="w-32 h-32 rounded-2xl"
                            src={formData.avatar || "https://via.placeholder.com/133x133"}
                            alt="Profile"
                        />
                    </div>
                    <div className="flex gap-4">
                        <button
                            type="button"
                            onClick={() => alert("Feature to upload avatar is not implemented yet.")}
                            className="px-4 py-2 bg-teal-100 text-teal-800 text-sm font-semibold rounded-md"
                        >
                            Upload New Picture
                        </button>
                        <button
                            type="button"
                            onClick={() => setFormData((prev) => ({ ...prev, avatar: "" }))}
                            className="px-4 py-2 bg-white text-red-500 text-sm font-semibold rounded-md border border-gray-200 shadow"
                        >
                            Delete
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
                            <input
                                type={field.type || "text"}
                                id={field.name}
                                name={field.name}
                                value={formData[field.name]}
                                onChange={handleChange}
                                readOnly={field.readOnly || false}
                                className={`w-full px-3 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 ${field.readOnly ? "bg-gray-100 cursor-not-allowed" : ""
                                    }`}
                            />
                        </div>
                    ))}

                    {/* Tombol Simpan */}
                    <button
                        type="submit"
                        className="self-end px-6 py-2 bg-teal-600 text-white font-semibold rounded-md hover:bg-teal-700 transition"
                    >
                        {loading ? "Saving..." : "Simpan Perubahan"}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ProfilPengguna;
