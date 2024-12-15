import React from 'react'
import Navbar from '../../components/user/beranda/Navbar'
import Footer from '../../components/user/Footer'
import BreadcrumbDaftarSemuaArtikel from '../../components/user/artikel/BreadcrumbDaftarSemuaArtikel'
import CariArtikel from '../../components/user/artikel/CariArtikel'

export default function ArtikelBeranda() {
    return (
        <>
            <Navbar />
            <div className="lg:px-[100px] lg:me-5">
                <BreadcrumbDaftarSemuaArtikel />
                <CariArtikel />
            </div>
            <Footer />
        </>
    )
}
