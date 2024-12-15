import React from "react";
import AdminProfile from "../../components/admin/ProfileAdmin";
import Navbar from "../../components/admin/Navbar";
import Sidebar from "../../components/admin/Sidebar";

const Profile = () => {
  return (
    <>
      <Navbar />
      <Sidebar />
      <div className="w-full lg:mx-2 lg:my-4 lg:ps-[270px]">
        <AdminProfile />
      </div>
    </>
  );
};

export default Profile;
