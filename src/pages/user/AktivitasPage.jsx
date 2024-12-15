import React from 'react'
import Navbar from '../../components/user/beranda/Navbar'
import Footer from '../../components/user/Footer'
import BreadcrumbAktivitas from '../../components/user/aktivitas/BreadcrumbAktivitas'
import Aktivitas from '../../components/user/aktivitas/Aktivitas'

export default function AktivitasPage() {
    return (
        <div>
            <Navbar />
            <div className='lg:px-[205px] mt-24 p-4'>
                <BreadcrumbAktivitas />
                <Aktivitas />
            </div>
            <Footer />
        </div>
    )
}
