import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Cookies from 'js-cookie';
import axios from 'axios';

export default function HeroSection() {
    const [username, setUsername] = useState('');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchUserName = async () => {
            try {
                const token = Cookies.get('token_user');
                if (!token) {
                    setUsername('Guest');
                    setLoading(false);
                    return;
                }

                const response = await axios.get('https://api.calmind.site/user/profile', {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });

                if (response.data.success) {
                    setUsername(response.data.data.username); // Set username dari API
                } else {
                    setUsername('Guest');
                }
            } catch (error) {
                console.error('Error fetching username:', error);
                setUsername('Guest');
            } finally {
                setLoading(false);
            }
        };

        fetchUserName();
    }, []);

    return (
        <>
            <div className="relative md:mt-28 mt-14">
                <img
                    src="/images/user/beranda/banner.png"
                    alt="banner image"
                    className="w-full lg:h-auto h-60 object-cover"
                />
                <div className="absolute inset-0 flex flex-col justify-center items-start p-5 text-white lg:ps-12">
                    <div className="text-cyan-950 text-base lg:text-3xl font-semibold lg:w-full -mt-8">
                        Hallo, {loading ? 'Memuat Nama...' : username}
                    </div>
                    <div className="text-cyan-950 text-sm lg:text-base font-normal mt-2 lg:w-full w-4/5">
                        Temukan Dokter Kesehatan Mental Anda
                    </div>
                    <Link
                        to=""
                        className="lg:w-40 lg:h-[29.03px] px-[9.58px] py-[4.79px] bg-[#263238] rounded-[3.14px] justify-center items-center gap-[10.21px] inline-flex mt-6 hover:bg-cyan-700 hover:shadow-lg hover:scale-105 transition duration-300 ease-in-out"
                    >
                        <div className="text-center text-white text-sm font-semibold">
                            Buat Jadwal
                        </div>
                    </Link>
                </div>
            </div>
        </>
    );
}
