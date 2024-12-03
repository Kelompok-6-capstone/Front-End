import React from 'react'

import HeroSection from '../../../components/user/beranda/HeroSection'
import TagSection from '../../../components/user/beranda/TagSection'
import JadwalSection from '../../../components/user/beranda/JadwalSection'
import ArtikelBeranda from '../../../components/user/artikel/ArtikelBeranda'

export default function Beranda() {
    return (
        <>
            <div className="w-full lg:mx-2 lg:ps-[270px]">
                <div className="lg:p-5 lg:me-5 ">
                    <HeroSection />
                    <TagSection />
                    <JadwalSection />
                    <ArtikelBeranda />
                </div>
            </div>
        </>
    )
}
