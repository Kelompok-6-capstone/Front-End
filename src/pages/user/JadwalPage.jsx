import React from 'react'
import Navbar from '../../components/user/beranda/Navbar'
import PilihJadwal from '../../components/user/dokter/PilihJadwal'
import Footer from '../../components/user/Footer'

export default function JadwalPage() {
    return (
        <>
            <Navbar />
            <div className="lg:px-[100px] lg:me-5 mt-32 p-3">
                <PilihJadwal />
            </div>
            <Footer />
        </>
    )
}
