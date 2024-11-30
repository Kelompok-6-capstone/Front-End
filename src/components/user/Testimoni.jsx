import React from 'react';

export default function Testimoni() {
    return (
        <section id="testimoni" className='pt-16'>
            <div className="w-full min-h-screen px-6 lg:px-24 py-16 bg-gradient-to-b from-cyan-200 to-[#e2f7fa] flex flex-col items-center">
                <h2 className="text-cyan-950 text-[32px] font-bold mb-12 text-center">Cerita Pasien</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
                    {[
                        {
                            name: "Dimas Aditya",
                            message: `"Konsultasi dengan terapis di CalmMind sangat membuka wawasan saya tentang cara mengatasi stres. Saya bisa merasa lebih baik setiap kali selesai berbicara dengan mereka. Sangat membantu!"`
                        },
                        {
                            name: "Hendra Wijaya",
                            message: `"Fitur-fitur CalmMind membantu saya untuk lebih reflektif terhadap perasaan saya. Ini sangat bermanfaat untuk menjaga kesehatan mental saya, terutama dalam menghadapi hari-hari yang penuh tekanan."`
                        },
                        {
                            name: "Lisa Anggraini",
                            message: `"Saya awalnya skeptis, tapi setelah menggunakan CalmMind, saya merasakan perubahan signifikan dalam cara saya menangani kecemasan. Saya merasa jauh lebih baik sekarang."`
                        },
                        {
                            name: "Siti Nurhayati",
                            message: `"Aplikasi CalmMind memberi saya ruang untuk berbicara dengan terapis yang berlisensi, dan itu sangat membantu saya dalam menghadapi tantangan hidup. Saya merasa lebih kuat dan siap menghadapi masalah setelah mendapatkan dukungan profesional."`
                        },
                        {
                            name: "Ahmad Santoso",
                            message: `"CalmMind adalah aplikasi yang luar biasa. Konsultasi yang ditawarkan sangat membantu saya untuk lebih rileks, dan saya merasa lebih produktif dan fokus dalam pekerjaan setelah menggunakan aplikasi ini."`
                        },
                        {
                            name: "Rina Dewi",
                            message: `"Saya merasa lebih tenang dan lebih dapat mengelola stres setelah mencoba berbagai sesi meditasi di CalmMind. Ini benar-benar perubahan besar dalam hidup saya."`
                        }
                    ].map((testimonial, index) => (
                        <div
                            key={index}
                            className="rounded-xl shadow-lg border border-gray-200 bg-white p-6 flex flex-col items-center"
                        >
                            <h3 className="text-cyan-950 text-base font-bold mb-4 text-center">
                                {testimonial.name}
                            </h3>
                            <p className="text-cyan-900 text-sm text-center leading-tight">
                                {testimonial.message}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
