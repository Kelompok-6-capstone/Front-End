import React from "react";
import Navbar from "../../components/admin/Navbar";
import Sidebar from "../../components/admin/Sidebar";
import MainDashboard from "../../components/admin/MainDashboard";
import PatientTable from "../../components/admin/PatientTable";
import { useFetchPatients } from "../../hooks/admin/useFetchPatients";
import HeaderPatientDashboard from "../../components/admin/HeaderPatientDashboard";

const Dashboard = () => {
  const { patientData, error, loading } = useFetchPatients();

  return (
    <>
      <Navbar />
      <Sidebar />
      <MainDashboard />
      <div className="w-full ps-4 lg:mx-2 lg:ps-[290px]">
        <HeaderPatientDashboard />
        {loading ? (
          <p>Loading data pasien...</p>
        ) : error ? (
          <p className="text-red-500">Error: {error}</p>
        ) : (
          <PatientTable data={patientData} />
        )}
      </div>
    </>
  );
};

export default Dashboard;
