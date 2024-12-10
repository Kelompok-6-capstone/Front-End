import React from 'react'
import Navbar from '../../components/user/Navbar'
import Beranda from '../../components/user/Beranda'
import Tentang from '../../components/user/Tentang'
import ArtikelLandingPage from '../../components/user/artikel/ArtikelLandingPage'
import Testimoni from '../../components/user/Testimoni'
import Kontak from '../../components/user/Kontak'
import CustomerServiceBot from '../../components/user/CustomerServiceBot'

export default function LandingPage() {
    return (
        <>
            <CustomerServiceBot />
            <Navbar />
            <Beranda />
            <Tentang />
            <ArtikelLandingPage />
            <Testimoni />
            <Kontak />
        </>
    )
}
