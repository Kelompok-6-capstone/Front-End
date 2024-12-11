import React from 'react'
import Navbar from '../../components/user/beranda/Navbar'
import Footer from '../../components/user/Footer'
import SidebarChatDokter from '../../components/user/dokter/chat/SidebarChatDokter'
import Chat from '../../components/user/dokter/chat/Chat'
import DetailProfileChat from '../../components/user/dokter/chat/DetailProfileChat'

export default function ChatDokterPage() {
    return (
        <>
            <Navbar />
            <div className="p-4 mt-20 sm:px-6 md:mt-24 lg:mt-28 lg:mx-20 flex flex-col lg:flex-row gap-4">
                <div className="lg:w-1/3">
                    <SidebarChatDokter />
                </div>
                <div className="lg:w-1/3">
                    <Chat />
                </div>
                <div className="lg:w-1/3">
                    <DetailProfileChat />
                </div>
            </div>
            <Footer />
        </>
    )
}
