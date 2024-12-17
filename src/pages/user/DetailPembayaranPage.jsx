import React from 'react'
import Navbar from '../../components/user/beranda/Navbar'
import DetailPembayaran from '../../components/user/dokter/DetailPembayaran'

export default function DetailPembayaranPage() {
    return (
        <div>
            <Navbar />
            <div className="lg:px-[100px] lg:me-5 mt-28 p-3">
                <DetailPembayaran />
            </div>
        </div>
    )
}
