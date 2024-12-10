import React, { useState, useEffect } from "react";
import { X } from "lucide-react";
import axiosInstance from "../../utils/axiosInstance";
import Cookies from "js-cookie";
import Swal from "sweetalert2";

export default function CreateArticleDrawer({
  isOpen,
  onClose,
  onArticleCreated,
  articleToEdit,
}) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (articleToEdit) {
      setTitle(articleToEdit.judul);
      setDescription(articleToEdit.isi);
      setImage(articleToEdit.gambar);
      setImagePreview(articleToEdit.gambar);
    } else {
      setTitle("");
      setDescription("");
      setImage(null);
      setImagePreview(null);
    }
  }, [articleToEdit]);

  const handleImageUpload = async (file) => {
    try {
      const token = Cookies.get("token_admin");
      if (!token) throw new Error("Token admin tidak ditemukan.");

      const formData = new FormData();
      formData.append("gambar", file);

      const response = await axiosInstance.post(
        "/admin/artikel/upload-image",
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );

      if (response.data?.success && response.data?.data?.imageUrl) {
        return response.data.data.imageUrl;
      } else {
        throw new Error(
          response.data?.data?.message || "Gagal mengupload gambar."
        );
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
      } catch (error) {
        setImage(null);
        setImagePreview(null);
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const token = Cookies.get("token_admin");
      if (!token) throw new Error("Token admin tidak ditemukan.");

      const payload = {
        judul: title,
        isi: description,
        gambar: image,
      };

      let response;
      if (articleToEdit) {
        response = await axiosInstance.put(
          `/admin/artikel/${articleToEdit.id}`,
          payload,
          {
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
            },
          }
        );
      } else {
        response = await axiosInstance.post("/admin/artikel", payload, {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        });
      }

      if (response.data?.success) {
        Swal.fire({
          icon: "success",
          title: "Berhasil!",
          text: articleToEdit
            ? "Artikel berhasil diperbarui."
            : "Artikel berhasil ditambahkan.",
        });
        onArticleCreated();
        onClose();
      } else {
        throw new Error(
          response.data?.message || "Terjadi kesalahan tidak diketahui."
        );
      }
    } catch (error) {
      console.error("Error creating/updating article:", error);
      Swal.fire({
        icon: "error",
        title: "Gagal!",
        text:
          error.message ||
          "Terjadi kesalahan saat menambahkan/memperbarui artikel.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div
      className={`fixed inset-y-0 right-0 w-full sm:w-[500px] bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-50 ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div className="h-full flex flex-col">
        <div className="flex items-center justify-between p-6 border-b">
          <h2 className="text-xl font-semibold">
            {articleToEdit ? "Edit Artikel" : "Buat Artikel Baru"}
          </h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <form
          id="article-form"
          onSubmit={handleSubmit}
          className="flex-1 overflow-y-auto p-6"
        >
          <div className="space-y-6">
            <div>
              <label
                htmlFor="title"
                className="block text-sm font-semibold text-gray-700 mb-1"
              >
                Judul Artikel
              </label>
              <input
                type="text"
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full text-sm p-2 border rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500"
                required
                placeholder="Input Judul"
              />
            </div>

            <div>
              <p className="block text-sm font-medium text-gray-700 mb-1">
                Gambar
              </p>
              <div className="border-2 border-dashed rounded-lg p-4 text-center">
                {imagePreview ? (
                  <div className="relative aspect-video">
                    <img
                      src={imagePreview}
                      alt="Preview"
                      className="object-cover rounded-lg w-full h-full"
                    />
                    <button
                      type="button"
                      onClick={() => {
                        setImage(null);
                        setImagePreview(null);
                      }}
                      className="absolute top-2 right-2 p-1 bg-white rounded-full shadow-lg"
                    >
                      <X className="h-4 w-4" />
                    </button>
                  </div>
                ) : (
                  <div className="space-y-2">
                    <div className="flex justify-center">
                      <img
                        src="/images/admin/upload_image.svg"
                        alt="Upload"
                        width={48}
                        height={48}
                      />
                    </div>
                    <p className="text-sm text-gray-500">
                      Gambar Bisa Drop Kesini!
                    </p>
                    <p className="text-xs text-gray-400">Maximum size: 50MB</p>
                    <button
                      type="button"
                      onClick={() =>
                        document.getElementById("image-upload").click()
                      }
                      className="text-cyan-500 text-sm hover:underline"
                    >
                      browse
                    </button>
                    <input
                      type="file"
                      id="image-upload"
                      className="hidden"
                      accept="image/*"
                      onChange={handleImageChange}
                    />
                  </div>
                )}
              </div>
            </div>

            <div>
              <label
                htmlFor="description"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Deskripsi Artikel
              </label>
              <textarea
                id="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                rows={8}
                className="w-full text-sm p-2 border rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500"
                required
                placeholder="Input Deskripsi"
              />
            </div>
          </div>
        </form>

        <div className="border-t p-6 flex gap-4 justify-between">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 text-sm font-medium text-white bg-red-500 border border-gray-300 rounded-lg hover:bg-red-800"
            disabled={isSubmitting}
          >
            Batal
          </button>
          <button
            type="submit"
            form="article-form"
            className="px-4 py-2 text-sm font-medium text-white bg-[#2DD4BF] rounded-lg hover:bg-[#1f9a89] disabled:opacity-50"
            disabled={isSubmitting}
          >
            {isSubmitting
              ? "Menyimpan..."
              : articleToEdit
              ? "Perbarui"
              : "Simpan"}
          </button>
        </div>
      </div>
    </div>
  );
}
