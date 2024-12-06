import React from 'react'
import Navbar from '../../../components/user/beranda/Navbar'
import SidebarProfile from '../../../components/user/profile/SidebarProfile'
import ProfilPengguna from '../../../components/user/profile/ProfilPengguna'

export default function ProfilePenggunaPage() {
    return (
        <>
            <Navbar />
            <div className='lg:mt-36 lg:ms-28 m-5 mt-28'>
                <div className="flex flex-col lg:flex-row gap-6 ">
                    <div className="w-full lg:w-1/4">
                        <SidebarProfile />
                    </div>
                    <div className="w-full lg:w-3/4">
                        <ProfilPengguna />
                    </div>
                </div>
            </div>
        </>
    )
}
