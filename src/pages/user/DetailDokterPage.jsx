import React from 'react'
import DetailDokter from '../../components/user/dokter/DetailDokter'
import Navbar from '../../components/user/beranda/Navbar'
import Footer from '../../components/user/Footer'
import BreadcrumbDetailDokter from '../../components/user/dokter/BreadcrumbDetailDokter'

export default function DetailDokterPage() {
    return (
        <>
            <Navbar />
            <div className="lg:px-[100px] p-3 lg:me-5 mt-20 lg:mt-24">
                <BreadcrumbDetailDokter />
                <DetailDokter />
            </div>
            <Footer />
        </>
    )
}
