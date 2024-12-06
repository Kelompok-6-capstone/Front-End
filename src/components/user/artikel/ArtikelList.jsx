import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import ArtikelCard from './ArtikelCard';

const ArtikelList = ({ articles }) => {
    return (
        <div className="relative">
            <Swiper
                modules={[Navigation]}
                navigation
                spaceBetween={30}
                slidesPerView={1}
                breakpoints={{
                    640: { slidesPerView: 1 },
                    768: { slidesPerView: 2 },
                    1024: { slidesPerView: 3 },
                }}
            >
                {articles.map((article) => (
                    <SwiperSlide key={article.id}>
                        <ArtikelCard
                            id={article.id}
                            title={article.judul}
                            date={article.created_at}
                            description={article.isi}
                            image={article.gambar}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default ArtikelList;
