import React from 'react'
import { Link } from 'react-router-dom'

export default function BreadcrumbDetailDokter() {
    return (
        <>
            <ol className="flex items-center whitespace-nowrap mb-5 ">
                <li className="inline-flex items-center">
                    <Link
                        className="flex items-center text-sm text-gray-500 hover:text-blue-600 focus:outline-none focus:text-blue-600 dark:text-neutral-500 dark:hover:text-blue-500 dark:focus:text-blue-500"
                        to="/user/beranda"
                    >
                        Beranda
                    </Link>
                    <img src="/images/user/artikel/slash.svg" alt="gambar slash" />
                </li>
                <li className="inline-flex items-center">
                    <Link
                        className="flex items-center text-sm text-gray-500 hover:text-blue-600 focus:outline-none focus:text-blue-600 dark:text-neutral-500 dark:hover:text-blue-500 dark:focus:text-blue-500"
                        to="/user/beranda"
                    >
                        Beranda
                    </Link>
                    <img src="/images/user/artikel/slash.svg" alt="gambar slash" />
                </li>
                <li
                    className="inline-flex items-center text-sm font-semibold text-gray-800 truncate dark:text-neutral-200"
                    aria-current="page"
                >
                    Daftar Dokter
                </li>
            </ol>
        </>
    )
}
