import React from 'react';
import ArtikelList from './ArtikelList';
import useFetchArticles from '../../../hooks/useFetchArticles';

const ArtikelBeranda = () => {
    const { articles, loading, error } = useFetchArticles('https://api.calmind.site/user/artikel');

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <section id="artikel" className="bg-white p-5 md:p-0 mt-12">
            <div>
                <div className="flex justify-between items-center mb-6">
                    <div className="text-cyan-900 text-base font-semibold">Artikel Terkini</div>
                    <a href="/user/artikel">
                        <div className="text-cyan-900 text-base font-semibold hover:underline">
                            Lihat Semua
                        </div>
                    </a>
                </div>
                <ArtikelList articles={articles} />
            </div>
        </section>
    );
};

export default ArtikelBeranda;
