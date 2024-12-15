import React from 'react'
import Navbar from '../../components/user/beranda/Navbar'
import StatusPembayaran from '../../components/user/dokter/StatusPembayaran'

export default function StatusPembayaranPage() {
    return (
        <div>
            <Navbar />
            <div className="">
                <StatusPembayaran />
            </div>
        </div>
    )
}
