import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../../components/dokter/Navbar";
import Sidebar from "../../../components/dokter/Sidebar";
import { getProfileDoctor } from "../../../api/doctor/profileDoctor";
import Loading from "../../../components/user/Loading";

const SettingsProfileDokter = () => {
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

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
    return <Loading />;
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
    {
      icon: "/images/dokter/stetoskop.svg",
      title: profile.title.name,
    },
    {
      icon: "/images/file.svg",
      title: profile.str_number,
    },
  ];

  const detailDokter = {
    tentangDokter: profile.about,
  };

  return (
    <>
      <Navbar />
      <Sidebar />
      <div className="flex min-h-screen bg-gray-50">
        <div className="hidden lg:block lg:w-72"></div>
        <div className="flex-grow flex flex-col items-center px-4 py-8">
          <div className="flex flex-col items-center space-y-4 mt-4">
            <img
              src={profile?.avatar}
              alt="Doctor"
              className="w-24 h-24 rounded-full border border-cyan-900 object-cover"
            />
            <h1 className="text-xl font-semibold text-gray-800">
              {profile.username}
            </h1>
          </div>

          {/* data dokter */}
          <div className="mt-6 w-full max-w-md space-y-4">
            {profileDetails.map((item, index) => (
              <div
                key={index}
                className="flex items-center bg-white border border-cyan-950 shadow-sm rounded-xl p-4 md:p-5 w-[426px] max-w-lg h-[48px]"
              >
                <img src={item.icon} alt="icon" className="w-8 h-8" />
                <div className="ml-5">
                  <p className="text-gray-800 font-medium">{item.title}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 w-full max-w-md space-y-4">
            <div className="bg-white border border-cyan-950 shadow-sm rounded-xl p-6 w-[426px] max-w-lg">
              <p className="text-gray-600">{detailDokter.tentangDokter}</p>
            </div>
          </div>

          {/* Tombol Edit */}
          <div className="mr-6 mt-6 w-full max-w-[426px]">
            <button
              onClick={() => navigate("/dokter/edit-profile")}
              className="bg-teal-700 text-white w-full px-2 py-2 rounded-md shadow-md transition"
            >
              Edit Profile
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SettingsProfileDokter;
