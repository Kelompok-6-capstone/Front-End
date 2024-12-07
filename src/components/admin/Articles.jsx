import { useEffect, useState } from "react";
import { useFetchArticles } from "../../hooks/admin/useFetchArticles";

export default function ArticleList() {
  const [articles, setArticles] = useState([]);
  const [selectedArticle, setSelectedArticle] = useState(null);

  // Ambil data artikel dari custom hook
  const {
    articleData,
    loading: loadingArticles,
    error: errorArticles,
  } = useFetchArticles();

  // Update state `articles` setelah data dari hook tersedia
  useEffect(() => {
    if (articleData) {
      setArticles(articleData);
    }
  }, [articleData]);

  if (loadingArticles) return <p>Loading...</p>;
  if (errorArticles) return <p>Error: {errorArticles}</p>;

  const handleSelectArticle = (article) => {
    setSelectedArticle(article);
  };

  const handleAddArticle = () => {
    console.log("Navigasi ke halaman buat artikel baru.");
  };

  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-gray-50 p-4 lg:p-8 gap-8">
      {/* Sidebar Kiri */}
      <div className="w-full lg:w-[378px] border-[1px] bg-white p-4 rounded-lg flex flex-col h-[calc(100vh-4rem)]">
        <div className="flex items-center justify-center">
          <button
            className="flex items-center gap-2 rounded-full px-4 py-2 text-cyan-400 hover:bg-cyan-50 transition-colors"
            onClick={handleAddArticle}
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

      {/* Konten Utama */}
      <div className="flex-1 border-[1px] rounded-lg bg-white overflow-hidden">
        <div className="max-w-3xl mx-auto">
          {selectedArticle ? (
            <>
              <div className="flex justify-end gap-3 p-4">
                <button className="hover:text-cyan-500 transition-colors">
                  <img src="/images/admin/pencil.svg" className="h-5 w-5" />
                </button>
                <button className="hover:text-red-500 transition-colors">
                  <img src="/images/admin/trash.svg" className="h-5 w-5" />
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
                  width={800}
                  height={400}
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
    </div>
  );
}
