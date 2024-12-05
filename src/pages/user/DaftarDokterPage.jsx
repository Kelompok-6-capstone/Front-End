import React from 'react'
import Navbar from '../../components/user/beranda/Navbar'
import Footer from '../../components/user/Footer'
import BreadcrumbDokter from '../../components/user/dokter/BreadcrumbDaftarDokter'
import DaftarDokter from '../../components/user/dokter/DaftarDokter'
import SearhDokter from '../../components/user/dokter/SearchDokter'

export default function DaftarDokterPage() {
    return (
        <>
            <Navbar />
            <div className="lg:px-[100px] lg:me-5 p-4 md:mt-24 mt-20 lg:ms-20">
                <BreadcrumbDokter />
                <SearhDokter />
                <DaftarDokter />
            </div>
            <Footer />
        </>
    )
}
