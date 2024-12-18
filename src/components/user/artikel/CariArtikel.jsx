import React, { useState, useEffect } from "react";
import { useFetchArticles, useSearchArticles } from "../../../hooks/user/useFetchArticles";
import ArtikelCard from "./ArtikelCard";
import Loading from "../../user/dokter/Loading";

export default function CariArtikel() {
    const { articles: allArticles, loading: loadingAllArticles, error: errorAllArticles } = useFetchArticles();
    const [query, setQuery] = useState("");
    const [debouncedQuery, setDebouncedQuery] = useState(query);
    const { articles: filteredArticles, loading: loadingSearch, error: errorSearch } = useSearchArticles(debouncedQuery);

    // Debouncing input
    useEffect(() => {
        const handler = setTimeout(() => {
            setDebouncedQuery(query);
        }, 500);
        return () => clearTimeout(handler);
    }, [query]);

    // Loading atau error dari daftar artikel awal
    if (loadingAllArticles) {
        return <Loading />;
    }

    if (errorAllArticles) {
        return <div className="text-red-500 text-center">{errorAllArticles}</div>;
    }

    return (
        <>
            <div className="max-w-full px-4 py-5 bg-[#cfedf8] rounded-lg mt-4 mx-2 lg:mx-0">
                <div className="flex flex-col gap-4">
                    <div className="text-center text-sky-900 text-xl sm:text-2xl font-semibold">
                        Temukan Artikel Pilihan Anda
                    </div>
                    <div className="hidden lg:block">
                        <div className="text-cyan-800 text-base font-semibold text-center">Jelajahi berbagai artikel menarik sesuai minat dan kebutuhan Anda</div>
                    </div>
                    {/* <div className="hidden lg:block">
                        <div className="flex flex-col sm:flex-row justify-start items-center gap-28">
                            <div className="p-2 flex items-center gap-2">
                                <img src="/images/user/artikel/check-circle-2.svg" alt="check-circle" />
                                <div className="text-cyan-800 text-sm sm:text-base font-semibold">
                                    Fleksibilitas Waktu
                                </div>
                            </div>
                            <div className="p-2 flex items-center gap-2">
                                <img src="/images/user/artikel/check-circle-2.svg" alt="check-circle" />
                                <div className="text-cyan-800 text-sm sm:text-base font-semibold">
                                    Pilihan Artikel Beragam
                                </div>
                            </div>
                            <div className="p-2 flex items-center gap-2">
                                <img src="/images/user/artikel/check-circle-2.svg" alt="check-circle" />
                                <div className="text-cyan-800 text-sm sm:text-base font-semibold">
                                    Artikel Terupdate
                                </div>
                            </div>
                        </div>
                    </div> */}
                    {/* Input Pencarian */}
                    <div className="w-full">
                        <div className="flex items-center bg-white rounded-lg shadow border border-gray-200">
                            <input
                                type="text"
                                placeholder="Cari artikel berdasarkan judul..."
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
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-6 p-4">
                {debouncedQuery.trim() === "" ? (
                    allArticles.map((article) => (
                        <ArtikelCard
                            key={article.id}
                            id={article.id}
                            title={article.judul}
                            date={article.created_at}
                            description={article.isi}
                            image={article.gambar}
                        />
                    ))
                ) : filteredArticles.length === 0 && !loadingSearch ? (
                    <div className="text-center text-neutral-500">
                        Tidak ada artikel ditemukan.
                    </div>
                ) : (
                    filteredArticles.map((article) => (
                        <ArtikelCard
                            key={article.id}
                            id={article.id}
                            title={article.judul}
                            date={article.created_at}
                            description={article.isi}
                            image={article.gambar}
                        />
                    ))
                )}
            </div>
        </>
    );
}
