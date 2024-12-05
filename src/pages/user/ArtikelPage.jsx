import React from 'react'
import Navbar from '../../components/user/beranda/Navbar'
import DaftarSemuaArtikel from '../../components/user/artikel/DaftarSemuaArtikel'
import Footer from '../../components/user/Footer'

export default function ArtikelBeranda() {
    return (
        <>
            <Navbar />
            <div className="lg:px-[100px] lg:me-5 mt-16">
                <DaftarSemuaArtikel />
            </div>
            <Footer />
        </>
    )
}
