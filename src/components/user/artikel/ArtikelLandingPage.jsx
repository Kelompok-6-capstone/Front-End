import React from 'react'
import articles from '../../../data/user/artikelData'; // Sesuaikan path sesuai struktur project Anda
import { Link } from 'react-router-dom';

export default function ArtikelLandingPage() {
    return (
        <>
            <section id="artikel" className="bg-white pb-16 lg:pt-16">
                <div className="mx-auto px-6 lg:px-24 mt-12">
                    <h2 className="text-cyan-950 text-2xl lg:text-4xl font-bold mb-10 text-center">
                        Jelajahi Informasi Terkini
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mx-14">
                        {articles.map((article) => {
                            const truncatedDescription = article.description
                                ? article.description.length > 75
                                    ? article.description.slice(0, 75) + '...'
                                    : article.description
                                : 'Deskripsi tidak tersedia';

                            return (
                                <div
                                    key={article.id}
                                    className="bg-white shadow-md rounded-2xl overflow-hidden mb-10"
                                >
                                    <img
                                        className="w-full h-48 object-cover rounded-t-2xl"
                                        src={article.image || 'https://via.placeholder.com/150'}
                                        alt={article.title || 'Gambar Artikel'}
                                    />
                                    <div className="p-6">
                                        <h3 className="text-cyan-950 text-lg font-semibold mb-2">
                                            {article.title || 'Judul Tidak Tersedia'}
                                        </h3>
                                        <p className="text-neutral-500 text-sm mb-4">
                                            {article.date || 'Tanggal Tidak Tersedia'}
                                        </p>
                                        <p className="text-cyan-950 text-sm mb-4">
                                            {truncatedDescription}
                                        </p>
                                        <Link to={`/user/artikel/${article.id}`}>
                                            <button className="text-blue-500 font-bold text-sm hover:underline">
                                                Lihat Detail →
                                            </button>
                                        </Link>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>
        </>
    )
}
