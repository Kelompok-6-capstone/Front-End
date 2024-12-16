import React from "react";
import useProfileStore from "../../stores/useProfileStore";
import { useEffect } from "react";

const MainDashboard = () => {
  const { fetchProfile } = useProfileStore();

  useEffect(() => {
    fetchProfile();
  }, [fetchProfile]);
  return (
    <>
      {/* ========== MAIN CONTENT ========== */}
      {/* Breadcrumb */}
      <div className="sticky top-0 inset-x-0 z-20 bg-white border-y px-4 sm:px-6 lg:px-8 lg:hidden">
        <div className="flex items-center py-2"></div>
      </div>
      <div className="w-full lg:mx-2 lg:ps-[265px]">
        <div className="p-4 sm:p-6 space-y-4 sm:space-y-6">
          {/* Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {/* Card */}
            <div className="flex flex-col bg-white border shadow-sm rounded-xl">
              <div className="p-4 md:p-5">
                <div className="flex items-center gap-x-2">
                  <p className="text-xs uppercase tracking-wide text-gray-500">
                    Total Pengguna
                  </p>
                  <div className="hs-tooltip">
                    <div className="hs-tooltip-toggle">
                      <svg
                        className="shrink-0 size-4 text-gray-500"
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <circle cx={12} cy={12} r={10} />
                        <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
                        <path d="M12 17h.01" />
                      </svg>
                      <span
                        className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity inline-block absolute invisible z-10 py-1 px-2 bg-gray-900 text-xs font-medium text-white rounded shadow-sm"
                        role="tooltip"
                      >
                        The number of daily users
                      </span>
                    </div>
                  </div>
                </div>
                <div className="mt-1 flex items-center gap-x-2">
                  <h3 className="text-xl sm:text-2xl font-medium text-gray-800">
                    72,540
                  </h3>
                  <span className="flex items-center gap-x-1 text-green-600">
                    <svg
                      className="inline-block size-4 self-center"
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
                      <polyline points="16 7 22 7 22 13" />
                    </svg>
                    <span className="inline-block text-sm">1.7%</span>
                  </span>
                </div>
              </div>
            </div>
            {/* End Card */}
            {/* Card */}
            <div className="flex flex-col bg-white border shadow-sm rounded-xl">
              <div className="p-4 md:p-5">
                <div className="flex items-center gap-x-2">
                  <p className="text-xs uppercase tracking-wide text-gray-500">
                    Sessions
                  </p>
                </div>
                <div className="mt-1 flex items-center gap-x-2">
                  <h3 className="text-xl sm:text-2xl font-medium text-gray-800">
                    29.4%
                  </h3>
                </div>
              </div>
            </div>
            {/* End Card */}
            {/* Card */}
            <div className="flex flex-col bg-white border shadow-sm rounded-xl">
              <div className="p-4 md:p-5">
                <div className="flex items-center gap-x-2">
                  <p className="text-xs uppercase tracking-wide text-gray-500">
                    Rata-rata Pengunjung
                  </p>
                </div>
                <div className="mt-1 flex items-center gap-x-2">
                  <h3 className="text-xl sm:text-2xl font-medium text-gray-800">
                    56.8%
                  </h3>
                  <span className="flex items-center gap-x-1 text-red-600">
                    <svg
                      className="inline-block size-4 self-center"
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="22 17 13.5 8.5 8.5 13.5 2 7" />
                      <polyline points="16 17 22 17 22 11" />
                    </svg>
                    <span className="inline-block text-sm">1.7%</span>
                  </span>
                </div>
              </div>
            </div>
            {/* End Card */}
            {/* Card */}
            <div className="flex flex-col bg-white border shadow-sm rounded-xl">
              <div className="p-4 md:p-5">
                <div className="flex items-center gap-x-2">
                  <p className="text-xs uppercase tracking-wide text-gray-500">
                    Total Pengunjung
                  </p>
                </div>
                <div className="mt-1 flex items-center gap-x-2">
                  <h3 className="text-xl sm:text-2xl font-medium text-gray-800">
                    92,913
                  </h3>
                </div>
              </div>
            </div>
            {/* End Card */}
          </div>
          {/* End Grid */}
          <div className="grid lg:grid-cols-2 gap-4 sm:gap-6">
            {/* Card */}
            <div className="p-4 md:p-5 min-h-[410px] flex flex-col bg-white border shadow-sm rounded-xl">
              {/* Header */}
              <div className="flex justify-between items-center">
                <div>
                  <h2 className="text-sm text-gray-500">Pendapatan</h2>
                  <p className="text-xl sm:text-2xl font-medium text-gray-800">
                    $126,238.49
                  </p>
                </div>
                <div>
                  <span className="py-[5px] px-1.5 inline-flex items-center gap-x-1 text-xs font-medium rounded-md bg-teal-100 text-teal-800">
                    <svg
                      className="inline-block size-3.5"
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M12 5v14" />
                      <path d="m19 12-7 7-7-7" />
                    </svg>
                    25%
                  </span>
                </div>
              </div>
              {/* End Header */}
              <div id="hs-multiple-bar-charts" />
            </div>
            {/* End Card */}
            {/* Card */}
            <div className="p-4 md:p-5 min-h-[410px] flex flex-col bg-white border shadow-sm rounded-xl">
              {/* Header */}
              <div className="flex justify-between items-center">
                <div>
                  <h2 className="text-sm text-gray-500">Pengunjung</h2>
                  <p className="text-xl sm:text-2xl font-medium text-gray-800">
                    80.3k
                  </p>
                </div>
                <div>
                  <span className="py-[5px] px-1.5 inline-flex items-center gap-x-1 text-xs font-medium rounded-md bg-red-100 text-red-800">
                    <svg
                      className="inline-block size-3.5"
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M12 5v14" />
                      <path d="m19 12-7 7-7-7" />
                    </svg>
                    2%
                  </span>
                </div>
              </div>
              {/* End Header */}
              <div id="hs-single-area-chart" />
            </div>
            {/* End Card */}
          </div>
        </div>
      </div>
    </>
  );
};

export default MainDashboard;
