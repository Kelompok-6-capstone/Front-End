import { useState, useEffect } from "react";
import Navbar from "../../../components/dokter/Navbar";
import Sidebar from "../../../components/dokter/Sidebar";
import { getProfileDoctor } from "../../../api/doctor/doctor"; // API untuk mendapatkan profil dokter

const ProfileDokter = () => {
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await getProfileDoctor();
        setProfile(response.data);
      } catch (error) {
        setError(error.message || "Gagal memuat data profil");
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p>Loading...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-red-500">Error: {error}</p>
      </div>
    );
  }

  const profileDetails = [
    { icon: "/images/Message.svg", title: profile.email },
    { icon: "/images/phone.svg", title: profile.no_hp },
    { icon: "/images/user-square.svg", title: profile.jenis_kelamin },
    { icon: "/images/air.svg", title: profile.date_of_birth },
    { icon: "/images/maps.svg", title: profile.address },
    { icon: "/images/dokter/stetoskop.svg", title: profile.title.name },
  ];

  const detailDokter = {
    experience: profile.about,
  };

  return (
    <>
      <Navbar />
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
              src={profile.avatar || "/images/dokter/foto-dokter.png"} // Gunakan avatar dari API jika ada
              alt="Profile"
              className="w-24 h-24 rounded-full border border-gray-300 shadow-md"
            />
            <h1 className="text-xl font-semibold text-gray-800 dark:text-neutral-200">
              {profile.username}
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

          {/* Card Detail Dokter untuk About */}
          <div className="mt-6 w-full max-w-md space-y-4">
            <div className="bg-white border border-cyan-950 shadow-sm rounded-xl p-6 w-[426px] max-w-lg">
              <p className="text-gray-600 dark:text-neutral-300">
                {detailDokter.experience}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileDokter;
