import React from "react";
// import Navbar from "../../components/dokter/Navbar";
import Sidebar from "../../components/dokter/sidebar";

const DaftarPassien = () => {
  const patients = [
    {
      name: "Ahmad Santoso",
      age: 30,
      occupation: "Pegawai Negeri",
      photo: "/images/patient1.jpg",
    },
    {
      name: "Rina Dewi",
      age: 24,
      occupation: "Mahasiswa",
      photo: "/images/patient2.jpg",
    },
    {
      name: "Budi Prasetyo",
      age: 35,
      occupation: "Wiraswasta",
      photo: "/images/patient3.jpg",
    },
    {
      name: "Lisa Anggraini",
      age: 29,
      occupation: "Desainer Grafis",
      photo: "/images/patient4.jpg",
    },
    {
      name: "Siti Nurhayati",
      age: 40,
      occupation: "Ibu Rumah Tangga",
      photo: "/images/patient5.jpg",
    },
    {
      name: "Hendra Wijaya",
      age: 27,
      occupation: "Programmer",
      photo: "/images/patient6.jpg",
    },
    {
      name: "Nina Maharani",
      age: 33,
      occupation: "Guru",
      photo: "/images/patient7.jpg",
    },
    {
      name: "Dimas Aditya",
      age: 21,
      occupation: "Fotografer",
      photo: "/images/patient8.jpg",
    },
  ];

  return (
    <>
      {/* <Navbar /> */}
      <Sidebar />
      <div className="w-full lg:ps-72">
        <div className="p-4 sm:p-6 space-y-6">
          {/* Container untuk Judul dan Kartu */}
          <div className="flex flex-col items-center">
            {/* Judul */}
            <h2 className="text-xl font-semibold mb-4 dark:text-neutral-300 w-full max-w-2xl">
              Daftar Pasien
            </h2>
            {/* Container Kartu */}
            <div className="flex flex-col items-center justify-center gap-4 w-full">
              {patients.map((patient, index) => (
                <a
                  key={index}
                  className="group flex flex-row w-full h-[76px] max-w-2xl bg-white border shadow-sm rounded-xl hover:shadow-md focus:outline-none focus:shadow-md transition dark:bg-neutral-900 dark:border-neutral-800"
                  href="#"
                >
                  {/* Gambar Pasien */}
                  <img
                    // src={patient.photo}
                    src="/images/admin/admin-profil.png"
                    alt={`${patient.name}'s photo`}
                    className="w-12 h-12 rounded-full m-4 object-cover"
                  />
                  {/* Informasi Pasien */}
                  <div className="flex flex-col justify-center flex-grow p-4">
                    <h3 className="group-hover:text-blue-600 font-semibold text-gray-800 dark:group-hover:text-neutral-400 dark:text-neutral-200">
                      {patient.name}
                    </h3>
                    <p className="text-sm text-gray-500 dark:text-neutral-500">
                      {patient.age} Tahun | {patient.occupation}
                    </p>
                  </div>
                  {/* Ikon Panah */}
                  <div className="flex items-center me-4">
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
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DaftarPassien;
