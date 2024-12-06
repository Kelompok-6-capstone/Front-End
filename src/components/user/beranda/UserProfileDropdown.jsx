import React, { useState } from 'react';
import { confirmLogout } from '../../../api/auth/logout';

const UserProfileDropdown = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="relative inline-block text-left">
            {/* Trigger Dropdown */}
            <div
                className="flex items-center gap-3 p-2 cursor-pointer rounded-md hover:bg-gray-100"
                onClick={toggleDropdown}
            >
                <img
                    className="w-10 h-10 rounded-full object-cover"
                    src="/images/user/avatar.png"
                    alt="Avatar User"
                />
                <span className="hidden sm:block text-black text-base font-semibold">
                    Aisha Anggini
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
                            onClick={confirmLogout} // Panggil fungsi konfirmasi logout
                            className="block px-4 py-2 text-red-500 rounded-md hover cursor-pointer focus:outline-none"
                        >
                            Logout
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default UserProfileDropdown;
