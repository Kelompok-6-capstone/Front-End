export default function ArticleList() {
  const articles = [
    {
      id: 1,
      title: 'Mengatasi Stress Sehari-hari',
      date: '18 Maret 2018',
      image: '/images/admin/stress.png',
    },
    {
      id: 2,
      title: 'Meditasi untuk Kesehatan Mental',
      date: '24 Maret 2018',
      image: '/images/admin/stress.png',
    },
    {
      id: 3,
      title: 'Cara Efektif untuk Merefleksikan Diri',
      date: '20 Maret 2018',
      image: '/images/admin/stress.png',
    },
    {
      id: 4,
      title: 'Pentingnya Istirahat Mental',
      date: '12 November 2018',
      image: '/images/admin/stress.png',
    },
    {
      id: 5,
      title: 'Pentingnya Istirahat Mental',
      date: '12 November 2018',
      image: '/images/admin/stress.png',
    },
    {
      id: 6,
      title: 'Pentingnya Istirahat Mental',
      date: '12 November 2018',
      image: '/images/admin/stress.png',
    },
  ]

  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-gray-50 p-4 lg:p-8 gap-8">
      {/* Left Sidebar */}
      <div className="w-full lg:w-[378px] border-[1px] bg-white p-4 rounded-lg flex flex-col h-[calc(100vh-4rem)]">
        <div className="flex items-center justify-center">
          <button className="flex items-center gap-2 rounded-full px-4 py-2 text-cyan-400 hover:bg-cyan-50 transition-colors">
            <img src="/images/admin/add_ring.svg" alt="" width={24} height={24} />
            Buat Artikel Baru
          </button>
        </div>

        <div className="mt-4 space-y-4 overflow-y-auto flex-grow">
          {articles.map((article) => (
            <div key={article.id} className="flex gap-4 items-center">
              <img
                src={article.image}
                alt=""
                width={80}
                height={80}
                className="h-14 w-20 rounded-lg object-cover"
              />
              <div className='flex flex-col gap-1'>
                <h3 className="font-medium">{article.title}</h3>
                <p className="text-sm text-gray-500">{article.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 border-[1px] rounded-lg bg-white overflow-hidden">
        <div className="max-w-3xl mx-auto">
          <div className="flex justify-end gap-3 p-4">
            <button className="hover:text-cyan-500 transition-colors">
              <img src='/images/admin/pencil.svg' className="h-5 w-5" />
            </button>
            <button className="hover:text-red-500 transition-colors">
              <img src='/images/admin/trash.svg' className="h-5 w-5" />
            </button>
          </div>

          <article className="p-6">
            <h1 className="text-2xl font-semibold">Meditasi untuk Kesehatan mental</h1>
            <p className="mt-2 text-sm text-gray-500">
              Ditulis Oleh Dava Azriel - 24 Maret 2018
            </p>

            <img
              src="/images/admin/meditasi.png"
              alt="Meditasi"
              width={800}
              height={400}
              className="mt-8 aspect-video w-full rounded-lg object-cover"
            />

            <div className="prose mt-8 max-w-none text-base">
              <p>
                Meditasi adalah praktik yang sederhana namun efektif untuk
                meningkatkan kesehatan mental. Dengan meditasi, Anda dapat
                mengurangi stres, kecemasan, dan meningkatkan kesejahteraan
                emosional. Meditasi melibatkan fokus pada pernapasan dan
                kesadaran penuh terhadap saat ini, membantu menenangkan
                pikiran yang gelisah dan mempromosikan relaksasi.
              </p>

              <p>
                Studi menunjukkan bahwa meditasi dapat menurunkan kadar
                hormon stres, seperti kortisol, serta meningkatkan produksi hormon
                bahagia, seperti serotonin. Dengan meluangkan waktu beberapa
                menit setiap hari untuk meditasi, Anda dapat mengalami
                peningkatan konsentrasi, tidur yang lebih nyenyak, dan perasaan
                tenang yang lebih stabil.
              </p>

              <p>
                Untuk memulai, carilah tempat yang tenang, duduklah dengan
                nyaman, dan fokuskan perhatian pada pernapasan. Biarkan pikiran
                mengalir tanpa berusaha mengendalikan atau menilai. Mulailah
                dengan sesi singkat, sekitar 5-10 menit, dan secara bertahap
                tingkatkan durasinya sesuai kenyamanan Anda.
              </p>

              <p>
                Meditasi adalah alat yang kuat untuk menjaga kesehatan mental
                dalam kehidupan sehari-hari yang penuh tekanan. Cobalah dan
                rasakan manfaatnya!
              </p>
            </div>
          </article>
        </div>
      </div>
    </div>
  )
}

