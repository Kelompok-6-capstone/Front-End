import React from 'react'

export default function TagSection() {
    return (
        <>
            <div className="text-cyan-900 text-xl font-semibold mt-12 text-center">Masalah Yang Sering Dihadapi</div>
            <div className="flex flex-wrap gap-4 justify-center md:justify-start pt-5">
                <img
                    src="/images/user/beranda/tags/stress.svg"
                    alt="gambar tags"
                    className="w-[80px] h-[80px] md:w-[125px] md:h-w-[125px] object-contain"
                />
                <img
                    src="/images/user/beranda/tags/depresi.svg"
                    alt="gambar tags"
                    className="w-[80px] h-[80px] md:w-[125px] md:h-w-[125px] object-contain"
                />
                <img
                    src="/images/user/beranda/tags/trauma.svg"
                    alt="gambar tags"
                    className="w-[80px] h-[80px] md:w-[125px] md:h-w-[125px] object-contain"
                />
                <img
                    src="/images/user/beranda/tags/adiksi.svg"
                    alt="gambar tags"
                    className="w-[80px] h-[80px] md:w-[125px] md:h-w-[125px] object-contain"
                />
                <img
                    src="/images/user/beranda/tags/gangguan-kecemasan.svg"
                    alt="gambar tags"
                    className="w-[80px] h-[80px] md:w-[125px] md:h-w-[125px] object-contain"
                />
                <img
                    src="/images/user/beranda/tags/pengembangan-diri.svg"
                    alt="gambar tags"
                    className="w-[80px] h-[80px] md:w-[125px] md:h-w-[125px] object-contain"
                />
                <img
                    src="/images/user/beranda/tags/gangguan-mood.svg"
                    alt="gambar tags"
                    className="w-[80px] h-[80px] md:w-[125px] md:h-w-[125px] object-contain"
                />
                <img
                    src="/images/user/beranda/tags/lihat-lainnya.svg"
                    alt="gambar tags"
                    className="w-[80px] h-[80px] md:w-[125px] md:h-w-[125px] object-contain"
                />
            </div>
        </>
    )
}
