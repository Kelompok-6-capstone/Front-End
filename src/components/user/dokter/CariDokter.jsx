import React, { useState, useEffect } from "react";
import { useFetchDataDokter } from "../../../hooks/user/useFetchDataDokter";
import { searchDoctors } from "../../../api/user/searchDoctors";
import Loading from "./Loading";
import DoctorCard from "./DoctorCard";

export default function CariDokter() {
    const { doctors: allDoctors, loading: loadingAllDoctors, error: errorAllDoctors } = useFetchDataDokter();
    const [query, setQuery] = useState("");
    const [filteredDoctors, setFilteredDoctors] = useState([]);
    const [loadingSearch, setLoadingSearch] = useState(false);
    const [errorSearch, setErrorSearch] = useState(null);
    const [debouncedQuery, setDebouncedQuery] = useState(query);

    // Debouncing input
    useEffect(() => {
        const handler = setTimeout(() => {
            setDebouncedQuery(query);
        }, 500);
        return () => clearTimeout(handler);
    }, [query]);

    // Fetch data pencarian dokter
    useEffect(() => {
        if (debouncedQuery.trim() === "") {
            setFilteredDoctors([]);
            return;
        }

        const fetchDoctors = async () => {
            setLoadingSearch(true);
            setErrorSearch(null);
            try {
                const data = await searchDoctors(debouncedQuery);
                setFilteredDoctors(data.data || []);
            } catch (err) {
                setErrorSearch(err.message || "Terjadi kesalahan saat mencari dokter.");
            } finally {
                setLoadingSearch(false);
            }
        };

        fetchDoctors();
    }, [debouncedQuery]);

    // Loading atau error dari daftar dokter awal
    if (loadingAllDoctors) {
        return <Loading />;
    }

    if (errorAllDoctors) {
        return <div className="text-red-500 text-center">{errorAllDoctors}</div>;
    }

    return (
        <>
            <div className="max-w-full px-4 py-5 bg-[#cfedf8] rounded-lg mt-4 mx-2 lg:mx-0">
                <div className="flex flex-col gap-4">
                    <div className="text-center text-sky-900 text-xl sm:text-2xl font-semibold">
                        Cari Dokter dan Buat Jadwal Konsultasi
                    </div>
                    <div className="hidden lg:block">
                        <div className="flex flex-col sm:flex-row justify-start items-center gap-28">
                            <div className="p-2 flex items-center gap-2">
                                <img src="/images/user/artikel/check-circle-2.svg" alt="gambar check-circle-2" />
                                <div className="text-cyan-800 text-sm sm:text-base font-semibold">
                                    Fleksibilitas Waktu
                                </div>
                            </div>
                            <div className="p-2 flex items-center gap-2">
                                <img src="/images/user/artikel/check-circle-2.svg" alt="gambar check-circle-2" />
                                <div className="text-cyan-800 text-sm sm:text-base font-semibold">
                                    Ribuan Terapis Berpengalaman
                                </div>
                            </div>
                            <div className="p-2 flex items-center gap-2">
                                <img src="/images/user/artikel/check-circle-2.svg" alt="gambar check-circle-2" />
                                <div className="text-cyan-800 text-sm sm:text-base font-semibold">
                                    Temukan terapis yang tepat
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Input Pencarian */}
                    <div className="w-full">
                        <div className="flex items-center bg-white rounded-lg shadow border border-gray-200">
                            <input
                                type="text"
                                placeholder="Cari dokter berdasarkan nama..."
                                value={query}
                                onChange={(e) => setQuery(e.target.value)}
                                className="flex-grow px-4 py-3.5 text-gray-500 text-sm sm:text-base font-medium tracking-tight focus:outline-none"
                            />
                        </div>
                    </div>

                    {loadingSearch && <Loading />}
                    {errorSearch && (
                        <div className="text-red-500 text-center mt-4">
                            {errorSearch}
                        </div>
                    )}
                </div>
            </div>

            {/* Hasil Pencarian */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
                {debouncedQuery.trim() === "" ? (
                    allDoctors.map((doctor) => <DoctorCard key={doctor.id} doctor={doctor} />)
                ) : filteredDoctors.length === 0 && !loadingSearch ? (
                    <div className="text-center text-neutral-500">
                        Tidak ada dokter ditemukan.
                    </div>
                ) : (
                    filteredDoctors.map((doctor) => <DoctorCard key={doctor.id} doctor={doctor} />)
                )}
            </div>
        </>
    );
}
