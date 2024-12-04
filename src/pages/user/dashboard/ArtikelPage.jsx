import React from 'react'
import Navbar from '../../../components/user/beranda/Navbar'
import DaftarSemuaArtikel from '../../../components/user/artikel/DaftarSemuaArtikel'

export default function ArtikelBeranda() {
    return (
        <>
            <Navbar />
            <div className="w-full lg:mx-2 lg:ps-[270px]">
                <div className="lg:p-5 lg:me-5 ">
                    <DaftarSemuaArtikel />
                </div>
            </div>
        </>
    )
}
