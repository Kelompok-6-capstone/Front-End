import React from "react";
import Navbar from "../../components/admin/Navbar";
import Sidebar from "../../components/admin/Sidebar";
import MainDashboard from "../../components/admin/MainDashboard";
import PatientTable from "../../components/admin/PatientTable";
import { useFetchPatients } from "../../hooks/admin/useFetchPatients";
import { useFetchDoctors } from "../../hooks/admin/useFetchDocters";
import HeaderPatientDashboard from "../../components/admin/HeaderPatientDashboard";
import HeaderDoctorDashboard from "../../components/admin/HeaderDoctorDashboard";
import DoctorTable from "../../components/admin/DoctorTable";

const Dashboard = () => {
  const {
    patientData,
    error: patientError,
    loading: patientLoading,
  } = useFetchPatients();
  const {
    doctorData,
    error: doctorError,
    loading: doctorLoading,
  } = useFetchDoctors();

  return (
    <>
      <Navbar />
      <Sidebar />
      <MainDashboard />
      <div className="w-full ps-4 lg:mx-2 lg:ps-[290px]">
        <HeaderPatientDashboard />
        {patientLoading ? (
          <p>Loading data pasien...</p>
        ) : patientError ? (
          <p className="text-red-500">Error: {patientError}</p>
        ) : (
          <PatientTable data={patientData} />
        )}
      </div>
      <div className="w-full ps-4 lg:mx-2 lg:ps-[290px] mt-8">
        <HeaderDoctorDashboard />
        {doctorLoading ? (
          <p>Loading data pasien...</p>
        ) : doctorError ? (
          <p className="text-red-500">Error: {doctorError}</p>
        ) : (
          <DoctorTable data={doctorData} />
        )}
      </div>
    </>
  );
};

export default Dashboard;
