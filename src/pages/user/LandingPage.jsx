import React from 'react'
import Navbar from '../../components/user/Navbar'
import Beranda from '../../components/user/Beranda'
import Tentang from '../../components/user/Tentang'
import Artikel from '../../components/user/artikel/Artikel'
import Testimoni from '../../components/user/Testimoni'
import Kontak from '../../components/user/Kontak'

export default function LandingPage() {
    return (
        <>
            <Navbar />
            <Beranda />
            <Tentang />
            <Artikel />
            <Testimoni />
            <Kontak />
        </>
    )
}
