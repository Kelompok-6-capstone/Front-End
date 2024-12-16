import React, { useState, useEffect } from "react";
import axiosInstance from "../../utils/axiosInstance";
import Cookies from "js-cookie";
import Swal from "sweetalert2";
import { Pencil } from "lucide-react";
import useProfileStore from "../../stores/useProfileStore";

const AdminProfile = () => {
  const { profile, setProfile, fetchProfile } = useProfileStore();
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    setImagePreview(profile.avatar);
  }, [profile]);

  useEffect(() => {
    fetchProfile();
  }, [fetchProfile]);

  const handleImageUpload = async (file) => {
    try {
      const token = Cookies.get("token_admin");
      if (!token) throw new Error("Token admin tidak ditemukan.");

      const formData = new FormData();
      formData.append("avatar", file);

      const response = await axiosInstance.post(
        "/admin/upload-image",
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );

      if (response.data?.success && response.data?.data?.avatarUrl) {
        setProfile({ ...profile, avatar: response.data.data.avatarUrl });
        return response.data.data.avatarUrl;
      } else {
        throw new Error(response.data?.message || "Gagal mengupload gambar.");
      }
    } catch (error) {
      console.error("Error uploading image:", error);
      Swal.fire({
        icon: "error",
        title: "Gagal!",
        text: error.message || "Terjadi kesalahan saat mengupload gambar.",
      });
      throw error;
    }
  };

  const handleImageChange = async (e) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 50 * 1024 * 1024) {
        Swal.fire({
          icon: "error",
          title: "Gagal!",
          text: "Ukuran file melebihi 50MB.",
        });
        return;
      }

      try {
        setImagePreview(URL.createObjectURL(file));

        const imageUrl = await handleImageUpload(file);
        setImage(imageUrl);
        setImagePreview(imageUrl);

        Swal.fire({
          icon: "success",
          title: "Berhasil!",
          text: "Avatar berhasil diupload.",
        });
      } catch (error) {
        setImage(null);
        setImagePreview(null);
      }
    }
  };

  return (
    <div className="container mx-auto p-4 max-w-md mt-12">
      <div className="flex flex-col items-center space-y-9">
        {/* Avatar Section */}
        <div className="relative">
          <div className="w-32 h-32 rounded-full bg-gray-100 overflow-hidden">
            {imagePreview ? (
              <img
                src={imagePreview}
                alt="Admin Avatar"
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center bg-gray-300">
                <span className="text-gray-700 text-4xl font-bold">
                  {profile.username?.charAt(0)?.toUpperCase() || "A"}
                </span>
              </div>
            )}
          </div>

          {/* Edit Button Overlay */}
          <label
            htmlFor="avatar-upload"
            className="absolute top-1 right-1 w-8 h-8 bg-white rounded-full shadow-md flex items-center justify-center cursor-pointer hover:bg-gray-50 transition-colors"
          >
            <Pencil className="w-4 h-4 text-gray-600" />
          </label>
          <input
            type="file"
            id="avatar-upload"
            className="hidden"
            accept="image/*"
            onChange={handleImageChange}
          />
        </div>

        {/* Username Display */}
        <div className="w-full px-2 py-2 border-[1px] border-cyan-950 rounded-lg flex items-center space-x-2">
          <img src="/images/admin/profile-admin.svg" alt="profil" />
          <span className="text-cyan-900">{profile.username}</span>
        </div>
      </div>
    </div>
  );
};

export default AdminProfile;
