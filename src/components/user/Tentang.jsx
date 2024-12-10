import React from 'react';

const Tentang = () => (
    <section id="tentang" className="py-10 lg:py-32 bg-white">
        <div className="mx-auto px-6 lg:px-24 flex flex-col md:flex-row items-start gap-6">
            <div className="flex-1 flex flex-col gap-4">
                <div className="text-cyan-950 text-sm font-semibold">- Tentang Kami</div>
                <h2 className="text-cyan-950 text-2xl md:text-[32px] font-bold">
                    Selamat Datang di Layanan Kesehatan Mental Calmind
                </h2>
                <p className="text-cyan-950 text-xl font-medium">
                    Kami percaya bahwa kesehatan mental yang baik adalah kunci untuk kehidupan yang bahagia dan produktif.
                    Kami hadir untuk mendukung Anda mengatasi stres, kecemasan, dan tantangan emosional lainnya, dengan
                    solusi yang mudah diakses dan efektif.
                </p>
                <div className="flex flex-col gap-2">
                    {[
                        { text: 'Dokter Terverifikasi', icon: '/images/user/verify.svg' },
                        { text: 'Konten Edukasi', icon: '/images/user/verify.svg' },
                        { text: 'Terhubung Dimana Saja dan Kapan Saja', icon: '/images/user/verify.svg' },
                    ].map((feature, index) => (
                        <div key={index} className="flex items-center gap-3">
                            <img className="w-[25px] h-[25px]" src={feature.icon} alt={`Icon ${feature.text}`} />
                            <p className="text-cyan-950 text-sm font-semibold">{feature.text}</p>
                        </div>
                    ))}
                </div>
            </div>

            <div className="flex-shrink-0 ps-10">
                <img
                    className="w-[500px] h-[475px] object-cover"
                    src="/images/user/tentang.png"
                    alt="Ilustrasi tentang Calmind"
                />
            </div>
        </div>
    </section>
);

export default Tentang;
