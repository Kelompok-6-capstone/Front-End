import React from 'react';
import { Link, useParams } from 'react-router-dom';
import articles from '../../../data/user/artikelData'

const DetailArtikel = () => {
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
        <>
            <section className="bg-white p-5 md:p-10">
                <div className="max-w-4xl lg:ps-52">
                    <ol className="flex items-center whitespace-nowrap mb-5">
                        <li className="inline-flex items-center">
                            <Link
                                className="flex items-center text-sm text-gray-500 hover:text-blue-600 focus:outline-none focus:text-blue-600 dark:text-neutral-500 dark:hover:text-blue-500 dark:focus:text-blue-500"
                                to="/user/beranda"
                            >
                                Beranda
                            </Link>
                            <img src="/images/user/artikel/slash.svg" alt="gambar slash" />
                        </li>
                        <li className="inline-flex items-center">
                            <Link
                                className="flex items-center text-sm text-gray-500 hover:text-blue-600 focus:outline-none focus:text-blue-600 dark:text-neutral-500 dark:hover:text-blue-500 dark:focus:text-blue-500"
                                to="/user/artikel"
                            >
                                Artikel
                            </Link>
                            <img src="/images/user/artikel/slash.svg" alt="gambar slash" />
                        </li>
                        <li
                            className="inline-flex items-center text-sm font-semibold text-gray-800 truncate dark:text-neutral-200"
                            aria-current="page"
                        >
                            Detail Artikel
                        </li>
                    </ol>
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
        </>
    );
};

export default DetailArtikel;
