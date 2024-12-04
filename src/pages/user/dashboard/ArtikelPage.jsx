import React from 'react'
import Navbar from '../../../components/user/beranda/Navbar'
import Sidebar from '../../../components/user/beranda/Sidebar'
import DaftarSemuaArtikel from '../../../components/user/artikel/DaftarSemuaArtikel'

export default function ArtikelBeranda() {
    return (
        <>
            <Navbar />
            <Sidebar />
            <div className="w-full lg:mx-2 lg:ps-[270px]">
                <div className="lg:p-5 lg:me-5 ">
                    <DaftarSemuaArtikel />
                </div>
            </div>
        </>
    )
}
