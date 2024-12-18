import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import Cookies from "js-cookie";
import { getProfileDoctor } from "../api/doctor/profileDoctor";
import Loading from "../components/user/Loading";

const DoctorProtectedRoute = ({ children }) => {
  const [profileValid, setProfileValid] = useState(null);
  const token = Cookies.get("token_doctor");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkProfile = async () => {
      try {
        if (!token) {
          setProfileValid(false);
          setLoading(false);
          return;
        }

        const response = await getProfileDoctor();

        if (response.data) {
          const profileData = response.data;
          const isComplete =
            profileData.name && profileData.specialization && profileData.phone;
          setProfileValid(isComplete);
        } else {
          setProfileValid(false);
        }
      } catch (error) {
        console.error("Error fetching profile:", error);
        setProfileValid(false);
      } finally {
        setLoading(false);
      }
    };

    checkProfile();
  }, [token]);

  if (loading) {
    return <Loading />;
  }
  if (!token) {
    return <Navigate to="/dokter/login" replace />;
  }
  if (profileValid === false) {
    return <Navigate to="/dokter/lengkapi-profile" replace />;
  }
  return children;
};

export default DoctorProtectedRoute;
