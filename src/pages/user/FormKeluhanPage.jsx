import React from 'react'
import Navbar from '../../components/user/beranda/Navbar'
import FormKeluhan from '../../components/user/dokter/FormKeluhan'
import Footer from '../../components/user/Footer'

export default function FormKeluhanPage() {
    return (
        <div>
            <Navbar />
            <div className="lg:px-[100px] lg:me-5 mt-32 p-3">
                <FormKeluhan />
            </div>
            <Footer />
        </div>
    )
}
