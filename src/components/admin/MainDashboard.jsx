import React, { useEffect, useState } from "react";
import useProfileStore from "../../stores/useProfileStore";
import axiosInstance from "../../utils/axiosInstance";
import Cookies from "js-cookie";

const MainDashboard = () => {
  const { fetchProfile } = useProfileStore();
  const [stats, setStats] = useState(null); // Initialize state without type reference

  useEffect(() => {
    fetchProfile();
    fetchDashboardStats();
  }, [fetchProfile]);

  const fetchDashboardStats = async () => {
    try {
      const token = Cookies.get("token_admin");
      if (!token) {
        console.error("No admin token found");
        return;
      }
      const response = await axiosInstance.get("/admin/statistik", {
        headers: { Authorization: `Bearer ${token}` },
      });
      if (response.data.success) {
        setStats(response.data.data);
      }
    } catch (error) {
      console.error("Error fetching dashboard stats:", error);
    }
  };

  const StatCard = ({ title, value, icon }) => (
    <div className="flex flex-col bg-white border-[1px] shadow-sm rounded-xl p-4 justify-between md:p-4">
      <div className="flex items-center gap-x-2">
        <p className="text-xs font-medium uppercase tracking-wide text-black">{title}</p>
        {icon}
      </div>
      <div className="mt-1">
        <h3 className="text-xl sm:text-2xl font-medium text-gray-800">
          {value}
        </h3>
      </div>
    </div>
  );

  return (
    <div className="w-full lg:ps-[272px]">
      <div className="p-4 sm:p-6 space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 sm:gap-6">
          <StatCard title="Total Pengguna" value={stats?.totalUsers ?? 0} />
          <StatCard title="Total Dokter" value={stats?.totalDoctors ?? 0} />
          <StatCard
            title="Total Konsultasi"
            value={stats?.totalConsultations ?? 0}
          />
          <StatCard title="Pembayaran Berhasil" value={stats?.totalPaid ?? 0} />
          <StatCard
            title="Pembayaran Pending"
            value={stats?.totalPending ?? 0}
          />
        </div>
      </div>
    </div>
  );
};

export default MainDashboard;
