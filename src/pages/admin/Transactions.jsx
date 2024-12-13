import React from "react";
import TransactionTable from "../../components/admin/TransactionTable";
import Navbar from "../../components/admin/Navbar";
import Sidebar from "../../components/admin/Sidebar";

const TransactionPage = () => {
  return (
    <>
      <Navbar />
      <Sidebar />
      <div className="w-full lg:mx-2 lg:ps-[270px]">
        <TransactionTable />
      </div>
    </>
  );
};

export default TransactionPage;
