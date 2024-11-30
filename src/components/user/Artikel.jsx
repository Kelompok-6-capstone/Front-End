import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

export default function Artikel() {
    const articles = [
        {
            title: 'Mengatasi Stres Sehari-hari',
            date: '20-11-2024',
            description: 'Cara-cara sederhana namun efektif untuk mengurangi stres.',
            image: '/images/user/artikel/artikel1.png',
        },
        {
            title: 'Meditasi untuk Kesehatan Mental',
            date: '19-10-2024',
            description: 'Manfaat kesehatan mental dari praktik meditasi yang handal.',
            image: '/images/user/artikel/artikel2.png',
        },
        {
            title: 'Cara Efektif untuk Merefleksikan Diri',
            date: '11-10-2024',
            description: 'Dengan mencatat perasaan Anda setiap hari, dapat membantu mengurangi stres.',
            image: '/images/user/artikel/artikel3.png',
        },
        {
            title: 'Meditasi untuk Kesehatan Mental',
            date: '19-10-2024',
            description: 'Manfaat kesehatan mental dari praktik meditasi yang handal.',
            image: '/images/user/artikel/artikel2.png',
        },
    ];

    return (
        <section id="artikel" className="bg-white pb-16 lg:pt-16">
            <div className="container mx-auto px-6 lg:px-24 mt-12">
                <h2 className="text-cyan-950 text-2xl lg:text-4xl font-bold mb-10 text-center">Jelajahi Informasi Terkini</h2>
                <Swiper
                    modules={[Navigation]}
                    navigation={{
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
                    }}
                    spaceBetween={30}
                    slidesPerView={1}
                    breakpoints={{
                        640: { slidesPerView: 1 },
                        768: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 },
                    }}
                >
                    {articles.map((article, index) => (
                        <SwiperSlide key={index}>
                            <div className="bg-white shadow-md rounded-2xl overflow-hidden mb-16">
                                <img
                                    className="w-full h-48 object-cover rounded-t-2xl"
                                    src={article.image}
                                    alt={article.title}
                                />
                                <div className="p-6">
                                    <h3 className="text-cyan-950 text-lg font-semibold mb-2">
                                        {article.title}
                                    </h3>
                                    <p className="text-neutral-500 text-sm mb-4">{article.date}</p>
                                    <p className="text-cyan-950 text-sm mb-4">{article.description}</p>
                                    <button className="text-blue-500 font-bold text-sm hover:underline">
                                        Lihat Detail →
                                    </button>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
                <div className='flex justify-center'>
                    <button type="button" className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700  focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none">
                        Lihat Semua Artikel
                    </button>
                </div>
            </div>
        </section>
    );
}
