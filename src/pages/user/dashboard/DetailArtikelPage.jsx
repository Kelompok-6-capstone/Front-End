import React from 'react';
import { useParams } from 'react-router-dom';
import articles from '../../../data/user/artikelData'

const DetailArtikelPage = () => {
    const { id } = useParams(); // Ambil parameter `id` dari URL
    const article = articles[id]; // Ambil artikel berdasarkan id

    // Jika artikel tidak ditemukan
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
            <div className="max-w-4xl mx-auto">
                <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-64 object-cover rounded-lg mb-6"
                />
                <h1 className="text-cyan-900 text-3xl font-bold mb-4">{article.title}</h1>
                <p className="text-gray-500 text-sm mb-6">{article.date}</p>
                <p className="text-gray-700 text-lg leading-relaxed text-justify">{article.description}</p>
            </div>
        </section>
    );
};

export default DetailArtikelPage;
