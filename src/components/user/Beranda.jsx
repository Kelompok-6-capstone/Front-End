import React from 'react';

const Beranda = () => (
    <>
        <section id="beranda" className="bg-cyan-100">
            <div className="mx-auto px-6 lg:ps-24 lg:pt-14">
                <div className="w-full h-auto flex flex-col lg:flex-row justify-between items-center lg:items-start gap-8 pt-16 lg:pt-32">
                    <div className="flex flex-col justify-start items-start gap-4 pb-8 pt-12">
                        <div className="text-cyan-950 text-sm font-semibold">WELCOME TO CALMIND</div>
                        <div className="text-cyan-950 text-2xl lg:text-5xl font-semibold">
                            Konsultasi Kesehatan Mental Mudah dan Nyaman!
                        </div>
                        <div className="text-cyan-950 text-base font-medium ">
                            Dapatkan perawatan yang Anda butuhkan, kapan saja, dengan dokter ahli yang peduli dan berpengalaman. Konsultasi mudah dan nyaman, langsung dari rumah Anda.
                        </div>
                        <div className="h-[37.49px] px-[13.49px] py-[6.75px] bg-teal-900 rounded-md justify-center items-center gap-[17.35px] inline-flex mt-10">
                            <div className="text-center text-white text-sm font-bold">Konsultasi Sekarang</div>
                        </div>
                    </div>
                    <img className="w-[300px] lg:w-[600px] h-auto lg:pt-14" src="/images/user/hero-image.png" alt="hero image" />
                </div>
            </div>
        </section>
    </>
);

export default Beranda;