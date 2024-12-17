import React from "react";
import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../../utils/axiosInstance";
import Swal from "sweetalert2";
import Cookies from "js-cookie";
import useProfileStore from "../../stores/useProfileStore";
import useSidebarStore from "../../stores/useSidebarStore";

const Sidebar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { profile, fetchProfile } = useProfileStore();
  const { isOpen, toggleSidebar } = useSidebarStore();

  useEffect(() => {
    fetchProfile();
  }, [fetchProfile]);

  const isActive = (path) => location.pathname === path;

  const handleLogout = async () => {
    try {
      const token = Cookies.get("token_admin");

      if (!token) {
        Swal.fire({
          icon: "error",
          title: "Logout Gagal",
          text: "Token tidak ditemukan. Harap login ulang.",
        });
        return;
      }

      const response = await axiosInstance.get(
        "/admin/logout",
        {},
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      Cookies.remove("token_admin");
      Swal.fire({
        icon: "success",
        title: "Logout Berhasil",
        text: "Anda telah keluar dari akun.",
        timer: 2000,
        showConfirmButton: false,
      });
      navigate("/admin/login");
    } catch (error) {
      console.error("Error during logout:", error.response || error);
      Swal.fire({
        icon: "error",
        title: "Logout Gagal",
        text: error.response?.data?.message || "Terjadi kesalahan.",
      });
    }
  };

  return (
    <>
      <div
        id="hs-application-sidebar"
        className={`hs-overlay ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-all duration-300 fixed inset-y-0 start-0 z-[60] bg-[#ECFEFF] border-gray-200 lg:block lg:translate-x-0 lg:end-auto lg:bottom-0 flex lg:w-[277px] h-full lg:px-[24px)] flex-col items-center gap-[var(--Spacing-32, 32px)] flex-shrink-0`}
      >
        {isOpen && (
          <button
            className="absolute -right-9 top-4 p-2 lg:hidden"
            onClick={toggleSidebar}
          >
            <img src="/images/admin/sidebar-left.svg" alt="" />
          </button>
        )}
        <div className="relative flex flex-col h-full max-h-full">
          <div className="px-5 pt-4 justify-center flex flex-col items-center gap-y-8">
            {/* Logo */}
            <a
              className="flex-none rounded-xl text-xl inline-block font-semibold focus:outline-none focus:opacity-80"
              href="#"
              aria-label="Calmind"
            >
              <img src="/images/Calmind.svg" alt="logo" />
            </a>
            <div className="flex flex-col justify-center items-center mb-[36px]">
              {profile.avatar ? (
                <img
                  src={profile.avatar}
                  alt="admin-profile"
                  className="w-16 h-16 rounded-full object-cover"
                />
              ) : (
                <div className="w-16 h-16 rounded-full bg-gray-300 flex items-center justify-center">
                  <span className="text-2xl font-bold text-gray-600">
                    {profile.username?.charAt(0)?.toUpperCase() || "A"}
                  </span>
                </div>
              )}
              <h1 className="text-[#000] text-center text-[16px] not-italic font-semibold leading-[normal]">
                {profile.username || "Admin"}
              </h1>
              <p className="text-[#000] text-center text-[12px] not-italic font-normal leading-[normal]">
                Admin
              </p>
            </div>
          </div>

          {/* Content */}
          <div className="h-full overflow-y-auto text-[#000] text-center text-[14px] not-italic font-semibold leading-[normal] [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300">
            <nav
              className="hs-accordion-group p-3 w-full flex flex-col flex-wrap"
              data-hs-accordion-always-open=""
            >
              <ul className="flex flex-col space-y-1 gap-[15px] mx-[24px]">
                <li>
                  <Link
                    className={`flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-800 rounded-lg hover:bg-[#22D3EE] focus:outline-none ${
                      isActive("/admin/dashboard") ? "bg-[#22D3EE]" : ""
                    }`}
                    to="/admin/dashboard"
                  >
                    <img src="/images/dashboard.svg" alt="" />
                    Dashboard
                  </Link>
                </li>
                <li className="hs-accordion" id="transaksi-accordion">
                  <Link
                    className={`flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-800 rounded-lg hover:bg-[#22D3EE] focus:outline-none ${
                      isActive("/admin/transaction") ? "bg-[#22D3EE]" : ""
                    }`}
                    to="/admin/transaction"
                  >
                    <img src="/images/Money.svg" alt="money" />
                    Transaksi
                  </Link>
                </li>
                <li className="hs-accordion" id="projects-accordion">
                  <Link
                    className={`flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-800 rounded-lg hover:bg-[#22D3EE] focus:outline-none ${
                      isActive("/admin/users") ? "bg-[#22D3EE]" : ""
                    }`}
                    to="/admin/users"
                  >
                    <img src="/images/User.svg" alt="user" />
                    Pengguna
                  </Link>
                </li>
                <li>
                  <Link
                    className={`w-full flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-800 rounded-lg hover:bg-[#22D3EE] ${
                      isActive("/admin/article") ? "bg-[#22D3EE]" : ""
                    }`}
                    to="/admin/article"
                  >
                    <img src="/images/News.svg" alt="news" />
                    Artikel
                  </Link>
                </li>
                <li>
                  <Link
                    className={`w-full flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-800 rounded-lg hover:bg-[#22D3EE] ${
                      isActive("/admin/profile") ? "bg-[#22D3EE]" : ""
                    }`}
                    to="/admin/profile"
                  >
                    <img src="/images/admin/profile.svg" alt="profile" />
                    Profile
                  </Link>
                </li>
                <li>
                  <button
                    className="w-full flex items-center gap-x-3.5 mt-[58px] py-2 px-2.5 text-sm text-gray-800 rounded-lg hover:bg-[#22D3EE]"
                    onClick={handleLogout}
                  >
                    <img src="/images/logout.svg" alt="logout" />
                    Log Out
                  </button>
                </li>
              </ul>
            </nav>
          </div>
          {/* End Content */}
        </div>
      </div>
    </>
  );
};

export default Sidebar;
