import React from 'react';
import ArtikelCard from './ArtikelCard';
import useFetchArticles from '../../../hooks/useFetchArticles';

const DaftarSemuaArtikel = () => {
    const { articles, loading, error } = useFetchArticles('https://api.calmind.site/user/artikel');

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <section id="artikel" className="bg-white p-5 md:p-10">
            <div className="text-black text-2xl font-medium mb-4">Artikel Terbaru</div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6" aria-label="Daftar artikel">
                {articles.map((article) => (
                    <ArtikelCard
                        key={article.id}
                        id={article.id}
                        title={article.judul}
                        date={article.created_at}
                        description={article.isi}
                        image={article.gambar}
                    />
                ))}
            </div>
        </section>
    );
};

export default DaftarSemuaArtikel;
