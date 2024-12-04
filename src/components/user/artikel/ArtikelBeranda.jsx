import React from 'react';
import ArtikelList from './ArtikelList';
import articles from '../../../data/user/artikelData';

const ArtikelBeranda = () => {

    return (
        <section id="artikel" className="bg-white p-5 md:p-0">
            <div className="">
                <div className="flex justify-between items-center mb-6">
                    <div className="text-cyan-900 text-base font-semibold">Artikel Terpopuler</div>
                    <a href='/user/artikel'>
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
