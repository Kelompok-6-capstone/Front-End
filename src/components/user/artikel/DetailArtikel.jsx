import React from 'react';
import { useParams } from 'react-router-dom';
import useFetchArticles from '../../../hooks/useFetchArticles';

const DetailArtikel = () => {
    const { id } = useParams();
    const { articles, loading, error } = useFetchArticles(`https://api.calmind.site/user/artikel/${id}`);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    const article = articles;

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
        <section className="bg-white p-5 md:p-10">
            <img src={article.gambar} alt={article.judul} className="w-full h-64 object-cover rounded-lg mb-6" />
            <h1 className="text-cyan-900 text-3xl font-bold mb-4">{article.judul}</h1>
            <p className="text-gray-500 text-sm mb-6">{article.created_at}</p>
            <p className="text-gray-700 text-lg leading-relaxed text-justify">{article.isi}</p>
        </section>
    );
};

export default DetailArtikel;
