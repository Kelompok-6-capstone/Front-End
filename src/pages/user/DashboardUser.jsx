import React from 'react'
import Navbar from '../../components/user/beranda/Navbar'
import Sidebar from '../../components/user/beranda/Sidebar'
import Beranda from './dashboard/Beranda'

export default function DashboardUser() {
    return (
        <>
            <Navbar />
            <Sidebar />
            <Beranda />
        </>
    )
}
