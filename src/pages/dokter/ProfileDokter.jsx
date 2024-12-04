import React from "react";
// import Navbar from "../../components/dokter/Navbar";
import Sidebar from "../../components/dokter/sidebar";

const ProfileDokter = () => {
  const profileDetails = [
    { icon: "/images/Message.svg", title: "lisaamelia4@gmail.com" },
    { icon: "/images/phone.svg", title: "6286242398787" },
    { icon: "/images/user-square.svg", title: "Perempuan" },
    { icon: "/images/air.svg", title: "25 November 1982" },
    { icon: "/images/maps.svg", title: "Yogyakarta" },
    { icon: "/images/dokter/stetoskop.svg", title: "Psikoterapi" },
    { icon: "/images/Calendar.svg", title: "Rabu & Sabtu, 08:00-11:00" },
  ];

  return (
    <>
      {/* <Navbar /> */}
      <Sidebar />
      {/* Container Utama */}
      <div className="flex min-h-screen bg-gray-50 dark:bg-neutral-900">
        {/* Sidebar Spacing */}
        <div className="hidden lg:block lg:w-72"></div>
        {/* Konten Utama */}
        <div className="flex-grow flex flex-col items-center px-4 py-8">
          {/* Profile Image */}
          <div className="flex flex-col items-center space-y-4">
            <img
              src="/images/dokter/foto-dokter.png"
              alt="Profile"
              className="w-24 h-24 rounded-full border border-gray-300 shadow-md"
            />
            <h1 className="text-xl font-semibold text-gray-800 dark:text-neutral-200">
              Lisa Amelia
            </h1>
          </div>

          {/* Profile Details */}
          <div className="mt-6 w-full max-w-md space-y-4">
            {profileDetails.map((item, index) => (
              <div
                key={index}
                className="flex items-center bg-white border border-cyan-950 shadow-sm rounded-xl p-4 md:p-5 w-[426px] max-w-lg h-[48px]"
              >
                <img src={item.icon} alt="icon" className="w-8 h-8" />
                <div className="ml-5">
                  <p className="text-gray-800 dark:text-neutral-200 font-medium">
                    {item.title}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileDokter;
