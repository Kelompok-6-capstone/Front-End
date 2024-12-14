import React from 'react';
import ArtikelCard from './ArtikelCard';
import useFetchArticles from '../../../hooks/user/useFetchArticles';
import Loading from '../Loading';
import axiosInstanceUser from '../../../utils/axiosInstanceUser';

const DaftarSemuaArtikel = () => {
    const fetchArticles = async () => {
        try {
            const response = await axiosInstanceUser.get('/user/artikel');
            return response.data;
        } catch (error) {
            throw error.response?.data?.message || 'Terjadi kesalahan saat mengambil artikel.';
        }
    };

    const { articles, loading, error } = useFetchArticles(fetchArticles);

    if (loading) return <Loading />;
    if (error) return <div className="mt-36">Error: {error}</div>;

    return (
        <section id="artikel" className="bg-white px-3 lg:px-0 lg:mt-7">
            <div className="text-black text-2xl font-medium mb-4 mt-5 lg:mt-0">Artikel Terbaru</div>
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
