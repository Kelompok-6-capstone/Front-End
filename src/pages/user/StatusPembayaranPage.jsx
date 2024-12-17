import React from 'react'
import Navbar from '../../components/user/beranda/Navbar'
import StatusPembayaran from '../../components/user/dokter/StatusPembayaran'

export default function StatusPembayaranPage() {
    return (
        <div>
            <Navbar />
            <div className='lg:px-[100px] lg:me-5 mt-28'>
                <StatusPembayaran />
            </div>
        </div>
    )
}
