import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function DropdownLogin() {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const closeDropdown = () => {
        setIsDropdownOpen(false);
    };

    // Menutup dropdown jika klik di luar elemen
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (!event.target.closest(".dropdown-container")) {
                setIsDropdownOpen(false);
            }
        };

        document.addEventListener("click", handleClickOutside);
        return () => {
            document.removeEventListener("click", handleClickOutside);
        };
    }, []);

    return (
        <div className="relative dropdown-container">
            {/* Tombol Login */}
            <button
                onClick={toggleDropdown}
                className="w-[120px] h-[40px] bg-teal-900 text-white text-sm font-semibold rounded-lg shadow-md hover:bg-teal-800 transition-all duration-200 ease-in-out"
            >
                Login
            </button>

            {/* Dropdown Menu */}
            {isDropdownOpen && (
                <div
                    className="absolute top-[calc(100%+10px)] right-20 md:right-0 w-[118px] bg-white rounded-lg shadow-lg border border-gray-200 z-50"
                >
                    <ul className="py-2">
                        <li className="text-left">
                            <Link
                                to="/login/user"
                                onClick={closeDropdown}
                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-teal-50 hover:text-teal-900 rounded transition-all duration-200"
                            >
                                User
                            </Link>
                        </li>
                        <li className="text-left">
                            <Link
                                to="/login/dokter"
                                onClick={closeDropdown}
                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-teal-50 hover:text-teal-900 rounded transition-all duration-200"
                            >
                                Dokter
                            </Link>
                        </li>
                        <li className="text-left">
                            <Link
                                to="/admin/login"
                                onClick={closeDropdown}
                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-teal-50 hover:text-teal-900 rounded transition-all duration-200"
                            >
                                Admin
                            </Link>
                        </li>
                    </ul>
                </div>
            )}
        </div>
    );
}

export default DropdownLogin;
