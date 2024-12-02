import React from 'react'
import Navbar from '../../../components/user/beranda/Navbar'
import Sidebar from '../../../components/user/beranda/Sidebar'

export default function ArtikelBeranda() {
    return (
        <>
            <Navbar />
            <Sidebar />
            <div className="w-full lg:mx-2 lg:ps-[270px]">
                <h1>Artikel</h1>
            </div>
        </>
    )
}
