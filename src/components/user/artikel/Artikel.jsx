import React from 'react';
import ArtikelList from './ArtikelList';
import { Link } from 'react-router-dom';
import articles from '../../../data/user/artikelData';

const Artikel = () => {

    return (
        <section id="artikel" className="bg-white pb-16 lg:pt-16">
            <div className="mx-auto px-6 lg:px-24 mt-12">
                <h2 className="text-cyan-950 text-2xl lg:text-4xl font-bold mb-10 text-center">
                    Jelajahi Informasi Terkini
                </h2>
                <ArtikelList articles={articles} />
                <div className="flex justify-center">
                    <Link
                        to=""
                        className="w-[194px] h-[37.40px] px-4 py-2 bg-teal-900 rounded-md justify-center items-center gap-[17.06px] inline-flex transition duration-300 ease-in-out hover:bg-teal-700 hover:shadow-lg hover:scale-105"
                    >
                        <div className="text-center text-neutral-100 text-base font-bold">
                            Lihat Semua Artikel
                        </div>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Artikel;
