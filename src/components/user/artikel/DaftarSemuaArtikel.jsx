import React from 'react';
import ArtikelCard from './ArtikelCard';
import articles from '../../../data/user/artikelData';

const DaftarSemuaArtikel = () => {
    return (
        <section id="artikel" className="bg-white p-5 md:p-10">
            <h2 className="text-cyan-900 text-2xl font-semibold text-center mb-6">
                Daftar Semua Artikel
            </h2>
            <div
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
                aria-label="Daftar artikel"
            >
                {articles.map((article) => (
                    <ArtikelCard
                        key={article.id}
                        id={article.id}
                        title={article.title}
                        date={article.date}
                        description={article.description}
                        image={article.image}
                    />
                ))}
            </div>
        </section>
    );
};

export default DaftarSemuaArtikel;
