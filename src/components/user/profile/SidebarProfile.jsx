import React from 'react'
import { Link } from 'react-router-dom'

export default function SidebarProfile() {
    return (
        <>
            <div className="w-full max-w-[304px] sm:w-[304px] h-auto sm:h-[518px] px-6 py-3 bg-white rounded-lg shadow border border-neutral-200 flex flex-col justify-start items-start gap-6">
                <Link to="/user/profile/idpengguna">
                    <div className="w-full p-2.5 border-b border-neutral-300 flex justify-start items-center gap-2.5">
                        <div className="text-cyan-900 text-xl font-medium">Profile Saya</div>
                    </div>
                </Link>
                <div className="w-full p-2.5 border-b border-neutral-200 flex justify-start items-center gap-2.5">
                    <div className="text-center text-black text-xl font-medium">Bantuan</div>
                </div>
                <div className="w-full p-2.5 border-b border-neutral-200 flex justify-start items-center gap-2.5">
                    <div className="text-center text-black text-xl font-medium">Tentang Aplikasi</div>
                </div>
                <div className="w-full p-2.5 border-b border-neutral-200 flex justify-between items-center gap-2.5">
                    <div className="text-black text-xl font-medium">Pengaturan</div>
                    <div className="w-6 h-6 relative" />
                </div>
                <div className="w-full p-2.5 border-b border-neutral-200 flex justify-between items-center gap-2.5">
                    <div className="text-black text-xl font-medium">Notifikasi</div>
                    <div className="w-6 h-6 relative" />
                </div>
                <div className="w-full p-2.5 border-b border-neutral-200 flex justify-start items-center gap-2.5">
                    <div className="text-center text-black text-xl font-medium">Ubah Kata Sandi</div>
                </div>
                <div className="w-full p-2.5 border-b border-neutral-200 flex justify-start items-center gap-2.5">
                    <div className="text-center text-black text-xl font-medium">Keluar</div>
                </div>
            </div>
        </>
    )
}
