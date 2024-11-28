import React from 'react'
import Navbar from '../../components/admin/Navbar'
import Sidebar from '../../components/admin/Sidebar'
import MainDashboard from '../../components/admin/MainDashboard'

const Dashboard = () => {
  return (
    <>
        <Navbar />
        <Sidebar />
        <MainDashboard />
    </>
  )
}

export default Dashboard