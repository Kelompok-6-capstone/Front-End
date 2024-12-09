import React from 'react'
import Navbar from '../../components/user/beranda/Navbar'
import Footer from '../../components/user/Footer'
import BreadcrumbDokter from '../../components/user/dokter/BreadcrumbDaftarDokter'
import CariDokter from '../../components/user/dokter/CariDokter'

export default function DaftarDokterPage() {
    return (
        <>
            <Navbar />
            <div className="lg:px-[100px] lg:me-5 p-4 md:mt-24 mt-20 lg:ms-20">
                <BreadcrumbDokter />
                <CariDokter />
            </div>
            <Footer />
        </>
    )
}
