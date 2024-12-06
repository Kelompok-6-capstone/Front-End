import React from 'react'
import DetailArtikel from '../../components/user/artikel/DetailArtikel'
import Navbar from '../../components/user/beranda/Navbar'
import BreadcrumbDetailArtikel from '../../components/user/artikel/BreadcrumbDetailArtikel'

export default function DetailArtikelPage() {
    return (
        <>
            <Navbar />
            <div className="lg:mt-16 max-w-4xl lg:ps-52 bg-white p-5 md:p-10 mt-20">
                <BreadcrumbDetailArtikel />
                <DetailArtikel />
            </div>
        </>
    )
}
