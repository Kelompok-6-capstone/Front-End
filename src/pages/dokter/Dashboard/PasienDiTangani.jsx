import Navbar from "../../../components/dokter/Navbar";

const PasienDitangani = () => {
  const ListPatient = [
    { nama: "Nina Maharani", umur: 33, profesi: "Guru", avatar: null },
    {
      nama: "Lisa Anggraini",
      umur: 29,
      profesi: "Desainer Grafis",
      avatar: null,
    },
    { nama: "Dimas Aditya", umur: 21, profesi: "Fotografer", avatar: null },
  ];

  return (
    <>
      <Navbar />
      <div className="p-12 bg-white min-h-screen flex justify-center">
        <div>
          <h2 className="text-xl font-semibold mb-4">
            Pasien Sudah Di Tangani
          </h2>
          <div className="grid grid-cols-1 gap-4">
            {ListPatient.map((pasien, idx) => (
              <div
                key={idx}
                className="flex flex-row w-[584px] h-[76px] max-w-2xl bg-white border border-cyan-950 rounded-xl mx-auto"
              >
                <img
                  src={pasien.avatar || "/images/admin/admin-profil.png"}
                  className="w-14 h-14 rounded-full m-2 object-cover mx-2"
                  alt="Profil Pasien"
                />
                <div className="flex flex-col justify-center flex-grow p-4">
                  <h3 className="font-semibold text-gray-800">{pasien.nama}</h3>
                  <p className="text-sm text-gray-500 dark:text-neutral-500">
                    {pasien.umur} Tahun | {pasien.profesi}
                  </p>
                </div>
                <a href={`#`} className="flex items-center me-4">
                  <svg
                    className="shrink-0 size-5 text-gray-800 dark:text-neutral-200"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="m9 18 6-6-6-6" />
                  </svg>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default PasienDitangani;
