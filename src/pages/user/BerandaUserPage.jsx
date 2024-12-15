import React from 'react'
import Navbar from '../../components/user/beranda/Navbar'
import HeroSection from '../../components/user/beranda/HeroSection'
import TagSection from '../../components/user/beranda/TagSection'
import JanjiKosultasi from '../../components/user/beranda/JanjiKonsultasi'
import ArtikelBeranda from '../../components/user/artikel/ArtikelBeranda'
import Footer from '../../components/user/Footer'
import ChatbotUser from '../../components/user/beranda/ChatbotUser'

export default function BerandaUserPage() {
    return (
        <>
            <ChatbotUser />
            <Navbar />
            <div className="lg:px-[100px] lg:me-5 ">
                <HeroSection />
                <TagSection />
                <JanjiKosultasi />
                <ArtikelBeranda />
            </div>
            <Footer />
        </>
    )
}
