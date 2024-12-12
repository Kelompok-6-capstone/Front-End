import React from 'react'
import Navbar from '../../components/user/beranda/Navbar'
import DetailAktivitas from '../../components/user/aktivitas/DetailAktivitas'
import BreadcrumbDetailAktivitas from '../../components/user/aktivitas/BreadcrumbDetailAktivitas'

export default function DetailAktivitasPage() {
    return (
        <div>
            <Navbar />
            <div className='lg:px-[205px] mt-24 p-4'>
                <BreadcrumbDetailAktivitas />
                <DetailAktivitas />
            </div>
        </div>
    )
}
