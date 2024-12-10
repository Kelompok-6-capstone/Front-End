import React, { useState, useEffect, useCallback } from "react";
import { useFetchArticles } from "../../hooks/admin/useFetchArticles";
import CreateArticleDrawer from "./CreateArticleDrawer";
import axiosInstance from "../../utils/axiosInstance";
import Swal from "sweetalert2";
import Cookies from "js-cookie";

export default function ArticleList() {
  const [articles, setArticles] = useState([]);
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [loadingSelectedArticle, setLoadingSelectedArticle] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  const {
    articleData,
    loading: loadingArticles,
    error: errorArticles,
  } = useFetchArticles();

  useEffect(() => {
    if (articleData) {
      setArticles(articleData);
      setSelectedArticle(null); // Clear selected article when articleData changes
    }
  }, [articleData]);

  const handleSelectArticle = useCallback(async (article) => {
    setIsEditing(false);
    setLoadingSelectedArticle(true);
    try {
      const token = Cookies.get("token_admin");
      if (!token) {
        throw new Error("Token admin tidak ditemukan.");
      }
      const response = await axiosInstance.get(`/admin/artikel/${article.id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (response.data?.success) {
        setSelectedArticle(response.data.data);
      } else {
        throw new Error(
          response.data?.message || "Gagal mengambil detail artikel."
        );
      }
    } catch (error) {
      console.error("Error fetching article details:", error);
      Swal.fire({
        icon: "error",
        title: "Gagal!",
        text:
          error.message || "Terjadi kesalahan saat mengambil detail artikel.",
      });
    } finally {
      setLoadingSelectedArticle(false);
    }
  }, []);

  const handleArticleCreated = useCallback(async () => {
    try {
      const { articleData, error } = await useFetchArticles();
      if (error) {
        console.error("Error fetching articles:", error);
      } else {
        setArticles(articleData);
      }
    } catch (error) {
      console.error("Error in handleArticleCreated:", error);
    }
  }, []);

  const handleDeleteArticle = useCallback(async (id) => {
    const token = Cookies.get("token_admin");
    if (!token) {
      Swal.fire({
        icon: "error",
        title: "Gagal!",
        text: "Token admin tidak ditemukan.",
      });
      return;
    }

    Swal.fire({
      title: "Apakah Anda yakin?",
      text: "Artikel ini akan dihapus secara permanen.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Ya, Hapus!",
      cancelButtonText: "Batal",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const response = await axiosInstance.delete(`/admin/artikel/${id}`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });

          if (response.data?.success) {
            Swal.fire({
              icon: "success",
              title: "Berhasil!",
              text: "Artikel berhasil dihapus.",
            });
            setArticles((prevArticles) =>
              prevArticles.filter((article) => article.id !== id)
            );
            setSelectedArticle(null);
          } else {
            throw new Error(
              response.data?.message || "Gagal menghapus artikel."
            );
          }
        } catch (error) {
          console.error("Error deleting article:", error);
          Swal.fire({
            icon: "error",
            title: "Gagal!",
            text: error.message || "Terjadi kesalahan saat menghapus artikel.",
          });
        }
      }
    });
  }, []);

  const handleEditClick = useCallback(() => {
    setIsEditing(true);
    setIsDrawerOpen(true);
  }, []);

  if (loadingArticles) return <p>Loading...</p>;
  if (errorArticles) return <p>Error: {errorArticles}</p>;

  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-gray-50 p-4 lg:p-8 gap-8">
      {/* Sidebar Kiri */}
      <div className="w-full lg:w-[378px] border-[1px] bg-white p-4 rounded-lg flex flex-col h-[calc(100vh-4rem)]">
        <div className="flex items-center justify-center">
          <button
            className="flex items-center gap-2 rounded-full px-4 py-2 text-cyan-400 hover:bg-cyan-50 transition-colors"
            onClick={() => setIsDrawerOpen(true)}
          >
            <img
              src="/images/admin/add_ring.svg"
              alt="Add Article"
              width={24}
              height={24}
            />
            Buat Artikel Baru
          </button>
        </div>

        <div className="mt-4 space-y-4 overflow-y-auto flex-grow">
          {articles.map((article) => (
            <div
              key={article.id}
              className="flex gap-4 items-center cursor-pointer"
              onClick={() => handleSelectArticle(article)}
            >
              <img
                src={article.gambar}
                alt={article.judul}
                width={80}
                height={80}
                className="h-14 w-20 rounded-lg object-cover"
              />
              <div className="flex flex-col gap-1">
                <h3 className="font-medium">{article.judul}</h3>
                <p className="text-sm text-gray-500">
                  {new Date(article.created_at).toLocaleDateString()}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 border-[1px] rounded-lg bg-white overflow-hidden">
        <div className="max-w-3xl mx-auto">
          {loadingSelectedArticle ? (
            <div className="p-6 text-center text-gray-500">
              <p>Memuat detail artikel...</p>
            </div>
          ) : selectedArticle ? (
            <>
              <div className="flex justify-end gap-3 p-4">
                <button
                  className="hover:text-cyan-500 transition-colors"
                  onClick={handleEditClick}
                >
                  <img
                    src="/images/admin/pencil.svg"
                    className="h-5 w-5"
                    alt="Edit"
                  />
                </button>
                <button
                  className="hover:text-red-500 transition-colors"
                  onClick={() => handleDeleteArticle(selectedArticle.id)}
                >
                  <img
                    src="/images/admin/trash.svg"
                    className="h-5 w-5"
                    alt="Delete"
                  />
                </button>
              </div>

              <article className="p-6">
                <h1 className="text-2xl font-semibold">
                  {selectedArticle.judul}
                </h1>
                <p className="mt-2 text-sm text-gray-500">
                  Ditulis oleh {selectedArticle.admin.username} -{" "}
                  {new Date(selectedArticle.created_at).toLocaleDateString()}
                </p>

                <img
                  src={selectedArticle.gambar}
                  alt={selectedArticle.judul}
                  className="mt-8 aspect-video w-full rounded-lg object-cover"
                />

                <div className="prose mt-8 max-w-none text-base">
                  <p>{selectedArticle.isi}</p>
                </div>
              </article>
            </>
          ) : (
            <div className="p-6 text-center text-gray-500">
              <p>Pilih artikel untuk melihat detailnya.</p>
            </div>
          )}
        </div>
      </div>

      <CreateArticleDrawer
        isOpen={isDrawerOpen}
        onClose={() => {
          setIsDrawerOpen(false);
          setIsEditing(false);
        }}
        onArticleCreated={handleArticleCreated}
        articleToEdit={isEditing ? selectedArticle : null}
      />
    </div>
  );
}
