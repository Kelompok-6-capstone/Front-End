import React from 'react'
import { Link } from 'react-router-dom'

export default function BreadcrumbDetailDokter() {
    return (
        <>
            <ol className="flex items-center whitespace-nowrap mb-5">
                <li className="inline-flex items-center">
                    <Link
                        className="flex items-center text-sm text-cyan-900 relative group focus:outline-none"
                        to="/user/beranda"
                    >
                        Beranda
                        <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-gradient-to-r from-cyan-400 to-blue-600 transition-all duration-300 group-hover:w-full"></span>
                    </Link>
                    <img
                        className="ml-2 transform transition-transform duration-300 group-hover:scale-125"
                        src="/images/user/artikel/slash.svg"
                        alt="gambar slash"
                    />
                </li>
                <li className="inline-flex items-center">
                    <Link
                        className="flex items-center text-sm text-cyan-900 relative group focus:outline-none"
                        to="/user/dokter"
                    >
                        Daftar Dokter
                        <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-gradient-to-r from-cyan-400 to-blue-600 transition-all duration-300 group-hover:w-full"></span>
                    </Link>
                    <img
                        className="ml-2 transform transition-transform duration-300 group-hover:scale-125"
                        src="/images/user/artikel/slash.svg"
                        alt="gambar slash"
                    />
                </li>
                <li
                    className="inline-flex items-center text-sm font-semibold text-gray-800 truncate dark:text-neutral-200"
                    aria-current="page"
                >
                    Detail Dokter
                </li>
            </ol>
        </>
    )
}
