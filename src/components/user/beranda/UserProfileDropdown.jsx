import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
import { confirmLogout } from '../../../api/auth/logoutUser';
import axiosInstanceUser from '../../../utils/axiosInstanceUser';

const UserProfileDropdown = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [userProfile, setUserProfile] = useState({
        username: '',
        avatar: ''
    });
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Mengambil profil pengguna dari API
        const fetchUserProfile = async () => {
            try {
                const token = Cookies.get('token_user'); // Ambil token dari cookies
                if (!token) {
                    setError('User not authenticated');
                    setLoading(false);
                    return;
                }
                const response = await axiosInstanceUser.get('/user/profile');
                if (response.data.success) {
                    setUserProfile({
                        username: response.data.data.username,
                        avatar: response.data.data.avatar || '/images/user/avatar.png', // Gunakan avatar dari API jika ada
                    });
                } else {
                    setError('Failed to fetch user profile');
                }
            } catch (err) {
                setError('Error fetching user profile');
                console.error(err);
            } finally {
                setLoading(false);
            }
        };

        fetchUserProfile();
    }, []); // Hanya dijalankan sekali saat komponen pertama kali dimuat

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="relative inline-block text-left">
            <div
                className="flex items-center gap-3 p-2 cursor-pointer rounded-md hover:bg-gray-100"
                onClick={toggleDropdown}
            >
                <img
                    className="w-10 h-10 rounded-full object-cover"
                    src={userProfile.avatar}
                    alt="Avatar User"
                />
                <span className="hidden sm:block text-black text-base font-semibold">
                    {loading ? 'Loading...' : userProfile.username || 'User'}
                </span>
            </div>

            {/* Dropdown Menu */}
            {isOpen && (
                <div className="absolute -right-32 md:-right-6 mt-2 w-48 bg-white rounded-md shadow-lg z-50">
                    <div className="py-1">
                        <a
                            href="/user/profile"
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        >
                            Profile
                        </a>
                        <div
                            onClick={confirmLogout}
                            className="block px-4 py-2 text-red-500 rounded-md hover cursor-pointer focus:outline-none"
                        >
                            Logout
                        </div>
                    </div>
                </div>
            )}

            {/* Menampilkan pesan error jika gagal mengambil data */}
            {error && <div className="text-red-500 text-sm mt-2">{error}</div>}
        </div>
    );
};

export default UserProfileDropdown;
