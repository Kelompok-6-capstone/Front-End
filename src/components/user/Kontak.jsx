import React from 'react';

export default function Kontak() {
    return (
        <section id="kontak">
            <div className="w-full bg-white px-6 lg:px-24 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Kolom Kiri */}
                    <div>
                        <h2 className="text-cyan-950 text-[32px] font-bold mb-4">Calmind</h2>
                        <ul className="space-y-4">
                            <li className="flex items-center text-cyan-950 text-sm font-normal">
                                <img src="/images/user/kontak/website.svg" alt="gambar ilustrasi ikon website" className="w-5 h-5 mr-2" />
                                www.calmind.com
                            </li>
                            <li className="flex items-center text-cyan-950 text-sm font-normal">
                                <img src="/images/user/kontak/google-maps.svg" alt="gambar ilustrasi ikon peta" className="w-5 h-5 mr-2" />
                                1738 IKN Kalimantan Timur, 70584
                            </li>
                            <li className="flex items-center text-cyan-950 text-sm font-normal">
                                <img src="/images/user/kontak/phone.svg" alt="gambar ilustrasi ikon telepon" className="w-5 h-5 mr-2" />
                                +62 895 1314 8907
                            </li>
                        </ul>
                    </div>
                    {/* Kolom Kanan */}
                    <div>
                        <div className="text-cyan-950 text-base font-semibold mb-2">Bagian</div>
                        <div className="w-[70px] h-[1px] bg-cyan-950 mb-4"></div>
                        <ul className="space-y-2">
                            <li >
                                <a href="#beranda" className="text-cyan-950 text-sm font-normal">
                                    Beranda
                                </a>
                            </li>
                            <li >
                                <a href="#tentang" className="text-cyan-950 text-sm font-normal">
                                    Tentang
                                </a>
                            </li>
                            <li >
                                <a href="#artikel" className="text-cyan-950 text-sm font-normal">
                                    Artikel
                                </a>
                            </li>
                            <li >
                                <a href="#testimoni" className="text-cyan-950 text-sm font-normal">
                                    Testimoni
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="w-full h-[1px] bg-cyan-950 my-4"></div>
                <p className="text-cyan-950 text-base font-semibold lg:text-left text-center mt-4">
                    Semua Hak Cipta Dilindungi Undang-Undang @Calmind 2024
                </p>
            </div>
        </section>
    );
}
