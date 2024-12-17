import React from 'react';
import { useParams } from 'react-router-dom';
import { useFetchArticleById } from '../../../hooks/user/useFetchArticles';
import Loading from '../Loading';

const DetailArtikel = () => {
    const { id } = useParams(); // Ambil parameter `id` dari URL
    const { article, loading, error } = useFetchArticleById(id); // Gunakan custom hook

    if (loading) {
        return <Loading />;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    if (!article) {
        return (
            <section className="bg-white p-5 md:p-10">
                <div className="text-center text-cyan-900 text-2xl font-semibold">
                    Artikel Tidak Ditemukan
                </div>
                <p className="text-center text-gray-500 mt-4">
                    Mohon maaf, artikel yang Anda cari tidak tersedia.
                </p>
            </section>
        );
    }

    return (
        <section className="bg-white md:p-10 lg:-ms-10">
            <img
                src={article.gambar}
                alt={article.judul}
                className="w-full h-64 object-cover rounded-lg mb-6"
            />
            <h1 className="text-cyan-900 text-3xl font-bold mb-4">{article.judul}</h1>
            <p className="text-gray-500 text-sm mb-6">{new Date(article.created_at).toLocaleDateString()}</p>
            <p className="text-gray-700 text-lg leading-relaxed text-justify">{article.isi}</p>
        </section>
    );
};

export default DetailArtikel;
