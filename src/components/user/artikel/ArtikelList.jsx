import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import ArtikelCard from './ArtikelCard';

const ArtikelList = ({ articles }) => {
    return (
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
                    <ArtikelCard
                        title={article.title}
                        date={article.date}
                        description={article.description}
                        image={article.image}
                    />
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default ArtikelList;
